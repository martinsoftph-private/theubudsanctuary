"use client";

import { motion } from "framer-motion";

export default function BookingSection() {
  return (
    <section
      className="bg-[#F4F5F0] py-24 border-t border-[#E5E8E1]"
      id="booking"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="tracking-widest text-[#6B7A64] uppercase text-xs font-semibold mb-4 block">
            Reservations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2F3A2E]">
            Book Your Stay
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[#F4F5F0] p-8 md:p-12 shadow-sm border border-[#E5E8E1]"
        >
          <form className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
            <div className="flex flex-col text-left">
              <label
                htmlFor="check-in"
                className="text-[10px] uppercase tracking-widest text-[#6B7A64] font-bold mb-3"
              >
                Check-in Date
              </label>
              <input
                type="date"
                id="check-in"
                className="w-full border-b border-[#D1D5CB] py-3 text-[#2F3A2E] focus:outline-none focus:border-[#85987A] bg-transparent font-sans"
                required
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="check-out"
                className="text-[10px] uppercase tracking-widest text-[#6B7A64] font-bold mb-3"
              >
                Check-out Date
              </label>
              <input
                type="date"
                id="check-out"
                className="w-full border-b border-[#D1D5CB] py-3 text-[#2F3A2E] focus:outline-none focus:border-[#85987A] bg-transparent font-sans"
                required
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="guests"
                className="text-[10px] uppercase tracking-widest text-[#6B7A64] font-bold mb-3"
              >
                Guests
              </label>
              <select
                id="guests"
                className="w-full border-b border-[#D1D5CB] py-3 text-[#2F3A2E] focus:outline-none focus:border-[#85987A] bg-transparent font-sans appearance-none rounded-none cursor-pointer"
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#2F3A2E] text-white px-6 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#0e180f] transition-colors"
              >
                Check Availability
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
