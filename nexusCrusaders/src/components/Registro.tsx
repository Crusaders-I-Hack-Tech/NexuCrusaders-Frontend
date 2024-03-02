import { Link } from 'react-router-dom';
import '../styles/registro.css'

const Registro = () => {
  return (
    <div className="registroContainer">
        <div className="divRegistro">
            <form id='formRegistro'>
                <div className='flexCenter logoDiv'>
                    <img id="logo" src="./public/logo.svg" alt="Nexus logo" />
                    <h1>Nexus Crusaders</h1>
                </div>
                <div className="name">
                    <input type="text" placeholder="Nombres"/>
                </div>
                <div className="lastname">
                    <input type="text" placeholder="Apellidos"/>
                </div>
                <div className="credentials">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Contrasena" />
                    <input type="text" placeholder="Confirmar Contrasena" />
                </div>
                <button className="flexCenter submitButton" type="submit">Registrar Cuenta</button>
                <Link className="flexCenter login" to="/">Iniciar Sesion</Link>
            </form>
        </div>
    </div>
  )
}

export default Registro