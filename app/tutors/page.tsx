"use client";
import Link from "next/link";
import useLang from "../components/useLang";
import LanguageSwitcher from "../components/LanguageSwitcher";

const tutors = [
  { name: "Sarah Johnson", flag: "🇬🇧", lang: "English", level: "Native", price: "$12/hr", rating: "⭐ 4.9", sessions: "320 sessions", avatar: "👩‍🏫", specialty: "Business English, IELTS" },
  { name: "Mikhail Petrov", flag: "🇷🇺", lang: "Russian", level: "Native", price: "$10/hr", rating: "⭐ 4.8", sessions: "210 sessions", avatar: "👨‍🏫", specialty: "Conversation, Grammar" },
  { name: "Sofia García", flag: "🇪🇸", lang: "Spanish", level: "Native", price: "$11/hr", rating: "⭐ 4.9", sessions: "415 sessions", avatar: "👩‍🏫", specialty: "DELE Exam, Travel Spanish" },
  { name: "Pierre Dupont", flag: "🇫🇷", lang: "French", level: "Native", price: "$13/hr", rating: "⭐ 4.7", sessions: "180 sessions", avatar: "👨‍🏫", specialty: "DELF, Business French" },
  { name: "Li Wei", flag: "🇨🇳", lang: "Chinese", level: "Native", price: "$10/hr", rating: "⭐ 4.8", sessions: "290 sessions", avatar: "👩‍🏫", specialty: "HSK Prep, Mandarin" },
  { name: "Zulfiya Rahimova", flag: "🇹🇯", lang: "Tajik", level: "Native", price: "$8/hr", rating: "⭐ 4.9", sessions: "150 sessions", avatar: "👩‍🏫", specialty: "Tajik, Persian, Dari" },
];

export default function Tutors() {
  const t = useLang();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">SkillScape</h1>
        </Link>
        <span className="text-gray-600 font-semibold">🎓 {t.card_tutors_title}</span>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/dashboard">
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600">{t.nav_dashboard}</button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">🎓 {t.card_tutors_title}</h2>
        <p className="text-gray-500">{t.card_tutors_desc}</p>
      </div>

      {/* Tutor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-16">
        {tutors.map((tutor, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-purple-400">
            {/* Top */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
                {tutor.avatar}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{tutor.name}</h3>
                <p className="text-gray-500 text-sm">{tutor.flag} {tutor.lang} — {tutor.level}</p>
              </div>
            </div>

            {/* Specialty */}
            <p className="text-gray-500 text-sm mb-4">📚 {tutor.specialty}</p>

            {/* Stats */}
            <div className="flex justify-between text-sm mb-4">
              <span className="text-yellow-500 font-semibold">{tutor.rating}</span>
              <span className="text-gray-400">{tutor.sessions}</span>
              <span className="text-green-600 font-bold">{tutor.price}</span>
            </div>

            {/* Button */}
            <button className="w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold">
              Book Session
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
