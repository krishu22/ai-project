import React from "react";

const QuestionCard = ({
    question,
    options,
    totalQuestions,
    handleNext,
    handlePrevious,
    handleSubmit,
    isLastQuestion,
    quizSubmitted,
    isFirstQuestion,
    selectedAnswers,
    setSelectedAnswers,
    questionIndex,
}) => {
    const handleOptionSelect = (optionIndex) => {
        if (!quizSubmitted) {
            setSelectedAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[questionIndex] = optionIndex;
                return updatedAnswers;
            });
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow-md bg-[#e6ffcc]">
            <p className="text-lg font-semibold">
                Question {questionIndex + 1} of {totalQuestions}
            </p>
            <h2 className="text-xl font-bold my-4">{question}</h2>
            <div className="mb-4">
                {options && Array.isArray(options) ? (
                    options.map((option, index) => (
                        <button
                            key={index}
                            className={`block w-full px-4 py-2 mb-2 text-left border rounded ${
                                selectedAnswers[questionIndex] === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100"
                            }`}
                            onClick={() => handleOptionSelect(index)}
                            disabled={quizSubmitted}
                        >
                            {option}
                        </button>
                    ))
                ) : (
                    <p>No options available for this question.</p>
                )}
            </div>
            <div className="flex justify-between">
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
                    onClick={handlePrevious}
                    disabled={isFirstQuestion || quizSubmitted}
                >
                    Previous
                </button>
                {isLastQuestion ? (
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleNext}
                        disabled={quizSubmitted}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuestionCard;