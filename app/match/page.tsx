"use client";
import { useState } from "react";
import Link from "next/link";
import useLang from "../components/useLang";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Match() {
  const t = useLang();
  const [searching, setSearching] = useState(false);
  const [matched, setMatched] = useState(false);
  const [messages, setMessages] = useState([
    { role: "partner", text: "Hello! Nice to meet you! Let's practice together 😊" }
  ]);
  const [input, setInput] = useState("");

  const startSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setMatched(true);
    }, 3000);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "partner",
        text: "That's great! Can you say that in the language you are learning? 😊"
      }]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">SkillScape</h1>
        </Link>
        <span className="text-gray-600 font-semibold">👥 {t.card_match_title}</span>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/dashboard">
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600">{t.nav_dashboard}</button>
          </Link>
        </div>
      </nav>

      {/* Not searching yet */}
      {!searching && !matched && (
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <div className="text-6xl mb-6">👥</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.card_match_title}</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">{t.card_match_desc}</p>
          <button
            onClick={startSearch}
            className="px-10 py-4 bg-green-500 text-white text-lg font-semibold rounded-xl hover:bg-green-600"
          >
            {t.card_match_btn}
          </button>
        </div>
      )}

      {/* Searching animation */}
      {searching && (
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
          <div className="text-6xl mb-6 animate-bounce">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Finding your partner...</h2>
          <p className="text-gray-500">Matching you with a native speaker</p>
          <div className="mt-8 flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      )}

      {/* Matched - Chat room */}
      {matched && (
        <div className="max-w-3xl mx-auto flex flex-col h-[80vh]">
          {/* Partner info */}
          <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">👤</div>
            <div>
              <p className="font-bold text-gray-800">Alex (Native English Speaker)</p>
              <p className="text-green-500 text-sm">● Online — wants to learn Russian</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-3 rounded-2xl max-w-xl text-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-white border-t px-4 py-4 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-green-500"
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </main>
  );
}