import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = ({ formData }) => {
    const navigate = useNavigate();

    const clickHandler = (event) => {
        event.preventDefault();
        navigate('/takequiz',{state:formData});
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
                {/* Title Section */}
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                    🎉 Quiz Created Successfully!
                </h2>

                {/* Subtitle Section */}
                <h4 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Here Are Your Quiz Details:
                </h4>

                {/* Quiz Details */}
                <div className="text-gray-800 space-y-6 mb-8 px-6">
                    <p><strong className="font-medium">Name:</strong> {formData.name}</p>
                    <p><strong className="font-medium">Exam:</strong> {formData.exam}</p>
                    <p><strong className="font-medium">Difficulty Levels:</strong> {formData.difficultyLevels.join(', ')}</p>
                    <p><strong className="font-medium">Class / Year:</strong> {formData.classYear}</p>
                    <p><strong className="font-medium">Subjects:</strong> {formData.subjects.join(', ')}</p>
                    <p><strong className="font-medium">Topics:</strong> {formData.topics.join(', ')}</p>
                    <p><strong className="font-medium">Quiz Mode:</strong> {formData.quizMode}</p>
                    <p><strong className="font-medium">Number of Questions:</strong> {formData.numberOfQuestions}</p>

                    {formData.addHints && <p><strong className="font-medium">Hints:</strong> Enabled</p>}
                    {formData.answerExplanation ?
                        <p><strong className="font-medium">Answer Explanation:</strong> Enabled</p> :
                        <p><strong className="font-medium">Answer Explanation:</strong> Disabled</p>}
                    {formData.breakIntoSubtopics ?
                        <p><strong className="font-medium">Break Into Subtopics:</strong> Enabled</p> :
                        <p><strong className="font-medium">Break Into Subtopics:</strong> Disabled</p>}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 justify-center mt-8">
                    {/* Start Quiz Button */}
                    <button
                        className="bg-gradient-to-r from-teal-400 to-teal-600 text-white py-3 px-6 rounded-full font-semibold text-lg w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105 active:scale-95"
                        onClick={clickHandler}
                    >
                        Start Quiz
                    </button>

                    {/* Create Another Quiz Button */}
                    <button
                        className="bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-3 px-6 rounded-full font-semibold text-lg w-full sm:w-auto shadow-lg transform transition-transform hover:scale-105 active:scale-95"
                        onClick={() => window.location.reload()}
                    >
                        Create Another Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;