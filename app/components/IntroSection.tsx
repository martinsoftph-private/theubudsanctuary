"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-24 border-b border-[#E5E8E1]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-12 md:p-24 text-left"
        >
          <p className="font-serif text-3xl md:text-4xl text-[#2F3A2E] leading-relaxed max-w-lg">
            Ready to experience this slice of heaven? Book your stay at Kamaya
            Villa today and step into a world where every moment is a treasure
            waiting to be discovered. Don&apos;t just dream about paradise, live
            it!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="h-[300px] md:h-[450px] w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1668957065532-5770d193d501?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?"
            alt="A tranquil villa view with a pool and lush greenery"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
