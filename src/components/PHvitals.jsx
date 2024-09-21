import React, { useState } from "react";
import "./PHvitals.css";

const AddVitalsForm = () => {
  const [vitals, setVitals] = useState({
    bloodPressure: "",
    weight: "",
    glucose: "",
    temperature: "",
    pulse: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVitals({ ...vitals, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vitals.bloodPressure && vitals.weight && vitals.glucose && vitals.temperature && vitals.pulse) {
      console.log("Vitals submitted:", vitals);
      alert("Vitals added successfully!");
      // Clear form fields after submission
      setVitals({
        bloodPressure: "",
        weight: "",
        glucose: "",
        temperature: "",
        pulse: ""
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="form-container">
      <h2>Add your vitals</h2>
      <p>Enter the value of your vitals</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blood Pressure (mm/Hg)</label>
          <input
            type="text"
            name="bloodPressure"
            value={vitals.bloodPressure}
            onChange={handleChange}
            placeholder="e.g., 120/80"
          />
        </div>
        <div className="form-group">
          <label>Weight (Kg)</label>
          <input
            type="text"
            name="weight"
            value={vitals.weight}
            onChange={handleChange}
            placeholder="e.g., 65"
          />
        </div>
        <div className="form-group">
          <label>Glucose Level (mg/dL)</label>
          <input
            type="text"
            name="glucose"
            value={vitals.glucose}
            onChange={handleChange}
            placeholder="e.g., 90"
          />
        </div>
        <div className="form-group">
          <label>Temperature (°C)</label>
          <input
            type="text"
            name="temperature"
            value={vitals.temperature}
            onChange={handleChange}
            placeholder="e.g., 37"
          />
        </div>
        <div className="form-group">
          <label>Pulse Rate (bpm)</label>
          <input
            type="text"
            name="pulse"
            value={vitals.pulse}
            onChange={handleChange}
            placeholder="e.g., 72"
          />
        </div>
        <button type="submit" className="submit-btn">Add</button>
      </form>
    </div>
  );
};

export default AddVitalsForm;