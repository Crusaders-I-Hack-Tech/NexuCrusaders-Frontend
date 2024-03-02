import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = (email:string, password:string) => {
    
    return email == 'user@example.com' && password == 'password';
  }

  const handleLogin = () => {
    if (checkCredentials(email, password)) {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="loginContainer">
      <div className="flexCenter loginDiv">
        <form className="loginForm">
          <div className='flexCenter'>
            <img id="logo" src="./public/logo.svg" alt="Nexus logo"/>
            <h1>Nexus Crusaders</h1>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="flexCenter iniciarSesion" type="submit">Iniciar Sesion</button>
          <Link className='login' to='/registro'>Registrarse</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;