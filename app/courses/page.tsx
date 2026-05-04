"use client";
import Link from "next/link";
import useLang from "../components/useLang";
import LanguageSwitcher from "../components/LanguageSwitcher";

const courses = [
  { title: "English for Beginners", lang: "🇬🇧 English", level: "A1", lessons: 24, color: "blue", emoji: "📘" },
  { title: "Russian from Zero", lang: "🇷🇺 Russian", level: "A1", lessons: 20, color: "red", emoji: "📕" },
  { title: "Spanish Conversations", lang: "🇪🇸 Spanish", level: "B1", lessons: 18, color: "yellow", emoji: "📙" },
  { title: "French Business", lang: "🇫🇷 French", level: "B2", lessons: 15, color: "blue", emoji: "📘" },
  { title: "Chinese Characters", lang: "🇨🇳 Chinese", level: "A2", lessons: 30, color: "red", emoji: "📕" },
  { title: "Tajik Daily Life", lang: "🇹🇯 Tajik", level: "A1", lessons: 16, color: "green", emoji: "📗" },
  { title: "English IELTS Prep", lang: "🇬🇧 English", level: "C1", lessons: 28, color: "purple", emoji: "📓" },
  { title: "Spanish for Travel", lang: "🇪🇸 Spanish", level: "A2", lessons: 12, color: "orange", emoji: "📒" },
];

const levelColors = {
  "A1": "bg-green-100 text-green-700",
  "A2": "bg-blue-100 text-blue-700",
  "B1": "bg-yellow-100 text-yellow-700",
  "B2": "bg-orange-100 text-orange-700",
  "C1": "bg-red-100 text-red-700",
  "C2": "bg-purple-100 text-purple-700",
};

export default function Courses() {
  const t = useLang();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">SkillScape</h1>
        </Link>
        <span className="text-gray-600 font-semibold">📚 {t.card_courses_title}</span>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/dashboard">
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600">{t.nav_dashboard}</button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">📚 {t.card_courses_title}</h2>
        <p className="text-gray-500">{t.card_courses_desc}</p>
      </div>

      {/* Filter tabs */}
      <div className="px-8 mb-6 flex gap-3 flex-wrap">
        {["All", "A1", "A2", "B1", "B2", "C1"].map((level) => (
          <button key={level} className="px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all">
            {level}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-16">
        {courses.map((course, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-orange-400 overflow-hidden cursor-pointer">
            {/* Top color band */}
            <div className={`h-2 bg-${course.color}-500`}></div>

            <div className="p-6">
              <div className="text-4xl mb-3">{course.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-1">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{course.lang}</p>

              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${levelColors[course.level]}`}>
                  {course.level}
                </span>
                <span className="text-gray-400 text-sm">{course.lessons} lessons</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                <div className="bg-orange-400 h-2 rounded-full" style={{width: "0%"}}></div>
              </div>

              <button className="w-full py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 font-semibold text-sm">
                {t.card_courses_btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
