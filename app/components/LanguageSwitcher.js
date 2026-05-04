"use client";
import { useState, useEffect } from "react";
import { translations } from "../lang/translations";

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setCurrent(saved);
  }, []);

  const changeLang = (code) => {
    setCurrent(code);
    localStorage.setItem("lang", code);
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium shadow-sm"
      >
        🌐 {translations[current].flag} {translations[current].name} ▾
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg z-50 w-44">
          {Object.keys(translations).map((code) => (
            <button
              key={code}
              onClick={() => changeLang(code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex items-center gap-2 ${
                current === code
                  ? "text-blue-600 font-bold bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              {translations[code].flag} {translations[code].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}