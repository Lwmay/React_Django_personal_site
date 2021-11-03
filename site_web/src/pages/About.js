import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import background from "../assets/img/about_img.jpg";
import profilImg from "../assets/img/faces/profil_laurent_may .png";

const About = () => {
    return (
        <div className="off-canvas-sidebar">
            <Navigation />
            <div className="wrapper wrapper-full-page">
                <div className="page-header about-page header-filter"
                     style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <div className="content-about-page">
                            <div className="col-lg-120 ml-auto mr-auto">
                                <div className="card card-about">
                                    <div className="card-header card-header-warning">
                                        <h1 className="title">A propos de moi</h1>
                                    </div>
                                    <h2>Candidat pour un emploi de <b>Data Analyst</b> à la Réunion</h2>

                                    <div className="row">
                                        <div className="col-md-4 ml-auto">
                                            <img src={profilImg} alt="profil" />
                                        </div>
                                        <div className="col-md-8 ml-auto">
                                            <div className="vertical-center">
                                            <p>Bonjour, je suis Laurent MAY.</p>
                                                <p>Je suis Data Analyst avec des compétences en logiciels BI, programmation et logiciels bureautiques. Je suis expérimenté dans le traitement des données, des requêtes et l'optimisation des process.</p>
                                            <div className="home-button">
                                                <button className="btn btn-warning">
                                                    Mes réalisations
                                                </button>
                                                <button className="btn btn-warning">
                                                    Contactez moi
                                                </button>
                                            </div>
                                                </div>
                                        </div>
                                    </div>
                                    <p>Collecter, traiter, analyser et présenter les données - pour assister tous les jours
                                          aux décisions business pour de meilleures performances.</p>
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

export default About;