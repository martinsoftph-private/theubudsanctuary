"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    // Updated background color to match the cream/beige in the photo
    <section className="py-20 min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/image/main-pool.png" // Ensure this path is correct
              width={700}
              height={700}
              alt="Private Pool View"
              className="rounded-2xl object-cover w-full aspect-square shadow-sm"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Heading: Using a serif font and larger size */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-4xl text-[#2D3E50] leading-[1.1] mb-8">
              Private Pool & Outdoor Living
            </h2>

            {/* Body Text: Increased line height and slightly muted color */}
            <p className="text-[#4A5568] text-lg md:text-lg leading-relaxed font-light max-w-lg">
              Dive into luxury with your private infinity pool that seamlessly
              blends with the horizon. The outdoor terrace features comfortable
              lounging areas, perfect for morning coffee or sunset cocktails.
              Experience the ultimate in tropical relaxation with panoramic
              views of Siargao&apos;s pristine landscape and azure waters.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
