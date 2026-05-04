"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import useLang from "../components/useLang";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Login() {
  const t = useLang();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("Please fill in all fields!");
      return;
    }
    setLoading(true);
    setError("");

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex justify-end px-8 py-4">
        <LanguageSwitcher />
      </div>
      <div className="flex items-center justify-center px-4 pb-16">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">SkillScape</h1>
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">{t.login_title}</h2>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <input type="email" placeholder={t.signup_email}
              className="border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={(e) => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder={t.signup_password}
              className="border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500"
              onChange={(e) => setForm({...form, password: e.target.value})} />
            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50">
              {loading ? "Logging in..." : t.login_btn}
            </button>
          </div>
          <p className="text-center text-gray-500 mt-4">
            {t.login_no_account}{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">{t.nav_signup}</Link>
          </p>
        </div>
      </div>
    </main>
  );
}