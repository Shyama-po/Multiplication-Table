
import React, { useState } from "react";
import "./oppo.css";
function App() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  function generateTable() {
    const n = Number(number);

    if (number.trim() === "" || !Number.isFinite(n)) {
      alert("Please enter a valid number");
      return;
    }

    setTable(
      Array.from({ length: 10 }, (_, i) => ({
        multiplier: i + 1,
        result: n * (i + 1)
      }))
    );
  }

  return (
    <div className="container">
      <h1>Multiplication Table</h1>

      <input
        type="number"
        placeholder="Enter any number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={generateTable}>
        Generate Table
      </button>

      {table.length > 0 && (
        <div className="result">
          <h2>Table of {number}</h2>

          <table>
            <thead>
              <tr>
                <th>Calculation</th>
                <th>Answer</th>
              </tr>
            </thead>

            <tbody>
              {table.map((item) => (
                <tr key={item.multiplier}>
                  <td>
                    {number} × {item.multiplier}
                  </td>
                  <td>{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;