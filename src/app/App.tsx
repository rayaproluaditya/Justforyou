import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { ProfilePage } from "./components/ProfilePage";
import { WriteMessagePage } from "./components/WriteMessagePage";
import { Dashboard } from "./components/Dashboard";
import { YearSummary } from "./components/YearSummary";
import CreateProfile from "./components/CreateProfile";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Create profile */}
        <Route path="/create" element={<CreateProfile />} />

        {/* Public profile */}
        <Route path="/profile/:username" element={<ProfilePage />} />

        {/* Write anonymous message */}
        <Route path="/write" element={<WriteMessagePage />} />

        {/* Dashboard (owner only) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Year summary */}
        <Route path="/summary/:username" element={<YearSummary />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}
