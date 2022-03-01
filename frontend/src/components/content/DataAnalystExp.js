import React from 'react';
import { NavLink } from "react-router-dom";
import ONCFM_logo from "../../assets/img/portfolioImg/ONCFM_logo.png";
import poule_chante from "../../assets/img/portfolioImg/la_poule_qui_chante.png";
import fao_logo from "../../assets/img/portfolioImg/fao_logo.png";
import lapage_logo from "../../assets/img/portfolioImg/logo_lapage.png";
import dwfa_logo from "../../assets/img/portfolioImg/DWFA_logo.png";
import azg_logo from "../../assets/img/AZG/AZG_immo_logo.png";

const DataAnalystExp = () => {
    return (
        <div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                            <img src={azg_logo} alt="AZG_logo"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Data Integration - Données immobilières</h4>
                                <p className="card-text">
                                    Processus continu que le data warehousing : regroupement cohérent de données.
                                    <br/>
                                    <b>Talend - Postgresql - Pandas - Matplotlib</b>
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <NavLink exact to="/azg_etl" className="navbar-brand">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                            <img src={ONCFM_logo} alt="ONCFM"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Détecter des faux billets avec Python</h4>
                                <p className="card-text">
                                    Algorithme de détection d'authenticité de billets. Utilisation de machine learning.
                                    <br/>
                                    <b>ANOVA - Régression linéaire simple - ACP - Régression logistique - K-means - K Nearest Neighboors</b>
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="https://github.com/Lwmay/detecteur_faux_billets" target="_blank" rel="noreferrer">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                        <img src={poule_chante} alt="Poule qui chante"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Etude de marché</h4>
                                <p className="card-text">
                                    Analyse et exploration des données autour de l'agroalimentaire (source: FAO).
                                    <br/>
                                    <b>Matrice de corrélation - Classification Ascendante Hiérarchique -
                                    Analyse en Composantes Principales</b>
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="https://github.com/Lwmay/etude_de_marche" target="_blank" rel="noreferrer">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                        <img src={lapage_logo} alt="lapage_logo"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Analyse des ventes d'un e-commerce</h4>
                                <p className="card-text">
                                    Analyser les points forts et faibles du e-commerce ainsi que les comportements clients.
                                    <br/>
                                    <b>  Chi-2 - Coefficient de Pearson - ANOVA - Tableau de contingence</b> 
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="https://github.com/Lwmay/analyse_des_ventes_ecommerce" target="_blank" rel="noreferrer">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                        <img src={dwfa_logo} alt="dwfa_logo"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Etude sur l'eau potable avec Tableau</h4>
                                <p className="card-text">
                                    Dashboard présentant une vue globale de l’accès à l’eau potable dans le monde. Permet de choisir
                                    le pays à cibler sur un domaine d’expertise.
                                    <br/>
                                    <b>Tableau Prep Builder - Tableau Desktop - Tableau Public</b>
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="https://public.tableau.com/app/profile/laurent.may/viz/drinking_water_dashboard/Etudeeaupotable"
                                target="_blank" rel="noreferrer">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-exp">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="portfolio-sub-img col-md-3">
                        <img src={fao_logo} alt="fao_logo"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Etude de santé public</h4>
                                <p className="card-text">
                                    Etude sur le thème de la sous-nutrition dans le monde. Mise en évidence des principaux indicateurs.
                                    <br/>
                                    <b>Numpy - Pandas - Matplotlib - Data Visualization</b>
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="https://github.com/Lwmay/etude_de_sante_public" target="_blank" rel="noreferrer">
                                <button className="btn btn-info">
                                    Voir le projet
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalystExp;