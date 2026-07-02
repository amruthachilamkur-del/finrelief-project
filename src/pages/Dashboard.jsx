import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>Total Debt</h2>
            <h3>$18,500</h3>
          </div>

          <div className="card">
            <h2>Credit Score</h2>
            <h3>680</h3>
          </div>

          <div className="card">
            <h2>Monthly Savings</h2>
            <h3>$420</h3>
          </div>

        </div>
      </div>
    </div>
  );
}