import React from 'react';
import { events } from '@/data/achievements24';
import Link from 'next/link';
const PastEvents = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link href="/#pastEvents" className="text-gray-500 hover:text-[#00629B] flex items-center gap-2 mb-6 transition-colors font-medium">
            ← Back
          </Link>
          <h1 className="sm:text-5xl text-2xl font-extrabold text-[#00629B] tracking-tight">
            Events 2025-26
          </h1>
          <div className="w-24 h-2 bg-[#00629B] mt-4 rounded-full opacity-20"></div>
        </div>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.01]"
          >
            <div className="relative md:shrink-0 h-full md:h-auto md:w-60 overflow-hidden">
              <img 
                className="h-full w-full md:h-full md:w-full object-cover " 
                src={event.image} 
                alt={event.heading} 
              />
              <p className='absolute left-2 bottom-2 text-white text-xs font-semibold border-2 border-white bg-black/80 rounded-full p-2'>{event.date}</p>
            </div>

            <div className="p-8 flex flex-col">
              <div className="uppercase tracking-wide text-lg md:text-sm text-indigo-500 font-semibold">
                {event.title}
              </div>
              <h2 className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                {event.description}
              </h2>
              <p className="mt-2 text-base text-slate-500">
                {event.description}
              </p>
              <div>
                <h4 className='font-semibold'>Result:</h4>
              <ul>
                <li>Winner</li>
                <li>Second</li>
                <li>Third</li>
              </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;