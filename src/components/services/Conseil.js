import React, { Component } from 'react';
// import Sidebar from './Sidebar';
import Header from '../layout/Header';
import Sidebar from './Sidebar';

export class Conseil extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />

                <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix" style={{ marginTop: "2em" }}>
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-9 content-area order-lg-2">
                                {/* ttm-service-single-content-are */}
                                {/* ttm-service-single-content-are */}
                                <div className="ttm-service-single-content-area">
                                    {/* section title */}
                                    <div className="section-title with-desc text-left clearfix">
                                        <div className="title-header">
                                            <h5>Pour vous, nous faisons du...</h5>
                                            <h2 className="title">Conseil en informatique</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="/images/services/conseil.jpg" alt="Conseil en informatique" />
                                    </div>
                                    <div className="ttm-service-description">
                                        <h4>De quoi s'agit-il ?</h4>
                                        <p>Le <b>conseil en informatique</b> est une pratique qui consiste à fournir des conseils et des recommandations aux organisations ou aux particuliers pour les aider à tirer le meilleur parti de leurs systèmes informatiques. Il s'agit d'un domaine très vaste qui peut couvrir plusieurs aspects, tels que:
                                        </p>

                                        <div className="row">
                                            <p>
                                                À House Innovation:
                                                <ul>
                                                    <li><b> ➤ Stratégie informatique : </b> Cette activité implique de travailler avec les clients pour déterminer les meilleurs investissements à faire dans les technologies de l'information pour soutenir les objectifs de l'entreprise. Cela peut inclure l'analyse de la concurrence, l'évaluation des besoins, la planification et la mise en œuvre de projets.</li>

                                                    <li><b> ➤ Sécurité informatique : </b> Cette activité implique d'assurer la sécurité des systèmes informatiques et des données contre les menaces externes et internes, telles que les virus, les hackers, les employés malveillants, etc.</li>

                                                    <li><b> ➤ Gestion de projets informatiques :</b> Cette activité implique de superviser la planification, la conception et la mise en œuvre de projets informatiques, tels que la mise à niveau des systèmes existants, le développement de nouvelles applications, etc.</li>

                                                    <li><b> ➤ Gestion de la technologie de l'information :</b> Cette activité implique la gestion quotidienne des systèmes informatiques, y compris la gestion des réseaux, des bases de données, des applications et des ressources humaines.</li>

                                                    <li><b> ➤ Analyse de données :</b> Cette activité implique l'analyse de données pour aider les clients à prendre des décisions éclairées, telles que l'identification des tendances et des modèles dans les données.</li>

                                                    <li><b> ➤ Gestion des ressources humaines :</b> Cette activité implique de recruter, de former et de gérer les employés qui travaillent dans les départements informatiques.</li>


                                                </ul>
                                            </p>
                                        </div>
                                        <div className="ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey" style={{ padding: "15px", textAlign: "center", fontSize: "1.5em", fontStyle: "italic", color: "#eee" }}>« Vous aider à utiliser efficacement les technologies de l'information pour atteindre vos objectifs est notre engagement.  »</div>
                                    </div>

                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="/images/services/conseil_2.jpg" alt="Conseil en informatique" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 widget-area">
                                <Sidebar toHighlight={7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Conseil;