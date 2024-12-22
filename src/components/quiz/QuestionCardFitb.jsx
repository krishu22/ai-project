import React, { useState, useEffect } from 'react';

const QuestionCardFitb = ({
    question, // string
    totalQuestions, // number
    handleNext, // function
    handlePrevious, // function
    handleSubmit, // function
    quizSubmitted, // bool ; quiz submitted or not
    isLastQuestion, // bool
    isFirstQuestion, // bool
    fitbAnswers, // array of string answers input by user
    setFitbAnswers, // func for above
    questionIndex // index of current question
}) => {

    const [userAnswer, setUserAnswer] = useState(fitbAnswers[questionIndex] || "");

    useEffect(() => {
        setUserAnswer(fitbAnswers[questionIndex] || "");
    }, [questionIndex, fitbAnswers]);

    const handleAnswerChange = (e) => {
        const updatedAnswer = e.target.value;
        setUserAnswer(updatedAnswer);
        
        // Update the fitbAnswers array for this specific question
        setFitbAnswers((prev) => {
            const updatedAnswers = [...prev];
            updatedAnswers[questionIndex] = updatedAnswer;
            return updatedAnswers;
        });
    };

    return (
        <div>
            <h2>{question}</h2>

            <div>
                <label htmlFor="answer">Your Answer</label>
                <input
                    type="text"
                    id="answer"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    disabled={quizSubmitted} 
                />
            </div>

            <div>
                <button
                    onClick={handlePrevious}
                    disabled={isFirstQuestion || quizSubmitted}
                >
                    Previous
                </button>

                {isLastQuestion ? (
                    <button onClick={handleSubmit} disabled={quizSubmitted}>
                        Submit 
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        disabled={quizSubmitted}
                    >
                        Next
                    </button>
                )}
            </div>

            <div>
                <p>Question {questionIndex + 1} of {totalQuestions}</p>
            </div>

        </div>
    );
}

export default QuestionCardFitb;