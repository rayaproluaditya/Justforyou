import { useEffect, useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messages`)
      .then(res => res.json())
      .then(setMessages);
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Your Messages</h2>

      {messages.map((m, i) => (
        <div key={i} className="bg-white p-4 mb-3 shadow rounded">
          <p>{m.text}</p>
          <small>{m.emotion}</small>
        </div>
      ))}
    </div>
  );
}
