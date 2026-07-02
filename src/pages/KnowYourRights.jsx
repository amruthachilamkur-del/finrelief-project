import Sidebar from "../components/Sidebar";

export default function KnowYourRights() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>Know Your Rights</h1>

        <ul>
          <li>Collectors cannot threaten you.</li>
          <li>You can request written verification.</li>
          <li>You may dispute incorrect debts.</li>
          <li>You can negotiate repayment plans.</li>
        </ul>
      </div>
    </div>
  );
}