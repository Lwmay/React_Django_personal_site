import React from 'react';
import Navigation from "../components/Navigation";
import background from "../assets/img/space_back.jpg";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";
import astro_lost from "../assets/img/astrosfgg.png";

const NotFound = () => {
    return (
          <div className="off-canvas-sidebar">
              <Navigation />
              <div className="wrapper wrapper-full-page">
                  <div className="page-header error-page"
                       style={{ backgroundImage: `url(${background})` }}>
                    <div>
                        <div>
                            <div className="content-center astro">
                                <img src={astro_lost} alt="profil" />
                                <h1 className="title text-center">404</h1>
                                <h2 className="text-center">Hum ... Houston nous avons un problème.</h2>
                                <div className="home-button">
                                <NavLink exact to="/" className="nav-link-home">
                                    <button className="btn btn-info">
                                        Retour à la page d'accueil
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>   
                  </div>
                      <footer>
                          <Footer />
                      </footer>
                  </div>
              </div>
          </div>
    );
};

export default NotFound;