import React from 'react';
import { NavLink } from "react-router-dom";

const ContactButton = () => {

    return (
        <NavLink exact to="./contact">
            <button className="btn btn-warning">
                Contactez moi
            </button>
        </NavLink>
    );
};

export default ContactButton;