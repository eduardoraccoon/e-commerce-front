import { Link } from 'react-router-dom';
import '../../style/header.css';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src="https://assets.cdnacr.com/img/americamx/logo.png" alt="Logo" width="120" height="40" className="d-inline-block align-text-top" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb--1 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cars">Vehículos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Sucursales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Políticas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
