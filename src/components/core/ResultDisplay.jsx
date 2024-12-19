import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';

const ResultDisplay = () => {

        const location = useLocation();
        const {prompt,response} = location.state || {};

       /* const simulatedResponse = `You entered : ${prompt}`;

        const submitHandler = (event) => {

             /*   event.preventDefault();
                setResponse(null);
                setError(null);
                setLoading(true);  */

               /* try{

                        const res = await fetch(apiEndpoint,{
                                method:"POST",
                                headers:{
                                        "Content-Type":"application/json",
                                },
                                body: JSON.stringify({prompt}),
                        });

                        if (!res.ok){
                                throw new Error(`Error: ${res.status}`);
                        }

                        const data = await res.json();
                        setResponse(data.response);

                } 
                catch(error){setError(error.message);} 
                finally{setLoading(false);} */

          /*      setTimeout(() => {
                        if (!prompt){
                                setError("Prompt cannot be empty.");
                        }
                        else{
                                setResponse(`AI's simulated response for : "${prompt}"`);
                        }
                        setLoading(false);
                },1500)


        }  */

        return (
                <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">
                                Generated Response
                        </h2>
                        <div className="border p-4 rounded-lg">
                                <h3 className="text-lg font-bold mb-2">
                                        Prompt : 
                                </h3>
                                <p>{prompt}</p>
                                <hr className="my-4"/>
                                <h3 className="text-lg font-bold mb-2">
                                        Response : 
                                </h3>
                                <p>{response}</p>
                        </div>
                </div>
        )

}

export default ResultDisplay
