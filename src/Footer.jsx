import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1a002b] via-[#2a0145] to-[#3b0069] text-white px-6 md:px-20 py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Section --- */}
        <div className="space-y-6">
          {/* Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Campa_Cola_logo.png"
            alt="Campa Logo"
            className="w-32 md:w-40"
          />

          <p className="text-gray-300 leading-relaxed">
            Campa Cola stands as a symbol of Indian enterprise, resilience, and
            refreshment. A legacy built on trust, innovation, and community
            pride.
          </p>

          {/* Dealer Cards */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="border border-gray-500/40 rounded-lg px-5 py-3">
              <h3 className="text-yellow-400 font-semibold">Dealership</h3>
              <p className="text-sm text-gray-300">Retail partnerships</p>
            </div>
            <div className="border border-gray-500/40 rounded-lg px-5 py-3">
              <h3 className="text-yellow-400 font-semibold">Distribution</h3>
              <p className="text-sm text-gray-300">Supply chain opportunities</p>
            </div>
            <div className="border border-gray-500/40 rounded-lg px-5 py-3">
              <h3 className="text-yellow-400 font-semibold">Franchise</h3>
              <p className="text-sm text-gray-300">Brand licensing</p>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-pink-400" />
              <span>
                Phone:{" "}
                <a href="tel:+917501017115" className="text-yellow-400">
                  +91 7501017115
                </a>
              </span>
            </div>
            <div>
              Emails:{" "}
              <a
                href="mailto:business@campabeveragesril.in"
                className="text-yellow-400"
              >
                business@campabeveragesril.in
              </a>{" "}
              |{" "}
              <a
                href="mailto:business@campacolaril.com"
                className="text-yellow-400"
              >
                business@campacolaril.com
              </a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/company/campacola"
                className="text-yellow-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                campacola
              </a>
            </div>
          </div>
        </div>

        {/* --- Right Section --- */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Let’s Grow <br /> Together
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            We're inviting passionate entrepreneurs to partner with us in
            expanding our national footprint through:
          </p>
          <p className="text-gray-300">
            Our dedicated onboarding team is here to support your journey at
            every step.
          </p>
        </div>
      </div>

      {/* --- Footer Line --- */}
      <div className="mt-16 border-t border-gray-600/40 pt-4 text-xs text-gray-400 text-center md:text-left">
        <p>
          © 1978 — 2025 Campa Cola Beverages (a division of Reliance Consumer
          Products Limited). All rights reserved.
        </p>
        <div className="flex justify-center md:justify-between pt-2 text-gray-400">
          <p>Established 1978</p>
          <p>• Proudly Indian</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
