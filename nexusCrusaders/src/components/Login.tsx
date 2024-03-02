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
    <div className="container">
      <div className="nav">
        <h1> Impulsa tu aprendizaje </h1>
      </div>
      <div className="login">
        <form>
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

          <div className="log in">
            <Link to="/registro">
              <button> Registrarse </button>
            </Link>
            <button onClick={handleLogin}> entrar </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;