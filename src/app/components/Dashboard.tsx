import { Link } from "react-router-dom";
import { Heart, MessageCircle, BarChart3, Copy, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const mockStats = {
  totalMessages: 24,
  publicMessages: 18,
  privateMessages: 6,
  topEmotion: "Grateful",
  emotions: {
    Grateful: 12,
    Inspired: 6,
    Thankful: 4,
    Appreciative: 2
  }
};

export function Dashboard() {
  const [copied, setCopied] = useState(false);
  const profileLink = "justforyou.app/sarahmiller";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${profileLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const maxEmotionCount = Math.max(...Object.values(mockStats.emotions));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl">JustForYou</span>
          </Link>
          <Link
            to="/profile"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all"
          >
            View Public Page
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl text-gray-800 mb-2">Welcome back, Sarah! 👋</h1>
            <p className="text-gray-600">Here's your impact overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Total Messages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-2xl">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12%</span>
                </div>
              </div>
              <h3 className="text-3xl text-gray-800 mb-1">{mockStats.totalMessages}</h3>
              <p className="text-gray-600 text-sm">Total Messages</p>
            </motion.div>

            {/* Public Messages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl text-gray-800 mb-1">{mockStats.publicMessages}</h3>
              <p className="text-gray-600 text-sm">Public Messages</p>
            </motion.div>

            {/* Top Emotion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-2xl">
                  <Heart className="w-6 h-6 text-pink-600" fill="currentColor" />
                </div>
              </div>
              <h3 className="text-3xl text-gray-800 mb-1">{mockStats.topEmotion}</h3>
              <p className="text-gray-600 text-sm">Top Emotion</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Emotion Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2 rounded-xl">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl text-gray-800">Emotion Analytics</h2>
              </div>

              <div className="space-y-4">
                {Object.entries(mockStats.emotions).map(([emotion, count], index) => (
                  <motion.div
                    key={emotion}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">{emotion}</span>
                      <span className="text-gray-600">{count}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(count / maxEmotionCount) * 100}%` }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Link & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              {/* Share Link */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
                <h2 className="text-2xl text-gray-800 mb-4">Share Your Page</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Share this link with friends and followers to receive messages
                </p>
                <div className="flex gap-2">
                  <div className="flex-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-700 border-2 border-gray-200">
                    {profileLink}
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Year Summary */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 shadow-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6" />
                  <h2 className="text-2xl">Year-End Summary</h2>
                </div>
                <p className="mb-6 opacity-90">
                  See the beautiful impact you've made this year with an AI-generated summary
                </p>
                <Link
                  to="/summary"
                  className="block w-full px-6 py-3 bg-white text-purple-600 rounded-xl text-center hover:shadow-lg transition-all"
                >
                  Generate My 2025 Summary
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
