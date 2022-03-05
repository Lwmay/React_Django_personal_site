import React from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import background from "../../assets/img/Knime_background.png";
import ContactForm from '../../components/ContactForm';
import Knime_logo from "./img/Knime_logo.png";
import Knime_enjeux from "./img/Knime_enjeux.png"
import Knime_indicateurs from "./img/Knime_indicateurs.png"
import Knime_donnees from "./img/Knime_donnees.png"
import Knime_work1 from "./img/Knime_work1.png"
import Knime_extract from "./img/Knime_extract.png"


const KNIME_egalite = () => {

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
                        <h1 className="title">Knime</h1>
                        <h2>Outil de gestion dédié à l'automatisation des flux de données.</h2>
                    </div>
                </div>
                <div className="intro azg">
                    <div className="content-about-page">
                        <div className="row">
                            <div className="profil knime_logo col-md-4 ml-auto">
                                <img src={Knime_logo} alt="Knime_logo" />
                            </div>
                            <div className="profil-descrip col-md-8 ml-auto">
                                <p id="section_further_up"></p>
                                <h3><b>ANALYSE DES INDICATEURS DE L'EGALITE FEMME-HOMME AVEC KNIME</b></h3>

                                <p>
                                    Dans ce projet, je vais créer un <b>workflow avec Knime</b>  pour un cabinet de consultant 
                                    spécialisé dans la transformation digitale des entreprises. Le cabinet compte déjà 
                                    plus de 150 salariés et est en plein développement. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="prof-exp content-about-page text-left">
                        <h3>Contexte</h3>
                        <p>
                            Chaque année avant le 1er mars, les entreprises d’au moins 50 salariés doivent calculer et publier sur 
                            leur site Internet leur index de l’égalité femmes-hommes. Le cabinet est en phase de croissance 
                            importante, et il est important d’avoir une politique volontariste pour développer l’égalité femmes-hommes. 
                            Cela nous permettra d’améliorer la marque employeur et d’attirer plus facilement des talents.
                        </p>
                        <p className='Knime_enjeux img_mobile text-center'>
                            <img src={Knime_enjeux} alt="Knime_enjeux" />
                        </p>

                        <h3>Les indicateurs et données</h3>
                        <p>
                            Le site du ministère du Travail donne de nombreuses informations pour établir un diagnostic :
                            <a href="https://s3-eu-west-1.amazonaws.com/static.oc-static.com/prod/courses/files/parcours-data-analyst/Pre%CC%81sentation+outil+Diagnostic+E%CC%81galite%CC%81.pdf">
                                  (Présentation de l'outil Diagnostic Egalité)</a>. 
                            On y retrouve les indicateurs à surveiller. Pour simplifier le projet, je vais choisir les indicateurs suivants :
                        </p>
                        <p className='Knime_indicateurs img_mobile text-center'>
                            <img src={Knime_indicateurs} alt="Knime_indicateurs" />
                        </p>
                        <p>
                            Je parts des données issues du Système d’Informations des Ressources Humaines (SIRH) qui ne sont pas anonymisées. 
                            Conformément au respect du RGPD, je vais créer :
                            <ul>
                                <li>Créer un workflow avec le logiciel KNIME qui crée les graphiques du diagnostic ;</li>
                                <li>Créer un fichier .csv prêt pour être utilisé dans nos futures analyses via Tableau Software.</li>
                            </ul>
                            Les données seront traités en amount du workflow pour repecter les règles RGPD disponibles au lien suivant : 
                            <a href="https://www.cnil.fr/cnil-direct/question/quels-sont-les-grands-principes-des-regles-de-protection-des-donnees?visiteur=part">
                                  (RGPD)</a>. 
                            Je dispose de 3 jeux de données dans lesquels, on retrouve les informations nécessaires à mon analyse. Certaines sont sensibles 
                            du point de vue de la RGPD :
                        </p>
                        <p className='Knime_donnees img_mobile text-center'>
                            <img src={Knime_donnees} alt="Knime_donnees" />
                        </p>

                        <h3>Le workflow</h3>
                        <p>
                            La première partie du workflow consiste à importer et à transformer les données. L'importation se fait grâce à aux 
                            nodes <b>Excel Reader</b>. Je réalise ensuite des jointures entre les 3 flux de données pour obtenir un jeux unique. 
                            Sur ce dernier, je fais un nettoyage et des transformations pour récupérer les données pertinentes et anonymisées :
                            <ul>
                                <li>
                                    Importation des données et jointures
                                    <ul>
                                        <li>3 jeux de données avec 2 jointures internes</li>
                                        <li>Suppression des variables non utiles et respect du RGBD (Distance domicile/Travail, Prénom/Nom, 
                                            Telephone, Etat Civil, Enfants).</li>
                                    </ul>
                                </li>
                                <li>
                                    Nettoyage des données
                                    <ul>
                                        <li>Convertion des dates de naissance au format "Datetime", calcul et ajout de la variable âge</li>
                                        <li>Création des bins : âge, ancienneté et salaire</li>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                    </ul>
                                </li>
                                <li>
                                    Fichier export
                                    <ul>
                                        <li>Fichier destiné à une utilisation avec tableau</li>
                                        <li>Respect du RGDB : Ajout d'ID générique et suppression des variables : id_salarie, age, ancienneté, 
                                            salaire_base_mensuel
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                        <p className='Knime_work1 img_mobile text-center'>
                            <img src={Knime_work1} alt="Knime_work1" />
                        </p>
                        <p>
                            Extrait du workflow pour l'indicateur Rénumération effective :
                            <ul>
                                <li>
                                    Manipulation des données :
                                    <ul>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                    </ul>
                                </li>
                                <li>
                                    Graphiques :
                                    <ul>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                        <li>Convertion pour un meilleure lecture des graphiques</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>

                        <p className='Knime_extract img_mobile text-center'>
                            <img src={Knime_extract} alt="Knime_extract" />
                        </p>
                        <p>
                            Vous pouvez télécharger le worflow entier <a href="./content/files/knime/EGALITE_knime_workflow.knar.knwf">
                                  Ici</a>.
                        </p>

                        <h3>Visualisation</h3>
                        <p>
                            Retrouvez la visualisation des données et le rapport au lien suivant : 
                            <a href="./content/files/knime/Knime_rapport.pdf">
                                  télécharchez mon rapport</a>
                        </p>

                        <p className='plus_haut'><a href="#section_further_up">Remontrer en haut</a></p>

                    </div>
                    
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
            <Footer />
        </div>
    );
};

export default KNIME_egalite;