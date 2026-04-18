"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white rounded-md overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-md bg-black"
      ></video>

      {/* -- Navbar Moved Inside Hero -- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 w-full z-50 transition-all duration-300 pt-6 pb-4"
      >
        <div className="px-6 md:px-12 flex items-center justify-end md:justify-between w-full">
          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-light text-white/90">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 ">
            <a
              href="#booking"
              className="hidden md:block bg-[#0e180f] text-white px-6 py-3 uppercase text-base tracking-widest font-medium rounded-none"
            >
              Book Now
            </a>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#161f17] z-[60] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-8 right-6 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center gap-8 text-lg uppercase tracking-[0.2em] font-light text-white/90">
          <a
            href="#"
            className="hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#gallery"
            className="hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>

          <a
            href="#about"
            className="hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#booking"
            className=" bg-[#10120f] text-white px-12 py-3 uppercase text-base tracking-widest font-medium rounded-none"
          >
            Book Now
          </a>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-4 mt-16"
      >
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 font-medium text-[#EAE8DB] drop-shadow-md">
          Luxury Tropical Retreat
        </span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-8xl text-[#EAE8DB] drop-shadow-xl font-normal tracking-wide">
          Discover The Sanctuary
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-[#EAE8DB] leading-relaxed drop-shadow-lg">
          Experience a slice of Bali right on the shores of Batangas. This
          private, Indonesian-inspired villa offers an intimate escape just
          steps from Nasugbu&apos;s most beautiful beaches.
        </p>
      </motion.div>

      <motion.a
        href="#explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute z-10 bottom-12 left-1/2 -translate-x-1/2  text-[#EAE8DB] px-12 py-4 uppercase text-xs tracking-widest transition-colors duration-300 rounded-none  font-medium"
      >
        Explore
      </motion.a>
    </section>
  );
}
