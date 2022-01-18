import React from 'react';
import Navigation from "../components/Navigation";
import Timeline from "../components/Timeline";
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";
import background from "../assets/img/about_02_img.png";
import profilImg from "../assets/img/faces/profil_laurent_may.png";
import AreaSkills from '../components/content/AreaSkills';
import AreaSoftSkills from '../components/content/AreaSoftSkills';
import AreaInterest from "../components/content/AreaInterest";
import CvButton from '../components/buttons/CvButton';
import ContactButton from '../components/buttons/ContactButton';
import PortfolioButton from '../components/buttons/PortfolioButton';

const About = () => {

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
                        <h1 className="title">A propos de moi</h1>
                        <h2>Candidat pour un poste de <b>Data Analyst</b> à la Réunion</h2>
                    </div>
                </div>
                <div className="intro">
                    <div className="content-about-page">
                        <div className="row">
                            <div className="profil col-md-4 ml-auto">
                                <img src={profilImg} alt="profil" />
                            </div>
                            <div className="profil-descrip col-md-8 ml-auto">
                                <p className="sub-title">Bonjour, je suis</p>
                                <h3><b>Laurent MAY</b></h3>
                                <p>Data Analyst avec des compétences en logiciels BI (Power BI, Tableau), programmation 
                                    (Python, Java), et logiciels d'analyses (Excel, KNIME) . Je suis expérimenté dans 
                                    le traitement des données, des requêtes (SQL) et l'optimisation des process.</p>
                                <p>Chaque jour, je me pousse à apprendre quelque chose de nouveau, 
                                    que ce soit sur l'apprentissage automatique, le génie logiciel ou divers faits sur 
                                    l'univers du Data.</p>
                                <div className="home-button">
                                    <PortfolioButton/>
                                    <ContactButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="prof-exp content-about-page text-center">
                        <h2>Mon expérience</h2>
                        <div>
                            <Timeline/>
                        </div>
                        <div className="home-button">
                            <CvButton/>
                        </div>
                    </div>

                    <hr></hr>
                    <AreaSkills/>
                    <hr></hr>
                    <AreaSoftSkills/>
                    <hr></hr>
                    <AreaInterest/>
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

export default About;