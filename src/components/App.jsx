import Dashboard from "./Components/dashboard";
import LeftNav from "./Components/nav";
import User from "./Components/user";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <main className="main">
        <LeftNav></LeftNav>
        <div>
          <User></User>
          <Dashboard></Dashboard>
        </div>
      </main>
    </>
  );
};

export default App;
