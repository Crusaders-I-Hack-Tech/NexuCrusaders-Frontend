import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();
  
    const user = {
      username: username,
      password: password,
    };
  
    try {
      const response = await axios.post("http://10.22.135.18:5000/users/login", user);
      console.log(response.data);
      localStorage.setItem("userhash", response.data.userhash);
    } catch (error) {
      console.error("Hubo un error al iniciar sesión", error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="flexCenter loginDiv">
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="flexCenter">
            <img id="logo" src="./public/logo.svg" alt="Nexus logo" />
            <h1>Nexus Crusaders</h1>
          </div>
          <div className="email">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="flexCenter iniciarSesion" type="submit">
            Iniciar Sesion
          </button>
          <Link className="login" to="/registro">
            Registrarse
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;