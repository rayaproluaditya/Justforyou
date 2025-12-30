import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const requestLogin = async () => {
    if (!email || !username) {
      alert("Please enter both email and username");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/request-login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username })
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Login link sent to your email!");
      } else {
        setMessage("❌ Something went wrong");
      }
    } catch (err) {
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={requestLogin}
          disabled={loading}
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
        >
          {loading ? "Sending..." : "Send Login Link"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
