import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionCardMcq from '../components/quiz/QuestionCardMcq';
import axios from 'axios';
import DisplayMcqAnswerPage from './DisplayMcqAnswerPage';
import QuestionCardFitb from '../components/quiz/QuestionCardFitb';
import DisplayFitbAnswerPage from './DisplayFitbAnswerPage';
import QuestionCardTF from '../components/quiz/QuestionCardTF';
import DisplayTfAnswerPage from './DisplayTfAnswerPage';


const TakeQuiz = () => {

        const apiUrl = process.env.REACT_APP_API_KEY;

        const location = useLocation();
        const { state: formData } = location;

        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null); 
        const [quizData, setQuizData] = useState(null); 

        const [currentQues, setCurrentQues] = useState(0);
        const [selectedAnswers, setSelectedAnswers] = useState([]);

        const [fitbAnswers, setFitbAnswers] = useState([]);
        const [tfAnswers, setTfAnswers] = useState([]);
        

        const [quizSubmitted, setQuizSubmitted] = useState(false);

        const promptMcq = `Generate a set of quiz questions having 4 choices and 1 correct answer based on the following data given in JSON format : 
        
        ${JSON.stringify(formData)} 
        
        Generate the questions in json format. Each object must contain the following attributes : question, options, answer, hint, explanation, difficulty, subject, topic. Leave the attribute as null if it does not have any value. Return the JSON only`;

        const promptFitb = `Generate a set of quiz questions of fill in the blanks type based on the following data given in JSON format : 

        ${JSON.stringify(formData)}

        Generate the questions in json format. Each object must contain the following attributes : question, answer, hint, explanation, difficulty, subject, topic. Leave the attribute as null if it does not have any value. Return the JSON only`;

        const promptTF = `Generate a set of quiz questions of True and False type based on the following data given in JSON format :

        ${JSON.stringify(formData)}

        Generate the questions in json format. Each object must contain the following attributes : question, answer("True" or "False"), hint, explanation, difficulty, subject, topic. Leave the attribute as null if it does not have any value. Return the JSON only`;

        console.log(promptMcq);
        console.log(promptFitb);

        const fetchQuiz = async () => {
                console.log("Loading...");
                setError(null);
                setLoading(true);
                let response = null;
                console.log("FORMDATA : ",formData);
                try{
                        if (formData?.typeOfQuestions && formData.typeOfQuestions === "MCQs"){
                                response = await axios ({
                                        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiUrl}`,
                                        method:"post",
                                        data:{
                                                contents:[{parts : [{text:promptMcq}]}],
                                        },
                                });
                        }
                        else if (formData?.typeOfQuestions && formData.typeOfQuestions === "Fill in the Blank"){
                                response = await axios ({
                                        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiUrl}`,
                                        method:"post",
                                        data:{
                                                contents:[{parts : [{text:promptFitb}]}],
                                        },
                                });
                        }
                        else if (formData?.typeOfQuestions && formData.typeOfQuestions === "True/False"){
                                response = await axios ({
                                        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiUrl}`,
                                        method:"post",
                                        data:{
                                                contents:[{parts : [{text:promptTF}]}],
                                        },
                                });
                        }
                        
                        console.log("Original Response from the API : ", response);

                        if (response.data && response.data.candidates.length > 0) {
                                // Extract the generated quiz text from the response
                                const content = response.data.candidates[0]?.content?.parts[0]?.text;
                                console.log("Content : ",content);
                                if (content) {
                                        setQuizData(content);
                                    } else {
                                        console.error("No valid content in API response.");
                                        setError("Invalid content from API.");
                                    }
                        }

                        else {
                                console.error("No candidates in response.");
                                setError("No valid content returned from the API");
                        }

                } catch (err){
                        console.error("Error fetching quiz:", err);
                        setError(err.message || "An error occurred while fetching the quiz questions.");
                }
                finally {
                        setLoading(false);
                }
                


        }

        useEffect(() => {
                if (formData){
                        fetchQuiz();
                }
        },[formData])

        console.log("Quiz data before parsing : ",quizData);
          
        const quiz = useMemo(() => {
                if (!quizData) return null; // Skip parsing if `quizData` is not yet fetched
                try {
                        console.log("Quiz data before parsing in usememo : ",quizData);
                    const cleanedString = quizData
                        .replace(/```json/g, "")
                        .replace(/```/g, "")
                        .trim();
                        console.log("After parsing : ", cleanedString);

                       
                    return JSON.parse(cleanedString);
                } catch (err) {
                    console.error("Error parsing JSON:", err);
                    setError("Failed to parse quiz data.");
                    return null;
                }
            }, [quizData]);

        console.log("Quiz data is  :",quiz);


      /*  useEffect(() => {
                console.log("quiz data before parsingg : ", quizData);
                if (quizData) {
                    console.log("Parsed quizData:", stringToJson(quizData));
                }
            }, [quizData]);
*/
     /*   useEffect(() => {
                if (quizData) {
                    console.log("Validating quizData...");
                    const parsedQuiz = stringToJson(quizData);
                    setQuizData(parsedQuiz); // Update with parsed data
                }
            }, [quizData]);*/

        const nextQues = () => {
                if (!quizSubmitted) setCurrentQues((prev) => Math.min(prev + 1, quiz.length - 1));
        }

        const prevQues = () => {
                if (!quizSubmitted) setCurrentQues((prev) => Math.max(prev - 1, 0));
        }

       // const navigate = useNavigate();
        const handleSubmit = () => {
                console.log("Quiz submitted with answers : ",selectedAnswers);
                setQuizSubmitted(true);
                alert("Quiz submitted successfully");
                //navigate()
        }


        const stringToJson = (inputString) => {

                if (!inputString) {
                    console.error("Invalid input string passed to JSON parser:", inputString);
                    return null;
                }
                console.log("String passed to JSON parser:", inputString);
            
                try {
                    const cleanedString = inputString
                        .replace(/```json/g, "") 
                        .replace(/```/g, "") 
                        .trim();
                        return JSON.parse(cleanedString);
                } catch (err) {
                    console.error("Error parsing JSON:", err.message);
                    return null;
                }
        };

        if (loading) return <p className="text-center text-blue-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;
    console.log("Quiz before p : ",quiz);
    if (!quiz) return <p>No quiz available</p>;

        const currentQuiz = quiz[currentQues];
        


        return (

                <div className="container mx-auto p-4">

                        {loading && <p className="text-center text-blue-600">Loading...</p>}

                        {error && <p className="text-center text-red-600" style={{ color: "red" }}>{error}</p>}

                        {!quizSubmitted ? 
                                <div>
                                        {
                                                formData.typeOfQuestions === "MCQs" && 
                                                <QuestionCardMcq
                                                        question={currentQuiz.question} // string
                                                        options={currentQuiz.options} // array of strings
                                                        totalQuestions={quiz.length} // no. of ques total
                                                        handleNext={nextQues} // nextques func
                                                        handlePrevious={prevQues} // prevques func
                                                        handleSubmit={handleSubmit} // submit func
                                                        quizSubmitted={quizSubmitted} // bool ; quiz submitted or not
                                                        isLastQuestion={currentQues === quiz.length - 1} // bool ; last ques or not
                                                        isFirstQuestion={currentQues === 0} // same as above
                                                        selectedAnswers={selectedAnswers} // array of indexes of selected answers
                                                        setSelectedAnswers={setSelectedAnswers} // set
                                                        questionIndex={currentQues}
                                                /> 
                                        }
                                        {
                                                formData.typeOfQuestions === "Fill in the Blank" && 
                                                <QuestionCardFitb
                                                        question={currentQuiz.question} // string
                                                        totalQuestions={quiz.length} // no. of ques total
                                                        handleNext={nextQues} // nextques func
                                                        handlePrevious={prevQues} // prevques func
                                                        handleSubmit={handleSubmit} // submit func
                                                        quizSubmitted={quizSubmitted} // bool ; quiz submitted or not
                                                        isLastQuestion={currentQues === quiz.length - 1} // bool ; last ques or not
                                                        isFirstQuestion={currentQues === 0} // same as above
                                                        fitbAnswers={fitbAnswers} // array of indexes of selected answers
                                                        setFitbAnswers={setFitbAnswers} // set
                                                        questionIndex={currentQues}
                                                /> 
                                        }  
                                        {
                                                formData.typeOfQuestions === "True/False" && 
                                                <QuestionCardTF 
                                                        question={currentQuiz.question} // string
                                                        totalQuestions={quiz.length} // no. of ques total
                                                        handleNext={nextQues} // nextques func
                                                        handlePrevious={prevQues} // prevques func
                                                        handleSubmit={handleSubmit} // submit func
                                                        quizSubmitted={quizSubmitted} // bool ; quiz submitted or not
                                                        isLastQuestion={currentQues === quiz.length - 1} // bool ; last ques or not
                                                        isFirstQuestion={currentQues === 0} // same as above
                                                        tfAnswers={tfAnswers} // array of indexes of selected answers
                                                        setTfAnswers={setTfAnswers} // set
                                                        questionIndex={currentQues}
                                                />
                                        }
                                </div> : 
                                <div>
                                        {
                                                formData.typeOfQuestions === "MCQs" && 
                                                <DisplayMcqAnswerPage
                                                        selectedAnswers={selectedAnswers}
                                                        questions={quiz}
                                                />
                                        }
                                        {
                                                formData.typeOfQuestions === "Fill in the Blank" &&
                                                <DisplayFitbAnswerPage 
                                                        fitbAnswers={fitbAnswers}
                                                        questions={quiz}
                                                />
                                        }
                                        {
                                                formData.typeOfQuestions === "True/False" && 
                                                <DisplayTfAnswerPage
                                                        tfAnswers={tfAnswers}
                                                        questions={quiz}
                                                />
                                        }
                                </div>   
                        }

                       
                </div>

        )

}

export default TakeQuiz
