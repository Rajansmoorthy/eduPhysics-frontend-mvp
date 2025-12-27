import { useState } from "react";
import { mockResponses } from "../data/mockResponses";

export default function Tutor() {
  const [topic, setTopic] = useState("Electricity");

  return (
    <div>
      <h2>AI Physics Tutor (Demo)</h2>

      <label>
        Select Topic:
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="Electricity">Electricity</option>
          <option value="Magnetism">Magnetism</option>
          <option value="Optics">Optics</option>
          <option value="Mechanics">Mechanics</option>
        </select>
      </label>

      <br /><br />

      <textarea
        placeholder="Ask a physics question..."
        rows="4"
        cols="50"
      />

      <br /><br />

      <button>Get Explanation</button>

      <div style={{ marginTop: "20px" }}>
        <strong>AI Response:</strong>
        <p>{mockResponses[topic]}</p>
      </div>
    </div>
  );
}

