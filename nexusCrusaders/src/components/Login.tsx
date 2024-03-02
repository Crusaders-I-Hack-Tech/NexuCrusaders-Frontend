import "../styles/login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    
    <div className="container">
      <div className="nav">
        <h1> Impulsa tu aprendizaje </h1>
      </div>
      <div className="login">
        <form>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="password">
            <input type="password" placeholder="Password" />
          </div>

          <div className="log in">
            <Link to='/registro'><button> Registrarse </button></Link>
             <button > entrar </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
