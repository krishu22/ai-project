import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500 min-h-screen py-12">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1500x1500?text=Background+Image')" }}></div>
      
      <div className="max-w-6xl mx-auto bg-white p-12 rounded-xl shadow-2xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Section - Image */}
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/400x400?text=Company+Logo" 
              alt="Company Logo"
              className="rounded-full shadow-lg max-w-[90%] md:max-w-full mx-auto"
            />
          </div>

          {/* Right Section - Content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6 text-center md:text-left">About Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are <span className="font-semibold text-indigo-600">AIverse</span>, an innovative team with a shared vision: to leverage artificial intelligence to solve real-world challenges. Our passion for technology drives us to explore and implement practical AI solutions that inspire progress and productivity.
            </p>

            <div className="space-y-8">
              {/* Mission */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  Our mission is to democratize artificial intelligence for all. From cloud-based machine learning tools to personalized AI systems, we aim to empower everyone to make informed decisions and streamline operations with AI technology. 
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Vision</h2>
                <p className="text-lg text-gray-700">
                  Our vision is to make AI an integral part of everyday life, enabling individuals and businesses alike to unlock the full potential of AI in decision-making, innovation, and sustainability. We believe that the future is AI-driven.
                </p>
              </div>

              {/* Get In Touch CTA */}
              <div className="mt-10 text-center md:text-left">
                <a 
                  href="/contact" 
                  className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 ease-in-out"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member 1" 
              className="rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-lg text-gray-600">AI Engineer</p>
          </div>

          <div className="text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member 2" 
              className="rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-lg text-gray-600">Data Scientist</p>
          </div>

          <div className="text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member 3" 
              className="rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
            <p className="text-lg text-gray-600">Product Manager</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 italic mb-8">"AIverse has transformed the way we operate—helping us streamline our processes and increase efficiency. Their AI solutions are nothing short of exceptional."</p>
          <p className="font-semibold text-indigo-600">Client Name</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;