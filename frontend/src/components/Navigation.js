import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo_transp_white.png";

const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNavSmallScreen = () => {
        if (toggleMenu) {
            window['closeNav']();
            document.getElementById('btn-toggle').classList.remove('toggled');
        } else {
            window['openNav']();
            document.getElementById('btn-toggle').classList.add('toggled');

        };
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
            <div className="container">
                <div className="navbar-wrapper">
                    
                    <NavLink exact to="/" className="navbar-brand">
                        <div className="nav-logo">
                            <img src={logo} alt="profil" />
                        </div>
                    </NavLink>
                </div>
                <button id="btn-toggle" className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavSmallScreen}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/portfolio" className="nav-link" onClick={toggleNavSmallScreen}>
                                <i className="material-icons">dashboard</i>
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="./a-propos" className="nav-link" onClick={toggleNavSmallScreen}>
                                <i className="material-icons">person</i>
                                A propos de moi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="./contact" className="nav-link" onClick={toggleNavSmallScreen}>
                                <i className="material-icons">mail</i>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="./contact" className="nav-link" onClick={toggleNavSmallScreen}>
                                <i className="material-icons">mail</i>
                                Mon CV
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="/a-propos" className="nav-link">
                                <i className="material-icons">dashboard</i>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;