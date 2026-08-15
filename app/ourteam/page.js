"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import { Menu, X } from "lucide-react";
import { RiLinkedinFill } from "react-icons/ri";
import { TbMail } from "react-icons/tb";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [selectedYear, setSelectedYear] = useState("2025 - 2026");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Student Branch");
  const [isMobile, setIsMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const yearOptions = ["2025 - 2026"];
  const tabs = [
    "Student Branch",
    "CASS",
    "Computer Society",
    "ComSoc",
    "Sensor Council",
    "WIE Affinity",
  ];

  // Team Members Data

  const teamMembersStudentBranch = [
    {
      id: 1,
      name: "Prof. Harish Kumar Sahoo",
      position: "BRANCH COUNSELOR",
      image: "/assets/Harish Kumar Sahu.jpg",
      linkedin:
        "https://www.linkedin.com/in/harish-kumar-sahoo-04b57938?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "",
    },
    {
      id: 2,
      name: "Sohan Kumar Nayak",
      position: "CHAIR",
      image: "/assets/SohanKumarNayak.jpg",
      linkedin: "https://www.linkedin.com/in/sohan-kumar-nayak-8198292a7/",
      email: "nksohan10@gmail.com",
    },
    {
      id: 3,
      name: "Debabrata Sahoo",
      position: "PAST-CHAIR",
      image: "/assets/Debabrata Sahoo .jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 4,
      name: "Priyadarshani Mahapatra",
      position: "VICE-CHAIR",
      image: "/assets/Priyadarshani.jpg",
      linkedin: "https://www.linkedin.com/in/priyadarshani-mahapatra-2a15a8313",
      email: "priyadarshani13022005@gmail.com",
    },
    {
      id: 5,
      name: "Disha Darshita",
      position: "SECRETARY (SA)",
      image: "/assets/DishaDarshita.jpg",
      linkedin: "https://www.linkedin.com/in/disha-darshita-18a168280",
      email: "dishadarshita2004@gmail.com",
    },
    {
      id: 6,
      name: "Suvendu Sahoo",
      position: "SECRETARY (SC)",
      image: "/assets/Suvendu Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/suvendu-sahoo-08bb5631a",
      email: "sahoosuvendu3251@gmail.com",
    },
    {
      id: 7,
      name: "Ratnakar Sahoo",
      position: "ASSISTANT SECRETARY",
      image: "/assets/Ratnakar Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/ratnakar-sahoo-074b10293",
      email: "sahooratnakar2006@gmail.com",
    },
    {
      id: 8,
      name: "Amartya Sahoo",
      position: "TREASURER",
      image: "/assets/Amartya Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/amartya-sahoo-24b813313/",
      email: "amartya7sahoo77@gmail.com",
    },
    {
      id: 9,
      name: "A. Akhila",
      position: "PR LEAD",
      image: "/assets/Akhila.jpg",
      linkedin: "https://www.linkedin.com/in/a-akhila/",
      email: "aakkhhii30@gmail.com",
    },
    {
      id: 10,
      name: "Manish Kumar Bisoi",
      position: "GRAPHICS DESIGN LEAD",
      image: "/assets/Manish Kumar Bisoi.jpg",
      linkedin: "https://www.linkedin.com/in/manish-kumar-bisoi-b53b96304/",
      email: "manishkumarbisoi@example.com",
    },
    {
      id: 11,
      name: "Pratyush Kumar Sahoo",
      position: "CONTENT LEAD",
      image: "/assets/Pratyush Kumar Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/pratyush-kumar-sahoo-pks/",
      email: "pratyushsahoo88518@gmail.com",
    },
    {
      id: 12,
      name: "Abhinash Dwibedi",
      position: "WEB MASTER",
      image: "/assets/AbinashDwibedi.jpg",
      linkedin: "https://www.linkedin.com/in/abinash-dwibedi/",
      email: "dwibedi.abinash123@gmail.com",
    },
    {
      id: 13,
      name: "Prabhat Ranjan Mohanta",
      position: "R&A (Magazine Publ.) LEAD",
      image: "/assets/prabhat ranjan mohanta.png",
      linkedin: "https://www.linkedin.com/in/prabhatranjan416/",
      email: "prabhat16ranjan16@gmail.com",
    },
  ];

  const teamMembersCASS = [
    {
      id: 1,
      name: "Dr. Suvendu Narayan Mishra",
      position: "FACULTY ADVISOR",
      image: "/assets/Suvendu Narayan.jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 2,
      name: "Ratnakar Sahoo",
      position: "CHAIR",
      image: "/assets/Ratnakar Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/ratnakar-sahoo-074b10293",
      email: "sahooratnakar2006@gmail.com",
    },
    {
      id: 3,
      name: "Debabrata Sahoo",
      position: "PAST-CHAIR",
      image: "/assets/Debabrata Sahoo .jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 4,
      name: "Sanket Pradhan",
      position: "VICE-CHAIR",
      image: "/assets/Sanket Pradhan.jpg",
      linkedin:
        "https://www.linkedin.com/in/sanket-pradhan-73a5742a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "sanketpradhan2004@gmail.com",
    },
    {
      id: 5,
      name: "Sthyti Pragyan Sahu",
      position: "SECRETARY (SA)",
      image: "/assets/Sthyti Pragyan Sahu.webp",
      linkedin: "https://www.linkedin.com/in/sthyti-pragyan-sahu-48a517297",
      email: "sthyti2004@gmail.com",
    },
    {
      id: 6,
      name: "Alok Jiten Rao",
      position: "SECRETARY (SC)",
      image: "/assets/AlokJitenRao.jpg",
      linkedin: "https://www.linkedin.com/in/alokjitenrao",
      email: "jitenalok03@gmail.com",
    },
    {
      id: 7,
      name: "Sidharth Sankar Barik",
      position: "TREASURER",
      image: "/assets/SidharthSankarBarik.jpg",
      linkedin: "https://in.linkedin.com/in/sidhartha-sankar-barik-3b5642293",
      email: "bariksidhartha6@gmail.com",
    },
    {
      id: 8,
      name: "Sai Ritesh Singh",
      position: "WEB MASTER",
      image: "/assets/Sai Ritesh Singh.jpg",
      linkedin: "https://www.linkedin.com/in/sai-ritesh-singh-57023b320",
      email: "sairiteshsingh79@gmail.com",
    },
  ];

  // Computer Society Members
  const teamMembersCS = [
    {
      id: 1,
      name: "Prof. Harish Kumar Sahoo",
      position: "FACULTY ADVISOR",
      image: "/assets/Harish Kumar Sahu.jpg",
      linkedin:
        "https://www.linkedin.com/in/harish-kumar-sahoo-04b57938?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "",
    },
    {
      id: 2,
      name: "Sanket Sahoo",
      position: "CHAIR",
      image: "/assets/sanketsahoo.jpg",
      linkedin: "https://www.linkedin.com/in/sanket-sahoo-a29b8b280/",
      email: "sanketsahoo40@gmail.com",
    },
    {
      id: 3,
      name: "Ritesh Kumar Panda",
      position: "PAST-CHAIR",
      image: "/assets/Ritesh Kumar Panda.jpg",
      linkedin: "",
      email: "",
    },

    {
      id: 4,
      name: "Abhinash Dwibedi",
      position: "VICE-CHAIR",
      image: "/assets/AbinashDwibedi.jpg",
      linkedin: "https://www.linkedin.com/in/abinash-dwibedi/",
      email: "dwibedi.abinash123@gmail.com",
    },
    {
      id: 5,
      name: "Sohan Kumar Nayak",
      position: "SECRETARY",
      image: "/assets/SohanKumarNayak.jpg",
      linkedin: "https://www.linkedin.com/in/sohan-kumar-nayak-8198292a7/",
      email: "sohankumarnayak@example.com",
    },
    {
      id: 6,
      name: "Aayush Kumar Giri",
      position: "TREASURER",
      image: "/assets/Ayush Giri.jpg",
      linkedin: "https://www.linkedin.com/in/aayush-kumar-giri-1b4b01284/",
      email: "aayushkumargiri8531@gmail.com",
    },
    {
      id: 7,
      name: "Bhavitabya Dhal",
      position: "WEB MASTER",
      image: "/assets/Bhavitabya Dhal.jpg",
      linkedin: "https://www.linkedin.com/in/bhavitabya-dhal-3184bb290/",
      email: "example@example.com",
    },
  ];

  // ComSoc Members
  const teamMembersComSoc = [
    {
      id: 1,
      name: "Prof. Harish Kumar Sahoo",
      position: "FACULTY ADVISOR",
      image: "/assets/Harish Kumar Sahu.jpg",
      linkedin:
        "https://www.linkedin.com/in/harish-kumar-sahoo-04b57938?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "",
    },
    {
      id: 2,
      name: "Aayush Kumar Giri",
      position: "CHAIR",
      image: "/assets/Ayush Giri.jpg",
      linkedin: "https://www.linkedin.com/in/aayush-kumar-giri-1b4b01284/",
      email: "aayushkumargiri8531@gmail.com",
    },
    {
      id: 3,
      name: "Subhranshu Sekhar Panda",
      position: "PAST-CHAIR",
      image: "/assets/Subhranshu Sekhar Panda.jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 4,
      name: "Manish Kumar Bisoi",
      position: "VICE-CHAIR",
      image: "/assets/Manish Kumar Bisoi.jpg",
      linkedin: "https://www.linkedin.com/in/manish-kumar-bisoi-b53b96304/",
      email: "manishkumarbisoi@example.com",
    },
    {
      id: 5,
      name: "Mohit Pradhan",
      position: "SECRETARY",
      image: "/assets/Mohit Pradhan.jpg",
      linkedin: "https://www.linkedin.com/in/mohit-pradhan-0882732b8",
      email: "pradhanmohit884@gmail.com",
    },
    {
      id: 6,
      name: "Ritim Tripathy",
      position: "TREASURER",
      image: "/assets/Ritim Tripathy.jpg",
      linkedin: "https://www.linkedin.com/in/ritim-tripathy-48a517297",
      email: "ritimtripathy2004@gmail.com",
    },
    {
      id: 7,
      name: "Amartya Sahoo",
      position: "WEB MASTER",
      image: "/assets/Amartya Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/amartya-sahoo-24b813313/",
      email: "amartya7sahoo77@gmail.com",
    },
  ];

  // Sensor Council Members
  const teamMembersSensorCouncil = [
    {
      id: 1,
      name: " Prof. Harish Kumar Sahoo",
      position: "FACULTY ADVISOR",
      image: "/assets/Harish Kumar Sahu.jpg",
      linkedin:
        "https://www.linkedin.com/in/harish-kumar-sahoo-04b57938?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "",
    },
    {
      id: 2,
      name: "Suvendu Sahoo",
      position: "CHAIR",
      image: "/assets/Suvendu Sahoo.jpg",
      linkedin: "https://www.linkedin.com/in/suvendu-sahoo-08bb5631a",
      email: "sahoosuvendu3251@gmail.com",
    },
    {
      id: 3,
      name: "Kali Prasad Mishra",
      position: "PAST-CHAIR",
      image: "/assets/Kali Prasad Mishra .jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 4,
      name: "Swarup Mahakud",
      position: "VICE-CHAIR",
      image: "/assets/Swarup Mahakud.jpg",
      linkedin: "https://www.linkedin.com/in/swarup-mahakud-b73b56308/",
      email: "swarup.mahakud.2005@gmail.com",
    },
    {
      id: 5,
      name: "Soumyaranjan Pruseth",
      position: "SECRETARY",
      image: "/assets/Soumyaranjan Pruseth .jpg",
      linkedin: "https://www.linkedin.com/in/soumyaranjan-pruseth/",
      email: "soumyaranjanpruseth@gmail.com",
    },
    {
      id: 6,
      name: "Ashish Ayushman Sahoo",
      position: "TREASURER",
      image: "/assets/Ashish Ayushman Sahoo.jpg",
      linkedin: "#",
      email: "example@example.com",
    },
    {
      id: 7,
      name: "Bibekananda Pradhan",
      position: "WEB MASTER",
      image: "/assets/Bibekananda Pradhan.png",
      linkedin: "",
      email: "",
    },
  ];

  // WIE Affinity Members
  const teamMembersWIE = [
    {
      id: 1,
      name: "Mrs. Sarmila Garnaik",
      position: "FACULTY ADVISOR",
      image: "/assets/Sarmila Garnaik.jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 2,
      name: "Priyadarshani Mahapatra",
      position: "CHAIR",
      image: "/assets/Priyadarshani.jpg",
      linkedin: "https://www.linkedin.com/in/priyadarshani-mahapatra-2a15a8313",
      email: "priyadarshani13022005@gmail.com",
    },
    {
      id: 3,
      name: "Ishita Pani",
      position: "PAST-CHAIR",
      image: "/assets/Ishita Pani.jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 4,
      name: "Disha Darshita",
      position: "VICE-CHAIR",
      image: "/assets/DishaDarshita.jpg",
      linkedin: "https://www.linkedin.com/in/disha-darshita-18a168280",
      email: "dishadarshita2004@gmail.com",
    },
    {
      id: 5,
      name: "A. Akhila",
      position: "SECRETARY (SA)",
      image: "/assets/Akhila.jpg",
      linkedin: "https://www.linkedin.com/in/a-akhila/",
      email: "aakkhhii30@gmail.com",
    },
    {
      id: 6,
      name: "Sthyti Pragyan Sahu",
      position: "SECRETARY (SC)",
      image: "/assets/Sthyti Pragyan Sahu.webp",
      linkedin: "https://www.linkedin.com/in/sthyti-pragyan-sahu-48a517297",
      email: "sthyti2004@gmail.com",
    },
    {
      id: 7,
      name: "Killamchetty Abhilasha",
      position: "TREASURER",
      image: "/assets/killamchetty Abhilasha.jpg",
      linkedin: "",
      email: "",
    },
    {
      id: 8,
      name: "Sriya Sahoo",
      position: "WEB MASTER",
      image: "/assets/sriya sahoo.jpg",
      linkedin: "",
      email: "",
    },
  ];
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Basic mobile detection
    if (/android|iPhone|iPad|iPod/i.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#e6f2fa] to-[#ffffff]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div>
              <Link href="/">
                <img
                  src="/assets/ieee_logo.png"
                  alt="IEEE Logo"
                  className="h-14 w-14 md:h-20 md:w-20 object-contain"
                />
              </Link>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8 text-lg md:text-2xl font-semibold">
              <Link
                href="/about"
                className="text-gray-900 hover:text-[#00629B] py-2"
              >
                About
              </Link>
              <Link href="/ourteam" className="font-bold text-[#2095d8] py-2">
                Our Team
              </Link>
              <Link
                href="/activities"
                className="text-gray-900 hover:text-[#00629B] py-2"
              >
                Activities
              </Link>
              <Link
                href="/gallery"
                className="text-gray-900 hover:text-[#00629B] py-2"
              >
                Gallery
              </Link>
            </div>
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 hover:text-[#00629B] focus:outline-none"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-2 space-y-4 px-4 pb-4 text-lg font-semibold">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 hover:text-[#00629B]"
              >
                About
              </Link>
              <Link
                href="/ourteam"
                onClick={() => setIsOpen(false)}
                className="block font-bold text-[#2095d8]"
              >
                Our Team
              </Link>
              <Link
                href="/activities"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 hover:text-[#00629B]"
              >
                Activities
              </Link>
              <Link
                href="/gallery"
                className="block  text-gray-900 hover:text-[#00629B]"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#00629B] mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
          >
            Meet Our Team
          </h1>

          {/* Year Dropdown */}
          <div className="relative inline-block">
            <button
              className="flex items-center space-x-2 text-lg text-gray-700 border-b-2 border-gray-300 pb-1 hover:border-blue-600 transition-colors"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              <span>{selectedYear}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  showYearDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showYearDropdown && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[140px]">
                {yearOptions.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
                      selectedYear === year
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-2 sm:px-5 sm:py-3 lg:px-7 lg:py-4 
              rounded-md text-sm sm:text-base lg:text-xl font-medium transition-colors
        ${
          selectedTab === tab
            ? "bg-[#00629B] text-white shadow-sm"
            : "text-gray-700 hover:text-blue-600 hover:bg-white"
        }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {(selectedTab === tabs[0]
            ? teamMembersStudentBranch
            : selectedTab === tabs[1]
            ? teamMembersCASS
            : selectedTab === tabs[2]
            ? teamMembersCS
            : selectedTab === tabs[3]
            ? teamMembersComSoc
            : selectedTab === tabs[4]
            ? teamMembersSensorCouncil
            : teamMembersWIE
          ).map((member, index) => {
            const href = isMobile
              ? `mailto:${member.email}`
              : `https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`;

            return (
              <motion.div
                key={`${selectedTab}-${member.id}`}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 mt-6">
                  <div className="w-55 h-55 sm:w-55 sm:h-55 lg:w-60 lg:h-60 mx-auto rounded-xl bg-gray-300 flex items-center justify-center overflow-hidden shadow-2xl">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-500">No Image</div>
                    )}
                  </div>
                </div>

                <p className="font-bold text-[#00629B] mb-3 text-xl sm:text-2xl">
                  {member.name}
                </p>
                <h3 className="mb-4 font-semibold text-gray-900 text-sm sm:text-base">
                  {member.position}
                </h3>

                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-sm bg-[#0A66C2] text-white transition-colors text-xl hover:scale-110 transform duration-300"
                    >
                      <RiLinkedinFill className="w-7 h-7" />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={href}
                      target={!isMobile ? "_blank" : undefined}
                      rel={!isMobile ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center w-9 h-9 rounded-md bg-white shadow-md hover:scale-110 transform duration-300"
                    >
                      <img
                        src="/assets/mail-icon.webp"
                        alt="Gmail"
                        className="w-9 h-6"
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
};

export default OurTeam;
