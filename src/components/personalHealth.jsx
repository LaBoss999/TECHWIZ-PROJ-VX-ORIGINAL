import React, { useState } from "react";
import "./personalHealth.css";

function HealthVitalsRecord()
{
  const [vitalsData, setVitalsData] = useState([
    { bloodPressure: "115/70", weight: 65, glucose: 75, temp: 27, pulse: 85, date: "20/05/24 - 16:32" },
    { bloodPressure: "115/70", weight: 65, glucose: "-", temp: 27, pulse: 85, date: "20/05/24 - 16:32" },
    { bloodPressure: "115/70", weight: "-", glucose: 80, temp: 27, pulse: 85, date: "20/05/24 - 16:32" },
    { bloodPressure: "115/70", weight: "-", glucose: 100, temp: 27, pulse: 85, date: "20/05/24 - 16:32" },
    { bloodPressure: "90/80", weight: "-", glucose: 125, temp: 27, pulse: 85, date: "20/05/24 - 16:32" },
    { bloodPressure: "115/70", weight: 65, glucose: "-", temp: 27, pulse: 85, date: "20/05/24 - 16:32" }
  ]);

  // Add new vitals
  const addVitals = () => {
    const newVital = {
      bloodPressure: prompt("Enter Blood Pressure (mmHg):", "120/80"),
      weight: prompt("Enter Weight (kg):", "70"),
      glucose: prompt("Enter Glucose Level (mg/dL):", "85"),
      temp: prompt("Enter Temperature (°C):", "27"),
      pulse: prompt("Enter Pulse Rate (bpm):", "85"),
      date: new Date().toLocaleString()
    };

    if (newVital.bloodPressure && newVital.weight && newVital.glucose) {
      setVitalsData([...vitalsData, newVital]);
    } else {
      alert("Please fill all vitals data.");
    }
  };

  // Delete vitals by index
  const deleteVitals = (index) => {
    const updatedVitals = vitalsData.filter((_, i) => i !== index);
    setVitalsData(updatedVitals);
  };

  return (
    <div className="container">
      <button onClick={addVitals} className="add-btn">Add Vitals</button>
    

      <table>
        <thead>
          <tr>
            <th>Blood Pressure (mmHg)</th>
            <th>Weight (kg)</th>
            <th>Glucose Level (mg/dL)</th>
            <th>Temperature (°C)</th>
            <th>Pulse Rate (bpm)</th>
            <th>Date (Date + Time)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vitalsData.map((vital, index) => (
            <tr key={index}>
              <td>{vital.bloodPressure}</td>
              <td>{vital.weight}</td>
              <td>{vital.glucose}</td>
              <td>{vital.temp}</td>
              <td>{vital.pulse}</td>
              <td>{vital.date}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteVitals(index)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthVitalsRecord;