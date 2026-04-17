import React from 'react';
import { events } from '@/data/pastEvents25';
import Link from 'next/link';
// const PastEvents = () => {
//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16">
//           <Link href="/#events" className="text-gray-500 hover:text-[#00629B] flex items-center gap-2 mb-6 transition-colors font-medium">
//             ← Back
//           </Link>
//           <h1 className="sm:text-5xl text-2xl font-extrabold text-[#00629B] tracking-tight">
//             Events 2025-26
//           </h1>
//           <div className="w-24 h-2 bg-[#00629B] mt-4 rounded-full opacity-20"></div>
//         </div>
//         </div>
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">
//         {events.map((event) => (
//           <div key={event.title} 
//             className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]"
//           >
//             <div className="relative md:shrink-0 h-full md:h-auto md:w-80 overflow-hidden">
//               <img 
//                 className="h-full w-full md:h-full md:w-full object-cover " 
//                 src={event.image} 
//                 alt={event.heading} 
//               />
//               <p className='absolute left-2 bottom-2 text-white text-xs font-semibold border-2 border-white bg-black/80 rounded-full p-2'>{event.date}</p>
//             </div>

//             <div className="p-8 flex flex-col">
//               <div className="uppercase tracking-wide text-lg md:text-sm text-indigo-500 font-semibold">
//                 {event.title}
//               </div>
//               {/* <h2 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
//                 {event.description}
//               </h2> */}
//               <p className="mt-2 text-base text-slate-500">
//                 {event.description}
//               </p>
//               <div className='mt-2'>
//                 <h4 className='font-semibold'>Result:</h4>
//               <ul>
//                 <li>{event.result.first}</li>
//                 <li>{event.result.second}</li>
//                 <li>{event.result.third}</li>
//               </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const PositionBullet = ({ rank }) => {
  const specs = {
    first: { stop1: "#FDE68A", stop2: "#F59E0B", stroke: "#FBBF24", text: "#78350F", label: "1", suffix: "ST" },
    second: { stop1: "#F1F5F9", stop2: "#94A3B8", stroke: "#CBD5E1", text: "#1E293B", label: "2", suffix: "ND" },
    third: { stop1: "#FFEDD5", stop2: "#C2410C", stroke: "#EA580C", text: "#7C2D12", label: "3", suffix: "RD" }
  };

  const s = specs[rank.toLowerCase()] || specs.third;

  return (
    <svg width="34" height="34" viewBox="0 0 40 40" className="drop-shadow-sm flex-shrink-0">
      <defs>
        <linearGradient id={`grad-${rank}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={s.stop1} />
          <stop offset="100%" stopColor={s.stop2} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill={`url(#grad-${rank})`} stroke={s.stroke} strokeWidth="2"/>
      
      {/* Centered Text Container */}
      <text 
        x="20" 
        y="25" 
        textAnchor="middle" 
        fill={s.text} 
        fontFamily="sans-serif" 
        fontWeight="900" 
        fontStyle="italic"
      >
        {/* Main Number */}
        <tspan fontSize="18">{s.label}</tspan>
        
        {/* Suffix beside the number, slightly smaller and shifted up */}
        <tspan fontSize="8" dx="2" dy="-5" fontStyle="normal">
          {s.suffix}
        </tspan>
      </text>
    </svg>
  );
};
const PastEvents = () => {
  return (
  <div className="min-h-screen bg-slate-200 p-8 selection:bg-blue-500/30">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16">
        <Link href="/#events" className="text-slate-500 hover:text-[#00629B] flex items-center gap-2 mb-6 transition-all group font-medium w-fit">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>
        <h1 className="sm:text-6xl text-3xl font-black text-slate-700 tracking-tight italic uppercase">
          Events <span className="text-[#00629B]">2025-26</span>
        </h1>
        <div className="w-32 h-2 bg-gradient-to-r from-[#00629B] to-cyan-500 mt-4 rounded-full"></div>
      </div>

      {/* Events Feed */}
      <div className="flex flex-col gap-10">
        {events.map((event) => (
          <div 
            key={event.title} 
            className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md transition-all hover:border-[#00629B]/50 group shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative md:shrink-0 h-72 md:h-auto md:w-96 overflow-hidden">
              <img 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={event.image} 
                alt={event.title} 
              />
              {/* Date Badge */}
              <div className="absolute top-4 right-4">
                 <p className='text-white text-[14px] uppercase tracking-widest font-bold border border-white/20 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5'>
                  {event.date}
                </p>
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent hidden md:block" />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between w-full">
              <div>
                <div className="uppercase tracking-[0.2em] text-xs md:text-lg  text-blue-400 font-bold mb-3">
                  {event.title}
                </div>
                <p className="text-base md:text-md text-slate-300 leading-relaxed font-light">
                  {event.description}
                </p>
              </div>

              {/* Results Section */}
              <div className='mt-8 pt-6 border-t border-slate-800'>
                <h4 className='text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2'>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                  Positions Holders:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(event.result).map(([key, name]) => (
                    <div key={key} className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl transition-colors hover:bg-slate-800">
                      <PositionBullet rank={key} />
                      <span className="text-slate-200 text-sm font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default PastEvents;