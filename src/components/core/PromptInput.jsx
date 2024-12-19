import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PromptInput = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("Prompt submitted: ", prompt);
        if (prompt.trim()) {
            setLoading(true);
            try {
                const response = await axios.post(
                    'https://api.openai.com/v1/chat/completions',
                    {
                        model: 'gpt-3.5-turbo',
                        messages: [{ role: 'user', content: prompt }],
                        max_tokens: 150,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer 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`,
                        }
                    }
                );
                
                // Navigating with the AI response
                if (response.data && response.data.choices) {
                    navigate("/result", { 
                        state: { 
                            prompt,
                            response: response.data.choices[0].message.content 
                        } 
                    });
                } else {
                    console.error("Unexpected response format:", response);
                }
            } catch (error) {
                console.error("Error fetching data from OpenAI: ", error.message);
            } finally {
                setLoading(false);
            }
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
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default PromptInput;