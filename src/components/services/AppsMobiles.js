import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class AppsMobiles extends Component {
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
                                            <h5>Pour vous, nous créons des...</h5>
                                            <h2 className="title">Applications mobiles</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="/images/services/apps_mobiles.jpg" alt="single-img-twelve" />
                                    </div>
                                    <div className="ttm-service-description">
                                        <h3>Incontournables!</h3>
                                        <p>Les applications mobiles sont devenues un élément clé dans la vie quotidienne des gens, que ce soit pour des activités personnelles ou professionnelles. À <strong>House Innovation</strong>, nous sommes spécialisés dans la création d'applications mobiles sur mesure pour répondre aux besoins de nos clients. Les applications mobiles que nous concevons sont conviviales, ergonomiques, fonctionnelles, performantes, légères et compatibles avec les plateformes <b>iOS</b> et <b>Android</b></p>
                                        <p>Nos applications mobiles sont développées en utilisant les dernières technologies et les meilleures pratiques de développement. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et proposer des solutions personnalisées qui répondent à leurs exigences. Nous offrons également des services de maintenance et de soutien pour garantir que les applications mobiles continuent de fonctionner sans faille, même après leur lancement. Faites confiance à notre expertise pour donner vie à votre projet d'application mobile et offrir une expérience utilisateur exceptionnelle à vos clients.</p>

                                        <h3>Une panoplie d'avantages</h3>
                                        <div> Avec nos applications mobiles, nous vous offrons:
                                            <ul>
                                                <li><b> - Un outil de fidélisation </b></li>
                                                <li><b> - Une visibilité accrue </b></li>
                                                <li><b> - Une expérience utilisateur optimisée </b></li>
                                                <li><b> - Une interface utilisateur intuitive </b></li>
                                                <li><b> - Une gestion plus efficace des rendez-vous clients</b></li>
                                                <li><b> - Un engagement client plus fort</b></li>
                                                <li><b> - Des alertes push (notifications)</b></li>

                                            </ul>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                        </div>
                                        {/* separator */}
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="ttm_single_image-wrapper res-767-mt-20">
                                                    <img className="img-fluid" src="/images/services/app_mobile_1_no_bg.PNG" alt="Exemple d'application mobile" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="ttm_single_image-wrapper res-767-mt-20">
                                                    <img className="img-fluid" src="/images/services/app_mobile_2_no_bg.PNG" alt="Exemple d'application mobile" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="ttm_single_image-wrapper res-767-mt-20">
                                                    <img className="img-fluid" src="/images/services/app_mobile_3_no_bg.PNG" alt="Exemple d'application mobile" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ttm-service-single-content-are end */}
                            </div>
                            <div className="col-lg-3 widget-area">
                                <Sidebar toHighlight={1} />
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
        )
    }
}


export default AppsMobiles;