import Sidebar from "../components/Sidebar";

export default function NegotiationEmail() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h1>Negotiation Email</h1>

        <textarea
          rows="12"
          defaultValue={`Dear Sir/Madam,

I am requesting a debt settlement due to financial hardship.

Thank you.

Sincerely`}
        />

        <br />

        <button>Generate Email</button>
      </div>
    </div>
  );
}