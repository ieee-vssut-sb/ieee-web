import Link from 'next/link';
import { achievements } from "@/data/achievements25";

export default function AllAchievementsPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link href="/#achievements" className="text-gray-500 hover:text-[#00629B] flex items-center gap-2 mb-6 transition-colors font-medium">
            ← Back
          </Link>
          <h1 className="text-5xl font-extrabold text-[#00629B] tracking-tight">
            Our Achievements
          </h1>
          <div className="w-24 h-2 bg-[#00629B] mt-4 rounded-full opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {achievements.map((item) => (
            <Link 
              key={item.id} 
              href={`/achievement/${item.id}`}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full">
                
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="p-6 flex flex-col justify-center flex-grow bg-white text-center">
                  <h3 className="text-gray-800 font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#00629B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-10 h-1 bg-[#00629B] mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}