import React from 'react';
import ONCFM_logo from "../../assets/img/portfolioImg/ONCFM_logo.png";
import poule_chante from "../../assets/img/portfolioImg/la_poule_qui_chante.png";

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
                                <p className="card-text">Vous êtes data analyst chez Laplace Immo, un réseau national d’agences immobilières. 
                                Le directeur général est sensible depuis quelque temps à l’importance des données, et il pense que l’agence 
                                doit se démarquer de la concurrence en créant un modèle pour mieux prévoir le prix de vente des biens immobiliers. </p>
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
                                <p className="card-text">Vous êtes data analyst chez Laplace Immo, un réseau national d’agences immobilières. 
                                Le directeur général est sensible depuis quelque temps à l’importance des données, et il pense que l’agence 
                                doit se démarquer de la concurrence en créant un modèle pour mieux prévoir le prix de vente des biens immobiliers. </p>
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
        </div>
    );
};

export default DataAnalystExp;