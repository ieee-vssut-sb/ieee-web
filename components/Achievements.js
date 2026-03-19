"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { achievements } from "@/data/achievements";

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
            className="flex-shrink-0 w-72"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <p className="text-center font-semibold py-3 px-2">
                {item.title}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}