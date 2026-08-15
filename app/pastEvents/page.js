"use client";
import React from "react";
import { useState } from "react";
import { events } from "@/data/pastEvents25/events25";
import { webinars } from "@/data/pastEvents25/webinars25";
import { workshops } from "@/data/pastEvents25/workshops25";
import Link from "next/link";

const PositionBullet = ({ rank }) => {
  const specs = {
    first: {
      stop1: "#FDE68A",
      stop2: "#F59E0B",
      stroke: "#FBBF24",
      text: "#78350F",
      label: "1",
      suffix: "ST",
    },
    second: {
      stop1: "#F1F5F9",
      stop2: "#94A3B8",
      stroke: "#CBD5E1",
      text: "#1E293B",
      label: "2",
      suffix: "ND",
    },
    third: {
      stop1: "#FFEDD5",
      stop2: "#C2410C",
      stroke: "#EA580C",
      text: "#7C2D12",
      label: "3",
      suffix: "RD",
    },
  };

  const s = specs[rank.toLowerCase()] || specs.third;

  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      className="drop-shadow-sm flex-shrink-0"
    >
      <defs>
        <linearGradient id={`grad-${rank}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={s.stop1} />
          <stop offset="100%" stopColor={s.stop2} />
        </linearGradient>
      </defs>
      <circle
        cx="20"
        cy="20"
        r="18"
        fill={`url(#grad-${rank})`}
        stroke={s.stroke}
        strokeWidth="2"
      />

      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill={s.text}
        fontFamily="sans-serif"
        fontWeight="900"
        fontStyle="italic"
      >
        <tspan fontSize="18">{s.label}</tspan>

        <tspan fontSize="8" dx="2" dy="-5" fontStyle="normal">
          {s.suffix}
        </tspan>
      </text>
    </svg>
  );
};
const excludedEvents = ["Anweshan 1st Round"];
const PastEvents = () => {
  const [activeSection, setActiveSection] = useState("events");
  const sections = [
    { id: "workshops", label: "Workshops" },
    { id: "events", label: "Events" },
    { id: "webinars", label: "Webinars" },
  ];

  const allData = {
    workshops: workshops||[], 
    events: events || [],
    webinars: webinars||[], 
  };
  const currentData = allData[activeSection] || [];

  return (
    <div className="min-h-screen bg-slate-200 p-8 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#events"
          className="text-slate-500 hover:text-[#00629B] flex items-center gap-2 mb-8 transition-all group font-medium w-fit"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back
        </Link>

        {/* Sliding Buttons */}
        <div className="flex justify-center w-full mb-12">
          <div className="relative flex bg-slate-800/40 p-1.5 rounded-2xl border border-slate-700/50 backdrop-blur-xl isolate">
            <div
              className="absolute top-1.5 bottom-1.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-[#00629B] rounded-xl shadow-[0_0_20px_rgba(0,98,155,0.4)]"
              style={{
                left:
                  activeSection === "workshops"
                    ? "6px"
                    : activeSection === "events"
                      ? "calc(33.33% + 4px)"
                      : "calc(66.66% + 2px)",
                width: "calc(33.33% - 8px)",
              }}
            />

            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`relative z-10 px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 w-28 md:w-40 cursor-pointer ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-slate-950 hover:text-slate-200"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="sm:text-6xl text-3xl font-black text-slate-700 tracking-tight italic uppercase">
            {activeSection} <span className="text-[#00629B]">2025-26</span>
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-[#00629B] to-cyan-500 mt-4 rounded-full"></div>
        </div>

        {/* List of Activities */}
        <div className="flex flex-col gap-10">
          {currentData.map((event) => {
            const isExcluded = excludedEvents.includes(event.title);

            return (
              <div
                key={event.title}
                className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md transition-all hover:border-[#00629B]/50 group shadow-2xl"
              >
                <div className="relative md:shrink-0 h-72 md:h-auto md:w-96 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="absolute top-4 right-4">
                    <p className="text-white text-[14px] uppercase tracking-widest font-bold border border-white/20 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5">
                      {event.date}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent hidden md:block" />
                </div>

                <div className="p-8 flex flex-col justify-between w-full">
                  <div>
                    <div className="uppercase tracking-[0.2em] text-xs md:text-lg text-blue-400 font-bold mb-3">
                      {event.title}
                    </div>
                    <p className="text-base md:text-md text-slate-300 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800">
                    {isExcluded ? (
                      <>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          Selection Lists:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={event.pdf1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 bg-blue-600/20 border border-blue-500/40 rounded-xl hover:bg-blue-600/40 transition-all text-blue-300 text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            EES List
                          </a>
                          <a
                            href={event.pdf2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 bg-blue-600/20 border border-blue-500/40 rounded-xl hover:bg-slate-700 transition-all text-slate-300 text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            CS List
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                          Positions Holders:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {event.result &&
                            Object.entries(event.result).map(([key, name]) => (
                              <div
                                key={key}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl transition-colors hover:bg-slate-800"
                              >
                                <PositionBullet rank={key} />
                                <span className="text-slate-200 text-sm font-medium">
                                  {name}
                                </span>
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
