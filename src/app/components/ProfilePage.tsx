import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const mockMessages = [
  {
    id: 1,
    emotion: "Grateful",
    text: "Your kindness and support during that difficult time meant the world to me. Thank you for being there.",
    date: "2 days ago"
  },
  {
    id: 2,
    emotion: "Inspired",
    text: "The way you approached that challenge inspired me to be braver in my own life. Thank you for showing me what's possible.",
    date: "1 week ago"
  },
  {
    id: 3,
    emotion: "Thankful",
    text: "I never got to say this properly, but your advice changed my perspective entirely. I'm truly thankful.",
    date: "2 weeks ago"
  },
  {
    id: 4,
    emotion: "Grateful",
    text: "You made me feel seen and heard when I needed it most. That meant everything to me.",
    date: "3 weeks ago"
  }
];

const emotionColors: Record<string, string> = {
  Grateful: "from-purple-100 to-pink-100 text-purple-700",
  Inspired: "from-blue-100 to-indigo-100 text-blue-700",
  Thankful: "from-pink-100 to-rose-100 text-pink-700"
};

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl">JustForYou</span>
          </Link>
        </div>
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 mb-8 text-center"
        >
          {/* Profile Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              SM
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl mb-3 text-gray-800">Sarah Miller</h1>

          {/* Bio */}
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Teacher, coffee lover, and believer in the power of kind words. 
            Share your thoughts anonymously — I'd love to hear from you! ✨
          </p>

          {/* CTA Button */}
          <Link
            to="/write"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Write Something for Me
          </Link>
        </motion.div>

        {/* Messages Section */}
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-800 mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Messages
          </h2>

          {mockMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2 rounded-full flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-3 py-1 bg-gradient-to-r ${emotionColors[message.emotion]} rounded-full`}>
                      {message.emotion}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {message.text}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Anonymous</span>
                </div>
                <span className="text-xs text-gray-400">{message.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no messages - not shown here but for reference) */}
        {mockMessages.length === 0 && (
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-purple-100 text-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl text-gray-700 mb-2">No messages yet</h3>
            <p className="text-gray-500">Be the first to share something kind!</p>
          </div>
        )}
      </div>
    </div>
  );
}
