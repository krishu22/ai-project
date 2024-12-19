import React,{useState} from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PromptInput from '../components/core/PromptInput'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

        const [prompt,setPrompt] = useState("");
        const navigate = useNavigate();

        const submitHandler = (event) => {
                event.preventDefault();
                if (prompt){
                        navigate("/result", {state:{prompt}});
                }
        }

        return (
                <div className="p-8">
                        <Header/>
                        <main className='container mx-auto px-4 py-8'>
                                <PromptInput/>
                        </main>
                        <Footer/>
                </div>
        )

}

export default HomePage
