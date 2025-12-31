import { Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { useParams, Link } from "react-router-dom";

export function YearSummary() {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-xl w-full p-10 rounded-3xl shadow-xl text-center border border-purple-100"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-purple-100 p-4 rounded-full">
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Your 2025 Summary
        </h1>

        <p className="text-gray-600 mb-6">
          We’re preparing something beautiful for <b>{username}</b>.
          <br />
          A meaningful summary of how you impacted others this year.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6 flex items-center justify-center gap-2 text-purple-700">
          <Clock className="w-5 h-5" />
          <span>Coming Soon</span>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          This feature will use AI to analyze messages and generate a
          personalized year-in-review.
        </p>

        <Link
          to={`/profile/${username}`}
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow hover:shadow-lg transition"
        >
          Back to Profile
        </Link>
      </motion.div>
    </div>
  );
}
