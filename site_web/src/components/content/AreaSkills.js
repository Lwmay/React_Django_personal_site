import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const AreaSkills = () => {
    return (
        <div className="container">
            <div className="areaskills">
                <div className="col-md-6 ml-auto mr-auto text-center">
                    <h2 className="title">Mes hard skills</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                        Base de données (SQL)
                        <ProgressBar variant="info" now={90} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Traitement des données et analyses
                        <ProgressBar variant="info" now={90} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Challenge intre-service
                        <ProgressBar variant="info" now={90} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                        Python
                        <ProgressBar variant="info" now={85} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        R
                        <ProgressBar variant="info" now={70} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Sklearn, Pandasn Statsmodels
                        <ProgressBar variant="info" now={80} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                        Excel
                        <ProgressBar variant="info" now={90} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Power BI
                        <ProgressBar variant="info" now={80} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Tableau
                        <ProgressBar variant="info" now={80} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                        Powerpoint
                        <ProgressBar variant="info" now={90} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Knime
                        <ProgressBar variant="info" now={70} />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        Developpement logiciel
                        <ProgressBar variant="info" now={70} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaSkills;