import React from 'react';
import './appointmentPage.css';

function appointmentPage(){
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">   
        <div className="logo">
          <img src="logo.png" alt="HealthPlus Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Appointment</a></li>
            <li><a href="#">Personal Health Vitals</a></li>
            <li><a href="#">Medicine Dosage Schedule</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header className="header">
          <button className="appointment-btn">Create Appointment +</button>
        </header>

        {/* Appointment Section */}
        <section className="appointments">
          {/* Upcoming Appointment */}
          <div className="appointment upcoming">
            <h2>Upcoming Appointment</h2>
            <div className="appointment-item">
              <img src="user.png" alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Faith Kareem</p>
                <p className="info">26th May, 2020 | 2:00 PM | Gynaecologist</p>
              </div>
              <button className="status available">Available</button>
            </div>
          </div>

          {/* Previous Appointments */}
          <div className="appointment previous">
            <h2>Previous Appointment</h2>
            <div className="appointment-item">
              <img src="user.png" alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Akingbade Williams</p>
                <p className="info">2nd June, 2020 | 2:25 PM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src="user.png" alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">Roman Reigns</p>
                <p className="info">2nd May, 2021 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src="user.png" alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">God of Thunder</p>
                <p className="info">2nd January, 2022 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>

            <div className="appointment-item">
              <img src="user.png" alt="Patient" className="user-img" />
              <div className="details">
                <p className="name">The Slinger</p>
                <p className="info">2nd May, 2023 | 11:00 AM | Doctor</p>
              </div>
              <button className="status view">View</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default appointmentPage;
