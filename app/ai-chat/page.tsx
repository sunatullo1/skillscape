"use client";
import { useState } from "react";
import Link from "next/link";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm your AI language tutor 🤖 What language are you practicing today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are a friendly and encouraging language tutor. Help the user practice languages. Correct their mistakes gently, explain grammar when needed, and keep conversations engaging. Keep responses concise and educational.",
          messages: newMessages.map(m => ({
            role: m.role === "ai" ? "assistant" : "user",
            content: m.text
          }))
        })
      });

      const data = await response.json();
      const aiReply = data.content[0].text;
      setMessages([...newMessages, { role: "ai", text: aiReply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "ai", text: "Sorry, I had a connection issue. Please try again!" }]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">SkillScape</h1>
        </Link>
        <span className="text-gray-600 font-semibold">🤖 AI Tutor</span>
        <Link href="/dashboard">
          <button className="px-4 py-2 text-gray-500 hover:text-blue-600">← Dashboard</button>
        </Link>
      </nav>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`px-4 py-3 rounded-2xl max-w-xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-white text-gray-800 shadow-sm rounded-bl-none"
            }`}>
              {msg.role === "ai" && <span className="text-lg mr-2">🤖</span>}
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 rounded-2xl shadow-sm text-gray-500 text-sm">
              🤖 Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t px-4 py-4">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message or ask anything..."
            className="flex-1 border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 font-semibold"
          >
            Send
          </button>
        </div>
      </div>

    </main>
  );
}
