import React from 'react';

const AreaInterest = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto text-center">
                    <h2 className="title">Mes centres d'intérêts</h2>
                    <h5 className="description">Jetez un œil à certaines des choses sur lesquelles j'aime travailler.</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                    <div className="card card-pricing card-plain">
                        <div className="card-body-interest">
                            <i className="material-icons">analytics</i>
                            <h3 className="card-title">Data Analyst</h3>
                            <p className="card-description">J'aime raconter l'histoire des données et aller au cœur d'un problème 
                                pour trouver une solution.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="card card-pricing card-plain">
                        <div className="card-body-interest">
                            <i className="material-icons">group</i>
                            <h3 className="card-title">Collaboration</h3>
                            <p className="card-description">J'aime travailler en équipe pour créer des stratégies gagnantes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="card card-pricing card-plain">
                        <div className="card-body-interest">
                            <i className="material-icons">school</i>
                            <h3 className="card-title">Machine learning</h3>
                            <p className="card-description">Je suis passionné par les méthodes d'apprentissage qui interviennent 
                                dans le machine learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaInterest;