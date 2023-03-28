import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MDBProgress } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'react-tabs/style/react-tabs.css';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import Header from '../layout/Header';


const images = [
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg'
];

export class Element extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
  
            responsive: [{
  
              breakpoint: 1199,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 3
              }
          },
          {
        
              breakpoint: 1024,
              settings: {
              slidesToShow: 3,
              slidesToScroll: 3
              }
          },
          {
        
              breakpoint: 680,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
        };
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
                                <h1 className="title">Element</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Element</span>
                                </div>  
                            </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* element row */}
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title clearfix">
                                    <h2 className="title">Tabs</h2>
                                </div>
                                <div className="ttm-tabs ttm-tab-style-vertical">
                                        <Tabs className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <TabList>
                                                    <Tab><span>Section 1</span></Tab>
                                                    <Tab><span>Section 2</span></Tab>
                                                    <Tab><span>Section 3</span></Tab>
                                                    <Tab><span>Section 4</span></Tab>
                                                </TabList> 
                                            </div>
                                            <div className="content-tab col-lg-8 col-md-8">                                
                                                <TabPanel>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Ut enim ad minim veniam, quis nostrud.</p>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Ut enim ad minim veniam, quis nostrud.</p>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Ut enim ad minim veniam, quis nostrud.</p>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Ut enim ad minim veniam, quis nostrud.</p>
                                                </TabPanel>
                                            </div>       
                                        </Tabs>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title clearfix">
                                    <h2 className="title">Tabs</h2>
                                </div>
                                <div className="ttm-tabs ttm-tab-style-horizontal">
                                    <Tabs>
                                        <TabList>
                                            <Tab><span><i className="fa fa-cog"></i> REPAIRING</span></Tab>
                                            <Tab><span><i className="fa fa-binoculars"></i> MODELING</span></Tab>
                                            <Tab><span><i className="fa fa-tasks"></i> BRANDING</span></Tab>
                                        </TabList>      
                                        <div className="content-tab">                        
                                            <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <p className="pt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <p className="pt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <p className="pt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                </section>
                {/* element row end*/}
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                    <h2 className="title">Buttons</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-xs ttm-btn-shape-square ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-darkgrey">BUTTON TEXT <i className="ti ti-arrow-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-sm rounded ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-darkgrey">BUTTON TEXT <i className="ti ti-arrow-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-md rounded-circle ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-darkgrey">BUTTON TEXT <i className="ti ti-arrow-right" /></a>
                                </div>
                                <div className="ttm-btn-box pb-20">
                                    <a className="ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-darkgrey">BUTTON TEXT <i className="ti ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-xs ttm-btn-shape-square ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-skincolor">BUTTON TEXT <i className="ti ti-hand-point-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-sm rounded ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-skincolor">BUTTON TEXT <i className="ti ti-hand-point-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-md rounded-circle ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-skincolor">BUTTON TEXT <i className="ti ti-hand-point-right" /></a>
                                </div>
                                <div className="ttm-btn-box pb-20">
                                    <a className="ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-btn-style-border ttm-icon-btn-right ttm-bgcolor-skincolor">BUTTON TEXT <i className="ti ti-hand-point-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-xs ttm-btn-shape-square ttm-icon-btn-right ttm-bgcolor-darkgrey" >BUTTON TEXT <i className="ti ti-angle-double-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-sm rounded ttm-icon-btn-right ttm-bgcolor-darkgrey" >BUTTON TEXT <i className="ti ti-angle-double-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-md rounded-circle ttm-icon-btn-right ttm-bgcolor-darkgrey" >BUTTON TEXT <i className="ti ti-angle-double-right" /></a>
                                </div>
                                <div className="ttm-btn-box pb-20">
                                    <a className="ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-icon-btn-right ttm-bgcolor-darkgrey" >BUTTON TEXT <i className="ti ti-angle-double-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-xs ttm-btn-shape-square ttm-icon-btn-right ttm-bgcolor-skincolor" >BUTTON TEXT <i className="ti ti-arrow-circle-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-sm rounded ttm-icon-btn-right ttm-bgcolor-skincolor" >BUTTON TEXT <i className="ti ti-arrow-circle-right" /></a>
                                </div>
                                <div className="ttm-btn-box pr-20 pb-20">
                                    <a className="ttm-btn ttm-btn-size-md rounded-circle ttm-icon-btn-right ttm-bgcolor-skincolor" >BUTTON TEXT <i className="ti ti-arrow-circle-right" /></a>
                                </div>
                                <div className="ttm-btn-box pb-20">
                                    <a className="ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-icon-btn-right ttm-bgcolor-skincolor" >BUTTON TEXT <i className="ti ti-arrow-circle-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                    <h2 className="title">Accordion &amp; Progress Bar</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {/* accordian */}
                                <Accordion>
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
                                </Accordion>
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
                            <div className="col-md-6">
                                {/* progress-bar */}
                                <div className="ttm-progress-bar">
                                    <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                    <label className="float-right">88%</label>
                                    <MDBProgress className="w-100 progress-bar-color-bar_blue" material value={88}></MDBProgress>
                                </div>
                                {/* progress-bar END */}
                                {/* progress-bar */}
                                <div className="ttm-progress-bar">
                                    <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                    <label className="float-right">79%</label>
                                    <MDBProgress className="w-100 progress-bar-color-bar_green" material value={79}></MDBProgress>
                                </div>
                                {/* progress-bar END */}
                                {/* progress-bar */}
                                <div className="ttm-progress-bar">
                                    <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                    <label className="float-right">88%</label>
                                    <MDBProgress className="w-100 progress-bar-color-bar_pink" material value={88}></MDBProgress>
                                </div>
                                {/* progress-bar END */}
                                {/* progress-bar */}
                                <div className="ttm-progress-bar">
                                    <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                    <label className="float-right">79%</label>
                                    <MDBProgress className="w-100 progress-bar-color-bar_turquoise" material value={79}></MDBProgress>
                                </div>
                                {/* progress-bar END */}
                                {/* progress-bar */}
                                <div className="ttm-progress-bar">
                                    <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                    <label className="float-right">88%</label>
                                    <MDBProgress className="w-100 progress-bar-color-bar_yellow" material value={88}></MDBProgress>
                                </div>
                                {/* progress-bar END */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="section-title clearfix">
                                <h2 className="title">Facts In Digits</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-row  ttm-bgcolor-darkgrey ttm-bg clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-online-library" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={458} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Completed Projects</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-developer" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={954} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Happy Clients</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-24h" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={897} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Services Provider</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                            {/*  ttm-icon */}
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-report" />{/*  ttm-icon */} 
                                </div>
                                </div>
                                <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                <h4>
                                    <CountUp start={0} end={785} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Cloud Designs</h3>{/*  ttm-fid-title */}
                                </div>{/* ttm-fid-contents end */}
                            </div>
                            </div>
                        </div>
                        {/* row end*/}
                        </div>
                    </div>
                    <div className="container-xl mt-5">
                        <div className="row ttm-fid-row-wrapper">
                        <div className="col-md-3 col-sm-6">
                            {/*ttm-fid*/}
                            <div className="ttm-fid inside ttm-fid-view-lefticon">
                            <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper ttm-textcolor-skincolor">
                                <i className="flaticon flaticon-developer" />
                                </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                    <CountUp start={0} end={458} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Happy Customers</h3>
                            </div>
                            </div>{/* ttm-fid end*/}
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/*ttm-fid*/}
                            <div className="ttm-fid inside ttm-fid-view-lefticon">
                            <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper ttm-textcolor-skincolor">
                                <i className="flaticon flaticon-interaction" />
                                </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                    <CountUp start={0} end={642} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Projects Completed</h3>
                            </div>
                            </div>{/* ttm-fid end*/}
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/*ttm-fid*/}
                            <div className="ttm-fid inside ttm-fid-view-lefticon">
                            <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper ttm-textcolor-skincolor">
                                <i className="flaticon flaticon-global-1" />
                                </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                    <CountUp start={0} end={578} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Cloud Designs</h3>
                            </div>
                            </div>{/* ttm-fid end*/}
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/*ttm-fid*/}
                            <div className="ttm-fid inside ttm-fid-view-lefticon">
                            <div className="ttm-fid-left">
                                <div className="ttm-fid-icon-wrapper ttm-textcolor-skincolor">
                                <i className="flaticon flaticon-developer" />
                                </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                                <h4 className="ttm-fid-inner">
                                    <CountUp start={0} end={344} duration={30} />
                                </h4>
                                <h3 className="ttm-fid-title">Happy Customers</h3>
                            </div>
                            </div>{/* ttm-fid end*/}
                        </div>
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title clearfix">
                            <h2 className="title">Icons &amp; Icon Box</h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="row icon-box-wrapper">
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-aqua ttm-icon_element-size-xs rounded-circle">
                                <i className="far fa-hand-paper" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-aqua ttm-icon_element-size-xs rounded-circle">
                                <i className="fa fa-star" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-aqua ttm-icon_element-size-xs rounded-circle">
                                <i className="fa fa-user" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-aqua ttm-icon_element-size-xs rounded-circle">
                                <i className="fa fa-cloud" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-aqua ttm-icon_element-size-xs rounded-circle">
                                <i className="fa fa-flask" />
                                </div>
                            </div>
                            </div>
                        </div>
                            <div className="row icon-box-wrapper">
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-mulled_wine ttm-icon_element-size-md rounded">
                                <i className="fas fa-tachometer-alt" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-blue ttm-icon_element-size-md rounded">
                                <i className="fa fa-cubes" /> 
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-yellow ttm-icon_element-size-md rounded">
                                <i className="far fa-hand-paper" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-orange ttm-icon_element-size-md rounded">
                                <i className="fa fa-star" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-red ttm-icon_element-size-md rounded">
                                <i className="fa fa-user" />
                                </div>
                            </div>
                            </div>
                        </div>
                            <div className="row icon-box-wrapper">
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-grey ttm-icon_element-color-aqua ttm-icon_element-size-md ttm-icon_element-style-square">
                                    <i className="fa fa-cogs" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-grey ttm-icon_element-color-aqua ttm-icon_element-size-md ttm-icon_element-style-square">
                                    <i className="fa fa-user" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-grey ttm-icon_element-color-aqua ttm-icon_element-size-md ttm-icon_element-style-square">
                                    <i className="fa fa-cubes" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-grey ttm-icon_element-color-aqua ttm-icon_element-size-md ttm-icon_element-style-square">
                                    <i className="fa fa-cloud" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-grey ttm-icon_element-color-aqua ttm-icon_element-size-md ttm-icon_element-style-square">
                                    <i className="fa fa-flask" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row icon-box-wrapper">
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-yellow ttm-icon_element-size-md rounded-circle">
                                    <i className="far fa-hand-paper" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-orange ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-star" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-red ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-user" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-dark_pink ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-cloud" />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-2">
                                <div className="icon-box">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-mulled_wine ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-flask" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row icon-box-wrapper">
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-mulled_wine ttm-icon_element-size-md rounded-circle">
                                <i className="fas fa-video"></i>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-blue ttm-icon_element-size-md rounded-circle">
                                <i className="fa fa-camera" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-yellow ttm-icon_element-size-md rounded-circle">
                                <i className="far fa-hand-paper" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-orange ttm-icon_element-size-md rounded-circle">
                                <i className="fa fa-star" />
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="icon-box">
                                <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-red ttm-icon_element-size-md rounded-circle">
                                <i className="fa fa-user" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="row mt-40">
                            <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-textcolor-skincolor ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-process" />
                                </div>
                                </div>
                                <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                    <h5>Product Designs</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                    <p>Our firm is expert to create an efficient user interface that makes user interaction is lively.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                            <div className="sep-line mt-4 mb-4" />
                        </div>
                        {/* separator */}
                        <div className="row">
                            <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-textcolor-skincolor ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-system" />
                                </div>
                                </div>
                                <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                    <h5>Big Data &amp; Analytics</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                    <p>Statistical analysis to help an organization to gain insights from large information web sets.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                            <div className="sep-line mt-4 mb-4" />
                        </div>
                        {/* separator */}
                        <div className="row">
                            <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-textcolor-skincolor ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-data" />
                                </div>
                                </div>
                                <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                    <h5>Maintain App Data</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                    <p>We Create the optimal platform to develop and run digital applications for our clients app.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                            <div className="sep-line mt-4 mb-4" />
                        </div>
                        {/* separator */}
                        <div className="row">
                            <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                <div className="ttm-icon ttm-icon_element-border ttm-textcolor-skincolor ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-data" />
                                </div>
                                </div>
                                <div className="featured-content">
                                <div className="featured-title">{/* featured title */}
                                    <h5>Maintain App Data</h5>
                                </div>
                                <div className="featured-desc">{/* featured desc */}
                                    <p>We Create the optimal platform to develop and run digital applications for our clients app.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Clients Logo</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-row res-991-p-0 ttm-bgcolor-darkgrey ttm-bg clearfix">
                        <div className="container-xl">
                            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5}>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                                                <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                                                <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                                                <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                                                <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttm-box-col-wrapper">
                                    <div className="client-box ttm-box-view-boxed-logo">
                                        <div className="client">
                                            <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                                                <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Portfolio</h2>
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                        )}
                        <Slider className="row slick_slider ttm-boxes-spacing-10px" {...slick_slider} slidesToShow={4}>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Business Seminar</a></h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>IT Management</a></h5>
                                    </div>
                                </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Cyber Security Analysis</a></h5>
                                    </div>
                                </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Neural Networking</a></h5>
                                    </div>
                                </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Data Management</a></h5>
                                    </div>
                                </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                                </div>{/* featured-thumbnail end*/}
                                {/* ttm-box-view-overlay */}
                                <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                    <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                    <a href={process.env.PUBLIC_URL + '/Projet'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                </div>{/* ttm-box-view-overlay end*/}
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Web Devlopment</a></h5>
                                    </div>
                                </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                        </Slider>
                        <Slider className="row slick_slider ttm-boxes-spacing-10px mt-5" {...slick_slider} slidesToShow={3}>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Business , Campaign</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Innovative Technology</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Campaign , Technology</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>IT Management</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Corporate , Workshop</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Cyber Security Analysis</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Innovation , Technology</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Web Development</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Corporate</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Neural Networking</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                        <div className="category">
                                        <p>Technology , Workshop</p>
                                        </div>
                                        <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Data Management</a></h5>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div> 
                        </Slider>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Team members</h2>
                                </div>
                            </div>
                        </div>
                        <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                    </div>
                                    <p className="category">Web Designer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                    </div>
                                    <p className="category">Project Manager</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Amanda Brown</a></h5>
                                    </div>
                                    <p className="category">Consultant Officer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jennifer Garcia</a></h5>
                                    </div>
                                    <p className="category">IT Service Officer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                    </div>
                                    <p className="category">Web Designer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                    </div>
                                    <p className="category">Project Manager</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Amanda Brown</a></h5>
                                    </div>
                                    <p className="category">Consultant Officer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jennifer Garcia</a></h5>
                                    </div>
                                    <p className="category">IT Service Officer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                    </div>
                                    <p className="category">Web Designer</p>{/* category */}
                                </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                    <div className="ttm-social-links-wrapper">
                                    <ul className="social-icons list-inline">{/* social-icons */}
                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                    </ul>
                                    </div>
                                </div> 
                                <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                    </div>
                                    <p className="category">Project Manager</p>{/* category */}
                                </div>
                                </div>
                            </div>
                        </Slider>
                        <Slider className="row slick_slider ttm-boxes-spacing-30px mt-5" {...slick_slider} slidesToShow={3}>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                                        <div className="ttm-social-links-wrapper">
                                            <ul className="social-icons list-inline">{/* social-icons */}
                                                <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                                <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                                <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                                <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                            </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                            </div>
                                            <p className="category">Web Designer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                            </div>
                                            <p className="category">Project Manager</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Amanda Brown</a></h5>
                                            </div>
                                            <p className="category">Consultant Officer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jennifer Garcia</a></h5>
                                            </div>
                                            <p className="category">IT Service Officer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                            </div>
                                            <p className="category">Web Designer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                            </div>
                                            <p className="category">Project Manager</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Amanda Brown</a></h5>
                                            </div>
                                            <p className="category">Consultant Officer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jennifer Garcia</a></h5>
                                            </div>
                                            <p className="category">IT Service Officer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Robert Liam</a></h5>
                                            </div>
                                            <p className="category">Web Designer</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-team style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                                        <div className="ttm-social-links-wrapper">
                                        <ul className="social-icons list-inline">{/* social-icons */}
                                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                                            <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                        </div>
                                    </div> 
                                    <div className="ttm-box-view-overlay">
                                        <div className="featured-content">
                                            <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_details'}>Jessica Ethan</a></h5>
                                            </div>
                                            <p className="category">Project Manager</p>{/* category */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>                    
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Team members</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ttm-row ttm-bgcolor-darkgrey ttm-bg clearfix">
                        <div className="container-xl">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <Slider className="slick_slider" arrows={false}>
                                        <div className="testimonials text-center"> 
                                            <div className="testimonial-content">{/* testimonials-content */}
                                            <div className="testimonial-avatar">
                                                <div className="testimonial-img">{/* testimonials-img */}
                                                <img className="img-center" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
                                                </div>
                                            </div>
                                            <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                                            <div className="ttm-ratting-star">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="testimonial-caption">{/* testimonials-caption */}
                                                <h6>Victor Williamson</h6>
                                                <label>Web Devloper</label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="testimonials text-center"> 
                                            <div className="testimonial-content">{/* testimonials-content */}
                                            <div className="testimonial-avatar">
                                                <div className="testimonial-img">{/* testimonials-img */}
                                                <img className="img-center" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
                                                </div>
                                            </div>
                                            <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                                            <div className="ttm-ratting-star">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="testimonial-caption">{/* testimonials-caption */}
                                                <h6>Victor Williamson</h6>
                                                <label>Web Devloper</label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="testimonials text-center"> 
                                            <div className="testimonial-content">{/* testimonials-content */}
                                            <div className="testimonial-avatar">
                                                <div className="testimonial-img">{/* testimonials-img */}
                                                <img className="img-center" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
                                                </div>
                                            </div>
                                            <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                                            <div className="ttm-ratting-star">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="testimonial-caption">{/* testimonials-caption */}
                                                <h6>Victor Williamson</h6>
                                                <label>Web Devloper</label>
                                            </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row res-991-text-center">
                            <div className="col-md-6 col-lg-4 res-991-mb-20">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Progiciels'}>IT Consultancy</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Progiciels'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                                {/* featured-imagebox-services */}
                            </div>
                            <div className="col-md-6 col-lg-4 res-991-mb-20">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Digital_services'}>Digital Services</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Digital_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                                {/* featured-imagebox-services */}
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-services */}
                                <div className="featured-imagebox featured-imagebox-services style1">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div> 
                                    <div className="featured-content box-shadow">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Advisory_services'}>Advisory Services</a></h5>
                                    </div>
                                    <div className="featured-desc">{/* featured-title */}
                                        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Advisory_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section>
                <section className="element-row element-style clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title clearfix">
                                <h2 className="title">Blog</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                            {/* featured-imagebox-blog */}
                            <div className="featured-imagebox featured-imagebox-blog style2 mb-20">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                <div className="ttm-blog-overlay-iconbox">
                                    <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                </div>
                                <div className="ttm-box-view-overlay" />
                                </div>
                                <div className="featured-content">{/* featured-content */}
                                <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                    <span className="ttm-entry-date">
                                    <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">17<span className="entry-month entry-year">Apr</span></time>
                                    </span>
                                </div>
                                <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/article'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                                </div>
                                <div className="post-meta">{/* post-meta */}
                                    <span className="ttm-meta-line"><i className="fa fa-comments" />2,comments</span>
                                    <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                </div>
                                </div>
                            </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-20">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                    <div className="ttm-blog-overlay-iconbox">
                                        <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                    </div>
                                    <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                        <span className="ttm-entry-date">
                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">Dec</span></time>
                                        </span>
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/article'}>Define World Best IT Solution Technology</a></h5>
                                    </div>
                                    <div className="post-meta">{/* post-meta */}
                                        <span className="ttm-meta-line"><i className="fa fa-comments" />3,comments</span>
                                        <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-md-6 col-lg-4">
                            {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-20">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                    <div className="ttm-blog-overlay-iconbox">
                                        <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                    </div>
                                    <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                        <span className="ttm-entry-date">
                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">22<span className="entry-month entry-year">May</span></time>
                                        </span>
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/article'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                    </div>
                                    <div className="post-meta">{/* post-meta */}
                                        <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                                        <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                        </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog mb-20">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                    <div className="ttm-blog-overlay-iconbox">
                                        <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                    </div>
                                    <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                        <span className="ttm-entry-date">
                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">17<span className="entry-month entry-year">Apr</span></time>
                                        </span>
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/article'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                                    </div>
                                    <div className="post-meta">{/* post-meta */}
                                        <span className="ttm-meta-line"><i className="fa fa-comments" />2,comments</span>
                                        <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                    </div>
                                    <div className="featured-desc">{/* featured-description */}
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/article'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                                </div>
                                <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog mb-20">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                    <div className="ttm-blog-overlay-iconbox">
                                        <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                    </div>
                                    <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                        <span className="ttm-entry-date">
                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">Dec</span></time>
                                        </span>
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/article'}>Define World Best IT Solution Technology</a></h5>
                                    </div>
                                    <div className="post-meta">{/* post-meta */}
                                        <span className="ttm-meta-line"><i className="fa fa-comments" />3,comments</span>
                                        <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                    </div>
                                    <div className="featured-desc">{/* featured-description */}
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/article'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                                </div>
                                <div className="col-md-6 col-lg-4">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog mb-20">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                    <div className="ttm-blog-overlay-iconbox">
                                        <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                    </div>
                                    <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                        <span className="ttm-entry-date">
                                        <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">22<span className="entry-month entry-year">May</span></time>
                                        </span>
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/article'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                    </div>
                                    <div className="post-meta">{/* post-meta */}
                                        <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                                        <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                    </div>
                                    <div className="featured-desc">{/* featured-description */}
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/article'}>Read More <i className="ti ti-angle-double-right" /></a>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                                </div>
                            </div>
                    </div>
                </section>
            </div>
            )
    }
}


export default Element;