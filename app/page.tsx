"use client";
import Link from "next/link";
import useLang from "./components/useLang";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const t = useLang();

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-2xl font-bold text-blue-600">SkillScape</h1>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/login">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">{t.nav_login}</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">{t.nav_signup}</button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {t.hero_title} <span className="text-blue-600">{t.hero_highlight}</span>
        </h2>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl">{t.hero_sub}</p>
        <div className="flex gap-4">
          <Link href="/signup">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700">
              {t.hero_btn1}
            </button>
          </Link>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg rounded-xl hover:bg-blue-50">
            {t.hero_btn2}
          </button>
        </div>
      </section>

      {/* 3 Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 py-16 bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">{t.feature1_title}</h3>
          <p className="text-gray-500">{t.feature1_desc}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-bold mb-2">{t.feature2_title}</h3>
          <p className="text-gray-500">{t.feature2_desc}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-bold mb-2">{t.feature3_title}</h3>
          <p className="text-gray-500">{t.feature3_desc}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        © 2025 SkillScape. All rights reserved.
      </footer>
    </main>
  );
}