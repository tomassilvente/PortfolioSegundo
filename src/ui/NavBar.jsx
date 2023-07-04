import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fondoAzul">
        <div className="container-fluid">
            <a className="navbar-brand" to="/">Tomás Silvente</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#about">Sobre Mí</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="#study">Estudios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="#experience">Experiencia</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="#proyects">Proyectos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="#contact">Contáctame</a>
                </li>
            </ul>
            <span className="navbar-text">
                Téc. Redes Informáticas & Analista en Sistemas 
            </span>
            </div>
        </div>
    </nav>
  )
}
