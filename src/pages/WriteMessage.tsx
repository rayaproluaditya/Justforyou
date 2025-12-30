import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function WriteMessage() {
  const [params] = useSearchParams();
  const username = params.get("user");
  const [text, setText] = useState("");
  const [emotion, setEmotion] = useState("Happy");

  const submit = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, emotion, username })
    });

    alert("Message sent!");
    setText("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="mb-4">Message to @{username}</h2>

        <textarea
          className="w-full p-2 border mb-3"
          placeholder="Write something nice..."
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="w-full p-2 border mb-3"
          onChange={(e) => setEmotion(e.target.value)}
        >
          <option>Happy</option>
          <option>Grateful</option>
          <option>Inspired</option>
        </select>

        <button
          onClick={submit}
          className="bg-purple-500 text-white w-full py-2 rounded"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
