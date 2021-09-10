import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <NavLink exact to="/" activeClassName="nav-active">
                    Accueil
                </NavLink>
                <NavLink exact to="/" activeClassName="nav-active">
                    Mes projets
                </NavLink>
                <NavLink exact to="/a-propos" activeClassName="nav-active">
                    A propos de moi
                </NavLink>
            </div>
            <div className="social-link">
                <NavLink exact to="/contact" activeClassName="nav-active">
                    Me contacter
                </NavLink>
                <NavLink exact to="/" activeClassName="nav-active">
                    Linkdln
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;