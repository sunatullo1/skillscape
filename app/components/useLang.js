"use client";
import { useState, useEffect } from "react";
import { translations } from "../lang/translations";

export default function useLang() {
  const [t, setT] = useState(translations["en"]);

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en";
    setT(translations[saved]);
  }, []);

  return t;
}