import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const PromptInput = () => {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New error state
  const [responseText, setResponseText] = useState(""); // Stores the full response
  const [displayedText, setDisplayedText] = useState(""); // Stores the dynamically displayed text
  const navigate = useNavigate();

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

      const response = await axios ({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDzzLAYxe6PJiBrh_dL5B020aO6pIZx6NQ",
        method:"post",
        data:{
          contents:[
            {parts:[{text:prompt}]},
          ],
        },
      })

      console.log("Response : ",response);

      const generatedText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";
      setResponseText(generatedText);
      console.log("Generated text : ",generatedText); 
      
    } catch (error) {
      console.error("Error generating content : ", error);
      alert(
        "There was an error processing your prompt. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

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
      }, 50);

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

      {loading && <p className="text-gray-500 mt-4">
        Generating your response...
      </p>}

      {responseText && <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">Response : </h3>
          <p className="whitespace-pre-wrap">{displayedText}</p>
      </div>}

    </div>
  );
};

export default PromptInput;
