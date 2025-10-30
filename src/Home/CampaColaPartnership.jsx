import React from 'react';
import { ShieldCheck, TrendingUp, DollarSign, Box } from 'lucide-react';

// Define the data for ALL the cards
const partnerBenefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted Indian Brand',
    description: "Campa Cola is not a brand name that is fresh. It is a brand that individuals of all ages already trust and adore. Connecting with us, you automatically share a product that appeals to a broad audience.",
  },
  {
    icon: TrendingUp,
    title: 'Increasing Market Reach',
    description: "With rising drink consumption and a growing young population in India, Campa Cola's demand is booming. Now is the best time to partner with us and meet this increasing need.",
  },
  {
    // NEW CARD 1: Attractive Margins
    icon: DollarSign,
    title: 'Attractive Margins',
    description: "Be it dealership, distributorship, or full franchise — our model ensures profit, exclusive territory rights, and good margins for every partner.",
  },
  {
    // NEW CARD 2: Product Diversity
    icon: Box,
    title: 'Product Diversity',
    description: "From Campa Cola Original to Masala Magic, and flavors like Mango, Guava, Apple, and Mixed Fruit — available in sizes from 200ml to 2L — we cater to every taste and price range.",
  },
];

const CampaColaPartnership = () => {
  return (
    // Outer container with the dark purple background and padding
    <div className="bg-[#301934] py-16 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12 uppercase tracking-wide">
        Why to become a Campa Cola Partner?
      </h2>

      {/* Grid for Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {partnerBenefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            // Apply the custom gradient background mimicking the image
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #800080 100%)',
            }}
          >
            {/* Inner card content with dark overlay to make text readable */}
            <div className="p-8 h-full bg-black/30 backdrop-blur-sm flex flex-col justify-center">
              {/* Icon */}
              <div className="mb-4">
                {/* Icons are sized and colored to match the original style */}
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaColaPartnership;