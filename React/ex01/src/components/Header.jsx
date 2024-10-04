import '../assets/styles/header.css'

function Header () {

    return(
        <>
            <header>
                <nav>
                    <ul className="nav-bar">
                        <li className="inicio">Inicio</li>
                        <li className="sobre">Sobre nós</li>
                        <li className="contato">Contato</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;