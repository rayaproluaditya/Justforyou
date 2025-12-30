import { Link } from "react-router-dom";
import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-full shadow-lg">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            JustForYou
          </h1>

          {/* Tagline */}
          <p className="text-2xl text-gray-700 mb-4">
            Words meant only for you.
          </p>

          {/* Subtext */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Let people anonymously share how you’ve impacted their life —
            meaningful, honest, and heartfelt.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/create"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Create Your Page
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 bg-white text-purple-600 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Example Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 w-full max-w-md"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full">
                  Grateful
                </span>
                <p className="mt-2 text-gray-700">
                  “Your support during that phase meant more than you know.
                  Thank you for always being there.”
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Anonymous</span>
              </div>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 JustForYou. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-purple-600 cursor-pointer">Privacy</span>
            <span className="hover:text-purple-600 cursor-pointer">Terms</span>
            <span className="hover:text-purple-600 cursor-pointer">About</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
