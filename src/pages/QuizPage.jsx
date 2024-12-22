import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../components/quiz/SuccessMessage';

const QuizPage = () => {

        const [formData, setFormData] = useState({
                exam: "",
                difficultyLevels: [],
                classYear:"",
                name:"",
                quizMode:"",
                addHints:false,
                answerExplanation:false,
                breakIntoSubtopics:false,
                subjects:[],
                topics:[],
                currentSubject:"",
                currentTopic:"",
                numberOfQuestions:"",
                time:"",
                typeOfQuestions:null,
               // typeOfQuiz:"",
        });

        const [formSubmitted, setFormSubmitted] = useState(false);

        const handleChange = (e) => {
                const { name, value, type, checked } = e.target;
                setFormData((prevData) => ({
                        ...prevData,
                        [name]: type === "checkbox" ? checked : value,
                }));
        };

        const handleDifficultyChange = (e) => {
                const { value, checked } = e.target;
                setFormData((prevData) => ({
                        ...prevData,
                        difficultyLevels: checked ? 
                                [...prevData.difficultyLevels, value] : prevData.difficultyLevels.filter((level) => level !== value),
                }));
        };

        // navigate to new page when submit button is clicked
      //  const navigate = useNavigate();
        const handleSubmit = (event) => {
                event.preventDefault();
                setFormSubmitted(true);
                // Handle form submission (e.g., send data to backend)
                console.log("Form data submitted : ", formData);
              //  navigate('/takequiz');
        };

        const handleAddSubject = () => {
                if (formData.currentSubject.trim()) {
                        setFormData((prev) => ({
                                ...prev,
                                subjects: [...prev.subjects, formData.currentSubject.trim()],
                                currentSubject: "", // Clear the input after adding
                        }));
                }
        };
            
        const handleAddTopic = () => {
                if (formData.currentTopic.trim()) {
                        setFormData((prev) => ({
                                ...prev,
                                topics: [...prev.topics, formData.currentTopic.trim()],
                                currentTopic: "", // Clear the input after adding
                        }));
                }
        };
            
        const handleInputChange = (e) => {
                const { name, value } = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: value,
                }));
        };


        const [timerOption, setTimerOption] = useState("noTimer");
        const [perQuestionTime, setPerQuestionTime] = useState("");
        const [totalTime, setTotalTime] = useState("");

        const handleTimerOptionChange = (e) => {
                setTimerOption(e.target.value);
        }

        const handleTimerValueChange = (e) => {
                const value = e.target.value;
                if (timerOption === "perQuestion") {
                        setPerQuestionTime(value);
                        setFormData((prev) => ({
                                ...prev,
                                time: `${value} minutes per question`,
                        }));
                } 
                else if (timerOption === "totalTime") {
                        setTotalTime(value);
                        setFormData((prev) => ({
                                ...prev,
                                time: `Total quiz time: ${value} minutes`,
                        }));
                }
        }


     /* const handleRemoveSubject = (subject) => {
        setFormData((prev) => ({
          ...prev,
          subjects: prev.subjects.filter((sub) => sub !== subject),
        }));
      };
      
      const handleRemoveTopic = (topic) => {
        setFormData((prev) => ({
          ...prev,
          topics: prev.topics.filter((top) => top !== topic),
        }));
      };*/

        console.log("formdata submitted : ",formData);
            
            

        return (
                <div>
                {!formSubmitted ? (
                        <form onSubmit={handleSubmit}>

                                <h3>What should we call you?</h3>
                                <input
                                        type="text"
                                        placeholder="e.g. ABC XYZ"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                />

                                <h3>Exam Type</h3>
                                <input
                                        type="text"
                                        placeholder="e.g. MidTerm, JEE"
                                        name="exam"
                                        value={formData.exam}
                                        onChange={handleChange}
                                        defaultValue={"Self examination"}
                                />

                                <h3>No. of Questions</h3>
                                <input
                                        type="number"
                                        placeholder="e.g. 5, 10"
                                        name="numberOfQuestions"
                                        value={formData.numberOfQuestions}
                                        onChange={handleChange}
                                        required
                                        defaultValue={5}
                                />

                                <label className="block font-semibold">Select Difficulty Levels</label>
                                <div>
                                        <label>
                                                <input
                                                        type="checkbox"
                                                        value="Easy"
                                                        checked={formData.difficultyLevels.includes('Easy')}
                                                        onChange={handleDifficultyChange}
                                                />
                                                Easy
                                        </label>
                                        <label>
                                                <input
                                                        type="checkbox"
                                                        value="Medium"
                                                        checked={formData.difficultyLevels.includes('Medium')}
                                                        onChange={handleDifficultyChange}
                                                />
                                                Medium
                                        </label>
                                        <label>
                                                <input
                                                        type="checkbox"
                                                        value="Hard"
                                                        checked={formData.difficultyLevels.includes('Hard')}
                                                        onChange={handleDifficultyChange}
                                                />
                                                Hard
                                        </label>
                                </div>

                                <h3>Class / College Year</h3>
                                <input
                                        type="text"
                                        placeholder="e.g. class 11, 3rd Year"
                                        name="classYear"
                                        value={formData.classYear}
                                        onChange={handleChange}
                                        required
                                />

                                <h3>Additional Features</h3>

                                <label>Add Hints</label>
                                <input
                                        type="checkbox"
                                        name="addHints"
                                        checked={formData.addHints}
                                        onChange={handleChange}
                                />

                                <label>Include Answer Explanation</label>
                                <input
                                        type="checkbox"
                                        name="answerExplanation"
                                        checked={formData.answerExplanation}
                                        onChange={handleChange}
                                />

                                <label>Break into Subtopics</label>
                                <input
                                        type="checkbox"
                                        name="breakIntoSubtopics"
                                        checked={formData.breakIntoSubtopics}
                                        onChange={handleChange}
                                />

                                <br/>

                                <label>Type of Questions</label>
                                <label>
                                        <input
                                                type="radio"
                                                name="typeOfQuestions"
                                                value="MCQs"
                                                checked={formData.typeOfQuestions === "MCQs"}
                                                onChange={handleChange}
                                        />
                                                MCQs
                                </label>
                                <label>
                                        <input
                                                type="radio"
                                                name="typeOfQuestions"
                                                value="Fill in the Blank"
                                                checked={formData.typeOfQuestions === "Fill in the Blank"}
                                                onChange={handleChange}
                                        />
                                                Fill in the Blank
                                </label>
                                <label>
                                        <input
                                                type="radio"
                                                name="typeOfQuestions"
                                                value="True/False"
                                                checked={formData.typeOfQuestions === "True/False"}
                                                onChange={handleChange}
                                        />
                                                True/False
                                </label>

                                {/* Subjects Section */}
                                <div className="mb-6">
                                        <h3 className="text-lg font-semibold mb-2">Subjects</h3>
                                        <div className="flex items-center gap-4 mb-2">
                                                <input
                                                        type="text"
                                                        name="currentSubject"
                                                        value={formData.currentSubject}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter subject"
                                                        className="p-2 border border-gray-300 rounded-md flex-1"
                                                />
                                                <button
                                                        type="button"
                                                        onClick={handleAddSubject}
                                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                                >
                                                        Add Subject
                                                </button>
                                        </div>

                                        {/* Display the added subjects */}
                                        {formData.subjects.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                        {formData.subjects.map((subject, index) => (
                                                                <span
                                                                        key={index}
                                                                        className="px-3 py-1 bg-blue-200 text-blue-800 rounded-md text-sm"
                                                                >
                                                                        {subject}
                                                                </span>
                                                        ))}
                                                </div>
                                        )}
                                </div>

                                {/* Topics Section */}
                                <div className="mb-6">
                                        <h3 className="text-lg font-semibold mb-2">Topics</h3>
                                        <div className="flex items-center gap-4 mb-2">
                                                <input
                                                        type="text"
                                                        name="currentTopic"
                                                        value={formData.currentTopic}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter topic"
                                                        className="p-2 border border-gray-300 rounded-md flex-1"
                                                />
                                                <button
                                                        type="button"
                                                        onClick={handleAddTopic}
                                                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                                                >
                                                        Add Topic
                                                </button>
                                        </div>

                                        {/* Display the added topics */}
                                        {formData.topics.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                        {formData.topics.map((topic, index) => (
                                                                <span
                                                                        key={index}
                                                                        className="px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm"
                                                                >
                                                                        {topic}
                                                                </span>
                                                        ))}
                                                </div>
                                        )}
                                </div>

                                <h3 className="text-lg font-semibold mb-4">Timer Options</h3>

                                {/* Timer Selection */}
                                <div className="flex flex-col gap-2 mb-4">
                                        <label className="flex items-center gap-2">
                                                <input
                                                        type="radio"
                                                        value="noTimer"
                                                        checked={timerOption === "noTimer"}
                                                        onChange={handleTimerOptionChange}
                                                />
                                                No Timer
                                        </label>

                                        <label className="flex items-center gap-2">
                                                <input
                                                        type="radio"
                                                        value="perQuestion"
                                                        checked={timerOption === "perQuestion"}
                                                        onChange={handleTimerOptionChange}
                                                />
                                                Set Time per Question
                                        </label>

                                        {timerOption === "perQuestion" && (
                                                <div className="mt-2">
                                                        <label className="block text-gray-700 font-medium">
                                                                Minutes per Question:
                                                        </label>
                                                        <input
                                                                type="number"
                                                                value={perQuestionTime}
                                                                onChange={handleTimerValueChange}
                                                                placeholder="e.g. 2"
                                                                className="mt-1 p-2 border border-gray-300 rounded-md w-24"
                                                        />
                                                </div>
                                        )}

                                        <label className="flex items-center gap-2">
                                                <input
                                                        type="radio"
                                                        value="totalTime"
                                                        checked={timerOption === "totalTime"}
                                                        onChange={handleTimerOptionChange}
                                                />
                                                Set Total Time for Quiz
                                        </label>

                                        {timerOption === "totalTime" && (
                                                <div className="mt-2">
                                                        <label className="block text-gray-700 font-medium">
                                                                Total Quiz Time (minutes):
                                                        </label>
                                                        <input
                                                                type="number"
                                                                value={totalTime}
                                                                onChange={handleTimerValueChange}
                                                                placeholder="e.g. 30"
                                                                className="mt-1 p-2 border border-gray-300 rounded-md w-24"
                                                        />
                                                </div>
                                        )}
                                </div>

                                {/* Debugging Output */}
                                <div className="mt-4 bg-white p-4 shadow rounded-md">

                                        <h4 className="text-lg font-semibold">Selected Timer Options:</h4>
                                        <p>Timer Type: {timerOption}</p>

                                        {timerOption === "perQuestion" && (
                                                <p>Minutes per Question: {perQuestionTime}</p>
                                        )}

                                        {timerOption === "totalTime" && <p>Total Quiz Time: {totalTime}</p>}

                                </div>

                                <div className="mb-4 text-center">
                                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                                                Create Quiz
                                        </button>
                                </div>

                        </form> ) : (
                        
                                <SuccessMessage formData={formData} />
                        
                        )}
                </div>
        );
};

export default QuizPage;