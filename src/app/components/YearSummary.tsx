import { Link } from "react-router-dom";
import { Heart, Download, Share2, Sparkles, MessageCircle, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function YearSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl">JustForYou</span>
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl p-12 shadow-2xl text-white mb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">Your 2025 Impact</span>
                </div>
                <h1 className="text-5xl mb-4">Sarah's Year in Review</h1>
                <p className="text-xl opacity-90">
                  A beautiful summary of the lives you've touched
                </p>
              </motion.div>

              {/* AI Generated Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
              >
                <p className="text-lg leading-relaxed">
                  This year, Sarah became a beacon of light for 24 people. Through her kindness, 
                  she inspired 6 individuals to pursue their dreams, made 12 people feel deeply 
                  grateful for her presence, and created a ripple of positivity that touched 
                  countless lives. Her words of encouragement and genuine care transformed ordinary 
                  moments into memories that will last a lifetime. 
                </p>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-4xl mb-2">24</div>
                  <div className="text-sm opacity-90">Messages Received</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Heart className="w-6 h-6" fill="currentColor" />
                    </div>
                  </div>
                  <div className="text-4xl mb-2">Grateful</div>
                  <div className="text-sm opacity-90">Top Emotion</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-4xl mb-2">+85%</div>
                  <div className="text-sm opacity-90">Growth This Year</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex-1 px-8 py-4 bg-white text-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Summary
            </button>
            <button className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share on Social Media
            </button>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 max-w-2xl mx-auto">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "The best way to find yourself is to lose yourself in the service of others."
              </blockquote>
              <p className="text-gray-500">— Mahatma Gandhi</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
