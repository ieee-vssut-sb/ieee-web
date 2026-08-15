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
      duration: 45,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.play();

  return (
    <section className="overflow-hidden pb-2.5">
      <div className="max-w-10xl mx-auto p-1 mb-6 flex items-center justify-center md:justify-end">
        <Link
          href="/allAchievements"
          className="flex items-center h-11.5 gap-2 px-6 border border-blue-800 rounded-full text-gray-900 transition duration-300 hover:bg-blue-950 hover:text-white text-xl font-medium hover:scale-105 active:scale-95"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      <div
        ref={timelineRef}
        className="flex space-x-8 px-6"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: 1, willChange: "transform" }}
      >
        {[...achievements, ...achievements].map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={`/achievement/${item.id}`}
            className="flex-shrink-0 w-80 group"

            onClick={() => {
              if (animationRef.current) {
                animationRef.current.pause();
              }
            }}
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
              <div className="relative h-72 overflow-hidden">
                <img
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
