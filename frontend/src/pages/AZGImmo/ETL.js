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
import AZG_Viz from "../../assets/img/AZG/AZG_Viz.png";


const AZGEtl = () => {

    const showForm = () => {
        document.getElementById('show-button').classList.add('hidden');
        document.getElementById('form-card').classList.remove('hidden');
    }

    return (
        <div className="off-canvas-sidebar">
            <Navigation />
            <div className="wrapper-full-page">
                <div className="intro azg">
                    <div className="content-about-page">
                        <div className="row">
                            <div className="profil azg_logo col-md-4 ml-auto">
                                <img src={azg_logo} alt="azg_logo" />
                            </div>
                            <div className="profil-descrip col-md-8 ml-auto">
                                <p id="section_further_up"></p>
                                <h1><b>PROJET DE DATA INTEGRATION</b></h1>
                                <p>
                                    <i>(Projet perso)</i>   
                                </p>
                                <p><b>AZG</b> est une agence immobili??re (fictive) ?? La R??union qui souhaite mettre en place, dans le cadre
                                    de sa transformation num??rique, un mod??le pour mieux pr??voir le prix de vente
                                    des biens immobiliers. Pour cela, je vais extraire, transformer et charger les donn??es des 
                                    <b> Demandes de Valeurs Fonci??res (DVF)</b> publics dans une base de donn??es.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="prof-exp content-about-page text-left">

                        <p>Nous allons pouvoir d??finir la valeur d'un bien ?? partir des prix observ??es dans les transactions de biens
                            identiques. Ces transactions refl??tent la tendance du march?? en fonction des r??gions, villes et des 
                            caract??ristiques des biens (surface habitable, nombre de pi??ces, ...).
                        </p>

                        <h2><b>Donn??es et exploration</b></h2>
                        <p>
                             
                        </p>
                        <h3><b>Fichiers Transactions Immobili??res</b></h3>
                        <p>Les donn??es disponibles des transactions immobili??res sont sous format CSV t??l??chargables sur le 
                            <a href="https://www.data.gouv.fr/fr/datasets/5c4ae55a634f4117716d5656/"> site open data des DVF</a>. 
                            Le dictionnaire des donn??es est disponible sur le 
                            lien suivante : (<a href="https://www.data.gouv.fr/fr/datasets/r/d573456c-76eb-4276-b91c-e6b9c89d6656">
                                voir le dictionnaire</a>). 
                            Ce dernier permet de centraliser les donn??es avec leurs caract??ristiques et d'avoir une bonne compr??hension de 
                            celles-ci. Parmis les donn??es fournies, je vais s??lectionner les donn??es ?? extraire pour nos futurs 
                            analyses. Une premi??re exploration nous donne un aper??u :
                        <p className='azg_data_brut img_mobile text-center'>
                            <img src={azg_init_data} alt="azg_init_data" />
                        </p>
                            Les variables suivantes ne seront pas int??gr??es car leurs valeurs sont null : 
                        </p>
                        <p className="text-center">
                            <p className='quote'>
                                Code service CH | Reference document | 1 Articles CGI | 2 Articles CGI | 3 Articles CGI | 4 Articles CGI 
                                | 5 Articles CGI | Identifiant local
                            </p>
                        </p>
                        <p>
                            .
                        </p>
                        <h3><b>Les communes et d??partements</b></h3>
                        <p>
                            La nomenclature des adresses postales, me sugg??re qu'il existe des doublons dans la description des 
                            adresses comme les d??partements, les communes et les code postaux. Les donn??es sur les "Commune" et "Departement" 
                            seront aliment??s par les donn??es de l'INSEE (comme indiqu?? dans le dictionnaire). Celle-ci dont disponibles au lien suivant : 
                            <a href="https://www.insee.fr/fr/information/5057840"> Code officiel g??ographique</a>. je r??cup??re deux jeux de donn??es, 
                            l'un pour les communes et l'autre pour les d??partements.
                        </p>
                        <p>Pour les communes, je garde comme variables :</p>
                        <p className="text-center">
                            <p className='quote'>
                                <ul>
                                    <li>COM : Code commune</li>
                                    <li>NCC : Nom en clair (majuscules)</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            Dans les donn??es de transactions, deux variables permettent d'identifier une commune : le "Code departement" et
                            "Code commune". Leurs concat??nation, nous donne l'identifiant de la commune correspondant ?? notre variable <b>COM</b> de l'INSEE 
                            (ci-dessus).
                        </p>
                        <p className='azg_commune_id img_mobile text-center'>
                            <img src={azg_commune_id} alt="azg_commune_id" />
                        </p>
                        <p>
                            Nous avons donc des donn??es de communes qui proviennent de deux sources diff??rentes:
                            <ul>
                                <li>L'INSEE pour le r??f??rencement officiel</li>
                                <li>Les r??f??rences saisies de la DVF</li>
                            </ul>
                            Pour v??rifier leurs coh??rences, j'extrais les lites des code de communes de chacun des jeux de donn??es que j'ai compar??. 
                            Cela r??v??le des discordances. Des codes communes pr??sents dans les transactions des donn??es DVF, ne sont pas pr??sentes 
                            dans la r??f??renciel de l'INSEE. Il nous faudra donc inclure un traitement sp??cifique dans le flux ETL.
                        </p>
                        <p>
                            Concernant les d??partements, je conserve comme variables :
                        </p>
                        <p className="text-center">
                            <p className='quote'>
                                <ul>
                                    <li>DEP : Code d??partement         </li>
                                    <li>NCC : Nom en clair (majuscules)</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            .
                        </p>

                        <h2><b>Mod??le physique des donn??es</b></h2>
                        <p>
                            Afin de structurer de notre base de donn??es, j'ai r??alis?? un <b>Mod??le Physique des
                            Donn??es (MCP)</b>. Cela me permet de d??finir les diff??rentes tables, leurs attributs et les relations 
                            entre celles-ci. Ces derni??re se mat??rialise par les liens entre cl??s primaires et cl??s ??trang??res.
                            Par rapport aux donn??es vues plus haut, je choisi de cr??er 5 tables :
                            <ul>
                                <li><b>mutation</b> : contiendra les informations de la r??alisation des transactions</li>
                                <li><b>bien</b> : on y retrouvera les caract??ristiques des biens</li>
                                <li><b>adresse</b> : localisation des biens</li>
                                <li><b>commune</b> : liste des communes de France</li>
                                <li><b>departement</b> : liste des d??partements</li>
                            </ul>
                            Nous aurons ainsi un base de donn??es respectant la forme normale 3NF (
                            <a href="https://fr.wikipedia.org/wiki/Forme_normale_(bases_de_donn%C3%A9es_relationnelles)">
                                en savoir plus</a>). Les tables "Commune" et "Departement" seront aliment??s par les donn??es de l'INSEE. 
                                Celle-ci dont disponibles au lien suivant : <a href="https://www.insee.fr/fr/information/5057840">Code officiel g??ographique
                            </a>.
                        </p>
                        <p className='azg_mcp img_mobile text-center'>
                            <img src={azg_MCP} alt="azg_MCP" />
                        </p>

                        <h2><b>Extract Transform Load</b></h2>
                        <p>J'utilise ici une solution ETL de <b>Talend</b> pour effectuer mon int??gration de donn??es. Le flux est r??alis?? sur 
                            <b> Talend Open Studio (TOS)</b>. Pour d??but le projet sous TOS, je cr??e une connexion ?? la base de donn??e en m??tadonn??es.
                            Cela me permet d'avoir une connexion configur??e dans le contexte global et m'??vite ?? avoir ?? param??trer ?? chaque composant 
                            n??cessitant une connexion de base de donn??es.
                        </p>
                        <h3><b>Les communes et d??partements</b></h3>
                        <p>Je cr??e un Job pour le flux d'int??gration des donn??es de communes et de d??partement. Celui-ci comporte 2 composants <b>tFileInputDelimited </b> 
                             pour chacun de nos fichiers :
                            <ul>
                                <li>commune2021.csv</li>
                                <li>departement2021.csv</li>
                            </ul>
                        </p>
                        <p>
                            Dans le contexte de Talend, je d??fini par la m??me occasion une variable de contexte pour sp??cifier le r??pertoire et son chemin 
                            dans lequel j'ai entrepos?? ces 2 fichiers. Je d??fni les sch??mas des inputs sur lesquels nous s??lectionnons les variables dont 
                            j'aurai besoin.
                        </p>
                        <p className='azg_talend_context img_mobile text-center'>
                            <img src={azg_talend_context} alt="azg_talend_context" />
                        </p>
                        <p>
                            J'utilise deux composants <b>tMap</b> ?? la suite des <b>tFileInputDelimited </b>. Ils permettent de ne r??cup??rer que les donn??es 
                            qui nous seront utiles et de cr??er les cl??s primaires.
                        </p>
                        <p className='azg_talend_init img_mobile text-center'>
                            <img src={azg_talend_init} alt="azg_talend_init" />
                        </p>
                        
                        <h3><b>Les transactions immobili??res</b></h3>
                        
                        <h4>Particularit?? des communes :</h4>
                        
                        <p>
                            On l'a vu plus haut, les variables sur les communes ne correspondent pas toutes aux r??f??rences de l'INSEE. J'ai 
                            identifi?? que ces diff??rences viennent d'ancien code commune contenus dans les donn??es de DVF. Afin de traiter 
                            ce probl??me, j'ai r??cup??r?? des donn??es sur les mouvements de communes aupr??s de l'INSEE. Ces donn??es nous renseignent 
                            sur les changements de num??ro de communes, des changements de noms, ... 
                            <p className='azg_talend_commune_trans img_mobile text-center'>
                            <img src={azg_talend_commune_trans} alt="azg_talend_commune_trans" />
                        </p>
                            A partir de l??, j'ai utilis?? le composant 
                            <b> tJavaFlex</b> pour cr??er un dictionnaire dans le contexte global, utilisable dans les composants et dans les routines : 
                            <ul>
                                <li>Code initial : initiation d'un Hashmap;</li>
                                <li>Code principal : alimentation du Hashmap;</li>
                                <li>Code de fin : cr??ation d'une variable globale de type Hashmap;</li>
                            </ul>  
                        </p>
                        <p className='azg_talend_init img_mobile text-center'>
                            <img src={azg_talend_tJavaFlex} alt="azg_talend_tJavaFlex" />
                        </p>

                        <h4>Transactions immobili??re :</h4>
                        <p className='azg_talend_init img_mobile text-center'>
                            <img src={azg_talend_input} alt="azg_talend_input" />
                        </p>
                        <p>
                            Dans le tratement des transactions, le premier composant <b>tFileList</b>, permet d'it??rer sur les fichiers des transactions 
                            de ces derni??res ann??es contenus dans un dossier sp??cifique. Le <b>tFileInputDelimited </b> qui suit, est param??tr?? avec le sch??ma 
                            d??fini plus haut dans les m??tadonn??es.
                        </p>
                        <p>
                            Dans le premier <b>tMap</b>, j'utilise une routine pour nos "commune_id" qui utilise notre dictionnaire de commune:
                        </p>
                        <p className='azg_talend_routine img_mobile text-center'>
                            <img src={azg_talend_routine} alt="azg_talend_routine" />
                        </p>
                        <p>
                            La r??partition des donn??es dans les tables se fait gr??ce ?? un second <b>tMap</b> :
                        </p>
                        <p className='azg_talend_tMap img_mobile text-center'>
                            <img src={azg_talend_tMap} alt="azg_talend_tMap" />
                        </p>
                        <p>L'exploration initiales des donn??es disponibles a permis de d??finir les besoins et poser les premi??res pierres de mon flux d'int??gration. 
                            L'extraction, la transformation et le chargement des donn??es dans la base de donn??es, a ??t?? facilit?? par l'utilisation de Talend Open 
                            Studio et les composants disponibles nativement.
                        </p>
                        
                        <h2>Visualisation rapide</h2>
                        <p className='azg_viz img_mobile text-center'>
                            <img src={AZG_Viz} alt="AZG_Viz" />
                        </p>
                        <p>
                            Les donn??es sont ensuite exploit??es ?? l'aide de <b>Tableau Desktop</b> pour la r??alisation rapide d'un dashboard. Celui permet de 
                            s??lectionner une commune et visualiser les secteurs ou quatiers les plus porteurs.
                        </p>
                        <p>
                            Vous pouvez consulter le dashboard ?? l'adresse suivante : 
                            <a href="https://public.tableau.com/app/profile/laurent.may/viz/Tableau_AZG/Tableaudebord1">
                                Dashboard AZG Immobilier.</a>
                        </p>

                        <p className='plus_haut'><a href="#section_further_up">Remontrer en haut</a></p>

                        <hr></hr>
                        <div className="content-about-page text-center">
                            <h2><b>Vous avez besoin d'un Data Analyst</b></h2>
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

export default AZGEtl;