import { useParams } from "react-router-dom";

export default function Profile() {
  const { username } = useParams();
  const link = `${window.location.origin}/write?user=${username}`;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96 text-center">
        <h2 className="text-2xl mb-4">@{username}</h2>

        <p className="mb-2">Share this link:</p>

        <input
          value={link}
          readOnly
          className="w-full p-2 border mb-3"
        />

        <button
          onClick={() => navigator.clipboard.writeText(link)}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
