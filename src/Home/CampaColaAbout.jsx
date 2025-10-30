import React from 'react';

const CampaColaAbout = () => {
  return (
    // Outer container with a dark purple background and padding
    <div className="bg-[#301934] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Content wrapper for max width and centering */}
      <div className="max-w-4xl mx-auto">

        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F0F8FF] mb-8 text-left italic font-serif">
          About Campa Cola ~ A Brand with Heart
        </h1>

        {/* Body Text Section */}
        <div className="text-lg text-white space-y-6 leading-relaxed">
          <p>
            The brand was first launched in the 70s and 80s as a home-grown competitor to international cola drinks. Used primarily as a celebratory drink, <strong className="text-red-400">Campa Cola</strong> now has a special place in the heart of many Indian customers who enjoy the sweet and fizzy flavour.
          </p>

          <p>
            Originally introduced in the 70s and 80s as a domestic rival to international cola behemoths, <strong className="text-red-400">Campa Cola</strong> soon discovered its place in the Indian consumer's heart. Renowned for its sweet, refreshing, and bubbly flavor, it quickly came to represent celebration and togetherness.
          </p>

          <p>
            <strong className="text-red-400">Campa Cola</strong> has not just returned with the same classic taste in today's cutthroat market; we have also expanded our beverage selection to appeal to more people. Supported by contemporary tools, strategic planning, and seasoned leadership, the <strong className="text-red-400">Campa Cola</strong> firm is growing nationally with a defined goal: <span className="font-bold text-xl text-yellow-300 underline">to return Campa to every Indian home.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaColaAbout;