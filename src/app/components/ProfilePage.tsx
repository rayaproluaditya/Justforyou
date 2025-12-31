import { useParams, Link } from "react-router-dom";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

interface Message {
  _id: string;
  text: string;
  emotion: string;
  createdAt: string;
}

export function ProfilePage() {
  const { username } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/messages/${username}`
    )
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600"
          >
            <Heart className="w-6 h-6" />
            <span className="text-xl">JustForYou</span>
          </Link>
        </div>
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 text-center mb-10"
        >
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
            {username?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-3xl text-gray-800 mb-2">
            @{username}
          </h1>

          <p className="text-gray-600 mb-6">
            People can anonymously share what they feel about you 💌
          </p>

          <Link
            to={`/write?user=${username}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <MessageCircle className="w-5 h-5" />
            Write Something for Me
          </Link>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Messages
          </h2>

          {loading && (
            <p className="text-gray-500">Loading messages...</p>
          )}

          {!loading && messages.length === 0 && (
            <div className="bg-white rounded-3xl p-10 shadow text-center">
              <MessageCircle className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold">
                No messages yet
              </h3>
              <p className="text-gray-500">
                Share your link and be the first to receive one 💖
              </p>
            </div>
          )}

          {messages.map((msg, index) => (
            <motion.div
              key={msg._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow border"
            >
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {msg.emotion}
                  </span>
                  <p className="mt-2 text-gray-700">
                    {msg.text}
                  </p>
                </div>
              </div>

              <div className="text-xs text-gray-400 mt-3">
                {new Date(msg.createdAt).toLocaleDateString()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
