import React from 'react';
import ONCFM_logo from "../../assets/img/portfolioImg/ONCFM_logo.png";
import poule_chante from "../../assets/img/portfolioImg/la_poule_qui_chante.png";
import fao_logo from "../../assets/img/portfolioImg/fao_logo.png";
import lapage_logo from "../../assets/img/portfolioImg/logo_lapage.png";
import dwfa_logo from "../../assets/img/portfolioImg/DWFA_logo.png";

const DataAnalystExp = () => {
    return (
        <div>
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
                                    ANOVA - Régression linéaire simple - ACP - Régression logistique - K-means - K Nearest Neighboors
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
                                    Matrice de corrélation - Classification Ascendante Hiérarchique -
                                    Analyse en Composantes Principales
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
                                    Chi-2 - Coefficient de Pearson - ANOVA - Tableau de contingence
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
                                    Tableau Prep Builder - Tableau Desktop - Tableau Public
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-btn col-md-2">
                            <a href="hhttps://public.tableau.com/app/profile/laurent.may/viz/drinking_water_dashboard/Etudeeaupotable"
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
                                    Numpy - Pandas - Matplotlib - Data Visualization
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