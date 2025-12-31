import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Heart,
  MessageCircle,
  BarChart3,
  TrendingUp
} from "lucide-react";

interface Message {
  _id: string;
  text: string;
  emotion: string;
  createdAt: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  /* ----------------------------
     AUTH + FETCH DATA
  -----------------------------*/
  useEffect(() => {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(userStr);
    setUsername(user.username);

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/messages/${user.username}`
    )
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [navigate]);

  /* ----------------------------
     STATS
  -----------------------------*/
  const totalMessages = messages.length;

  const emotionCount: Record<string, number> = {};
  messages.forEach(m => {
    emotionCount[m.emotion] =
      (emotionCount[m.emotion] || 0) + 1;
  });

  const topEmotion =
    Object.entries(emotionCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "—";

  const maxEmotion = Math.max(...Object.values(emotionCount), 1);

  const profileLink = `${window.location.origin}/write?user=${username}`;

  const copyLink = () => {
    navigator.clipboard.writeText(profileLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  /* ----------------------------
     UI
  -----------------------------*/
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

      {/* Header */}
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-purple-600">
          JustForYou 💜
        </h1>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="text-sm text-red-500"
        >
          Logout
        </button>
      </header>

      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome */}
        <h2 className="text-3xl font-bold mb-2">
          Welcome, {username} 👋
        </h2>
        <p className="text-gray-600 mb-8">
          Here’s what people are saying about you
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <MessageCircle className="text-purple-600 mb-2" />
            <h3 className="text-3xl">{totalMessages}</h3>
            <p>Total Messages</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <Heart className="text-pink-600 mb-2" />
            <h3 className="text-3xl">{topEmotion}</h3>
            <p>Top Emotion</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <TrendingUp className="text-green-600 mb-2" />
            <h3 className="text-3xl">+{totalMessages}</h3>
            <p>Growth</p>
          </div>
        </div>

        {/* Emotion Chart */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <BarChart3 /> Emotion Analytics
          </h3>

          {Object.entries(emotionCount).length === 0 && (
            <p className="text-gray-500">No messages yet.</p>
          )}

          {Object.entries(emotionCount).map(([emotion, count]) => (
            <div key={emotion} className="mb-3">
              <div className="flex justify-between">
                <span>{emotion}</span>
                <span>{count}</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded"
                  style={{
                    width: `${(count / maxEmotion) * 100}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Share Link */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl mb-3">Share Your Link 🔗</h3>

          <div className="flex gap-2">
            <input
              value={profileLink}
              readOnly
              className="flex-1 p-3 border rounded"
            />
            <button
              onClick={copyLink}
              className="bg-purple-500 text-white px-4 rounded"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
