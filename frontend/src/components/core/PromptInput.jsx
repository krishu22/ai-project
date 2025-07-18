import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux"; 
import axios from "axios";
import { addHistoryItem } from "../../slices/historySlice";

const PromptInput = () => {
  
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state for managing errors
  const [responseText, setResponseText] = useState(""); // Stores the full response
  const [displayedText, setDisplayedText] = useState(""); // Stores the dynamically displayed text

  const history = useSelector((state) => state.history.history); // Access history from Redux store
  const dispatch = useDispatch(); // Dispatch action to update history
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_KEY;

  const goToHistoryPage = () => {
    navigate("/history");
  };

  // Handle form submit
  const submitHandler = async (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      console.log("Enter a valid prompt");
      alert("Please enter a valid prompt");
      return;
    }

    setLoading(true);
    setError(null);
    setResponseText("");
    setDisplayedText("");

    try {
      console.log("Loading..");

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiUrl}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });

      console.log("Response: ", response);

      const generatedText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";
      setResponseText(generatedText);
      console.log("Generated text: ", generatedText);

      const historyEntry = {
        prompt: prompt,
        generatedText: generatedText,
        timestamp: new Date().toISOString(),
      };
      dispatch(addHistoryItem(historyEntry)); 

    } catch (error) {
      console.error("Error generating content: ", error);
      setError("There was an error processing your prompt. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Typewriter effect for response text
  useEffect(() => {
    if (responseText) {
      let index = 0;

      // Immediately display the first character
      setDisplayedText(responseText[0]);

      const typingEffect = setInterval(() => {
        index++;
        // Stop the interval if we've reached the last valid character
        if (index < responseText.length) {
          setDisplayedText((prev) => prev + responseText[index]);
        } else {
          clearInterval(typingEffect);
        }
      }, 25);

      return () => clearInterval(typingEffect);
    }
  }, [responseText]);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Enter Your Prompt</h2>
      <form onSubmit={submitHandler}>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4">Generating your response...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error if present */}

      {responseText && (
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">Response: </h3>
          <p className="whitespace-pre-wrap">{displayedText}</p>
        </div>
      )}

      <button
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg"
        onClick={goToHistoryPage}
      >
        Go to History Page
      </button>

    </div>
  );
};

export default PromptInput;
