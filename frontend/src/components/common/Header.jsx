import React from 'react'

const Header = () => {

        return (
                <div>

                        <header className="bg-gray-800 text-white py-4 sticky absolute top-0 z-50">
                                <div className="container mx-auto px-4 flex flex-row justify-around items-center">
                                        <h1 className="text-3xl font-bold">AIverse</h1>
                                        <nav>
                                                <ul className='flex flex-row gap-7 items-center'>
                                                        <li><a href="/" class="text-white hover:text-gray-200">Home</a></li>
                                                        <li><a href="/prompt" class="text-white hover:text-gray-200">Enter Chat</a></li>
                                                        <li><a href="/quiz" class="text-white hover:text-gray-200">Take a Quiz</a></li>
                                                </ul>
                                        </nav>
                                        <p><a href="/cta" class="bg-indigo-500 px-4 py-2 rounded-md text-white hover:bg-blue-800">Get Started</a></p>
                                </div>
                        </header>
      
                </div>
        )

}

export default Header
