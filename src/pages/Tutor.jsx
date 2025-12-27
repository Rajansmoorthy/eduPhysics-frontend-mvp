import { mockResponses } from "../data/mockResponses";

export default function Tutor() {
  return (
    <div>
      <h2>AI Physics Tutor (Demo)</h2>

      <textarea
        placeholder="Ask a physics question..."
        rows="4"
        cols="50"
      />

      <br /><br />

      <button>Get Explanation</button>

      <div style={{ marginTop: "20px" }}>
        <strong>AI Response:</strong>
        <p>{mockResponses.Electricity}</p>
      </div>
    </div>
  );
}
