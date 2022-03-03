import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import background from "../../assets/img/ETL.png";
import ContactForm from '../../components/ContactForm';
import azg_logo from "../../assets/img/AZG/AZG_immo_logo.png";
import azg_init_data from "../../assets/img/AZG/AZG_Immo_Pandas_brut.png";
import azg_MCP from "../../assets/img/AZG/AZG_MCP.png";
import azg_talend_init from "../../assets/img/AZG/AZG_Talend_init_flow.png";
import azg_talend_input from "../../assets/img/AZG/AZG_Talend_input_trans.png";
import azg_commune_id from "../../assets/img/AZG/AZG_commune_id.png";
import azg_talend_commune_trans from "../../assets/img/AZG/AZG_Commune_trans.png";
import azg_talend_context from "../../assets/img/AZG/AZG_context.png";
import azg_talend_tJavaFlex from "../../assets/img/AZG/AZG_Talend_tJavaFlex.png";
import azg_talend_routine from "../../assets/img/AZG/AZG_routine_commune.png";
import azg_talend_tMap from "../../assets/img/AZG/AZG_Talend_tMap.png";



const AZGDataViz = () => {

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
                        <h1 className="title">AZG IMMOBILIER</h1>
                        <h2>Utiliser Talend pour la Data Integration</h2>
                    </div>
                </div>
                <div className="intro azg">
                    <div className="content-about-page">
                        <div className="row">
                            <div className="profil azg_logo col-md-4 ml-auto">
                                <img src={azg_logo} alt="azg_logo" />
                            </div>
                            <div className="profil-descrip col-md-8 ml-auto">
                                <p id="section_further_up"></p>
                                <h3><b>PROJET DE DATA INTEGRATION</b></h3>
                                <p>
                                    <i>(Projet perso)</i>   
                                </p>
                                <p><b>AZG</b> est une agence immobilière (fictive) à La Réunion qui souhaite mettre en place, dans le cadre
                                    de sa transformation numérique, un modèle pour mieux prévoir le prix de vente
                                    des biens immobiliers. Pour cela, je vais extraire, transformer et charger les données des 
                                    <b> Demandes de Valeurs Foncières (DVF)</b> publics dans une base de données.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="prof-exp content-about-page text-left">

                        <h3>Connexion à la base de donnée</h3>
                        <p>

                        </p>

                        <hr></hr>
                        <div className="content-about-page text-center">
                            <h3><b>Vous avez besoin d'un Data Analyst</b></h3>
                            <p>N'hésitez pas à me contacter.</p>
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
            </div>
            <Footer />
        </div>
    );
};

export default AZGDataViz;