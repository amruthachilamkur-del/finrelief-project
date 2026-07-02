import Sidebar from "../components/Sidebar";

export default function SettlementPredictor() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>Settlement Predictor</h1>

        <input placeholder="Debt Amount" />

        <input placeholder="Monthly Income" />

        <button>Predict Settlement</button>

        <h2>Predicted Settlement : 65%</h2>
      </div>
    </div>
  );
}