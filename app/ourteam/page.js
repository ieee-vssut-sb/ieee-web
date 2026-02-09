"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { RiLinkedinFill } from "react-icons/ri";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ===== 2025–2026 ===== */
const team2025 = {
  "Student Branch": [
    {
      id: 1,
      name: "Prof. Harish Kumar Sahoo",
      position: "BRANCH COUNSELOR",
      image: "/assets/Harish Kumar Sahu.jpg",
      linkedin:
        "https://www.linkedin.com/in/harish-kumar-sahoo-04b57938",
      email: "",
    },
    {
      id: 2,
      name: "Sohan Kumar Nayak",
      position: "CHAIR",
      image: "/assets/SohanKumarNayak.jpg",
      linkedin:
        "https://www.linkedin.com/in/sohan-kumar-nayak-8198292a7/",
      email: "nksohan10@gmail.com",
    },

  ],

  CASS: [
    {
      id: 1,
      name: "Dr. Suvendu Narayan Mishra",
      position: "FACULTY ADVISOR",
      image: "/assets/Suvendu Narayan.jpg",
      linkedin: "",
      email: "",
    },
  ],

  "Computer Society": [],
  ComSoc: [],
  "Sensor Council": [],
  "WIE Affinity": [],
};

/* ===== 2024–2025 ===== */
const team2024 = {
  "Student Branch": [
    {
      id: 1,
      name: "Previous Chair Name",
      position: "CHAIR",
      image: "/assets/placeholder.jpg",
      linkedin: "",
      email: "",
    },
  ],

  CASS: [],
  "Computer Society": [],
  ComSoc: [],
  "Sensor Council": [],
  "WIE Affinity": [],
};

/* Combine by year */
const teamData = {
  "2025 - 2026": team2025,
  "2024 - 2025": team2024,
};

const tabs = [
  "Student Branch",
  "CASS",
  "Computer Society",
  "ComSoc",
  "Sensor Council",
  "WIE Affinity",
];

export default function OurTeam() {
  const [selectedYear, setSelectedYear] = useState("2025 - 2026");
  const [selectedTab, setSelectedTab] = useState("Student Branch");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (/android|iphone|ipad|ipod/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const members =
    teamData[selectedYear]?.[selectedTab] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#e6f2fa] to-white">
      {/* ---------------- HEADER ---------------- */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <nav className="px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <img
              src="/assets/ieee_logo.png"
              alt="IEEE"
              className="h-14 w-14"
            />
          </Link>

          <div className="hidden md:flex space-x-8 text-xl font-semibold">
            <Link href="/about">About</Link>
            <Link href="/ourteam" className="text-[#2095d8] font-bold">
              Our Team
            </Link>
            <Link href="/activities">Activities</Link>
            <Link href="/gallery">Gallery</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 font-semibold">
            <Link href="/about">About</Link>
            <Link href="/ourteam" className="text-[#2095d8]">
              Our Team
            </Link>
            <Link href="/activities">Activities</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
        )}
      </header>

      {/* ---------------- MAIN ---------------- */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl text-center font-semibold text-[#00629B] mb-8">
          Meet Our Team
        </h1>

        {/* Year Dropdown */}
        <div className="text-center mb-10 relative">
          <button
            onClick={() => setShowYearDropdown(!showYearDropdown)}
            className="inline-flex items-center gap-2 border-b pb-1"
          >
            {selectedYear}
            <ChevronDown
              className={`transition ${
                showYearDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showYearDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow rounded">
              {Object.keys(teamData).map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setSelectedTab("Student Branch");
                    setShowYearDropdown(false);
                  }}
                  className="block px-6 py-2 hover:bg-gray-100"
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-md ${
                selectedTab === tab
                  ? "bg-[#00629B] text-white"
                  : "hover:bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, index) => {
            const mailLink = isMobile
              ? `mailto:${member.email}`
              : `https://mail.google.com/mail/?view=cm&to=${member.email}`;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-60 h-60 mx-auto rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#00629B]">
                  {member.name}
                </h3>
                <p className="mb-3 font-semibold">
                  {member.position}
                </p>

                <div className="flex justify-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="bg-[#0A66C2] text-white p-2 rounded"
                    >
                      <RiLinkedinFill size={22} />
                    </a>
                  )}

                  {member.email && (
                    <a href={mailLink}>
                      <img
                        src="/assets/mail-icon.webp"
                        className="w-8"
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
