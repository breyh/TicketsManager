import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.scss';

class Menu extends React.Component {
    render() {
        return (
            <>
                <nav className="d-flex flex-column col-md-1 main-nav">
                    <div>
                        <Link to="/">
                            <li><a href="#Icono"><i class="fab fa-react"></i></a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="#Disparadores"><i class="fas fa-folder"></i></a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="#Open"><i class="fas fa-lock-open"></i></a></li>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <li><a href="#Cuenta"><i class="far fa-user"></i></a></li>
                        </Link>
                        <Link to="/">
                            <li><a href="#salir"><i class="fas fa-door-open"></i></a></li>
                        </Link>
                    </div>
                </nav >
            </>
        )
    }
}

export default Menu;