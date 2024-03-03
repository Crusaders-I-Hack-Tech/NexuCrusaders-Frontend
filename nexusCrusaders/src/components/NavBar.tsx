import { Link } from 'react-router-dom';
import '../styles/navBar.css'

const NavBar = () => {
    return(
        <nav className='navBar'>
            <div className='companyLi'>
                <img className='logo' src="./public/logo.svg" alt="logo"/>
                <h1> Nexus Crusaders </h1>
            </div>
            <ul>
                <li><a href="">Sobre Nosotros</a></li>
                <li><a href="">Como Funciona</a></li>
                <li className='log'>
                    <img className='userIcon' src="./public/userIcon.svg" alt="user icon" />
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </nav>
    );
};


export default NavBar;
