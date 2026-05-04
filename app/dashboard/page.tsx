"use client";
import Link from "next/link";
import useLang from "../components/useLang";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Dashboard() {
  const t = useLang();

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <h1 className="text-2xl font-bold text-blue-600">SkillScape</h1>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <span className="text-gray-600">👋 Hello, Sunatullo!</span>
          <button className="px-4 py-2 text-red-500 hover:text-red-700">{t.nav_logout}</button>
        </div>
      </nav>

      <div className="px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">{t.dashboard_title}</h2>
        <p className="text-gray-500">{t.dashboard_sub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-1">{t.dashboard_sessions}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <p className="text-4xl font-bold text-green-500">0</p>
          <p className="text-gray-500 mt-1">{t.dashboard_streak}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <p className="text-4xl font-bold text-purple-500">0</p>
          <p className="text-gray-500 mt-1">{t.dashboard_words}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        <Link href="/ai-chat">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.card_ai_title}</h3>
            <p className="text-gray-500 text-sm">{t.card_ai_desc}</p>
            <span className="mt-4 inline-block text-blue-600 font-semibold text-sm">{t.card_ai_btn}</span>
          </div>
        </Link>
        <Link href="/match">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border-2 border-transparent hover:border-green-500 transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.card_match_title}</h3>
            <p className="text-gray-500 text-sm">{t.card_match_desc}</p>
            <span className="mt-4 inline-block text-green-600 font-semibold text-sm">{t.card_match_btn}</span>
          </div>
        </Link>
        <Link href="/tutors">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border-2 border-transparent hover:border-purple-500 transition-all">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.card_tutors_title}</h3>
            <p className="text-gray-500 text-sm">{t.card_tutors_desc}</p>
            <span className="mt-4 inline-block text-purple-600 font-semibold text-sm">{t.card_tutors_btn}</span>
          </div>
        </Link>
        <Link href="/courses">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.card_courses_title}</h3>
            <p className="text-gray-500 text-sm">{t.card_courses_desc}</p>
            <span className="mt-4 inline-block text-orange-600 font-semibold text-sm">{t.card_courses_btn}</span>
          </div>
        </Link>
      </div>
    </main>
  );
}