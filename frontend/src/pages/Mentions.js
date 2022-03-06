import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import background from "../assets/img/portfolio-img.png";

const Mentions = () => {

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
                        <h1 className="title">Mentions légales</h1>
                    </div>
                </div>
                <div className="intro">
                    <div className="prof-exp content-about-page text-center">
                        <h3>Mentions légales</h3>
                        <h4>PHOTOS :</h4>
                        <p>
                            <ul>
                                <li>
                                    <a href="https://unsplash.com/@adamthehooligan" target="_blank" rel="noreferrer">Adam Miller</a>
                                </li>
                                <li>
                                    <a href="https://unsplash.com/@lobosnico" target="_blank" rel="noreferrer">Nicolas Lobos</a>
                                </li>
                                <li>
                                    <a href="https://unsplash.com/@grakozy" target="_blank" rel="noreferrer">Greg Rakozy</a>
                                </li>
                                <li>
                                    <a href="https://unsplash.com/@wizwow" target="_blank" rel="noreferrer">Donald Giannatti</a>
                                </li>
                            </ul>
                        </p>

                        <h4>MENTIONS LEGALES :</h4>
                        <p>
                            1. PRÉSENTATION DU SITE. 
                        </p>
                        <p>
                            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est 
                            précisé aux utilisateurs du site www.laurentmay.fr l'identité des différents intervenants dans le cadre de sa 
                            réalisation et de son suivi : 
                        </p>
                        <p>
                            Propriétaire: Laurent MAY – contact@laurentmay.fr. 
                            Hébergeur: O2Switch.
                        </p>
                        <p>
                            2. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES PROPOSÉS. 
                        </p>
                        <p>
                            L’utilisation du site www.laurentmay.fr implique l’acceptation pleine et entière des conditions générales d’utilisation 
                            ci-après décrites.
                        </p>
                        <p>
                            3. DESCRIPTION DES SERVICES FOURNIS. 
                        </p>
                        <p>
                            Le site www.laurentmay.fr a pour objet de fournir une information concernant l’ensemble des compétences et réalisation de 
                            Laurent MAY. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
                            qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Tous les informations indiquées 
                            sur le site www.laurentmay.fr sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements 
                            figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. 
                        </p>
                        <p>
                            4. LIMITATIONS DE RESPONSABILITÉ. 
                        </p>
                        <p>
                            Laurent MAY ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de 
                            l’accès au site www.laurentmay.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées 
                            au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
                        </p>
                        <p>
                            5. GESTION DES DONNÉES PERSONNELLES. 
                        </p>
                        <p>
                            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, 
                            l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. A l'occasion de l'utilisation du site 
                            www.laurentmay.fr peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site le fournisseur 
                            d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur. Aucune information personnelle de l'utilisateur du site 
                            www.laurentmay.fr  n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. 
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Mentions;