"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { events } from '@/data/pastEvents25';
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
  export default function Carousel() {
  // Use a virtual index that can grow infinitely (e.g., 10, 11, 12...)
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

    // Mobile (Phone)
    if (w < 640) return { width: 250, gap: 50 }; 
    
    if (w<766 ) return {width: 260, gap : 50};
    // Tablet / Small Laptop (This is your 768px - 1024px fix)
    // We reduce the width and gap so they don't overlap
    if (w < 1024) return { width: 320, gap: 140 }; 

    // Standard Desktop (1024px - 1440px)
    if (w < 1440) return { width: 400, gap: 80 };

    // Large Screens (More than 1440px)
    // We cap the gap here so they don't drift too far apart
    return { width: 460, gap: 30 }; 
  }
  return { width: 460, gap: 30 };
  };

    // set initial dimensions
    setDimensions(getDimensions());

    // update on resize
    const handleResize = () => setDimensions(getDimensions());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Infinite Animation Engine
useEffect(() => {
  const { width, gap } = dimensions;
  const totalItems = events.length;
  
  const slotWidth = width * 0.85 + gap; 

  itemRefs.current.forEach((el, i) => {
    if (!el) return;

    const rawOffset = i - virtualIndex;
    
    const wrappedOffset = gsap.utils.wrap(
      -totalItems / 2,
      totalItems / 2,
      rawOffset
    );

    const absOffset = Math.abs(wrappedOffset);

    let xPos = wrappedOffset * slotWidth;
    
    if (absOffset > 0.1) {
      const pullFactor = 0.9; 
      xPos = wrappedOffset * (width * pullFactor + gap);
    }

    gsap.to(el, {
      x: xPos,
      rotationY: wrappedOffset * -15, // Increased tilt for better 3D look
      zIndex: Math.round(100 - absOffset * 10),
      scale: absOffset < 0.5 ? 1 : 0.8,
      opacity: absOffset < 1.5 ? 1 : 0.4,
      duration: 0.8,
      ease: "power3.out",
      overwrite: true
    });
  });

  setFlippedIndex(null);
}, [virtualIndex, dimensions, events.length]);

  // 3. Flip Logic
  const toggleFlip = (index) => {
    // Only allow flipping the item closest to center (offset near 0)
    const rawOffset = index - virtualIndex;
    const wrappedOffset = gsap.utils.wrap(-events.length/2, events.length/2, rawOffset);
    
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

  // 4. Infinite Navigation
  const next = () => setVirtualIndex((prev) => prev + 1);
  const prev = () => setVirtualIndex((prev) => prev - 1);
  return (
        
  //   <div className="flex flex-col items-center justify-center relative md:py-10">
  //     <div
  //       ref={carouselRef}
  //       className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center overflow-hidden"
  //     >
  //       {events.map((event, i) => (
  //         <div
  //           key={i}
  //           ref={(el) => (itemRefs.current[i] = el)}
  //           className="absolute w-[290px] sm:w-[300px] md:w-[460px] h-[260px] sm:h-[360px] md:h-[400px] cursor-pointer"
  //           onClick={() => toggleFlip(i)}
  //         >
  //           {/* Flip container */}
  //           <div
  //             className="flip-container relative w-full h-full"
  //             style={{ transformStyle: "preserve-3d" }}
  //           >
  //             {/* Front */}
  //             <div
  //               className="absolute w-full h-full rounded-xl overflow-hidden"
  //               style={{ backfaceVisibility: "hidden" }}
  //             >
  //               <img
  //                 src={event.image}
  //                 alt={`carousel-${i}`}
  //                 className="w-full h-full object-fill rounded-xl"
  //               />
  //             </div>

  //             {/* Back */}
  //             <div
  //               className="absolute w-full h-full rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 shadow-lg
  //            bg-gradient-to-r from-black via-gray-900 to-[#00629B]"
  //               style={{
  //                 backfaceVisibility: "hidden",
  //                 transform: "rotateY(180deg)",
  //               }}
  //             >
  //               <p className="text-white text-xs sm:text-sm md:text-base text-center">
  //                 {event.description}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     {/* Controls */}
  //     <div className="flex gap-2.5 mt-6 sm:mt-8">
  //       <button
  //         onClick={prev}
  //         className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition"
  //       >
  //         <img
  //           src="/assets/backbutton.jpg"
  //           alt="back"
  //           className="w-6 h-6 sm:w-8 sm:h-8"
  //         />
  //       </button>
  //       <div className="flex mx-auto items-center">
  //       <Link
  //         href="/pastEvents"
  //         className="px-6 py-2.5 bg-[#00629B] text-white rounded-full font-semibold hover:bg-[#004a75] transition-all flex items-center gap-1 shadow-lg hover:shadow-xl active:scale-95 left"
  //       >
  //         View All
  //         {/* <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2.5}
  //             d="M14 5l7 7m0 0l-7 7m7-7H3"
  //           />
  //         </svg> */}
  //       </Link>
  //     </div>
  //       <button
  //         onClick={next}
  //         className="p-2 bg-white rounded-full shadow-md hover:scale-105 transition"
  //       >
  //         <img
  //           src="/assets/frontbutton.jpg"
  //           alt="next"
  //           className="w-6 h-6 sm:w-8 sm:h-8"
  //         />
  //       </button>
  //     </div>
  //   </div>
  // );
  <section className="relative z-0 overflow-hidden">
    <div className="flex flex-col items-center justify-center relative md:py-10 perspective-1000">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center overflow-hidden transform-style-3d"
      >
        {events.map((event, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="absolute w-[290px] sm:w-[300px] md:w-[460px] h-[260px] sm:h-[360px] md:h-[400px] cursor-pointer"
            onClick={() => toggleFlip(i)}
          >
            {/* Flip container */}
            <div
              className="flip-container relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
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

              {/* Back Side */}
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

      {/* Controls */}
      <div className="flex gap-2.5 mt-6 sm:mt-8 z-50">
        <button
          onClick={prev}
          className="p-2 bg-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          <img
            src="/assets/backbutton.jpg"
            alt="back"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
          />
        </button>

        <div className="flex mx-auto items-center">
          <Link
            href="/pastEvents"
            className="px-6 py-2.5 bg-[#00629B] text-white rounded-full font-semibold hover:bg-[#004a75] transition-all flex items-center gap-1 shadow-lg hover:shadow-xl active:scale-95"
          >
            View All
          </Link>
        </div>

        <button
          onClick={next}
          className="p-2 bg-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          <img
            src="/assets/frontbutton.jpg"
            alt="next"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
          />
        </button>
      </div>
    </div>
  </section>
  );
}
