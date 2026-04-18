"use client";

import { motion } from "framer-motion";

const AmenitiesBar = () => {
  const amenities = [
    {
      title: "PRIVATE POOL",
      // Minimalist Pool Icon
      icon: (
        <svg
          className="w-10 h-10 mb-4 text-[#4A4238]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 15V8c0-1.1.9-2 2-2h12a2 2 0 012 2v7M4 15a2 2 0 002 2h12a2 2 0 002-2M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3M8 11h8M8 15h8"
          />
        </svg>
      ),
    },
    {
      title: "TROPICAL GARDENS",
      // Minimalist Palm/Plant Icon
      icon: (
        <svg
          className="w-10 h-10 mb-4 text-[#4A4238]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 3v18m0-18c-2.5 0-5 2-5 5s2.5 5 5 5m0-10c2.5 0 5 2 5 5s-2.5 5-5 5m-5 3c-2 0-4 1.5-4 4h8m0 0h8c0-2.5-2-4-4-4"
          />
        </svg>
      ),
    },
    {
      title: "BALINESE VILLAS",
      // Minimalist Hut/Villa Icon
      icon: (
        <svg
          className="w-10 h-10 mb-4 text-[#4A4238]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M9 21V9h6v12"
          />
        </svg>
      ),
    },
    {
      title: "MINUTES FROM COAST",
      // Minimalist Sun & Wave Icon
      icon: (
        <svg
          className="w-10 h-10 mb-4 text-[#4A4238]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.192-7.071l-1.414 1.414M6.343 17.657l-1.414 1.414m12.728 0l-1.414-1.414M6.343 6.343L4.929 4.929"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 20c1.5-1 3-1 4 0s3 1 4 0 3-1 4 0 3 1 4 0"
          />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 border-y border-[#E8E5E1]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12"
        >
          {amenities.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${index !== amenities.length - 1 ? "md:border-r border-[#E8E5E1] border-dashed" : ""} ${index % 2 === 0 ? "border-r border-[#E8E5E1] border-dashed md:border-r" : ""}`}
            >
              {item.icon}
              <h3 className="text-xs font-sans tracking-widest text-[#4A4238] uppercase mt-2">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default AmenitiesBar;
