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
                                    <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-twelve" />
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

                                    <h3>Why Choose Us?</h3>
                                    <div className="row mt-35">
                                        <div className="col-lg-12">
                                            <div className="row m-0 box-shadow spacing-11">
                                                <div className="col-md-6 col-lg-12 col-xl-6">
                                                    <div className="ttm_single_image-wrapper">
                                                        <img className="img-fluid" src="https://via.placeholder.com/385X353/444444.jpg" alt="single-img-thirteen" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-12 col-xl-6">
                                                    <p className="mb-30 res-1199-mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s standard dummy text ever since the 1500s.</p>
                                                    <ul className="ttm-list ttm-list-style-icon">
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Which material types can you work with? </span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Can I have multiple in a single feature?</span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Is Smart Lock required for instant apps?</span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Which material types can you work with? </span></li>
                                                        <li><i className="fa fa-check-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Is Smart Lock required for instant apps?</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="mt-35">Analyzing IT services</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                        {/* acadion */}
                                        <Accordion className="accordion style2">
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        When do I need an Interior Designer?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Why do you have a design fee and purchasing fee on the product?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        What types of systems do you support?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p className="mb-0">
                                                        Praesentium voluptatum deleniti atque corrupti quos as excepturi sint occaecati cupiditate non provident, similique sunt in
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