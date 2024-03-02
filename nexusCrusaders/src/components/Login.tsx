import "../styles/login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="loginContainer">
      <div className="flexCenter loginDiv">
        <form className="loginForm">
          <div className='flexCenter'>
            <img id="logo" src="./public/logo.svg" alt="Nexus logo"/>
            <h1>Nexus Crusaders</h1>
          </div>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" />
          </div>
          <button className="flexCenter iniciarSesion" type="submit">Iniciar Sesion</button>
          <Link className='login' to='/registro'>Registrarse</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
