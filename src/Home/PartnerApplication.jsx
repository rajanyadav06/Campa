import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'; 

// Data for each partnership type
const partnershipData = {
  dealership: {
    title: 'Campa Cola Dealership',
    subtitle: 'Become a Local Partner',
    description: 'A Campa Cola dealership allows you to become a key local partner, focusing on direct sales and distribution within a defined, smaller territory, ensuring deep market penetration and customer engagement.',
    requirements: [
      'Retail space or kiosk (min 100 sq ft)',
      'Local market knowledge',
      'Basic sales and customer service skills',
      'Preferably experience in FMCG or beverage sales',
    ],
    investment: [
      'Initial Investment: ₹5 to ₹10 lakh',
      'Expected ROI: 6-12 months',
      'Average monthly profit: ₹50k - ₹1 lakh',
      'Possible monthly turnover: ₹10 lakh',
    ],
    benefits: [
      'Local market exclusivity',
      'Direct customer engagement',
      'Marketing support',
      'Brand recognition at local level',
    ],
  },
  distributorship: {
    title: 'Campa Cola Distributorship',
    subtitle: 'Expand Your Territory',
    description: 'A Campa Cola distributorship is your chance to expand on a major scale. You will work on a more massive scale. As a distributor, you have to deliver Campa Cola products to kiranas, supermarkets, restaurants, stores, and kiosks within a designated region.',
    requirements: [
      'Warehouse space (minimum 500 sq ft)',
      'Transportation vehicles (2-3+ needed)',
      'Sales team (5-10+ callers and field staff)',
      'Preferably experience in FMCG or beverage distribution',
    ],
    investment: [
      'Initial Investment: ₹10 to ₹25 lakh',
      'Expected ROI: 12-18 months',
      'Average monthly profit: ₹1 - ₹3 lakhs',
      'Possible monthly turnover: ₹10 to ₹25 million',
    ],
    benefits: [
      'Exclusive territory rights',
      'Increased profit margins from bulk sales',
      'Sales and marketing subsidies',
      'Delivery of fresh goods',
    ],
  },
  superStockist: {
    title: 'Campa Cola Super Stockist',
    subtitle: 'Control a Larger Region',
    description: 'Becoming a Campa Cola Super Stockist means managing a larger geographical region, supplying to multiple distributors and dealerships. This role requires significant logistical capability and a strong network.',
    requirements: [
      'Large warehouse (minimum 2000 sq ft)',
      'Extensive fleet of transport vehicles (5+ needed)',
      'Robust sales and logistics team (15+)',
      'Proven track record in large-scale FMCG distribution',
    ],
    investment: [
      'Initial Investment: ₹50 lakh to ₹1 crore',
      'Expected ROI: 18-24 months',
      'Average monthly profit: ₹5 - ₹10 lakhs',
      'Possible monthly turnover: ₹5 - ₹10 crore',
    ],
    benefits: [
      'Maximized territorial control',
      'Highest profit potential',
      'Strategic partnership with Campa Cola',
      'Exclusive product launches and promotions',
    ],
  },
};

const PartnerApplication = () => {
  const [activeTab, setActiveTab] = useState(null); 

  // Toggle handler logic remains the same
  const handleTabClick = (key) => {
    setActiveTab(activeTab === key ? null : key);
  };

  const currentInfo = partnershipData[activeTab];

  return (
    <div className="bg-[#301934] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12 tracking-wide font-serif italic">
        You can apply for
      </h2>

      {/* Partnership Type Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
        {Object.keys(partnershipData).map((key) => (
          <button
            key={key}
            className={`
              px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeTab === key
                ? 'bg-gradient-to-r from-orange-400 to-purple-600 text-white shadow-lg'
                : 'bg-[#5b3d64] text-gray-200 hover:bg-[#6c4876]' // <--- INACTIVE BUTTON STYLING UPDATED HERE
              }
            `}
            onClick={() => handleTabClick(key)} 
          >
            {partnershipData[key].title}
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div className="max-w-4xl mx-auto">
        {currentInfo && (
          <div className="bg-[#3f2844] rounded-xl shadow-xl p-8 lg:p-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentInfo.title}
              </h3>
              <p className="text-purple-300 text-lg mb-6">
                {currentInfo.subtitle}
              </p>

              <p className="text-gray-200 mb-8 leading-relaxed">
                {currentInfo.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Requirements Card */}
                <div className="bg-[#5b3d64] p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-white mb-4">Requirements:</h4>
                  <ul className="space-y-2 text-gray-200 list-none">
                    {currentInfo.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Investment Card */}
                <div className="bg-[#5b3d64] p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-white mb-4">Investment:</h4>
                  <ul className="space-y-2 text-gray-200 list-none">
                    {currentInfo.investment.map((inv, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{inv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-[#5b3d64] p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Benefits:</h4>
                <ul className="space-y-2 text-gray-200 list-none">
                  {currentInfo.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
                  Become Partner <ChevronRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerApplication;