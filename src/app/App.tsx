import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { ProfilePage } from "./components/ProfilePage";
import { WriteMessagePage } from "./components/WriteMessagePage";
import { Dashboard } from "./components/Dashboard";
import { YearSummary } from "./components/YearSummary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Dynamic user profile */}
        <Route path="/profile/:username" element={<ProfilePage />} />

        {/* Write message for a user */}
        <Route path="/write" element={<WriteMessagePage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Year summary */}
        <Route path="/summary" element={<YearSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
