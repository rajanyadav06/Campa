// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'; // Added ChevronRight import for the button

// Data for the FAQ section
const faqData = [
  {
    question: "How much does it cost to start a Campa Cola dealership?",
    answer: "Depending on your area and market capacity, you can begin Campa Cola Dealership with an investment of ₹5 to ₹10 lakh." 
  },
  {
    question: "What are the benefits of a Campa Cola distributorship?",
    answer: "Campa Cola distributorship offers benefits such as exclusive territorial rights, increased profit margins from bulk sales, sales and marketing subsidies, and the delivery of fresh goods."
  },
  {
    question: "Is a franchise better than a dealership?",
    answer: "Though Campa Cola Dealership is a worthwhile investment, a distributorship provides more control, exposure, and a greater scope from the Campa Cola firm."
  },
  {
    question: "Is the Campa Cola contact number active?",
    answer: "You can enquire about dealership, misuse, and complaints at +91-XXXXXXXXX. Please note that an active number may be required for official contact." 
  },
];

const FAQSection = () => {
  // State to track which question is currently open (stores the index)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open state of a question
  const toggleFAQ = (index) => {
    // If the same question is clicked, close it (set null); otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#301934] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header/Title Section */}
        <div className="mb-12 text-center sm:text-left">
          <p className="text-orange-400 font-bold uppercase tracking-wider mb-2 text-sm">
            FAQ'S
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Need Assistance? <span className="italic font-serif">Start Here</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#3f2844] rounded-lg shadow-xl overflow-hidden border border-purple-700"
            >
              {/* Question/Toggle Button */}
              <button
                className="w-full p-6 text-left flex justify-between items-center text-lg font-semibold transition duration-300 hover:bg-[#5b3d64]"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                {/* Toggle Icon */}
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                )}
              </button>

              {/* Answer Content */}
              <div
                // Class controls height/visibility for the smooth animation effect
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 p-6 pt-0' 
                    : 'max-h-0 opacity-0 p-0'      
                }`}
              >
                {/* Actual answer text, applying top padding and border once expanded */}
                <p className="text-gray-300 border-t border-purple-600 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: 'Become Partner' CTA Button at the bottom */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
            Become Partner <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;