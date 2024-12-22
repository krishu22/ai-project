import React from 'react'
import FitbAnswer from '../components/quiz/FitbAnswer'

const DisplayMcqAnswerPage = ({fitbAnswers, questions}) => {

        console.log("Display answer page props : ", fitbAnswers)

        return (
                <div className='flex flex-col items-center justify-center gap-9'>

                        <h1 className='text-5xl font-bold mt-7'>Your selected answers</h1>

                        <div>
                                {questions.map((question, index) => (
                                        <FitbAnswer
                                                key={index}
                                                question={question.question} // string
                                                userAnswer={fitbAnswers[index]} // string
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

export default DisplayMcqAnswerPage
