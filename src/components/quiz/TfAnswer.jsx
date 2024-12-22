import React from "react";
import levenshtein from "fast-levenshtein";
import { useState } from "react";
import { useEffect } from "react";

const TfAnswer = ({
  question,
  userAnswer,
  correctAnswer,
  hint,
  explanation,
  difficulty,
  subject,
  topic,
}) => {

        if (correctAnswer){
                correctAnswer = "True";
        } 
        else correctAnswer = "False";
  

  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-lg border border-gray-200 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Question */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Question</h3>
        <p className="text-lg text-gray-700 mt-2">{question}</p>
      </div>

      {/* Feedback */}
      {userAnswer !== undefined && (
        <div
          className={`text-lg font-semibold mt-4 flex items-center space-x-2 ${
            userAnswer === correctAnswer
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {userAnswer === correctAnswer ? (
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

      <div className="mb-6">
        <h3>Your answer : </h3>
        <p>{userAnswer}</p>
      </div>

      <div className="mb-6">
        <h3>Correct answer : </h3>
        <p>{correctAnswer}</p>
      </div>


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

export default TfAnswer;