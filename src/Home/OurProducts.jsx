import React from 'react';

// Data for each product card
const products = [
  {
    name: 'Campa Cola',
    image: "https://www.bbassets.com/media/uploads/p/l/40329399_2-campa-cola-zero-sugar.jpg", 
    bgGradient: 'linear-gradient(to top, #6A0DAD, #8A2BE2)', 
    labelColor: 'text-purple-200'
  },
  {
    name: 'Campa Lemon',
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/1/22/155bd6bf-bdb3-4f07-95f1-32549ccdd838_132557.png", 
    bgGradient: 'linear-gradient(to top, #FFD700, #DAA520)', 
    labelColor: 'text-yellow-100'
  },
  {
    name: 'Campa Powerup',
    image: "https://www.bbassets.com/media/uploads/p/l/40329403_2-campa-power-up.jpg", 
    bgGradient: 'linear-gradient(to top, #4169E1, #0000CD)', 
    labelColor: 'text-blue-100'
  },
  {
    name: 'Campa Orange',
    image: "https://campabeveragesadmin.ril.com/uploads/Orange_Big_Bottle_Hover_cd42bf91e0_fa65dd0a7f.png", 
    bgGradient: 'linear-gradient(to top, #FFA500, #FF4500)', 
    labelColor: 'text-orange-100'
  },
];

// --- Tailwind CSS Keyframes for Floating Animation ---
// Note: To use this, you must extend your tailwind.config.js with these keyframes.
/*
// Inside tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }, // Moves image up by 10px
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite', // Apply the keyframe over 4s
      }
    },
  },
  // ...
};
*/

const OurProducts = () => {
  return (
    <div className="bg-[#301934] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-400 text-center mb-12 uppercase tracking-wide">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between p-6 rounded-2xl shadow-xl overflow-hidden min-h-[350px] transform transition-transform duration-300 hover:scale-[1.03]"
              style={{ background: product.bgGradient }}
            >
              {/* Product Label */}
              <p className={`absolute top-4 left-4 text-xs font-bold uppercase ${product.labelColor}`}>
                Campa
              </p>
              
              {/* Product Name */}
              <h3 className="text-3xl font-bold text-white uppercase mt-8 z-10">
                {product.name.split(' ')[1] || product.name}
              </h3>

              {/* Product Image Container (for Zoom and Float) */}
              <div className="relative w-40 h-auto my-auto z-10">
                <img
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-contain drop-shadow-lg 
                             transition-transform duration-300 ease-in-out 
                             hover:scale-[1.15]                       /* Zoom effect on hover */
                             animate-float                        /* Subtle floating animation */"
                  style={{
                    // Delay the animation slightly based on index for a cascading effect
                    animationDelay: `${index * 0.2}s`, 
                  }}
                />
              </div>

              {/* Background Product Name as a subtle overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white opacity-10 text-6xl sm:text-7xl lg:text-8xl font-black uppercase whitespace-nowrap overflow-hidden rotate-[-15deg] select-none">
                  {product.name.split(' ')[1] || product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;