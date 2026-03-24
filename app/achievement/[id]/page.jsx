import Link from "next/link";
import { achievements } from "@/data/achievements25";

export async function generateStaticParams() {
  return achievements.map((item) => ({
    id: item.id,
  }));
}

export default function AchievementDetail({ params }) {
  const { id } = params;

  const achievement = achievements.find(
    (a) => String(a.id) === String(id)
  );

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