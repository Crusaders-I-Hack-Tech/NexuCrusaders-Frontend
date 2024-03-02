import { Link } from "react-router-dom";

import "../styles/landingpage.css";
const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="nav">
        <div className="left">
          <img
            src="./public/logo.svg"
            alt="logo"
            style={{ height: 150, width: 150 }}
          />

          <h1> Nexus Crusaders </h1>
        </div>

        <div className="right">
          <a href="">Sobre Nosotros </a>
          <a href=" "> Como funciona </a>
          <Link to="/login"> Log in</Link>
          <img
            src="./public/userIcon.svg"
            alt="usuario"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>

      <hr />

      <div className="content">
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
