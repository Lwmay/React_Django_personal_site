import React  from 'react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactForm from '../../components/ContactForm';
import azg_bank_logo from "./img/AZG_bank_logo.png";
import marketing_mix from "./img/marketing_mix.png";
import tony_may3 from "./img/tony_may3.gif";
import global_campagne from "./img/global_campagne.png";
import analyse_par_metiers from "./img/analyse_par_métier.png";
import caract_clients from "./img/caract_clients.png";
import caract_clients2 from "./img/caract_clients2.png";
import saison_clients from "./img/saison.png";
import tony_may from "./img/tony-may.gif";
import bench_models_table from "./img/bench_models_table.png";
import bench_models from "./img/bench_models.png";
import model_feature from "./img/features.png";
import clients_list from "./img/clients_list.png";
import tony_may2 from "./img/tony_may2.gif";


const AZGBank = () => {

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
                                <img src={azg_bank_logo} alt="azg_logo" />
                            </div>
                            <div className="profil-descrip col-md-8 ml-auto">
                                <p id="section_further_up"></p>
                                <h1><b>DATA ET CAMPAGNES MARKETING</b></h1>
                                <p>
                                    <i>(Projet perso)</i>   
                                </p>
                                <p>
                                    Dans ce projet, nous allons aborder le Data Marketing pour AZG Banque et Assurances (entreprise fictive). 
                                    L'enjeu est de prédire si un nouveau client sera sensible ou pas à une offre bancaire à partir des données 
                                    de son <b>CRM (Customer Relationship Management)</b> dans le cadre d'une campagne de télémarketing.  Ce type 
                                    de campagne est une démarche qui peut être ressentie comme intrusif. Il est donc judicieux de bien 
                                    <b> segmenter les clients cibles</b> pour à la fois ne pas renvoyer une image d'omniprésence, augmenter le 
                                    lifetime customer et établir de bonnes relations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="prof-exp content-about-page text-left">

                        <h2><b>Contexte métier</b></h2>
                        <p>
                            La banque AZG souhaite augmenter les souscriptions aux dépôts à terme (DAT) par le lancement d'une nouvelle campagne marketing. 
                            Elle propose ces dépôts avec un taux fixe dans lequel l'argent du client lui sera restitué à une échéance spécifique.
                        </p>
                        <p>
                            Les campagnes de marketing sont efficaces lorsque les besoins des clients et leur satisfaction globale sont définis. 
                            La bonne stratégie pour les entreprises est d'utiliser le marketing direct lorsqu'elles ciblent des segments de clients en 
                            les contactant pour atteindre un objectif marketing. Plusieurs paramètres définissent une campagne marketing et sont définis 
                            dans le <b>marketing mix</b>. Elles peuvent être ajustées pour optimiser la campagne et sont les outils que l'on dispose pour 
                            atteindre les objectifs marketing (Kotler & Dubois).
                        </p>
                        <p className='text-center'>
                            <img src={marketing_mix} alt="azg_init_data" />
                        </p>
                        <p>
                            Au vu des données disponibles dans le jeu de données (que l'on verra plus loin), nous étudierons 2 grands axes du 
                            marketing mix : la segmentation client et le canal de distribution.
                        </p>
                        <p>
                            L'analyse des données permettra de créer des <b>motifs de contact</b> soumis aux commerciaux dans le réseau d'agences ou 
                            au call center afin d'aider leurs prospections et cibler leurs demandes. Cette démarche permettra d'avoir un <b>taux 
                            de réussite plus élevé</b> et donc de meilleures performances. Une bonne connaissance de la segmentation client, ayant souscrit au dépôt à terme, permet 
                            d'identifier le profil d'un client, qui est plus susceptible d'acquérir le produit et de développer des campagnes 
                            marketing plus ciblées.
                        </p>

                        <blockquote class="sidekick">
                            <p>
                                Aujourd'hui, les entreprises qui embauchent des <b>Data analysts</b> s'intéressent au portefeuille des clients et 
                                à leurs données. L'analyse des données peut être une contribution à l'optimisation des campagnes marketing et 
                                l'amélioration des ROI.
                            </p>
                        </blockquote>
                        <p className='text-center'>
                            <img src={tony_may3} alt="azg_init_data" />
                        </p>

                        <h2><b>Méthodologie</b></h2>
                        <p>
                            À partir des données, nous analyserons la campagne précédente dans laquelle les commerciaux ont exécuté des appels 
                            téléphoniques à partir d'une liste de clients pour leur demander de souscrire à un DAT. Le résultat est un contact 
                            binaire échec ou réussite et ont été reportés dans le système de données CRM.
                        </p>
                        <p>
                            L'objectif à partir de ces données est de construire un modèle basé sur les données qui apprend une fonction sous-jacente 
                            inconnue qui mappe plusieurs variables d'entrée et qui va caractériser une cible de sortie étiquetée (type de vente de dépôt 
                            bancaire : "échec" ou "succès"). Ce modèle sera implémenté dans un <b>programme de prédiction</b> qui sera exécuté sur une 
                            liste de clients. L'entreprise aura ainsi une liste de clients ciblés avec leurs probabilités d'acceptation respectives.
                        </p>
                        <p>
                            Les données que nous analysons proviennent d'une étude sur le Marketing Data-Driven : <br/>
                            Source:  : [Moro et al., 2014] S. Moro, P. Cortez and P. Rita. A Data-Driven Approach to Predict the Success of Bank 
                            Telemarketing. Decision Support Sxystems, Elsevier, 62:22-31, June 2014.
                        </p>
                        <p>
                            <strong>REMARQUE :</strong><br/> On analyse ici l'efficacité de la campagne de télémarketing. Il sera judicieux d'avoir 
                            les paramètres de la campagne pour déterminer sur quels critères on peut améliorer son efficacité. On pourrait savoir 
                            s'il s'agit d'un nouveau produit, d'une action promotionnelle, d'une assurance, le taux proposé ...
                        </p>

                        <h2><b>Analyse descriptive des données</b></h2>
                        <p>
                            Il n'y a pas de valeurs nulles dans le jeu de données. Nous disposons de <b>11 162 entrées et 17 variables</b>.
                            Les données présentent une bonne cohérence. Par exemple, il n'y a pas de valeurs d'âge en dehors d'une plage normale.
                        </p>
                        <p>
                            <p className='azg_talend_tMap text-center'>
                                <img src={global_campagne} alt="global_campagne" />
                            </p>
                            <ul>
                                <li>La campagne de télémarketing a engendré <b>47.4%</b> (5289) de réponses positives.</li>
                                <li>Le principal moyen de contact est le <b>téléphone mobile</b>. </li>
                            </ul>
                        </p>
                        <p>
                            <p className='azg_talend_tMap text-center'>
                                <img src={analyse_par_metiers} alt="analyse_par_metier" />
                            </p>
                            <ul>
                                <li>Le taux de conversion est plus important auprès des <b>étudiants et des retraités</b>. Les taux les plus bas 
                                    concernent des métiers plus manuels.  </li>
                                <li>Le nombre de souscriptions est le plus élevé chez les managers qui sont les plus représentés dans les clients 
                                    prospectés. On retrouve ensuite les techniciens et les cols bleus. </li>
                            </ul>
                        </p>
                        <p>
                            <p className='azg_talend_tMap text-center'>
                                <img src={caract_clients} alt="caracteristique_client" />
                            </p>
                            <ul>
                                <li>Le taux de souscription est plus élevé chez les jeunes (moins de 30 ans) et les personnes âgées (plus de 60 ans).</li>
                                <li>Les célibataires ont un taux de souscription plus élevé tandis que les mariés sont moins avenants. Il serait 
                                    intéressant de comparer les dépenses de ces deux catégories qui peuvent influer sur la prise de décision.  </li>
                            </ul>
                        </p>
                        <p>
                            <p className='azg_talend_tMap text-center'>
                                <img src={caract_clients2} alt="caracteristique_client" />
                            </p>
                            <ul>
                                <li>Le fait de déjà posséder un crédit ne semble pas être un critère décisif.</li>
                                <li>Les propriétaires de biens immobiliers souscrivent moins aux DAT car ils semblent avoir déjà fait leurs choix 
                                    d'investissement. Les clients qui n'ont pas de crédit immobilier souscrivent plus facilement.</li>
                                <li>Les clients ayant les <b>soldes bancaires les plus élevés</b> sont des de meilleurs candidats à la souscription. 
                                    Ils possèdent effectivement un pouvoir d'investissement plus élevé.</li>
                            </ul>
                        </p>
                        <p>
                            <p className='azg_talend_tMap text-center'>
                                <img src={saison_clients} alt="caracteristique_client" />
                            </p>
                            <ul>
                                <li>D'un point de vue calendaire, on observe des saisonnalités dans les souscriptions. La période la plus propice 
                                    à cibler semble s'étendre de <b>septembre à mars</b>.</li>
                            </ul>
                        </p>

                        <h2><b>Recommandations</b></h2>
                        <p>
                            L'analyse des données a permis de segmenter notre clientèle, définir des personas et déterminer les paramètres les plus 
                            optimisés pour la future campagne. Le taux de souscription serait plus élevé car les clients prospectés selon des clients 
                            cibles. Voici les recommandations :
                        </p>
                        <h3>Segmentation clients :</h3>
                        <p>
                            <ul>
                                <li>La prospection doit cibler les clients <b>jeunes** et relativement âgés</b> qui recherchent des options 
                                    d'investissement sûres et rentables.</li>
                                <li>Le solde du compte influence sur la prise de décision. Les clients ayant un **solde moyen ou élevé** sont 
                                    plus susceptibles de souscrire à un DAT.</li>
                                <li>Si un client a un prêt à long terme tel qu'un crédit immobilier, il lui sera très difficile de souscrire 
                                    un dépôt à terme.</li>
                                <li>Les clients ayant des emplois 'cols bleus' et 'services' sont moins susceptibles de souscrire au dépôt à terme.</li>
                            </ul>
                        </p>
                        <h3>Paramètres optimisés de la campagne :</h3>
                        <p>
                            <ul>
                                <li>L'équipe marketing doit essayer d'avoir <b>des appels plus longs</b> et argumentés. La corrélation de la variable 
                                    « durée » avec la variable cible montre que plus la durée est élevée, plus il est probable que le client 
                                    souscrira aux dépôts à terme.</li>
                                <li>Le téléphone portable semble être le mode de communication le plus adapté. Les clients sont effectivement 
                                    plus facilement joignables.</li>
                                <li>Le centre d'appels devrait <b>limiter le nombre d'appels</b> à un client à plus de 4 fois, cela peut être 
                                    dérangeant et intrusif.</li>
                                <li>Il serait intéressant de lancer la campagne au début d'un mois.</li>
                                <li>La période où les souscriptions sont importantes s'étend de <b>septembre à mars</b>.</li>
                            </ul>
                        </p>
                        <p><a href="#section_further_up">Remontrer en haut</a></p>

                        <h2><b>Modèle de prédiction</b></h2>
                        <p>
                            Nous avons pu analyser les caractéristiques des données et segmenter nos clients. Mais comment allons-nous faire pour 
                            la prochaine campagne ? 
                        </p>
                        <p>
                            Il va être complexe de prioriser les clients à contacter en appliquant tout ce que l'on a vu 
                            sur une base de données de plusieurs milliers d'entrées. C'est là qu'intervient la <b>modélisation en machine learning</b>. 
                            Elle va permettre de traiter automatiquement les données en temps réel ou non et créer des motifs de contacts pour 
                            les commerciaux.
                        </p>
                        <p>
                            Pour notre prochaine de télémarketing, nous allons utiliser un modèle qui va être implémenté dans un programme pour 
                            générer une liste de clients à contacter, tout ça grâce à votre Data Analyst préféré.
                        </p>
                        <p className='text-center'>
                            <img src={tony_may} alt="azg_init_data" />
                        </p>

                        <h3>Pré-traitement</h3>
                        <h4>Encodage des variables catégoriques</h4>
                        <p>Avant d'effectuer l'échantiollonnage, nous allons encoder les colonnes catégoriques. On leur attribue ainsi un entier 
                            unique.</p>
                        <blockquote class="code-quote">
                            <pre>
                                df_temp = data.copy()<br/>
                                df_temp['poutcome'] = df_temp['poutcome'].replace('unknown',np.nan)<br/><br/>
                                df_encoded = df_temp[cat_cols].apply(LabelEncoder().fit_transform)<br/>
                                num_cols= df_temp._get_numeric_data().columns<br/>
                                df_encoded = df_encoded.join(df_temp[num_cols])<br/><br/>
                                df_encoded = df_encoded[ [ col for col in df_encoded.columns if col != 'deposit' ] + ['deposit'] ]
                            </pre>
                        </blockquote>
                        <h4>Centrage et réduction</h4>
                        <p>Les variables ne sont pas exprimées dans les mêmes unités. On réalise donc un centrage et une réduction.</p>
                        <blockquote class="code-quote">
                            <pre>
                                # split des variables indépendantes<br/>
                                X = df_encoded.iloc[:, :-1]<br/>
                                y = df_encoded.iloc[:, -1]<br/><br/>
                                # standardisation des données<br/>
                                std_scale = preprocessing.StandardScaler().fit(X)<br/>
                                X_scaled = std_scale.transform(X)<br/>
                                X_scaled = pd.DataFrame(X_scaled, columns=X.columns)
                            </pre>
                        </blockquote>

                        <h3>Échantillonnage</h3>
                        <p>
                            Nous allons utiliser la <b>validation croisée stratifiée</b> qui va nous permettre d'utiliser l'intégralité 
                            des données pour l'entraînement de nos modèles et limiter les effets de biais. Le but est de découper le 
                            jeu de données en k parties (folds) et les utiliser chacune leur tour comme jeu de test. 
                        </p>
                        <blockquote class="code-quote">
                            <pre>
                                skf = StratifiedKFold(n_splits=5, random_state=None)
                            </pre>
                        </blockquote>

                        <h3>Choix du modèle</h3>
                        <p>
                            On fait travailler différents algorithmes sur les folds afin afin de comparer leurs scores sur différents 
                            indicateurs.
                        </p>
                        <p className='azg_talend_commune_trans text-center'>
                            <img src={bench_models_table} alt="bench_models_table" />
                        </p>
                        <p>
                            <ul>
                                <li>La précision (Accuracy) permet de mesurer le succès d'un modèle, mais elle n'est pas suffisante à 
                                    elle seule pour choisir notre modèle.</li>
                                <li>La valeur F1 Score représente la moyenne harmonique des valeurs de faux positifs et faux négatifs.</li>
                                <li>Le kappa de Cohen est une statistique utile pour tester la fiabilité (similaire aux coefficients 
                                    de corrélation, entre -1 et +1). Elle permet d'avoir une estimation du hasard dans nos résultats. 
                                    Elle représente la correspondance parfaite entre les évaluateurs.</li>
                            </ul>
                        </p>
                        <p className='img_middle text-center'>
                            <img src={bench_models} alt="bench_models" />
                        </p>
                        <p>
                            Grâce à ces indicateurs, on peut choisir un modèle sur lequel nous pouvons baser notre programme de 
                            prédiction. On choisit de partir sur le <b>xgboost</b> qui est une implémentation open source optimisée 
                            de l’algorithme d’arbres de boosting de gradient. On parle d’ailleurs de méthode d’agrégation de modèles. 
                        </p>

                        <h2><b>Modélisation</b></h2>
                        <p>
                            Le choix du modèle est fait. Il correspond aux besoins métier. Il reste à l'optimiser en choisissant les 
                            hyper-paramètres. En entraînant un modèle avec des données existantes, nous pouvons ajuster les paramètres 
                            du modèle (avec RandomizedSearchCV par exemple). Ici toute la démarche n'est pas détaillée. En effet, 
                            cela fait déjà un moment que j'ai votre attention.
                        </p>
                        <p className='img_middle text-center'>
                            <img src={model_feature} alt="bench_models" />
                        </p>
                        <p>
                            On retrouve dans notre modèle des caractéristiques que l'on a pu voir dans l'analyse bivariée. On peut 
                            observer que la manière dont se déroule l'opération marketing joue un rôle important dans son succès 
                            (moyen de contact, mois, durée de l'appel ...).
                        </p>

                        <h2><b>Programme de prédiction</b></h2>
                        <p>Notre modèle est paramétré. La question de savoir ce que l'on en fait.</p>
                        <p>Nous allons maintenant pouvoir l'implémenter dans un programme pour <b>automatiser la prédiction</b> de réussite 
                            par client et la génération de la liste des clients à contacter. Cette liste sera transmise par la suite 
                            aux commerciaux avec les motifs de contacts associés.
                        </p>
                        <p>
                            C'est là qu'avoir un <b>Data Analyst</b> dans son équipe prendra tout son sens.
                        </p>
                        <p><b>Les 20 premiers clients à contacter :</b></p>
                        <p className='azg_talend_context text-center'>
                            <img src={clients_list} alt="bench_models" />
                        </p>

                        <h2><b>Conclusion</b></h2>
                        <p className='text-center'>
                            <img src={tony_may2} alt="azg_init_data" />
                        </p>

                        <p>
                            <p className='text-center'>Retrouvez les analyses et le notebook :</p>
                            <p className='text-center'>
                                <a href={"./content/AZG_bank/AZG_bank.zip"} download="AZG_Bnak_project.zip">
                                    <button className="btn btn-info">
                                        Téléchargez
                                    </button>
                                </a>
                            </p>
                        </p>

                        <p><a href="#section_further_up">Remontrer en haut</a></p>
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

export default AZGBank;