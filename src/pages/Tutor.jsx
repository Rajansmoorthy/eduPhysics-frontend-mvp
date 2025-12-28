import { useState } from "react";

export default function Tutor() {
  const [topic, setTopic] = useState("Electricity");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://localhost:5000/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          classLevel: "10",
          topic,
          question,
        }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer("Server error. Please try again.");
    }

    setLoading(false);
  };

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
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Get Explanation"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <strong>AI Response:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
}

