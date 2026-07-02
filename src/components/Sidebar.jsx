import { Link } from "react-router-dom";

export default function Sidebar() {
  return (

    <div className="sidebar">

      <h2>💰 FinRelief AI</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/predictor">Settlement Predictor</Link>

      <Link to="/email">Negotiation Email</Link>

      <Link to="/rights">Know Your Rights</Link>

      <Link to="/history">History</Link>

    </div>

  );
}