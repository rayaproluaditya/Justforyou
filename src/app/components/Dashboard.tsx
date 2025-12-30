import { Link } from "react-router-dom";
import { Heart, MessageCircle, BarChart3, Copy, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Message {
  _id: string;
  text: string;
  emotion: string;
  createdAt: string;
}

export function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [copied, setCopied] = useState(false);

  const profileLink = "justforyou.app/sarahmiller";

  useEffect(() => {
    fetch("https://justforyou-backend.onrender.com/api/messages")
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  // 📊 Stats
  const totalMessages = messages.length;

  const emotionCount: Record<string, number> = {};
  messages.forEach(msg => {
    emotionCount[msg.emotion] = (emotionCount[msg.emotion] || 0) + 1;
  });

  const topEmotion =
    Object.entries(emotionCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  const maxEmotionCount = Math.max(...Object.values(emotionCount), 1);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${profileLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-purple-600">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl">JustForYou</span>
          </Link>
          <Link
            to="/profile"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
          >
            View Public Page
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl text-gray-800 mb-2">Your Dashboard 💖</h1>
            <p className="text-gray-600">Here’s how people feel about you</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            {/* Total Messages */}
            <div className="bg-white rounded-3xl p-6 shadow border">
              <MessageCircle className="text-purple-600 mb-3" />
              <h3 className="text-3xl">{totalMessages}</h3>
              <p>Total Messages</p>
            </div>

            {/* Top Emotion */}
            <div className="bg-white rounded-3xl p-6 shadow border">
              <Heart className="text-pink-600 mb-3" />
              <h3 className="text-3xl">{topEmotion}</h3>
              <p>Top Emotion</p>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-3xl p-6 shadow border">
              <TrendingUp className="text-green-600 mb-3" />
              <h3 className="text-3xl">+{totalMessages}</h3>
              <p>Messages Received</p>
            </div>
          </div>

          {/* Emotion Analytics */}
          <div className="bg-white rounded-3xl p-8 shadow border mb-8">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <BarChart3 /> Emotion Analytics
            </h2>

            {Object.entries(emotionCount).map(([emotion, count]) => (
              <div key={emotion} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{emotion}</span>
                  <span>{count}</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded"
                    style={{ width: `${(count / maxEmotionCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Share Section */}
          <div className="bg-white rounded-3xl p-8 shadow">
            <h2 className="text-xl mb-3">Share Your Page</h2>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-100 p-3 rounded">
                {profileLink}
              </div>
              <button
                onClick={handleCopyLink}
                className="bg-purple-500 text-white px-4 rounded"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
