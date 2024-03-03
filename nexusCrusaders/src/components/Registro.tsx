
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

import "../styles/registro.css";


const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username,setUsername]=useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();

    const user = {
      username :username,
      password:password,
      email:email,
      names:name,
      lastNames:lastname,
    };

    try {
      const response = await axios.post("http://10.22.135.18:5000/users/register", user);
      console.log(response.data);
    } catch (error) {
      console.error("Hubo un error al registrar al usuario", error);
    }
  };

  return (
    <div className="registroContainer">
      <NavBar></NavBar>
      <div className="divRegistro">
        <form id="formRegistro" onSubmit={handleSubmit}>
          <div className="flexCenter logoDiv">
            <img id="logo" src="./public/logo.svg" alt="Nexus logo" />
            <h1>Nexus Crusaders</h1>
          </div>
          
          <div className="name">
            <input
              type="text"
              placeholder="Nombres"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="lastname">
            <input
              type="text"
              placeholder="Apellidos"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="username">
          <input 
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="credentials">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" 
              placeholder="Contrasena"
              value={password}
              onChange={(e) => setPassword(e.target.value)}           
            />
            <input
              type="password" 
              placeholder="Confirmar Contrasena"
              value={repeatedPassword}
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div style={{ color: "red" , textAlign:"center"}}>{errorMessage}</div>}
          <button className="flexCenter submitButton" type="submit">
            Registrar Cuenta
          </button>
          <Link className="flexCenter login" to="/login">
            Iniciar Sesion
          </Link>
        </form>
      </div>

    </div>
  );
};

export default Registro;
