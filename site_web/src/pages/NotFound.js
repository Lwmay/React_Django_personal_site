import React from 'react';
import Navigation from "../components/Navigation";
import background from "../assets/img/clint-mckoy.jpg";
import Footer from "../components/Footer";

const NotFound = () => {
    return (
          <div className="off-canvas-sidebar">
              <Navigation />
              <div className="wrapper wrapper-full-page">
                  <div className="page-header error-page header-filter"
                       style={{ backgroundImage: `url(${background})` }}>
                      <div className="banner">
                          <div className="banner-left">
                              <p>Je suis</p>
                              <h1>Laurent May</h1>
                              <p>Collecter, traiter, analyser et présenter les données - pour assister tous les jours
                                  aux décisions business pour de meilleures performances.</p>
                              <p>La Réunion</p>
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