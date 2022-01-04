import React from 'react';
import Navigation from "../components/Navigation";
import DataAnalystExp from '../components/content/DataAnalystExp';
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";
import background from "../assets/img/portfolio-img.png";

const Portfolio = () => {

    const showForm = () => {
        document.getElementById('show-button').classList.add('hidden');
        document.getElementById('form-card').classList.remove('hidden');
    }

    return (
        <div className="off-canvas-sidebar">
            <Navigation />
            <div className="wrapper-full-page">
                <div className="page-header-cust header-filter" style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <h1 className="title">Mes réalisations</h1>
                        <h2>Retrouvé ici un aperçu de mes projets</h2>
                    </div>
                </div>
                <div className="intro">
                    <div className="prof-exp content-about-page text-center">
                        <DataAnalystExp />
                    <div className="home-button">
                        <button className="btn btn-warning">
                                Téléchargez mon CV
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="content-about-page text-center">
                        <h3><b>Vous avez des questions ?</b></h3>
                        <p>Pour plus d'informations, n'hésitez pas à me contacter.</p>
                        <div className="about-page-contact button" id="show-button">
                            <button className="btn btn-warning" onClick={showForm}>
                                Contactez moi
                            </button>    
                        </div>
                        <div className="about-page-contact hidden" id="form-card">
                            <div className="card">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;