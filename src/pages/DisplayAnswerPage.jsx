import React from 'react'
import Answer from '../components/quiz/Answer'

const DisplayAnswerPage = ({selectedAnswers, questions}) => {

        console.log("Display answer page props : ", selectedAnswers)

        return (
                <div className='flex flex-col items-center justify-center gap-9'>

                        <h1 className='text-5xl font-bold mt-7'>Your selected answers</h1>

                        <div>
                                {questions.map((question, index) => (
                                        <Answer
                                                key={index}
                                                question={question.question} // string
                                                options={question.options} // array of strings
                                                selectedAnswer={selectedAnswers[index]} // index of selected answer
                                                correctAnswer={question.answer} // string
                                                hint={question.hint} // string
                                                explanation={question.explanation} // string
                                                difficulty={question.difficulty} // string
                                                subject={question.subject} // string
                                                topic={question.topic} // string
                                        />
                                ))}
                        </div>
      
                </div>
        )

}

export default DisplayAnswerPage
