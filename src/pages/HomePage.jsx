import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">

      {/* Hero Section with Background and Bold Call to Action */}
      <section className="relative h-screen bg-gradient-to-r from-indigo-600 via-indigo-400 to-purple-500 flex flex-col items-center justify-center text-center px-8">
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)' }}></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold tracking-tight leading-tight sm:text-6xl md:text-7xl mb-6">Empower Your Work with Cutting-Edge AI</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Harness the future of technology to help you reach your full potential. Automated workflows, intelligent recommendations, and seamless integration.
          </p>
          <a
            href="#features"
            className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-700"
          >
            Explore the Future
          </a>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section id="features" className="py-20 bg-white px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Why Choose Our AI Solution?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-lg mx-auto">Here’s how our AI can help you simplify tasks and make data-driven decisions in a fraction of the time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <i className="fas fa-bolt text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Fast & Efficient</h3>
            <p className="text-gray-600 text-lg text-center mt-4">Speed up your processes with AI-driven recommendations and automation features.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4">
              <i className="fas fa-sync-alt text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Seamless Integration</h3>
            <p className="text-gray-600 text-lg text-center mt-4">Effortlessly integrate AI with your current workflow without missing a beat.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4">
              <i className="fas fa-user-friends text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Personalized for You</h3>
            <p className="text-gray-600 text-lg text-center mt-4">Tailored results and suggestions just for you, optimizing your experience every time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Happy Clients</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-lg mx-auto">Join the community of thousands who are transforming their work with our AI-powered platform.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <p className="text-lg text-gray-600 italic">"This tool is a game-changer! It's enhanced my productivity and saved me hours every week."</p>
            <p className="mt-4 text-xl font-semibold text-gray-800">Sarah L.</p>
            <p className="text-gray-500">Product Manager at Innovate Co.</p>
          </div>
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <p className="text-lg text-gray-600 italic">"I can't imagine going back to the old way of doing things. This AI has revolutionized my workflow!"</p>
            <p className="mt-4 text-xl font-semibold text-gray-800">Tommy K.</p>
            <p className="text-gray-500">Lead Developer at CodeShift</p>
          </div>
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <p className="text-lg text-gray-600 italic">"A reliable tool that offers tailored insights. It has been indispensable for my business!"</p>
            <p className="mt-4 text-xl font-semibold text-gray-800">Jessie R.</p>
            <p className="text-gray-500">Entrepreneur at Innovators Studio</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Unlock AI-Driven Success?</h2>
        <p className="text-xl mb-8">Start your free trial today and experience the power of AI transforming your work.</p>
        <a
          href="#sign-up"
          className="bg-yellow-400 py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500"
        >
          Start Your Free Trial
        </a>
      </section>
      
    </div>
  );
};

export default HomePage;