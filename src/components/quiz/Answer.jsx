import React from "react";

const Answer = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  hint,
  explanation,
  difficulty,
  subject,
  topic,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-lg border border-gray-200 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Question */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Question</h3>
        <p className="text-lg text-gray-700 mt-2">{question}</p>
      </div>

      {/* Options */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-800">Options</h4>
        <ul className="mt-4 space-y-3">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ease-in-out border hover:bg-blue-50 ${
                option === options[selectedAnswer]
                  ? option === correctAnswer
                    ? "bg-green-100 border-green-500 text-green-600 font-semibold"
                    : "bg-red-100 border-red-500 text-red-600 font-semibold"
                  : option === correctAnswer
                  ? "bg-green-50 border-green-400 text-green-500"
                  : "bg-gray-50 border-gray-200 text-gray-800"
              }`}
            >
              <span className="font-medium">{index + 1}.</span> {option}
            </li>
          ))}
        </ul>
      </div>

      {/* Feedback */}
      {selectedAnswer !== undefined && (
        <div
          className={`text-lg font-semibold mt-4 flex items-center space-x-2 ${
            options[selectedAnswer] === correctAnswer
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {options[selectedAnswer] === correctAnswer ? (
            <>
              <span>✅</span>
              <span>Correct!</span>
            </>
          ) : (
            <>
              <span>❌</span>
              <span>Incorrect</span>
            </>
          )}
        </div>
      )}

      {/* Hint */}
      {hint && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-lg text-gray-800">Hint</h4>
          <p className="text-gray-700 mt-2">{hint}</p>
        </div>
      )}

      {/* Explanation */}
      {explanation && (
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-semibold text-lg text-gray-800">Explanation</h4>
          <p className="text-gray-700 mt-2">{explanation}</p>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
        {difficulty && (
          <div className="font-medium">
            <span className="text-gray-800">Difficulty:</span>{" "}
            <span
              className={`${
                difficulty === "hard"
                  ? "text-red-500"
                  : difficulty === "medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              } capitalize`}
            >
              {difficulty}
            </span>
          </div>
        )}
        {subject && (
          <div className="font-medium">
            <span className="text-gray-800">Subject:</span> {subject}
          </div>
        )}
        {topic && (
          <div className="font-medium">
            <span className="text-gray-800">Topic:</span> {topic}
          </div>
        )}
      </div>
    </div>
  );
};

export default Answer;