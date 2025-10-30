import React from 'react';
import { ChevronRight } from 'lucide-react';

const ApprovalProcess = () => {
  return (
    <div className="bg-[#301934] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Subtitle/Category */}
          <p className="text-orange-400 font-bold uppercase tracking-wider mb-3 text-sm">
            APPROVAL PROCESS
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            How our System <span className="italic font-serif">work?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            You Have No worries about Long Paperwork & Lengthy processes or Staying In Rows for a Full Day during your Office Hours. You Have to Follow 4 Easy Steps for Campa Cola Dealer, Distributor or Super Stockist.
          </p>

          {/* Become Partner Button */}
          <button className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
            Become Partner <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
          {/* Background element for the blue glow/splash */}
          <div className="absolute inset-0 top-1/4 -right-1/4 w-3/4 h-3/4 bg-blue-500 opacity-20 rounded-full filter blur-3xl z-0 lg:top-1/2 lg:-translate-y-1/2 transform rotate-45"></div>
          <div className="absolute inset-0 top-1/4 -right-1/4 w-3/4 h-3/4 bg-blue-700 opacity-10 rounded-full filter blur-3xl z-0 lg:top-1/2 lg:-translate-y-1/2 transform rotate-45"></div>

          {/* The bottle image with the universal floating animation */}
          <img
            src="https://res.cloudinary.com/dtnjzzif3/image/upload/v1760338182/download_1_aoxyrt.svg"
            alt="Power Up Bottle"
            // ADDED: The 'animate-float' class is added here without a size prefix
            // This ensures the animation runs on all screen sizes.
            className="relative z-10 w-64 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl 
                       animate-float" 
          />
        </div>
      </div>
    </div>
  );
};

export default ApprovalProcess;