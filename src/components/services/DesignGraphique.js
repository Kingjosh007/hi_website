import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class DesignGraphique extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                
                <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix" style={{marginTop: "2em"}}>
                    <div className="container-xl">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-9 content-area order-lg-2">
                            {/* ttm-service-single-content-are */}
                            {/* ttm-service-single-content-are */}
                            <div className="ttm-service-single-content-area">
                                <div className="ttm-service-description">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src="/images/services/design_business_card.jpg" alt="Carte de visite" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <h3 className="res-767-mt-20">Cartes de visite</h3>
                                        <p className="mb-0">Nous offrons des services de conception de cartes de visite pour aider les professionnels à créer des cartes percutantes et professionnelles qui reflètent leur identité de marque. Nos designers expérimentés communiquent avec les clients pour comprendre leurs besoins et concevoir des cartes personnalisées. Qu'il s'agisse d'un design minimaliste ou d'un design plus créatif et accrocheur, nous sommes à disposition pour vous aider à créer la carte de visite parfaite pour votre entreprise.</p>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-6">
                                        <h4>Roll-ups</h4>
                                        <p>Nous concevons des roll-ups pour aider les entreprises à promouvoir efficacement leur marque lors d'événements, de salons professionnels ou de présentations. Nos roll-ups sont personnalisés et reflètent l'image de marque et le message clé de nos clients. Nous utilisons des matériaux de haute qualité pour assurer un résultat professionnel et durable.</p>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="/images/services/design_roll_up.jpg" alt="Roll-ups" />
                                        </div>
                                        </div>
                                    </div>
                                    <h3>Plaquettes</h3>
                                    <div className="ttm_single_image-wrapper mb-35 res-991-mb-20">
                                        <img className="img-fluid" src="/images/services/design_plaquette_no_bg.png" alt="Plaquette d'entreprises" />
                                    </div>
                                    <p>Offrez-vous une plaquette professionnelle pour communiquer votre identité, votre mission, vos valeurs et mettre en lumière vos produits. La plaquette d'entreprise constitue un excellent outil de communication. Elle vous permet entre autres de: 
                                    </p>
                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li><i className="fa fa-check" /><b>Présenter l'entreprise de manière professionnelle et attrayante,</b> en mettant en avant ses points forts.</li>
                                        <li><i className="fa fa-check" /><b>Renforcer l'image de marque de l'entreprise et véhiculer une image positive</b> auprès des clients et des partenaires.</li>
                                        <li><i className="fa fa-check" /><b>Aider à attirer de nouveaux clients</b> en fournissant des informations claires et complètes sur les produits et services proposés.</li>
                                        <li><i className="fa fa-check" /><b>Servir de support de communication</b> lors de salons professionnels, de réunions avec des partenaires commerciaux ou de présentations commerciales.</li>
                                    </ul>
                                    <div style={{marginTop: "1em"}}>
                                        En guise d'exemple, consultez <a title="Télécharger" href="/docs/ServiceHI.pdf" target="_blank" rel="noopener noreferrer">notre plaquette à nous</a>.
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-6">
                                        <h4>Logos</h4>
                                        <p>Les logos sont des éléments visuels essentiels pour toute entreprise. Ils sont souvent la première chose que les clients remarquent et peuvent avoir un impact significatif sur la perception qu'ils ont de l'entreprise. À House Innovation, nous concevons des logos professionnels, identifiables, et cohérents.</p>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="/images/services/design_logos.jpg" alt="Logos" />
                                        </div>
                                        </div>
                                    </div>

                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}

                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src="/images/services/design_flyer_no_bg.png" alt="Flyers" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <h3 className="res-767-mt-20">Flyers / Dépliants</h3>
                                        <p className="mb-0">Les flyers sont un outil de communication efficace pour promouvoir des produits ou services, informer les clients de promotions, d'événements, et attirer de nouveaux prospects.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ttm-service-single-content-are end */}
                        </div>
                        <div className="col-lg-3 widget-area">
                            <Sidebar toHighlight={6} />
                        </div>
                    </div>{/* row end */}
                    </div>
                </div>
            </div>
            )
    }
}


export default DesignGraphique;