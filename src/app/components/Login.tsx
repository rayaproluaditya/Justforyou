import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  // ✅ VERIFY TOKEN WHEN USER CLICKS EMAIL LINK
  useEffect(() => {
    if (!token) return;

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify?token=${token}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard");
        } else {
          setMessage("Invalid or expired link");
        }
      });
  }, [token]);

  // ✅ REQUEST LOGIN LINK
  const requestLogin = async () => {
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
      setMessage("📩 Check your email for login link");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          placeholder="Username"
          className="w-full p-2 border mb-3"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={requestLogin}
          className="w-full bg-purple-500 text-white py-2 rounded"
        >
          Send Login Link
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}
