import { Link } from "react-router-dom";
import "../styles/landingpage.css";
import NavBar from "./NavBar";
import Forms from "./Forms";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <NavBar></NavBar>
      <div className="content">
        <Forms></Forms>
        <div id="aboutUs">
          <p> Hola Hola </p>
        </div>
        <div id="HowItWorks">
          <p> Hola </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
