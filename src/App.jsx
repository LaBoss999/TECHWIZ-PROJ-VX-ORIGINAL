import './App.css';

function App() {

  let logo = require("./images/projectLogo.png");
  let doctorIcons = require("./images/doctor pfp.png")

return (
<div className="mainContainer">
  <header>
    <div id='logoContainer'>
    <img src={logo} alt="Logo" id='logoImg'/>
    <p>HealthPlus</p>
    </div>

    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div id='loginBtnContainer'>
          <div>
            <button id='loginBtn'>log in</button>
          </div>
          <div>
            <button className='signupBtn'>Get Started</button>
          </div>
        </div>
      </header>

      <main>
          <h1>Take Charge of Your Health, Anytime, Anywhere</h1>
          <p>Track your vitals, manage appontments, and stay on top of your health-all from one simple platform</p>

          <section id='landingSignupBtn'>
            <div>
              <button className='signupBtn'>Get Started</button>
            </div>
            <img src={doctorIcons} alt="doctor Image" className='doctorIcon'/>
          </section>
      </main>
    </div>
);
}

export default App;
