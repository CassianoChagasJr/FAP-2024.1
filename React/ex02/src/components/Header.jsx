import { Link } from "react-router-dom";

function Header () {

    return(
        <>
        <nav className="navContainer">
            <ul className="nav-bar">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Header;