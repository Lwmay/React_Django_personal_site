import React from 'react';
import { NavLink } from "react-router-dom";

const PortfolioButton = () => {

    return (
        <NavLink exact to="./portfolio">
            <button className="btn btn-warning">
                Mes réalisations
            </button>
        </NavLink>
    );
};

export default PortfolioButton;