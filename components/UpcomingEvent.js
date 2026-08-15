"use clinet"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { div } from "framer-motion/client";
export default function UpcomingEvent() {
    return(
        <div className="bg-red border border-amber-400  w-[100%] ">
            <h2 className="text-center text-4xl sm:text-3xl md:text-5xl mt-10 text-[#00629B]">Upcoming Events</h2>
        </div>
    );
}