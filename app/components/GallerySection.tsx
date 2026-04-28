"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Three columns — each card's aspect ratio drives its own height.
  // Column mt-offsets create the Patchwork-style vertical stagger.
  const columns: {
    src: string;
    alt: string;
    aspect: string;
    label: string;
  }[][] = [
    // Column 1 — starts at top
    [
      {
        src: "/image/front.webp",
        alt: "Villa Front",
        aspect: "aspect-[3/4]",
        label: "Exterior",
      },
      {
        src: "/image/decoration.webp",
        alt: "Decoration",
        aspect: "aspect-square",
        label: "Details",
      },
      {
        src: "/image/sofa.webp",
        alt: "Living Area",
        aspect: "aspect-[4/5]",
        label: "Lounge",
      },
    ],
    // Column 2 — offset down
    [
      {
        src: "/image/main-pool.png",
        alt: "Main Pool",
        aspect: "aspect-[4/5]",
        label: "Pool",
      },
      {
        src: "/image/pool.webp",
        alt: "Private Pool",
        aspect: "aspect-[3/4]",
        label: "Water",
      },
      {
        src: "/image/kubo.webp",
        alt: "Kubo Beach",
        aspect: "aspect-square",
        label: "Kubo",
      },
    ],
    // Column 3 — offset further down
    [
      {
        src: "/image/kubo-night.webp",
        alt: "Kubo at Night",
        aspect: "aspect-[3/4]",
        label: "Night",
      },
      {
        src: "/image/bed.webp",
        alt: "Bedroom Suite",
        aspect: "aspect-[4/5]",
        label: "Sleep",
      },
      {
        src: "/image/stairs.png",
        alt: "Architecture",
        aspect: "aspect-square",
        label: "Structure",
      },
    ],
  ];

  const colOffsets = ["mt-0", "mt-14", "mt-28"];

  let globalIndex = 0;

  return (
    <section className="py-28 overflow-hidden" id="gallery">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-3 tracking-[0.25em] text-[#6B7A64] uppercase text-[11px] font-semibold mb-4">
              <span className="block w-8 h-px bg-[#6B7A64]" />
              Gallery
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#2F3A2E] leading-[1.05] tracking-tight">
              Glimpses of
              <br />
              <em className="not-italic text-[#6B7A64]">Paradise</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:block text-[#6B7A64] text-base font-light max-w-[160px] text-right leading-relaxed"
          >
            Every corner of the villa tells a story of calm and beauty.
          </motion.p>
        </div>

        {/* Patchwork 3-column stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-4 ${colOffsets[colIdx]}`}
            >
              {col.map((card) => {
                const idx = globalIndex++;
                return (
                  <motion.div
                    key={card.src}
                    custom={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      opacity:
                        hoveredIndex !== null && hoveredIndex !== idx ? 0.7 : 1,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <div
                      className={`relative ${card.aspect} w-full overflow-hidden rounded-[18px]`}
                      style={{
                        boxShadow:
                          hoveredIndex === idx
                            ? "0 24px 64px rgba(47,58,46,0.20)"
                            : "0 4px 18px rgba(47,58,46,0.09)",
                        transition: "box-shadow 0.45s ease",
                      }}
                    >
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Persistent vignette */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(20,26,20,0.55) 0%, rgba(20,26,20,0.04) 50%, transparent 75%)",
                          opacity: hoveredIndex === idx ? 1 : 0.5,
                          transition: "opacity 0.4s ease",
                        }}
                      />

                      {/* Bottom bar: label + index number */}
                      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between">
                        <span
                          className="text-white/90 text-[10px] tracking-[0.22em] uppercase font-semibold"
                          style={{
                            opacity: hoveredIndex === idx ? 1 : 0,
                            transform:
                              hoveredIndex === idx
                                ? "translateY(0)"
                                : "translateY(6px)",
                            transition:
                              "opacity 0.3s ease, transform 0.3s ease",
                          }}
                        >
                          {/*card.label*/}
                        </span>
                        {/* Patchwork-style index badge */}
                        <span className="text-white/30 text-[10px] font-mono tabular-nums">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Corner bracket on hover */}
                      <div
                        className="absolute top-3.5 right-3.5 w-4 h-4 pointer-events-none"
                        style={{
                          opacity: hoveredIndex === idx ? 1 : 0,
                          transition: "opacity 0.3s ease 0.1s",
                        }}
                      >
                        <span className="absolute top-0 right-0 w-full h-px bg-white/50" />
                        <span className="absolute top-0 right-0 w-px h-full bg-white/50" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-[#6B7A64]/25 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
