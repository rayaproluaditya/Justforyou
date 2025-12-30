import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Send, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const emotions = [
  { id: 1, label: "Grateful", color: "from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200" },
  { id: 2, label: "Inspired", color: "from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200" },
  { id: 3, label: "Thankful", color: "from-pink-100 to-rose-100 text-pink-700 hover:from-pink-200 hover:to-rose-200" },
  { id: 4, label: "Appreciative", color: "from-green-100 to-emerald-100 text-green-700 hover:from-green-200 hover:to-emerald-200" },
  { id: 5, label: "Encouraged", color: "from-amber-100 to-orange-100 text-amber-700 hover:from-amber-200 hover:to-orange-200" }
];

export function WriteMessagePage() {
  const [message, setMessage] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !selectedEmotion) {
      alert("Please write a message and select an emotion.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://justforyou-backend.onrender.com/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: message,
            emotion: emotions.find(e => e.id === selectedEmotion)?.label
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully 💖");
      setMessage("");
      setSelectedEmotion(null);
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xl font-semibold">JustForYou</span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Info Card */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-6 mb-8 border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-full">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg text-purple-900 mb-1">
                  Write a Kind Message
                </h3>
                <p className="text-purple-700 text-sm">
                  Your message will be completely anonymous.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100"
          >
            <h2 className="text-2xl text-gray-800 mb-6">
              Your Message
            </h2>

            {/* Message Input */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write something kind or meaningful…"
              className="w-full h-48 px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none"
              maxLength={500}
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>{message.length}/500 characters</span>
            </div>

            {/* Emotion Selector */}
            <div className="mt-6">
              <p className="text-gray-700 mb-3">How do you feel?</p>
              <div className="flex flex-wrap gap-3">
                {emotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    type="button"
                    onClick={() => setSelectedEmotion(emotion.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-200 ${
                      selectedEmotion === emotion.id
                        ? `bg-gradient-to-r ${emotion.color} shadow-md scale-105`
                        : `bg-gradient-to-r ${emotion.color} opacity-70 hover:opacity-100`
                    }`}
                  >
                    {emotion.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notice */}
            <div className="bg-purple-50 rounded-2xl p-4 mt-6 text-center">
              <Sparkles className="inline w-4 h-4 text-purple-600 mr-1" />
              <span className="text-sm text-purple-800">
                This message is completely anonymous.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <Link
                to="/profile"
                className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-2xl text-center hover:bg-gray-200 transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
