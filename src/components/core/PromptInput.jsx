import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      alert("Please enter a valid prompt");
      return;
    }

    setLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use env vars for safety
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      });

      // Navigate with the AI's response
      if (completion.choices && completion.choices[0]) {
        navigate("/result", {
          state: {
            prompt,
            completion: completion.choices[0].message.content,
          },
        });
      } else {
        console.error("Unexpected response format:", completion);
      }
    } catch (error) {
      console.error("Error with OpenAI API request: ", error);
      alert("There was an error processing your prompt. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
    </div>
  );
};

export default PromptInput;