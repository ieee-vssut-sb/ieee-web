import Link from "next/link";
import { achievements } from "@/data/achievements25";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return achievements.map((item) => ({
    id: item.id,
  }));
}

export default async function AchievementDetail({ params }) {
  const { id } = await params;

  const achievement = achievements.find(
    (a) => String(a.id) === String(id)
  );

  if (!achievement) {
    return <p className="text-center mt-20">Achievement not found</p>;
  }


  // return (
  //   <div className="max-w-5xl mx-auto px-6 py-16">
  //     {/* 1. Back Button - Move OUTSIDE the container for accessibility */}
  //     <Link
  //       href="/"
  //       className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md hover:border-[#00629B] hover:text-[#00629B] transition-all duration-200 mb-8"
  //     >
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={2}
  //         stroke="currentColor"
  //         className="w-4 h-4"
  //       >
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  //       </svg>
  //       Back to Achievements
  //     </Link>

  //     {/* 2. Image Placeholder Container */}
  //     <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl bg-gray-900 border-1 border-white/10">

  //       {/* Background Layer: Blurred Image */}
  //       <div className="absolute inset-0 z-0">
  //         <img
  //           src={achievement.image}
  //           alt=""
  //           className="w-full h-full object-cover blur-[25px] opacity-80 scale-105"
  //         />
  //         <div className="absolute inset-0 bg-black/40 z-[1]"></div>
  //       </div>

  //       {/* Content Layer: Floating Sharp Image */}
  //       <div className="relative z-10 flex h-full w-full items-center justify-center p-6 md:p-12">
  //         <div className="overflow-hidden rounded-xl bg-white shadow-2xl border-1 border-white/20 transition-transform hover:scale-[1.02]"> 
  //           <img
  //             src={achievement.image}
  //             alt={achievement.title}
  //             className="w-full h-auto max-h-[65vh] rounded-lg object-contain"
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     {/* 3. Text Content */}
  //     <h1 className="text-4xl font-bold mt-10 text-[#00629B] tracking-tight">
  //       {achievement.title}
  //     </h1>

  //     <div className="w-20 h-1 bg-[#00629B] mt-2 rounded-full opacity-20"></div>

  //     <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
  //       {achievement.description}
  //     </p>
  //   </div>
  // );
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200 text-gray-700 font-semibold rounded-full shadow-sm hover:shadow-md hover:border-[#00629B] hover:text-[#00629B] transition-all duration-300 mb-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Achievements
      </Link>

      <div className="flex flex-col gap-12 mb-16 items-center">
        {achievement.images?.map((img, index) => (
          <div
            key={index}
            className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video overflow-hidden rounded-[2rem] shadow-2xl bg-gray-900 border-white/20"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center blur-[20px] opacity-75 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-[1]"></div>
            </div>

            <div className="relative z-10 flex h-full w-full items-center justify-center p-8 md:p-12">
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/30 transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={img}
                  alt={`${achievement.title} - Image ${index + 1}`}
                  className="w-full h-auto max-h-[55vh] md:max-h-[65vh] rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto lg:mx-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00629B] tracking-tight leading-tight">
          {achievement.title}
        </h1>

        <div className="flex items-center gap-4 mt-6">
          <div className="w-24 h-2 bg-[#00629B] rounded-full"></div>
          <div className="w-4 h-2 bg-[#00629B] rounded-full opacity-40"></div>
          <div className="w-2 h-2 bg-[#00629B] rounded-full opacity-20"></div>
        </div>

        <div className="mt-10 text-xl text-gray-600 font-medium leading-[1.8] tracking-wide whitespace-pre-line prose prose-blue max-w-none">
          <ReactMarkdown>
            {achievement.description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}