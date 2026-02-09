"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AchievementsTimeline() {
  const achievements = [
    { image: "/assets/Achievements1.jpg" },
    { image: "/assets/Achievements3.jpg" },
    { image: "/assets/Achievements4.jpg" },
    { image: "/assets/Achievement.jpg"},
    { image: "/assets/Achievement25_2.jpg"},
    { image: "/assets/Achievement25_3.jpg"},
    { image: "/assets/Achievement25_4.jpg"},
    { image: "/assets/Achievement25_5.jpg"},
    { image: "/assets/Achievement25_6.jpg"},
    { image: "/assets/Achievement25_7.jpg"},
    { image: "/assets/Achievement25_8.jpg"},
    { image: "/assets/Achievement25_9.jpg"},
    { image: "/assets/Achievement25_10.jpg"},
    { image: "/assets/Achievement25_11.jpg"},
    { image: "/assets/Achievement25_12.jpg"},
    { image: "/assets/Achievement25_13.jpg"},
    { image: "/assets/Achievement25_14.jpg"},
    { image: "/assets/Achievement25_15.jpg"},
    { image: "/assets/Achievement25_16.jpg"},
    { image: "/assets/Achievement25_17.jpg"},
    { image: "/assets/Achievement25_18.jpg"},
    { image: "/assets/Achievement25_19.jpg"},
    { image: "/assets/Achievement25_20.jpg"},
  ];

  const timelineRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const totalWidth = timeline.scrollWidth;

    animationRef.current = gsap.to(timeline, {
      x: `-${totalWidth / 2}px`,
      ease: "linear",
      duration: 35,
      repeat: -1,
    });
  }, []);

  const handletoggle = () => {
    if (animationRef.current) {
      // Toggle pause/play
      animationRef.current.paused(!animationRef.current.paused());
    }
  };

  return (
    <section className="mb-0 relative">
      <div className="max-w-full mx-auto relative overflow-hidden">
        {/* Timeline items */}
        <div
          ref={timelineRef}
          className="flex space-x-9 sm:space-x-8 md:space-x-15 px-4 sm:px-6 md:px-10 cursor-pointer"
        >
          {/* Duplicate items for seamless loop */}
          {[...achievements, ...achievements, ...achievements].map(
            (a, index) => (
              <div
                key={index}
                onClick={handletoggle}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
              >
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-68 sm:h-72 md:h-80 lg:h-96">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
