"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";

export default function BookingSection() {
  const [selected, setSelected] = useState<DateRange | undefined>();

  return (
    <section id="booking" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block tracking-[0.25em] text-[#6B7A64] uppercase text-[11px] font-semibold mb-4">
            Reservations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2F3A2E] leading-tight mb-4">
            Plan Your Stay
          </h2>
          <p className="font-sans text-[#4A4238]/80 text-sm md:text-base max-w-md mx-auto">
            Select your dates to check availability and book your tropical
            escape.
          </p>
        </motion.div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[#FAFAFA] p-6 md:p-12 rounded-[24px] shadow-[0_24px_64px_rgba(47,58,46,0.05)] border border-[#E8E5E1] w-full max-w-4xl flex flex-col items-center"
        >
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={setSelected}
            numberOfMonths={2}
            className="font-sans"
            style={
              {
                "--rdp-accent-color": "#6B7A64",
                "--rdp-background-color": "#EAE8DB",
              } as React.CSSProperties
            }
            classNames={{
              months:
                "flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12",
              month: "space-y-6",
              caption: "flex justify-center pt-2 relative items-center",
              caption_label: "text-2xl font-serif text-[#2F3A2E]",
              nav: "space-x-1 flex items-center",
              nav_button:
                "h-8 w-8 bg-transparent p-0 text-[#6B7A64] hover:bg-[#EAE8DB] hover:text-[#2F3A2E] rounded-full transition-colors flex justify-center items-center absolute focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7A64]",
              nav_button_previous: "left-2",
              nav_button_next: "right-2",
              table: "w-full border-collapse space-y-2",
              head_row: "flex mb-4",
              head_cell:
                "text-[#6B7A64] w-10 md:w-12 font-medium text-[11px] uppercase tracking-widest text-center",
              row: "flex w-full mt-2",
              cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
              day: "h-10 w-10 md:h-12 md:w-12 p-0 font-sans text-sm text-[#4A4238] rounded-full hover:bg-[#EAE8DB] transition-all aria-selected:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-[#6B7A64] cursor-pointer",
              day_selected: "!bg-[#6B7A64] !text-white hover:!bg-[#2F3A2E]",
              day_today:
                "font-semibold text-[#2F3A2E] border border-[#6B7A64]/30",
              day_outside: "text-[#4A4238]/30 opacity-50",
              day_disabled: "text-[#4A4238]/30 opacity-50",
              day_range_middle: "!bg-[#EAE8DB] !text-[#2F3A2E] !rounded-none",
              day_range_start: "!rounded-r-none !bg-[#6B7A64] !text-white",
              day_range_end: "!rounded-l-none !bg-[#6B7A64] !text-white",
              day_hidden: "invisible",
            }}
          />

          {/* Action Button */}
          <div className="mt-12 flex justify-center w-full border-t border-[#E8E5E1] pt-8">
            <button className="bg-[#161f17] text-white px-12 py-4 uppercase text-xs tracking-widest font-medium rounded-none hover:bg-[#6B7A64] transition-colors duration-300 w-full md:w-auto">
              Check Availability
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
