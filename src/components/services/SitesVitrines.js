import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class SitesVitrines extends Component {
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
                                            <h5>Pour nous, vous créons des...</h5>
                                            <h2 className="title">Sites vitrines</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="/images/services/sites_vitrines.png" alt="single-img-twelve" />
                                    </div>
                                    <div className="ttm-service-description">
                                        <h3>Qu'est-ce qu'un site vitrine ?</h3>
                                        <p>Un site vitrine est un outil de communication essentiel pour votre entreprise. Il permet de présenter votre entreprise, vos produits et services, votre histoire et votre mission à un large public en ligne. Contrairement à un site de commerce électronique, un site vitrine n'a pas pour but de vendre des produits ou des services en ligne, mais plutôt de fournir des informations sur une entreprise, ses produits et services, son histoire, sa mission, etc.

                                        <br />
                                           Un site vitrine est généralement constitué d'une page d'accueil, qui présente une vue d'ensemble de l'entreprise ou de l'organisation, ainsi que de plusieurs pages qui détaillent les différents produits ou services offerts, l'historique de l'entreprise, les coordonnées de contact, etc.
                                        </p>


                                        <div className="separator">
                                            <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                        </div>
                                        {/* separator */}
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>La touche "House Innovation"</h3>

                                                <div className="ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey" style={{ padding: "15px", textAlign: "center", fontSize: "1.5em", fontStyle: "italic", color: "#eee", marginBlock: "2em"}}>« Faire connaître votre activité aux yeux du monde en un laps de temps est notre priorité. »</div>
                                               
                                                <div style={{textAlign: "justify"}}>
                                                    Nous sommes outrés à l'idée d'un site vitrine bourré de texte, fade et ennuyeux. C'est malheureusement à quoi se résument de nombreux sites vitrines sur la toile. 
                                                    Par conséquent, à House Innovation:

                                                    <br /><br />
                                                    <ul style={{display: "flex", flexDirection: "column", flexWrap: "wrap", gap: "0.5em"}}>
                                                        <li>- Nous nous assurons de créer une présence en ligne professionnelle et attrayante qui reflète les valeurs et l'identité de votre entreprise.</li>


                                                        <li>- Nous concevons un soigné et professionnel, en incluant des images, des vidéos et des animations, des polices spéciales et des illustrations bien souvent plus parlantes que du simple texte. Votre site est alors plus attractif</li>

                                                        <li>- Nous concevons pour vous une page d'accueil accueillante qui attire l'attention de vos visiteurs et leur donne un authentique aperçu de votre entreprise, ainsi que des pages détaillées sur vos produits et services, votre équipe, vos réalisations et bien plus encore.</li>

                                                        <li>- Nous nous assurons également que votre site vitrine soit facile à naviguer et <em>responsive</em> (c'est-à-dire que l'affichage est optimisé pour toutes les tailles d'écran)</li>
                                                        
                                                        <li>- Nous optimisons votre site vitrine pour les moteurs de recherche afin d'y attirer naturellement un maximum de visiteurs</li>

                                                    </ul> 
                                                </div>
                                            </div>
                                            <div className="col-md-12" style={{marginTop: "2em"}}>
                                                <div className="ttm_single_image-wrapper res-767-mt-20">
                                                    <img className="img-fluid" src="/images/services/site_vitrine_responsive_no_bg.PNG" alt="single-img-fifteen" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ttm-service-single-content-are end */}
                            </div>
                            <div className="col-lg-3 widget-area">
                                <Sidebar toHighlight={2} />
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
        )
    }
}


export default SitesVitrines;