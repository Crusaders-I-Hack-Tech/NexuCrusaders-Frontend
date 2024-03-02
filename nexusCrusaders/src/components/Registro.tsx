import { Link } from 'react-router-dom';
import '../styles/registro.css'

const Registro = () => {
  return (
    <div className="divRegistro">
        <form id='formRegistro'>
            <div className="name">
                <input type="text" placeholder="Nombres"/>
            </div>
            <div className="lastname">
                <input type="text" placeholder="Apellidos"/>
            </div>
            <div className="credentials">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Contrasena" />
                <input type="text" placeholder="Confiramar Contrasena" />
            </div>

            <Link className="login" to="/"><p>Ya tengo Cuenta</p></Link>

        </form>
    </div>
  )
}

export default Registro