"use client";

import React, { useRef } from "react";
import Achievements from "@/components/Achievements";
import PastEvents from "@/components/PastEvents";
import ContactUs from "@/components/ContactUs";
import UpcomingEvent from "@/components/UpcomingEvent";
import Link from "next/link";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RxHamburgerMenu } from "react-icons/rx";
import "animate.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
const HomePage = () => {
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Basic mobile detection
    if (/android|iPhone|iPad|iPod/i.test(userAgent)) {
      setIsMobile(true);
    }
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Animate Hero Heading
    if (nameRef.current) {
      const split = new SplitText(nameRef.current, {
        type: "chars, words",
        charsClass: "char",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        rotationX: 90,
        transformOrigin: "0% 50% -50",
        ease: "back.out(1.7)",
        stagger: 0.05,
        duration: 1.5,
        onComplete: () => split.revert(),
      });
    }

    // Animate Upcoming Event Text
    if (textRef.current) {
      // Slide in from left
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Event Image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });
    }

    //Split text
    const about = [".about"];
    about.map((selector) => {
      gsap.set(selector, { opacity: 1 });
      let split = SplitText.create(selector, { type: "words", aria: "hidden" });
      gsap.from(split.words, {
        opacity: 0,
        duration: 0.3,
        ease: "sine.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Events", path: "#events" },
    { title: "Achievements", path: "#achievements" },
    { title: "Our Team", path: "/ourteam" },
    { title: "Activities", path: "#activities" },
    { title: "Contact Us", path: "#contact" },
    { title: "Gallery", path: "/gallery" },
  ];
  const navItems2 = [
    { title: "IEEE.org", href: "https://www.ieee.org/" },
    {
      title: "IEEE Xplore",
      href: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    },
    { title: "IEEE Standards", href: "https://standards.ieee.org/" },
    { title: "IEEE Spectrum", href: "https://spectrum.ieee.org/" },
    { title: "More IEEE Sites", href: "https://www.ieee.org/sitemap.html" },
  ];
  const socialItems = [
    {
      href: "https://m.facebook.com/profile.php?id=100068659627163",
      src: "/assets/navfab.jpg",
      alt: "facebook",
      type: "facebook",
    },
    {
      href: "https://www.instagram.com/ieeevssut/",
      src: "/assets/navig.jpg",
      alt: "instagram",
      type: "instagram",
    },

    {
      href: "https://www.linkedin.com/company/ieee-vssut-burla-student-branch/",
      src: "/assets/navlink.jpg",
      alt: "linkedin",
      type: "linkedin",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md font-serif top-0">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo (Mobile only) */}
          <div className="md:hidden">
            <img
              src="/assets/ieee_logo.png"
              alt="IEEE Logo"
              className="h-13 w-13 bg-white text-white"
            />
          </div>

          <div className="hidden md:flex gap-7 text-[#00629B]">
            {navItems2.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-5 items-center">
            {socialItems.map((item) => (
              <Link key={item.alt} href={item.href}>
                <img src={item.src} alt={item.alt} className="w-6 h-6" />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu (Mobile only) */}
          <div
            className="md:hidden text-[#00629B] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-[#00629B]">
            {navItems2.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex gap-4 mt-3">
              {socialItems.map((item) => (
                <Link key={item.alt} href={item.href}>
                  <img src={item.src} alt={item.alt} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[78vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/home-bg.jpg')] bg-cover bg-center brightness-80 z-0"></div>
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          <div className="pt-6 pl-6 sm:pt-9 sm:pl-16 md:pl-20 h-[35%] ">
            <img
              src="/assets/Logoieee.svg"
              alt="IEEE Logo"
              className="w-28 sm:w-40 md:w-48 lg:w-56"
            />
          </div>
          {/* Title */}
          <div className="pl-6 sm:pl-16 md:pl-20 h-[40%] flex items-center">
            <span
              className="font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-6xl leading-snug "
              ref={nameRef}
            >
              IEEE VSSUT STUDENT BRANCH
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Menu */}
      <nav className="sticky top-0 z-40 w-full bg-black text-white">
        <div className="flex items-center justify-between md:px-5 md:py- px-3 py-2">
          {/* Left: Hamburger (mobile only) */}
          <div
            className="md:hidden  cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="text-white h-8 w-8" />
            ) : (
              <RxHamburgerMenu className="text-white h-8 w-8" />
            )}
          </div>
          {/* Left: Nav Links (desktop) */}
          <div className="hidden md:flex gap-8 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={
                  item.title === "Our Team"
                    ? "/ourteam"
                    : item.title === "Gallery"
                    ? "/gallery"
                    : item.path
                }
                className="hover:text-[#003C67]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right: Logo */}
          <div className="hidden md:flex justify-end">
            <img
              src="/assets/ieee_logo2.png"
              alt="IEEE Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute  left-0 w-full bg-black text-white shadow-lg  flex flex-col items-center gap-1 py-6 z-50 md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.title === "Our Team" ? "/ourteam" : item.path}
                  className="w-[80%] text-center py-3 rounded-md font-semibold text-lg 
                     hover:bg-white hover:text-black transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* About Section */}
      <div className="flex flex-col px-4 sm:px-8 lg:px-20 mt-20">
        <h2 className="text-center text-4xl sm:text-3xl md:text-5xl text-[#00629B] aboutA relative inline-block">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-900 text-base sm:text-lg md:text-xl py-5 max-w-3xl mx-auto leading-relaxed about">
          The IEEE VSSUT Student Branch is a vibrant community of enthusiastic
          engineers, innovators, and leaders driven by technology and a shared
          passion for advancing humanity. Affiliated with the Institute of
          Electrical and Electronics Engineers (IEEE), the world’s largest
          technical professional organization, our branch at Veer Surendra Sai
          University of Technology (VSSUT), Burla fosters learning,
          collaboration, and innovation across diverse engineering domains.
          Through workshops, seminars, hackathons, and outreach programs, we
          empower students to develop technical expertise while nurturing
          teamwork and leadership qualities. With a strong focus on research,
          innovation, and professional growth, the IEEE VSSUT Student Branch
          serves as a platform where young minds can transform ideas into
          impactful solutions for society.
        </p>
      </div>

      {/* Achievements Section */}
      <section className="py-15 " id="achievements">
        <h2 className="text-center text-4xl sm:text-3xl md:text-5xl mt-10 achieve text-[#00629B]">
          Achievements
        </h2>
        {/* Achievements Component with padding */}
        <div className="px-4 sm:px-8 lg:px-20 mt-5">
          <Achievements />
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-15 px-4 sm:px-8 lg:px-20" id="events">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-3xl md:text-5xl mt-10 text-[#00629B]">
          Upcoming Events
        </h2>

        {/* Event Content */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 md:mt-15 "
          ref={textRef}
        >
          {/* Optional Left Border */}
          <div className=" border-l-2  h-full"></div>
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-3xl text-black mb-2 font-bold leading-snug">
              आह्वान – The Orientation
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-black mb-4 font-light leading-snug">
              An IEEE VSSUT Student Branch initiative to welcome and guide new
              students.
            </h2>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
              आह्वान is the official orientation program of IEEE VSSUT Student
              Branch, designed to introduce freshers to the IEEE community, its
              societies, and the countless opportunities it offers. The event
              will help students explore innovation, collaboration, and growth
              while connecting with like-minded peers and mentors.
            </p>
          </div>

          {/* Optional Right Border */}

          {/* Right Side: Image */}
          <div
            className="w-full md:w-1/3 flex justify-center md:mt-0"
            ref={imageRef}
          >
            <img
              src="/assets/AWAHAN 2025.png"
              alt="Awahan 2025"
              className="rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <div className="flex flex-col py-12">
        <h2 className="text-center text-4xl sm:text-3xl md:text-5xl mt-10 text-[#00629B] past">
          Past Events
        </h2>
        <PastEvents />
      </div>

      {/* Activities */}
      <section
        className="flex flex-col px-4 md:py-24 py-12 pb-0"
        id="activities"
      >
        <h2 className="text-center text-4xl sm:text-3xl md:text-5xl text-[#00629B] activity">
          Activities
        </h2>

        <div className="max-w-6xl mx-auto md:flex md:flex-row items-center mt-10 px-4 md:px-0">
          {/* Left side - Image */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 0, y: 50 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
          >
            <img
              src="/assets/ieee-activities.jpg"
              alt="activities"
              className="rounded-xl shadow-lg w-full h-[380px] md:h-[440px] object-fill"
            />
          </motion.div>

          {/* Right side - Paragraph + button */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col justify-between text-left md:p-8 mt-5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 0, y: 50 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            <p className="text-gray-700 leading-relaxed sm:text-lg md:text-xl">
              Explore the work of our IEEE VSSUT student members through
              insightful blogs, magazines, and research papers. Delve into
              detailed articles covering the latest trends in electronics,
              robotics, AI, and software development. Learn from hands-on
              project experiences, technical tutorials, and research findings
              that highlight student achievements and emerging innovations. This
              section provides a rich resource of knowledge and ideas,
              showcasing the creativity and expertise of our members.
            </p>

            {/* Button aligned to bottom-center */}
            <div className="flex justify-center mt-6">
              <button className="flex items-center gap-2 px-6 py-2 border border-blue-800 rounded-full text-gray-900 transition duration-300 hover:bg-blue-950 hover:text-white text-xl">
                <Link href="/activities">EXPLORE</Link>
                <MdOutlineArrowOutward />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join us */}
      <div className="flex flex-col items-center text-center px-4 sm:px-8 lg:px-20 py-10 sm:py-16 mt-18">
        {/* Top Border */}
        <div className="border-t-2 border-[#40C8E9] w-16 sm:w-24 md:w-32 mb-6"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:font-normal font-semibold text-gray-900">
          Carve future with IEEE VSSUT
        </h2>

        {/* Paragraph */}
        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl italic">
          When you become a member, you will enjoy access to unparalleled
          resources, networking opportunities, and the collective knowledge of
          the world’s leading tech professionals.
        </p>
        {/* Button */}
        <button className="relative overflow-hidden text-blue-900 font-semibold text-base sm:text-lg md:text-xl border rounded-full cursor-pointer px-6 py-3 mt-8 border-blue-800 transition duration-300 hover:text-white hover:bg-blue-950 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
          <Link href="/JoinVssut">Join IEEE VSSUT SB</Link>
        </button>

        {/* Bottom Border */}
        <div className="border-t-2 border-[#40C8E9] w-16 sm:w-24 md:w-32 mt-8"></div>
      </div>

      {/* Footer */}
      <ContactUs />
    </div>
  );
};

export default HomePage;
