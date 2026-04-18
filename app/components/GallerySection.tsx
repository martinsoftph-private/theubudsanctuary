"use client";

import { motion, Variants } from "framer-motion";

export default function GallerySection() {
  // 1. ADDED ": Variants" HERE to fix the "easeOut" string error
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 2. You correctly typed this one!
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-24" id="gallery">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="tracking-widest text-[#6B7A64] uppercase text-xs font-semibold block mb-4">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2F3A2E]">
            Glimpses of Paradise
          </h2>
        </motion.div>

        {/* 3. UPDATED: Passed the 'container' variants here instead of using inline variants */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="columns-1 sm:columns-2 md:columns-3 gap-8 md:gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Villa Pool"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              alt="Tropical Garden Pathway"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
              alt="Spa Treatment Room"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop"
              alt="Coastal View"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
              alt="Balinese Architecture"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1668957065532-5770d193d501?q=80&w=800&auto=format&fit=crop"
              alt="Wellness Retreat Detail"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=800&auto=format&fit=crop"
              alt="Serene Bathing Experience"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=800&auto=format&fit=crop"
              alt="Villa Bedroom Interior"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=687&auto=format&fit=crop"
              alt="Lush Tropical Leaves"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="break-inside-avoid mb-8 md:mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop"
              alt="Evening Atmosphere"
              className="w-full rounded-md object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}