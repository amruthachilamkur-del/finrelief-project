import Sidebar from "../components/Sidebar";

export default function HistoryPage() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>History</h1>

        <div className="card">
          <h3>Settlement Prediction</h3>
          <p>Predicted settlement completed on June 25.</p>
        </div>

        <div className="card">
          <h3>Negotiation Letter</h3>
          <p>AI-generated negotiation email created successfully.</p>
        </div>

        <div className="card">
          <h3>Credit Analysis</h3>
          <p>Financial overview and debt analysis completed.</p>
        </div>
      </div>
    </div>
  );
}