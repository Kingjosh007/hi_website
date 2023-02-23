import React, { Component } from 'react';
import { fadeIn } from 'react-animations'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Header from '../layout/Header';

export class Faq extends Component {
    render() {

        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">FAQ's</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>faq</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row faqs-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-8 offset-lg-2">
                        {/* section-title */}
                        <div className="section-title with-desc text-center clearfix">
                            <div className="title-header">
                            <h5>Faq's</h5>
                            <h2 className="title">Do you have any questions?</h2>
                            </div>
                        </div>{/* section-title end */}
                        </div>
                    </div>
                    {/* row end */}
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-6">
                        {/* ttm_single_image-wrapper */}
                        <div className="ttm_single_image-wrapper">
                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-eleven" alt="single-img-eleven" />
                        </div>{/* ttm_single_image-wrapper end */}
                        <div className="ttm-play-icon-btn ttm-play-icon-btn-center">
                            <div className="ttm-play-icon-animation"> 
                                <a id="playbutton">
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                                        <i className="ti ti-control-play" />
                                    </div>
                                </a>
                                <div id="videobox">
                                    <i id="close-btn" className="fa fa-times"></i>
                                    <div id="video-wrapper">
                                        <iframe width="500" height="500" src="https://www.youtube.com/embed/7e90gBu4pas" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 res-991-mt-30">
                            {/* accordian */}
                            <Accordion preExpanded={['foo']}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What does having Managed your services provider?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Praesentium voluptatum deleniti atque corrupti quos as excepturi sint occaecati cupiditate non provident, similique sunt in
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What you about say your Business palnning?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Praesentium voluptatum deleniti atque corrupti quos as excepturi sint occaecati cupiditate non provident, similique sunt in
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
                                        <p>
                                            Praesentium voluptatum deleniti atque corrupti quos as excepturi sint occaecati cupiditate non provident, similique sunt in
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
                                        <p>
                                            Praesentium voluptatum deleniti atque corrupti quos as excepturi sint occaecati cupiditate non provident, similique sunt in
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    {/* row end*/}
                    {/* row */}
                    <div className="row mt-70 res-991-mt-30">
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Make It Simple</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4 res-991-mb-20">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Strategy</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-lg-4">
                        {/*  featured-icon-box */} 
                        <div className="featured-icon-box left-icon style7 icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                            <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-md">
                                <i className="flaticon flaticon-analytics" />{/*  ttm-icon */} 
                            </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                            <div className="featured-title">{/*  featured-title */}
                                <h5>Unique Planning</h5>
                            </div>
                            <div className="featured-desc">{/*  featured-desc */}
                                <p>Lorem Ipsum is simply dummy text  ever since of the printing and typesetting industry.</p>
                            </div>
                            </div>
                        </div>{/*  featured-icon-box END */}
                        </div>
                    </div>{/* row end*/}
                    </div>
                </section>
            </div>
            )
    }
}


export default Faq;