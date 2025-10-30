import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CampaColaAbout from "./CampaColaAbout";
import CampaColaPartnership from "./CampaColaPartnership";
import PartnerApplication from "./PartnerApplication";
import ApprovalProcess from "./ApprovalProcess";
import ContactCampaCola from "./ContactCampaCola.jsx";
import OurProducts from "./OurProducts.jsx";
import FAQSection from "./FAQSection.jsx";

const HeroSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#3b0069] text-white px-6 sm:px-10 overflow-hidden">
      
      {/* --- Blurred Background Image --- */}
      <div className="absolute inset-0">
        <img
          src="https://www.campaindustries.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdfe8sdlkc%2Fimage%2Fupload%2Fv1749540663%2Ftransparent_1_1_2_d1pscz.png&w=1920&q=75"
          alt="Blurred Background"
          className="w-full h-full object-cover  opacity-30 scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b0069]/80 to-[#5a0a89]/90" />
      </div>

      {/* --- Left Content --- */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Campa_Cola_logo.png"
            alt="Campa Logo"
            className="w-28 sm:w-36 mx-auto md:mx-0 mb-4"
          />

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            India’s <span className="text-yellow-400">Favourite</span> Drink!
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-200 text-base sm:text-lg max-w-md mx-auto md:mx-0"
          >
            Now you can become a{" "}
            <span className="text-yellow-400 font-semibold">
              Campa Franchise Partner
            </span>
            , and apply for Campa Cola distributorship.
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center md:justify-start gap-2 bg-gradient-to-r from-yellow-400 to-purple-600 text-black px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold shadow-lg mx-auto md:mx-0"
          >
            Become Partner <ArrowRight className="text-white" />
          </motion.button>
        </motion.div>
      </div>

      {/* --- Right Image (Main Focus) --- */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10"
      >
        <motion.img
          src="https://res.cloudinary.com/dtnjzzif3/image/upload/v1760338184/Main_Image_1_j2h71l.svg"
          alt="Campa Cola Bottles"
          className="w-52 sm:w-72 md:w-[420px] drop-shadow-2xl"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
    <CampaColaAbout/>
    <CampaColaPartnership/>
    <PartnerApplication/>
    <ApprovalProcess/>
    <ContactCampaCola/>
    <OurProducts/>
    <FAQSection/>
    </>
  );
};

export default HeroSection;
