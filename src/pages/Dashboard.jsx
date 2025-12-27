export default function Dashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>

      <label>
        Select Class:
        <select>
          <option>Class 10</option>
          <option>Class 11</option>
          <option>Class 12</option>
        </select>
      </label>

      <br /><br />

      <label>
        Select Topic:
        <select>
          <option>Electricity</option>
          <option>Magnetism</option>
          <option>Optics</option>
          <option>Mechanics</option>
        </select>
      </label>

      <br /><br />

      <button>
        Go to Tutor
      </button>
    </div>
  );
}

