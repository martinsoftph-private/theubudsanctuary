"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#161f17] text-[#F8F5F0] py-16 md:py-24 px-6 md:px-12 lg:px-24">
      {/* Main Footer Container with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8"
      >
        {/* Left Column: Newsletter (Always Top) & Massive Brand Name (Desktop Only) */}
        <div className="flex flex-col md:w-5/12 mb-4 md:mb-0">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4 text-[#F8F5F0]/70">
              Stay in touch with us
            </h4>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/10 text-[#F8F5F0] placeholder-[#F8F5F0]/50 rounded-md py-3 px-4 outline-none focus:bg-white/20 transition-all border border-transparent focus:border-[#F8F5F0]/30"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F8F5F0]/70 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* DESKTOP ONLY: Huge Brand Text at the bottom */}
          <div className="hidden md:block mt-auto pt-24">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F8F5F0] leading-none">
              The Ubud
              <br />
              Sanctuary
            </h1>
          </div>
        </div>

        {/* Mobile Wrapper for Side-by-Side Links */}
        <div className="flex flex-row justify-between md:contents">
          {/* Middle Column: Socials & Desktop Address */}
          <div className="flex flex-col md:w-3/12 gap-12 w-1/2">
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-6 text-[#F8F5F0]/70">
                Find us on
              </h4>
              <div className="flex flex-col gap-3 font-serif text-2xl md:text-4xl text-[#F8F5F0]">
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Airbnb
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Booking.com
                </a>
              </div>
            </div>

            {/* DESKTOP ONLY: Address */}
            <div className="hidden md:block">
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4 text-[#F8F5F0]/70">
                Address
              </h4>
              <p className="text-sm font-sans text-[#F8F5F0]/80 leading-relaxed">
                Nasugbu, Batangas,
                <br />
                Philippines
              </p>
            </div>
          </div>

          {/* Right Column: Navigation & Desktop Copyright */}
          <div className="flex flex-col justify-between md:w-2/12 w-1/2 pl-4 md:pl-0">
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-6 text-[#F8F5F0]/70">
                Navigation
              </h4>
              <div className="flex flex-col gap-4 font-sans text-sm text-[#F8F5F0]">
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Therapies
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-[#D4B895] transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* DESKTOP ONLY: Copyright */}
            <div className="hidden md:block mt-auto text-[10px] tracking-widest uppercase text-[#F8F5F0]/50 pt-24">
              &copy; {new Date().getFullYear()} The Ubud Sanctuary PH
            </div>
          </div>
        </div>

        {/* MOBILE ONLY: Bottom Section (Address, Brand Name, Copyright) */}
        <div className="flex flex-col md:hidden mt-8 gap-12">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4 text-[#F8F5F0]/70">
              Address
            </h4>
            <p className="text-sm font-sans text-[#F8F5F0]/80 leading-relaxed">
              Nasugbu, Batangas, Philippines
            </p>
          </div>

          <div>
            <h1 className="font-serif text-5xl tracking-tight text-[#F8F5F0] leading-none mb-4">
              The Ubud
              <br />
              Sanctuary
            </h1>
            <div className="text-[10px] tracking-widest uppercase text-[#F8F5F0]/50">
              &copy; {new Date().getFullYear()} The Ubud Sanctuary PH
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}