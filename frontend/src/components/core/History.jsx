import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../slices/historySlice";
import { FaTrashAlt } from "react-icons/fa"; // Importing trash icon for Clear History button

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-200 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 tracking-wide">
        Your History
      </h2>

      {history.length > 0 ? (
        <div className="space-y-6">
          {history.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                <span className="text-blue-600">Prompt:</span> {item.prompt}
              </h3>
              <p className="text-lg text-gray-700 mb-4">{item.generatedText}</p>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Item {index + 1}</p>
                <span className="text-sm text-gray-400 italic">
                  {formatTimestamp(item.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 mt-6">No history available.</p>
      )}

      <div className="mt-8 text-center">
        <button
          className="flex items-center justify-center bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
          onClick={handleClearHistory}
        >
          <FaTrashAlt className="mr-2" />
          Clear History
        </button>
      </div>
    </div>
  );
};

export default History;