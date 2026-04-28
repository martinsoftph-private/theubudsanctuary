"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection2() {
  return (
    <section className="py-20  border-t border-[#E5E8E1]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Text Column - Now on the Left for the "Zig-Zag" effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-4xl text-[#2D3E50] leading-[1.1] mb-8">
              Thoughtfully Designed for Living
            </h2>

            <p className="text-[#4A5568] text-lg md:text-lg leading-relaxed font-light max-w-lg">
              This 60sqm modern tropical villa seamlessly blends contemporary
              comfort with Siargao&apos;s natural beauty. Wake to birdsong and
              ocean breezes, work remotely with high-speed Starlink WiFi, and
              end your day with a sunset dip in your private infinity pool.
              Perfect for couples, digital nomads, or solo travelers seeking a
              peaceful base.
            </p>
          </motion.div>

          {/* Image Column - Now on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <Image
              src="/image/bedroom.webp"
              width={700}
              height={700}
              alt="A tranquil bedroom view with elegant decor"
              className="rounded-2xl object-cover w-full aspect-square shadow-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
