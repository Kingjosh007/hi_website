import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import CountUp from 'react-countup';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Progiciels extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                
                <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix" style={{marginTop: "2em"}}>
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-9 content-area order-lg-2">

                                <div className="ttm-service-single-content-area">
                                    <div className="ttm_single_image-wrapper mb-35">
                                    <img className="img-fluid" src="/images/services/ERP.jpg" alt="single-img-twelve" style={{height: "30em"}}/>
                                    </div>
                                    <div className="ttm-service-description">
                                    <h3>Progiciels</h3>
                                    <p> Un progiciel est un logiciel conçu pour répondre à des besoins spécifiques d'une entreprise ou d'un secteur d'activité particulier. Il est souvent utilisé pour automatiser les processus métiers et faciliter la gestion de l'entreprise.
                                        <br/> Les progiciels sont souvent des solutions intégrées qui combinent plusieurs modules fonctionnels, tels que la comptabilité, la gestion des ressources humaines, la gestion de la production, la gestion des stocks, etc. Les progiciels sont généralement personnalisables pour répondre aux besoins spécifiques de chaque entreprise.</p>

                                    <p>L'utilisation d'un progiciel offrira de nombreux avantages à votre entreprise, tels que l'amélioration de l'efficacité opérationnelle, la réduction des coûts et la prise de décision plus rapide et plus précise. Chez House Innovation, nous avons une équipe d'experts en développement de logiciels qui travaillent en étroite collaboration avec nos clients pour concevoir des progiciels sur mesure qui répondent à leurs besoins spécifiques. Contactez-nous dès aujourd'hui pour discuter de la pertinence d'un progiciel pour votre entreprise.</p>

                                    
                                    {/* <div className="row no-gutters box-shadow mb-35">
                                        <div className="col-md-4 col-sm-4">
                                        <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                            <div className="ttm-fid-left">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-global-1 ttm-textcolor-skincolor" />
                                            </div>
                                            </div>
                                            <div className="ttm-fid-contents text-left">
                                            <h4 className="ttm-fid-inner">
                                                <CountUp start={0} end={15} duration={30} /> +
                                            </h4>
                                            <h3 className="ttm-fid-title">Years Experience</h3>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                        <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                            <div className="ttm-fid-left">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-padlock ttm-textcolor-skincolor" />
                                            </div>
                                            </div>
                                            <div className="ttm-fid-contents text-left">
                                            <h4 className="ttm-fid-inner">
                                                <CountUp start={0} end={1490} duration={30} /> +
                                            </h4>
                                            <h3 className="ttm-fid-title">Happy Clients</h3>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                        <div className="ttm-fid inside ttm-fid-view-lefticon style2">
                                            <div className="ttm-fid-left">
                                            <div className="ttm-fid-icon-wrapper">
                                                <i className="flaticon flaticon-developer ttm-textcolor-skincolor" />
                                            </div>
                                            </div>
                                            <div className="ttm-fid-contents text-left">
                                            <h4 className="ttm-fid-inner">
                                                <CountUp start={0} end={815} duration={30} /> +
                                            </h4>
                                            <h3 className="ttm-fid-title">New Customers</h3>
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}

                                    <h3>Avantages</h3>
                                    <div className="row mt-35">
                                        <div className="col-lg-12">
                                            <div className="row m-0 box-shadow spacing-11">
                                                <div className="col-md-12 col-lg-12 col-xl-12" style={{marginBottom: "2em"}}>
                                                    <div className="ttm_single_image-wrapper">
                                                        <img className="img-fluid" src="/images/services/ERP-1.jpg" alt="single-img-thirteen" style={{width: "80%"}} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12">
                                                    <p className="mb-30 res-1199-mt-20">Un progiciel, également connu sous le nom de logiciel de gestion intégré (ERP), offre de nombreux avantages à une entreprise. En voici quelques-uns:</p>
                                                    <ul className="ttm-list ttm-list-style-icon">
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Amélioration de l'efficacité opérationnelle:</b> un progiciel peut aider à automatiser de nombreuses tâches répétitives telles que la saisie des commandes, la gestion des stocks et la facturation. Cela permet aux employés de se concentrer sur des tâches plus importantes et de prendre des décisions plus éclairées.  </span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Meilleure visibilité sur les processus d'affaires:</b> un progiciel peut fournir une vue d'ensemble des processus d'affaires de l'entreprise, ce qui permet aux dirigeants de mieux comprendre la performance de leur entreprise et de prendre des décisions plus éclairées. </span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Réduction des coûts:</b> en automatisant les processus, un progiciel peut aider à réduire les coûts liés à la main-d'œuvre et à l'erreur humaine. De plus, en fournissant une vue d'ensemble de l'entreprise, un progiciel peut aider à identifier les domaines où les coûts peuvent être réduits.</span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Centralisation des données de l'entreprise</b></span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Amélioration de la communication entre les départements:</b> la centralisation des données facilite la communication entre les différents services. Cela peut significativement améliorer la collaboration et réduire les erreurs liées à la transmission des données.</span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><b>Adhérence aux normes et réglementations:</b> un progiciel peut aider à s'assurer que l'entreprise est conforme aux normes et réglementations en vigueur. Cela peut aider à éviter les pénalités et les amendes liées à la non-conformité.</span></li>   

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="mt-35">Questions fréquemment posées</h3>
                                    <p></p>
                                        {/* acadion */}
                                        <Accordion className="accordion style2">
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    Les ERP sont-ils adaptés à toutes les tailles d'entreprise?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                    Oui, les ERP sont conçus pour être adaptés à toutes les tailles d'entreprise. Des solutions d'ERP sont disponibles pour les petites, moyennes et grandes entreprises, et les fonctionnalités peuvent être adaptées en fonction des besoins spécifiques de chaque entreprise.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    Comment choisir le bon ERP pour mon entreprise?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                    Pour choisir le bon ERP pour votre entreprise, vous devez évaluer vos besoins et vos objectifs en matière de gestion d'entreprise. Vous devez également prendre en compte les coûts, la facilité d'utilisation et de mise en œuvre, ainsi que la compatibilité avec les autres logiciels que vous utilisez. Il est recommandé de consulter des professionnels de l'informatique, comme House Innovation, pour vous aider à prendre une décision éclairée. N'hésitez pas à nous contacter pour discuter de vos besoins en progiciel. 
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                    Comment mettre en place un ERP dans mon entreprise?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                    La mise en place d'un ERP dans votre entreprise peut prendre du temps et nécessiter des ressources. Il est recommandé de travailler avec un consultant ou un fournisseur d'ERP pour élaborer un plan de mise en œuvre qui convient à votre entreprise. Ce plan doit inclure la formation des employés, la migration des données et la mise en place de processus de contrôle de qualité pour assurer une transition en douceur.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                                {/* ttm-service-single-content-are end */}
                            </div>
                            <div className="col-lg-3 widget-area">
                                <Sidebar toHighlight={3} />
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
            )
    }
}


export default Progiciels;