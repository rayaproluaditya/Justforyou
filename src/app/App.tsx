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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/write" element={<WriteMessagePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/summary" element={<YearSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
