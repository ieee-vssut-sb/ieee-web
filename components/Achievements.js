"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function AchievementsTimeline() {
  const achievements = [
    {
      id: "1",
      image: "/assets/Achievements1.jpg",
      title: "IEEE Recognition 2025",
      description: "Awarded for outstanding technical activities.",
    },
    {
      id: "2",
      image: "/assets/Achievements3.jpg",
      title: "National Hackathon Win",
      description: "Our team secured first place nationally.",
    },
    {
      id: "3",
      image: "/assets/Achievements4.jpg",
      title: "International Conference",
      description: "Successfully hosted an IEEE conference.",
    },
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const width = timeline.scrollWidth / 2;

    gsap.to(timeline, {
      x: `-${width}px`,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="overflow-hidden py-10">
      <div
        ref={timelineRef}
        className="flex space-x-8 px-6 cursor-pointer"
      >
        {[...achievements, ...achievements].map((item, index) => (
          <Link
            key={index}
            href={`/achievement/${item.id}`}
            className="flex-shrink-0 w-72"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center font-semibold py-3">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
