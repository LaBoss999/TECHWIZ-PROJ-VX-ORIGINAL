import img2 from "../assets/Maskgroup.png";

const Dashboard = () => {
  return (
    <div className="dash">
      <div className="dash-inner">
        <h1>
          GOOD MORNING <br /> JEFFREY
        </h1>
        <img className="img2" src={img2} alt="" />
      </div>
      <div className="appointment">
        <p>NO APPOINMENTS YET</p>
      </div>
    </div>
  );
};

export default Dashboard;
