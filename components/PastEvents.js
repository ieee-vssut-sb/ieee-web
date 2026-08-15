"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { events } from "@/data/pastEvents25/events25";
import {webinars} from "@/data/pastEvents25/webinars25";
import {workshops} from "@/data/pastEvents25/workshops25"
// export default function Carousel() {
// const items = [
//   {
//     about:
//       "IEEE VSSUT hosted a webinar on “RIS: A Potential Disruptive for 6G”, exploring how Reconfigurable Intelligent Surfaces can revolutionize 6G communication...",
//     image: "assets/Pastwebinar1.jpg",
//   },
//   {
//     about:
//       "IEEE SEED 2025, organised jointly by IEEE VSSUT SB and IEEE CASS SC, where sustainability met innovation...",
//     image: "assets/Pastseed.jpg",
//   },
//   {
//     about:
//       "IEEE VSSUT SB in collaboration with IEEE WIE AG conducted the event on the occasion of the WIE Day celebration...",
//     image: "assets/Pastshe.jpg",
//   },
//   {
//     about:
//       "IEEE VSSUT Student Branch organized a one-day workshop on “AI & ML in Cybersecurity: Transforming Threat Detection and Defense...",
//     image: "assets/Pastworkshop.jpg",
//   },
//   {
//     about:
//       "IEEE VSSUT Student Branch hosted a webinar on “Antenna Fundamentals and Research Opportunities in UWB MIMO Antenna Design...",
//     image: "assets/Pastwebinar2.jpg",
//   },
// ];

// const [activeIndex, setActiveIndex] = useState(0);
// const [flippedIndex, setFlippedIndex] = useState(null);
// const [dimensions, setDimensions] = useState({ width: 360, gap: 90 }); // default safe values
// const carouselRef = useRef(null);
// const itemRefs = useRef([]);

// // Only use window inside useEffect
// useEffect(() => {
//   const getDimensions = () => {
//     if (window.innerWidth < 640) return { width: 220, gap: 50 }; // mobile
//     if (window.innerWidth < 1024) return { width: 280, gap: 70 }; // tablet
//     return { width: 360, gap: 90 }; // desktop
//   };

//   // set initial dimensions
//   setDimensions(getDimensions());

//   // update on resize
//   const handleResize = () => setDimensions(getDimensions());
//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, []);

// // Animate carousel
// useEffect(() => {
//   const { width, gap } = dimensions;

//   itemRefs.current.forEach((el, i) => {
//     if (!el) return;
//     const r = i - activeIndex;
//     const abs = Math.abs(r);

//     gsap.to(el, {
//       x: r * (width + gap),
//       rotationY: r * -10,
//       zIndex: 10 - abs,
//       scale: i === activeIndex ? 1 : 0.8,
//       opacity: i === activeIndex ? 1 : 0.5,
//       duration: 0.8,
//       ease: "power3.out",
//     });
//   });

//   // reset flip when switching active card
//   setFlippedIndex(null);
// }, [activeIndex, dimensions]);

// // Flip animation
// const toggleFlip = (index) => {
//   if (index !== activeIndex) return;

//   const el = itemRefs.current[index]?.querySelector(".flip-container");
//   if (!el) return;

//   const isFlipped = flippedIndex === index;
//   gsap.to(el, {
//     rotationY: isFlipped ? 0 : 180,
//     duration: 0.8,
//     ease: "power3.out",
//   });

//   setFlippedIndex(isFlipped ? null : index);
// };

// const prev = () =>
//   setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
// const next = () =>
//   setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));

const allEvents = [...events, ...webinars, ...workshops]

export default function Carousel() {
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 360, gap: 90 });
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // 1. Responsive Dimensions Logic
  useEffect(() => {
    const getDimensions = () => {
      if (typeof window !== "undefined") {
        const w = window.innerWidth;

        if (w < 640) return { width: 250, gap: 50 };

        if (w < 766) return { width: 260, gap: 50 };
       
        if (w < 1024) return { width: 320, gap: 140 };

        if (w < 1440) return { width: 400, gap: 80 };

        return { width: 460, gap: 30 };
      }
      return { width: 460, gap: 30 };
    };

    setDimensions(getDimensions());

    const handleResize = () => setDimensions(getDimensions());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Infinite Animation Engine
  useEffect(() => {
    const { width, gap } = dimensions;
    const totalItems = allEvents.length;

    const slotWidth = width * 0.85 + gap;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;

      const rawOffset = i - virtualIndex;

      const wrappedOffset = gsap.utils.wrap(
        -totalItems / 2,
        totalItems / 2,
        rawOffset,
      );

      const absOffset = Math.abs(wrappedOffset);

      let xPos = wrappedOffset * slotWidth;

      if (absOffset > 0.1) {
        const pullFactor = 0.9;
        xPos = wrappedOffset * (width * pullFactor + gap);
      }

      gsap.to(el, {
        x: xPos,
        rotationY: wrappedOffset * -15,
        zIndex: Math.round(100 - absOffset * 10),
        scale: absOffset < 0.5 ? 1 : 0.8,
        opacity: absOffset < 1.5 ? 1 : 0.4,
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    });

    setFlippedIndex(null);
  }, [virtualIndex, dimensions, allEvents.length]);

  const toggleFlip = (index) => {
    const rawOffset = index - virtualIndex;
    const wrappedOffset = gsap.utils.wrap(
      -allEvents.length / 2,
      allEvents.length / 2,
      rawOffset,
    );

    if (Math.abs(wrappedOffset) > 0.1) return;

    const el = itemRefs.current[index]?.querySelector(".flip-container");
    if (!el) return;

    const isCurrentlyFlipped = flippedIndex === index;
    gsap.to(el, {
      rotationY: isCurrentlyFlipped ? 0 : 180,
      duration: 0.8,
      ease: "power3.out",
    });

    setFlippedIndex(isCurrentlyFlipped ? null : index);
  };

  const next = () => setVirtualIndex((prev) => prev + 1);
  const prev = () => setVirtualIndex((prev) => prev - 1);

  return (
    <section className="relative z-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center relative md:py-10 perspective-1000">
        <div
          ref={carouselRef}
          className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center overflow-hidden transform-style-3d"
        >
          {allEvents.map((event, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="absolute w-[290px] sm:w-[300px] md:w-[460px] h-[260px] sm:h-[360px] md:h-[400px] cursor-pointer"
              onClick={() => toggleFlip(i)}
            >
              <div
                className="flip-container relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute w-full h-full rounded-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={event.image}
                    alt={`carousel-${i}`}
                    className="w-full h-full object-fill rounded-xl"
                  />
                </div>

                <div
                  className="absolute w-full h-full rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-lg
                bg-gradient-to-r from-black via-gray-900 to-[#00629B]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-white text-xs sm:text-sm md:text-base text-center">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 mt-6 sm:mt-8 z-50">
          <button
            onClick={prev}
            className="aspect-square h-11 bg-white rounded-full flex justify-center items-center border border-blue-800 hover:scale-105 hover:bg-blue-950 hover:text-white active:scale-95 transition-all cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex mx-auto items-center">
            <Link
              href="/pastEvents"
              className="flex items-center h-11.5 gap-2 px-6 border border-blue-800 rounded-full text-gray-900 transition duration-300 hover:bg-blue-950 hover:text-white text-xl font-medium hover:scale-105 active:scale-95"
            >
              View All
            </Link>
          </div>

          <button
            onClick={next}
            className="aspect-square h-11 bg-[#fefeff] rounded-full flex justify-center items-center border border-blue-800 hover:scale-105 hover:bg-blue-950 hover:text-white active:scale-95 transition-all cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
