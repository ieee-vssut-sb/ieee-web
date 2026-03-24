"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { achievements } from "@/data/achievements25";

export default function AchievementsTimeline() {
  const timelineRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) return;

    const width = timeline.scrollWidth / 2;

    animationRef.current = gsap.to(timeline, {
      x: `-${width}px`,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <section className="overflow-hidden py-10">
      <div
        ref={timelineRef}
        className="flex space-x-8 px-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...achievements, ...achievements].map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={`/achievement/${item.id}`}
            className="flex-shrink-0 w-80 group"
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
              <div className="relative h-64 overflow-hidden">
                <img
                  /* FIXED: Accessing the first image of the array */
                  src={item.images?.[0] || "/placeholder-image.jpg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-5 flex flex-col justify-center min-h-[90px] bg-white">
                <h3 className="text-center text-gray-800 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#00629B] transition-colors">
                  {item.title}
                </h3>

                <div className="w-8 h-1 bg-[#00629B] mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
