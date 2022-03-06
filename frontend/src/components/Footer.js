import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-cust">
            <div className="container">
                <div className="copyright float-right">
                    &copy; Laurent May 2021
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    , made with fun by me in React and Django. 
                    - 
                    <NavLink exact to="/mentions" className="mentions">
                                    Mentions légales
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;