"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const achievements = [
  {
    id: "1",
    image: "/assets/Achievement.jpg",
    title: "IEEE Ambassadors 2025",
    description:
      "Our two student members have been selected as ambassador for global competitions and events .",
  },
  {
    id: "2",
    image: "/assets/Achievement25_2.jpg",
    title: "EYE-Q Project",
    description:
      "It was a smart eye-care solution designed to monitor intraocular pressure, blink rate, blue light exposure for early detection of eye strain and glaucoma risks. It integrates ultrasonic sensing, precise signal processing and real time data visualization to deliver accurate and actionable insights. •	Team Members: Debabrata Sahoo, Ratnakar Sahoo, Priyadarshini Mahapatra, Rajasmita Senapati",
  },
  {
    id: "3",
    image: "/assets/Achievement25_3.jpg",
    title: "Drishti Project (Selected as Finalist for IEEE YESIST 2025, Malaysia)",
    description: "The project Aqua Revive is an ROV based innovation. Team Members: Samikshya Padhy, Mansha Das, Suryakanta Balabantaray, Debasish Pradhan"
    },
    {
    id: "4",
    image: "/assets/Achievement25_4.jpg",
    title: "SIH 2025",
    description: ""
    },
    {
    id: "4",
    image: "/assets/Achievement25_5.jpg",
    title: "National Student’s Space Challenge 2025",
    description: "Event: Case study Competition, Venue: IIT Kharagpur, Dates: November 07-09, 2025, Achievement: Team Galatrix secured 1st Runners-Up. Team Members: Ratnakar Sahoo, Priyadarshini Mohapatra, Lipika Ray"
    },
    {
    id: "5",
    image: "/assets/Achievement25_6.jpg",
    title: "NSSC ‘25 FINALISTS in \"Paper Presentation\"",
    description: "Three teams from IEEE VSSUT SB were finalists: •	Team Nova nexus: o	Ashish Ayusman, o	Hiraish Kumar, o	Khushi Jain, o	Khushi Jain, •	Team OrbitX: o	Zeeshan Firoz, o	Anil Kumar Senapati, o	Muskaan Singh"
    },
];

export default function AchievementDetail() {
  const { id } = useParams();

  const achievement = achievements.find((a) => a.id === id);

  if (!achievement) {
    return <p className="text-center mt-20">Achievement not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/" className="text-blue-600 underline">
        ← Back
      </Link>

      <div className="mt-6">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-[400px] object-cover rounded-xl shadow"
        />

        <h1 className="text-4xl font-bold mt-6 text-[#00629B]">
          {achievement.title}
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}
