import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import CountUp from 'react-countup';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Digitalisation extends Component {
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
                                    <div className="ttm_single_image-wrapper mb-35" style={{ height: "500px"}}>
                                        <img className="img-fluid" src="/images/services/digitalisation.jpg" alt="Digitalisation de structures" style={{height: "100%", width: "auto"}} />
                                    </div>

                                    <div className="ttm-service-description">
                                        <h3>Digitalisation de structures</h3>

                                        <p>Le monde évolue et avec lui, les pratiques commerciales. Aujourd'hui, plus que jamais, la digitalisation est devenue une nécessité pour les entreprises afin de rester compétitives sur le marché. Chez notre entreprise, nous comprenons l'importance de ce changement et sommes prêts à vous accompagner dans cette transition.

                                            <br /><br />

                                            Nous proposons un service de digitalisation de structures qui vise à réduire l'impact du papier dans vos processus. Nous travaillons avec vous pour identifier les zones où l'utilisation de papier est la plus importante et mettons en place des solutions pour y remédier. Nous pouvons vous aider à transformer graduellement votre entreprise jusqu'à atteindre un idéal de 0% de papier si nécessaire.

                                        </p>

                                        <p>Notre équipe de professionnels expérimentés est capable de mettre en place des solutions digitales adaptées à vos besoins, telles que la création de <b>sites web</b>, la mise en place de <b>bases de données</b>, de systèmes de <b>gestion de contenu</b>, les systèmes de <b>gestion d'entreprise</b>, et bien plus encore. Nous travaillons en étroite collaboration avec vous pour comprendre vos exigences et élaborer une stratégie de transition personnalisée.

                                            En choisissant notre service de digitalisation de structures, vous bénéficierez d'un certain nombre d'avantages. Tout d'abord, vous réduirez considérablement votre empreinte environnementale en éliminant l'utilisation excessive de papier. En outre, vous augmenterez l'efficacité de vos processus et améliorerez la productivité de vos employés en accédant facilement à toutes les informations dont vous avez besoin. </p>

                                        <p>Enfin, nous sommes conscients que la transition vers un monde sans papier peut sembler intimidante. C'est pourquoi nous vous accompagnons à chaque étape du processus, en vous offrant des conseils et un soutien pour assurer une transition en douceur.

                                            En somme, si vous cherchez à réduire l'impact du papier dans vos processus et à moderniser votre entreprise, notre service de digitalisation de structures est la solution qu'il vous faut. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et comment nous pouvons vous aider à atteindre vos objectifs de manière efficace et efficiente.</p>



                                        <div className="ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey" style={{ padding: "15px", textAlign: "center", fontSize: "1.5em", fontStyle: "italic", color: "#eee"}}>« Nous vous accompagnons de bout en bout dans votre transformation digitale. »</div>


                                        <div className="row no-gutters box-shadow mb-35">
                                            <div className="col-md-4 col-sm-4">
                                                {/*ttm-fid*/}
                                                <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                                    <div className="ttm-fid-left">
                                                        <div className="ttm-fid-icon-wrapper">
                                                            <i className="flaticon flaticon-global-1 ttm-textcolor-skincolor" />
                                                        </div>
                                                    </div>
                                                    <div className="ttm-fid-contents text-left">
                                                        <h4 className="ttm-fid-inner">
                                                            <CountUp start={0} end={5} duration={4} />
                                                        </h4>
                                                        <h3 className="ttm-fid-title">ans d'expérience</h3>
                                                    </div>
                                                </div>{/* ttm-fid end*/}
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                {/*ttm-fid*/}
                                                <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                                    <div className="ttm-fid-left">
                                                        <div className="ttm-fid-icon-wrapper">
                                                            <i className="flaticon flaticon-padlock ttm-textcolor-skincolor" />
                                                        </div>
                                                    </div>
                                                    <div className="ttm-fid-contents text-left">
                                                        <h4 className="ttm-fid-inner">
                                                            <CountUp start={0} end={4} duration={5} />
                                                        </h4>
                                                        <h3 className="ttm-fid-title">Entreprises digitalisées</h3>
                                                    </div>
                                                </div>{/* ttm-fid end*/}
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                {/*ttm-fid*/}
                                                <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                                    <div className="ttm-fid-left">
                                                        <div className="ttm-fid-icon-wrapper">
                                                            <i className="flaticon flaticon-developer ttm-textcolor-skincolor" />
                                                        </div>
                                                    </div>
                                                    <div className="ttm-fid-contents text-left">
                                                        <h4 className="ttm-fid-inner">
                                                            <CountUp start={0} end={25} duration={10} />
                                                        </h4>
                                                        <h3 className="ttm-fid-title">semaines en moyenne</h3>
                                                    </div>
                                                </div>{/* ttm-fid end*/}
                                            </div>
                                        </div>


                                    </div>

                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="/images/services/digitalisation1.webp" alt="Digitalisation de structures" />
                                    </div>
                                </div>
                                {/* ttm-service-single-content-are end */}
                            </div>
                            <div className="col-lg-3 widget-area">
                                <Sidebar toHighlight={4} />
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Digitalisation;