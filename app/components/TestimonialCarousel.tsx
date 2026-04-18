"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const TestimonialCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(25); // Defaults to ~25% visible

  const testimonials = [
    {
      headline: "A true tropical haven",
      text: "We came to them with the goal to find a peaceful retreat and throughout the entire process it has been a breeze. Not only did we get our desired relaxation but the hospitality was unmatched.",
      name: "Charles Oh",
      title: "Recent Guest",
    },
    {
      headline: "A game-changer for our weekend",
      text: "Thanks to the beautiful design of this villa, our weekend escape was transformed. The sanctuary they created is visually appealing, deeply relaxing, and significantly boosted our mood. We couldn't be happier!",
      name: "Jeffrey Mark Garcia",
      title: "Anniversary Celebrant",
    },
    {
      headline: "Impressive attention to detail",
      text: "Staying here was a pleasure from start to finish. They paid meticulous attention to every aspect of the architecture and delivered outstanding service. I highly recommend their private villas.",
      name: "Elaine Morales",
      title: "Wellness Retreat Guest",
    },
    {
      headline: "Efficient and reliable booking",
      text: "We were impressed by the professionalism and efficiency of the team throughout the booking process. They delivered on every promise and ensured our stay was fully functional and bug-free. Highly recommended.",
      name: "David James Salazar",
      title: "Frequent Traveler",
    },
  ];

  // Automatically update the progress bar when the user scrolls or swipes
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const currentProgress = ((scrollLeft + clientWidth) / scrollWidth) * 100;
    setProgress(currentProgress);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        (scrollContainerRef.current.firstChild as HTMLElement)?.clientWidth ||
        350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-16"
        >
          <div className="flex flex-col justify-between">
            <h2 className="font-serif text-4xl md:text-5xl text-[#4A4238] leading-tight mb-8 md:mb-12">
              Here&apos;s what our guests
              <br />
              say about us
            </h2>
            <div className="w-full md:w-3/4 h-1 bg-[#E8E5E1] rounded-full overflow-hidden flex">
              <div
                className="h-full bg-[#4A4238] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col justify-end md:pl-12">
            <div className="mb-8 font-sans text-sm md:text-base text-[#4A4238]/80 leading-relaxed max-w-md">
              <p className="mb-4">
                We help create unforgettable memories with hospitality and
                design that actually works.
              </p>
              <p>Hear it from the people we&apos;ve actually hosted.</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-[#E8E5E1] flex items-center justify-center text-[#D4B895] hover:border-[#D4B895] hover:bg-[#D4B895] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-[#E8E5E1] flex items-center justify-center text-[#D4B895] hover:border-[#D4B895] hover:bg-[#D4B895] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-[#E8E5E1] mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container mx-auto max-w-7xl px-6 md:px-0"
        >
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`flex-none w-[85vw] md:w-[350px] snap-start bg-transparent p-8 md:p-10 flex flex-col border-b md:border-b-0 border-r border-[#E8E5E1] ${index === 0 ? "md:border-l" : ""}`}
              >
                <h3 className="font-serif text-xl font-medium text-[#4A4238] mb-6">
                  &quot;{t.headline}&quot;
                </h3>
                <p className="font-sans text-sm text-[#4A4238]/70 leading-relaxed flex-grow">
                  {t.text}
                </p>
                <div className="w-full h-[1px] bg-[#E8E5E1] my-8"></div>
                <div>
                  <p className="font-sans text-sm font-semibold text-[#4A4238]">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-[#4A4238]/50 mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
