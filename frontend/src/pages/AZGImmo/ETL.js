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

                        <p>Nous allons pouvoir définir la valeur d'un bien à partir des prix observées dans les transactions de biens
                            identiques. Ces transactions reflètent la tendance du marché en fonction des régions, villes et des 
                            caractéristiques des biens (surface habitable, nombre de pièces, ...).
                        </p>

                        <h3><b>Données et exploration</b></h3>
                        <p>
                             
                        </p>
                        <h4><b>Fichiers Transactions Immobilières</b></h4>
                        <p>Les données disponibles des transactions immobilières sont sous format CSV téléchargables sur le 
                            <a href="https://www.data.gouv.fr/fr/datasets/5c4ae55a634f4117716d5656/"> site open data des DVF</a>. 
                            Le dictionnaire des données est disponible sur le 
                            lien suivante : (<a href="https://www.data.gouv.fr/fr/datasets/r/d573456c-76eb-4276-b91c-e6b9c89d6656">
                                voir le dictionnaire</a>). 
                            Ce dernier permet de centraliser les données avec leurs caractéristiques et d'avoir une bonne compréhension de 
                            celles-ci. Parmis les données fournies, je vais sélectionner les données à extraire pour nos futurs 
                            analyses. Une première exploration nous donne un aperçu :
                        <p className='azg_data_brut text-center'>
                            <img src={azg_init_data} alt="azg_init_data" />
                        </p>
                            Les variables suivantes ne seront pas intégrées car leurs valeurs sont null : 
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
                        <h4><b>Les communes et départements</b></h4>
                        <p>
                            La nomenclature des adresses postales, me suggère qu'il existe des doublons dans la description des 
                            adresses comme les départements, les communes et les code postaux. Les données sur les "Commune" et "Departement" 
                            seront alimentés par les données de l'INSEE (comme indiqué dans le dictionnaire). Celle-ci dont disponibles au lien suivant : 
                            <a href="https://www.insee.fr/fr/information/5057840"> Code officiel géographique</a>. je récupère deux jeux de données, 
                            l'un pour les communes et l'autre pour les départements.
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
                            Dans les données de transactions, deux variables permettent d'identifier une commune : le "Code departement" et
                            "Code commune". Leurs concaténation, nous donne l'identifiant de la commune correspondant à notre variable <b>COM</b> de l'INSEE 
                            (ci-dessus).
                        </p>
                        <p className='azg_commune_id text-center'>
                            <img src={azg_commune_id} alt="azg_commune_id" />
                        </p>
                        <p>
                            Nous avons donc des données de communes qui proviennent de deux sources différentes:
                            <ul>
                                <li>L'INSEE pour le référencement officiel</li>
                                <li>Les références saisies de la DVF</li>
                            </ul>
                            Pour vérifier leurs cohérences, j'extrais les lites des code de communes de chacun des jeux de données que j'ai comparé. 
                            Cela révèle des discordances. Des codes communes présents dans les transactions des données DVF, ne sont pas présentes 
                            dans la référenciel de l'INSEE. Il nous faudra donc inclure un traitement spécifique dans le flux ETL.
                        </p>
                        <p>
                            Concernant les départements, je conserve comme variables :
                        </p>
                        <p className="text-center">
                            <p className='quote'>
                                <ul>
                                    <li>DEP : Code département         </li>
                                    <li>NCC : Nom en clair (majuscules)</li>
                                </ul>
                            </p>
                        </p>
                        <p>
                            .
                        </p>

                        <h3><b>Modèle physique des données</b></h3>
                        <p>
                            Afin de structurer de notre base de données, j'ai réalisé un <b>Modèle Physique des
                            Données (MCP)</b>. Cela me permet de définir les différentes tables, leurs attributs et les relations 
                            entre celles-ci. Ces dernière se matérialise par les liens entre clés primaires et clés étrangères.
                            Par rapport aux données vues plus haut, je choisi de créer 5 tables :
                            <ul>
                                <li><b>mutation</b> : contiendra les informations de la réalisation des transactions</li>
                                <li><b>bien</b> : on y retrouvera les caractéristiques des biens</li>
                                <li><b>adresse</b> : localisation des biens</li>
                                <li><b>commune</b> : liste des communes de France</li>
                                <li><b>departement</b> : liste des départements</li>
                            </ul>
                            Nous aurons ainsi un base de données respectant la forme normale 3NF (
                            <a href="https://fr.wikipedia.org/wiki/Forme_normale_(bases_de_donn%C3%A9es_relationnelles)">
                                en savoir plus</a>). Les tables "Commune" et "Departement" seront alimentés par les données de l'INSEE. 
                                Celle-ci dont disponibles au lien suivant : <a href="https://www.insee.fr/fr/information/5057840">Code officiel géographique
                            </a>.
                        </p>
                        <p className='azg_mcp text-center'>
                            <img src={azg_MCP} alt="azg_MCP" />
                        </p>

                        <h3><b>Extract Transform Load</b></h3>
                        <p>J'utilise ici une solution ETL de <b>Talend</b> pour effectuer mon intégration de données. Le flux est réalisé sur 
                            <b> Talend Open Studio (TOS)</b>. Pour début le projet sous TOS, je crée une connexion à la base de donnée en métadonnées.
                            Cela me permet d'avoir une connexion configurée dans le contexte global et m'évite à avoir à paramétrer à chaque composant 
                            nécessitant une connexion de base de données.
                        </p>
                        <h4><b>Les communes et départements</b></h4>
                        <p>Je crée un Job pour le flux d'intégration des données de communes et de département. Celui-ci comporte 2 composants <b>tFileInputDelimited </b> 
                             pour chacun de nos fichiers :
                            <ul>
                                <li>commune2021.csv</li>
                                <li>departement2021.csv</li>
                            </ul>
                        </p>
                        <p>
                            Dans le contexte de Talend, je défini par la même occasion une variable de contexte pour spécifier le répertoire et son chemin 
                            dans lequel j'ai entreposé ces 2 fichiers. Je défni les schémas des inputs sur lesquels nous sélectionnons les variables dont 
                            j'aurai besoin.
                        </p>
                        <p className='azg_talend_context text-center'>
                            <img src={azg_talend_context} alt="azg_talend_context" />
                        </p>
                        <p>
                            J'utilise deux composants <b>tMap</b> à la suite des <b>tFileInputDelimited </b>. Ils permettent de ne récupérer que les données 
                            qui nous seront utiles et de créer les clés primaires.
                        </p>
                        <p className='azg_talend_init text-center'>
                            <img src={azg_talend_init} alt="azg_talend_init" />
                        </p>
                        
                        <h4><b>Les transactions immobilières</b></h4>
                        
                        <h5>Particularité des communes :</h5>
                        
                        <p>
                            On l'a vu plus haut, les variables sur les communes ne correspondent pas toutes aux références de l'INSEE. J'ai 
                            identifié que ces différences viennent d'ancien code commune contenus dans les données de DVF. Afin de traiter 
                            ce problème, j'ai récupéré des données sur les mouvements de communes auprés de l'INSEE. Ces données nous renseignent 
                            sur les changements de numéro de communes, des changements de noms, ... 
                            <p className='azg_talend_commune_trans text-center'>
                            <img src={azg_talend_commune_trans} alt="azg_talend_commune_trans" />
                        </p>
                            A partir de là, j'ai utilisé le composant 
                            <b> tJavaFlex</b> pour créer un dictionnaire dans le contexte global, utilisable dans les composants et dans les routines : 
                            <ul>
                                <li>Code initial : initiation d'un Hashmap;</li>
                                <li>Code principal : alimentation du Hashmap;</li>
                                <li>Code de fin : création d'une variable globale de type Hashmap;</li>
                            </ul>  
                        </p>
                        <p className='azg_talend_init text-center'>
                            <img src={azg_talend_tJavaFlex} alt="azg_talend_tJavaFlex" />
                        </p>

                        <h5>Transactions immobilière :</h5>
                        <p className='azg_talend_init text-center'>
                            <img src={azg_talend_input} alt="azg_talend_input" />
                        </p>
                        <p>
                            Dans le tratement des transactions, le premier composant <b>tFileList</b>, permet d'itérer sur les fichiers des transactions 
                            de ces dernières années contenus dans un dossier spécifique. Le <b>tFileInputDelimited </b> qui suit, est paramètré avec le schéma 
                            défini plus haut dans les métadonnées.
                        </p>
                        <p>
                            Dans le premier <b>tMap</b>, j'utilise une routine pour nos "commune_id" qui utilise notre dictionnaire de commune:
                        </p>
                        <p className='azg_talend_routine text-center'>
                            <img src={azg_talend_routine} alt="azg_talend_routine" />
                        </p>
                        <p>
                            La répartition des données dans les tables se fait grâce à un second <b>tMap</b> :
                        </p>
                        <p className='azg_talend_tMap text-center'>
                            <img src={azg_talend_tMap} alt="azg_talend_tMap" />
                        </p>
                        <p>L'exploration initiales des données disponibles a permis de définir les besoins et poser les premières pierres de mon flux d'intégration. 
                            L'extraction, la transformation et le chargement des données dans la base de données, a été facilité par l'utilisation de Talend Open 
                            Studio et les composants disponibles nativement.
                        </p>
                        
                        <h3>Visualisation rapide</h3>
                        <p className='azg_viz text-center'>
                            <img src={AZG_Viz} alt="AZG_Viz" />
                        </p>
                        <p>
                            Les données sont ensuite exploitées à l'aide de <b>Tableau Descktop</b> pour la réalisation rapide d'un dashboard. Celui permet de 
                            sélectionner une commune et visualiser les secteurs ou quatiers les plus porteurs.
                        </p>
                        <p>
                            Vous pouvez consulter le dashboard à l'adresse suivante : 
                            <a href="https://public.tableau.com/app/profile/laurent.may/viz/Tableau_AZG/Tableaudebord1">
                                Dashboard AZG Immobilier.</a>
                        </p>

                        <p className='plus_haut'><a href="#section_further_up">Remontrer en haut</a></p>

                        <hr></hr>
                        <div className="content-about-page text-center">
                            <h3><b>Vous avez besoin d'un Data Analyst</b></h3>
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