import React, {useState} from 'react';
import TimelineDatanalyst from "./content/timeline/TimelineDataanlyst";
import TimelineARM from "./content/timeline/TimelineARM";
import TimelineCertif from "./content/timeline/TimelineCertif";
import TimelineCall from "./content/timeline/TimelineCall";

const Timeline = () => {

    const [toggleDescrip, setToggleDescrip] = useState(true);

    const toggleDescription = (descripId, iconDescripId) => {

        if (toggleDescrip) {
            document.getElementById(descripId).classList.remove('hidden');
            document.getElementById(iconDescripId).classList.add('hidden');
        } else {
            document.getElementById(descripId).classList.add('hidden');
            document.getElementById(iconDescripId).classList.remove('hidden');

        };
        setToggleDescrip(!toggleDescrip);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-timeline card-plain">
                    <div className="card-body">
                        <ul className="timeline">
                            <li>
                                <div className="timeline-badge info">
                                    <i className="material-icons">card-travel</i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Formation Data Analyst</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <div className="location">
                                            <p>ENSEA École nationale de la statistique et de l'administration
                                                économique Paris - Formation continue / Openclassrooms</p>
                                        </div>
                                        <div className="dating">
                                            <p>Mars 2021 - Décembre 2021</p>
                                        </div>
                                        <div className="timeline-icon close icon-center" id="data-icon-show">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('data-description',
                                                        'data-icon-show')}>expand_more</i>
                                        </div>
                                        <div className="timeline-description hidden" id="data-description">
                                            <div className="timeline-icon close">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('data-description',
                                                        'data-icon-show')}>close</i>
                                            </div>
                                            <TimelineDatanalyst/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-badge info">
                                    <i className="material-icons">card-travel</i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Analyst Revenue Management</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <div className="location">
                                            <p>Air Austral</p>
                                        </div>
                                        <div className="dating">
                                            <p>Mars 2013 - Décembre 2020</p>
                                        </div>
                                        <div className="timeline-icon close icon-center" id="rm-icon-show">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('rm-description',
                                                        'rm-icon-show')}>expand_more</i>
                                        </div>
                                        <div className="timeline-description hidden" id="rm-description">
                                            <div className="timeline-icon close">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('rm-description',
                                                        'rm-icon-show')}>close</i>
                                            </div>
                                            <TimelineARM/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge info">
                                    <i className="material-icons">card-travel</i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Certification IATA Airline Revenue Management</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <div className="location">
                                            <p>IATA</p>
                                        </div>
                                        <div className="dating">
                                            <p>Septembre 2018</p>
                                        </div>
                                        <div className="timeline-icon close icon-center" id="cert-icon-show">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('cert-description',
                                                        'cert-icon-show')}>expand_more</i>
                                        </div>
                                        <div className="timeline-description hidden" id="cert-description">
                                            <div className="timeline-icon close">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('cert-description',
                                                        'cert-icon-show')}>close</i>
                                            </div>
                                            <TimelineCertif/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-badge info">
                                    <i className="material-icons">card-travel</i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Téléconseiller - Agent de réservation</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <div className="location">
                                            <p>Air Austral</p>
                                        </div>
                                        <div className="dating">
                                            <p>Novembre 2008 - Février 2013</p>
                                        </div>
                                        <div className="timeline-icon close icon-center" id="call-icon-show">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('call-description',
                                                        'call-icon-show')}>expand_more</i>
                                        </div>
                                        <div className="timeline-description hidden" id="call-description">
                                            <div className="timeline-icon close">
                                                <i className="material-icons" onClick={
                                                    () => toggleDescription('call-description',
                                                        'call-icon-show')}>close</i>
                                            </div>
                                            <TimelineCall/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-badge info">
                                    <i className="material-icons">card-travel</i>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>Licence Sciences et Ingénierie, mention Biologie</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <div className="location">
                                            <p>Université d'Evry Val d'Essone, France</p>
                                        </div>
                                        <div className="dating">
                                            <p>2007</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;