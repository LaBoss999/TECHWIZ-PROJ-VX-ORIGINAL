import React, { useState } from 'react';
import './appointmentDetails.css'; // External CSS file for styling

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    preferredContact: '',
    appointmentDate: '',
    help: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to backend)
    console.log('Form submitted', formData);
  };

  return (
    <div className="form-container">
      <h2>Appointment details</h2>
      <p>Please select an appointment date</p>

      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="form-row">
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="form-group">
          <label>Mobile number</label>
          <input
            type="tel"
            name="mobileNumber"
            placeholder="+234 803 720 9221"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
          <small>Please enter a valid phone number</small>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Preferred Mode of Contact */}
        <div className="form-row">
          <div className="form-group">
            <label>Preferred mode of contact</label>
            <select
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              required
            >
              <option value="WhatsApp">WhatsApp</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </div>

          {/* Appointment Date */}
          <div className="form-group">
            <label>Select appointment date</label>
            <input
              type="datetime-local"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Help Section */}
        <div className="form-group">
          <label>How can we be of help?</label>
          <textarea
            name="help"
            placeholder="Type here..."
            value={formData.help}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Add Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;