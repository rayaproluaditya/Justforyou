import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const createProfile = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/create`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email })
      }
    );

    const data = await res.json();
    if (data.success) navigate(`/profile/${username}`);
    else alert(data.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-xl mb-4">Create Your Profile</h2>

        <input
          className="w-full p-2 border mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={createProfile}
          className="w-full bg-purple-500 text-white py-2 rounded"
        >
          Create Profile
        </button>
      </div>
    </div>
  );
}
