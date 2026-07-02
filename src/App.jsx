import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SettlementPredictor from "./pages/SettlementPredictor";
import NegotiationEmail from "./pages/NegotiationEmail";
import KnowYourRights from "./pages/KnowYourRights";
import HistoryPage from "./pages/HistoryPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/predictor" element={<SettlementPredictor />} />
        <Route path="/email" element={<NegotiationEmail />} />
        <Route path="/rights" element={<KnowYourRights />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;