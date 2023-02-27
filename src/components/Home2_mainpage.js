import React, { Component } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FadeIn from 'react-fade-in';
import CarouselPage2 from './banner/Home2_banner';

export class Home2_mainpage extends Component {
     render() { 
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
            <section className="ttm-row aboutus-section-style2 clearfix">
              <div className="container-xl">
                <div className="row no-gutters align-items-center">{/* row */}
                  <div className="col-lg-6 res-991-text-center res-991-mb-40">
                    {/* ttm_single_image-wrapper */}
                    <div className="ttm_single_image-wrapper">
                      <img className="img-fluid" src="https://via.placeholder.com/568X675/444444.png" title="single-img-two" alt="single-img-two" />
                    </div>{/* ttm_single_image-wrapper end */}
                  </div>
                  <div className="col-lg-6">
                    <div className="spacing-4 ttm-bgcolor-grey">
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>About House Innovation</h5>
                          <h2 className="title">We deal with the aspects of professional <span>IT Services</span></h2>
                        </div>
                        <div className="title-desc">
                          <p>We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us.</p>
                        </div>
                      </div>{/* section title end */}
                      {/* row */}
                      <div className="row no-gutters mt-20">
                        <div className="col-md-6 col-lg-6 col-sm-6">
                          {/*  featured-icon-box */} 
                          <div className="featured-icon-box style3 left-icon icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                              <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                <i className="ti ti-medall" />{/*  ttm-icon */} 
                              </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5>Award Ceremony</h5>
                              </div>
                              <div className="featured-desc">{/*  featured-desc */}
                                <p>Quickly productivate just in time strategic theme.</p>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6">
                          {/*  featured-icon-box */} 
                          <div className="featured-icon-box style3 left-icon icon-align-top">
                            <div className="featured-icon">{/*  featured-icon */} 
                              <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                <i className="ti ti-bookmark-alt" />{/*  ttm-icon */} 
                              </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5>Certified Company</h5>
                              </div>
                              <div className="featured-desc">{/*  featured-desc */}
                                <p>Quickly productivate just in time strategic theme.</p>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                      </div>{/* row END*/}
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-4 mb-4" />
                      </div>
                      {/* separator */}
                      <div className="row align-items-center">
                        <div className="col-md-3 col-lg-4 col-5">
                          <div className="text-left pt-15">
                            <img className="img-fluid" src="https://via.placeholder.com/145X60/444444.png" alt="about-sign" />
                          </div>
                        </div>
                        <div className="col-md-9 col-lg-8 col-7">
                          {/*  featured-icon-box */} 
                          <div className="featured-icon-box without-icon text-left pt-15">
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5>Jhon Martin</h5>
                              </div>
                              <div className="featured-desc">{/*  featured-desc */}
                                <p>Chairman &amp; Founder House Innovation</p>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                </div>{/* row end*/}
              </div>
            </section>
            <section className="ttm-row bottomzero-padding-section bg-img6 position-relative z-1 clearfix">
              <div className="container-xl">
                <div className="row no-gutters">
                  <div className="col-lg-10 mb_80 res-991-mb-0">
                    <div className="ttm-bgcolor-skincolor ttm-textcolor-white">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                          <div className="ttm-bg-layer-inner"></div>
                      </div>
                      <div className="layer-content">
                        <div className="spacing-5">
                          {/* section title */}
                          <div className="section-title mb-4 clearfix">
                            <div className="title-header">
                              <h5>About House Innovation</h5>
                              <h2 className="title">Trusted by 5,000+ <span>Happy Customers</span></h2>
                            </div>
                            <div className="title-desc">
                              <p>We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us. These reviews we’re onto something.</p>
                            </div>
                          </div>{/* section title end */}
                          <div className="row pt-3">
                            <div className="col-md-4">
                              {/*  featured-icon-box */} 
                              <div className="featured-icon-box style4 left-icon">
                                <div className="featured-icon">{/*  featured-icon */} 
                                  <div className="ttm-icon ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-24h" />{/*  ttm-icon */} 
                                  </div>
                                </div>
                                <div className="featured-content">{/*  featured-content */}
                                  <div className="featured-title">{/*  featured-title */}
                                    <h5 className="fw-500">100% Satisfaction</h5>
                                  </div>
                                </div>
                              </div>{/*  featured-icon-box END */}
                            </div>
                            <div className="col-md-4">
                              {/*  featured-icon-box */} 
                              <div className="featured-icon-box style4 left-icon">
                                <div className="featured-icon">{/*  featured-icon */} 
                                  <div className="ttm-icon ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                                  </div>
                                </div>
                                <div className="featured-content">{/*  featured-content */}
                                  <div className="featured-title">{/*  featured-title */}
                                    <h5 className="fw-500">World Class Architect</h5>
                                  </div>
                                </div>
                              </div>{/*  featured-icon-box END */}
                            </div>
                            <div className="col-md-4">
                              {/*  featured-icon-box */} 
                              <div className="featured-icon-box style4 left-icon">
                                <div className="featured-icon">{/*  featured-icon */} 
                                  <div className="ttm-icon ttm-icon_element-size-md">
                                    <i className="flaticon flaticon-code" />{/*  ttm-icon */} 
                                  </div>
                                </div>
                                <div className="featured-content">{/*  featured-content */}
                                  <div className="featured-title">{/*  featured-title */}
                                    <h5 className="fw-500">World Class Design</h5>
                                  </div>
                                </div>
                              </div>{/*  featured-icon-box END */}
                            </div>
                          </div>
                          <div className="row ttm-fid-row-wrapper">
                            <div className="col-md-4 col-sm-4">
                              {/*ttm-fid*/}
                              <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                                <div className="ttm-fid-left">{/*ttm-fid-left*/}
                                  <div className="ttm-fid-icon-wrapper">
                                    <i className="flaticon flaticon-developer" />
                                  </div>
                                </div>
                                <div className="ttm-fid-contents text-left">{/*ttm-fid-contents*/}
                                  <h4 className="ttm-fid-inner">
                                    <CountUp start={0} end={478} duration={30} />
                                  </h4>
                                  <h3 className="ttm-fid-title">Happy Customers</h3>{/*ttm-fid-title*/}
                                </div>
                              </div>{/* ttm-fid end*/}
                            </div>
                            <div className="col-md-4 col-sm-4">
                              {/*ttm-fid*/}
                              <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                                <div className="ttm-fid-left">
                                  <div className="ttm-fid-icon-wrapper">
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
                            <div className="col-md-4 col-sm-4">
                              {/*ttm-fid*/}
                              <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                                <div className="ttm-fid-left">
                                  <div className="ttm-fid-icon-wrapper">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>    
            {/* service section   */}
            <section className="ttm-row services-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes bg-img7 clearfix">
              <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="container-xl">
                <div className="row">{/* row */}
                  <div className="col-lg-6 offset-lg-3">
                    {/* section title */}
                    <div className="section-title with-desc text-center clearfix">
                      <div className="title-header">
                        <h5>Our Services</h5>
                        <h2 className="title">We run all kinds of IT services with 20 years of <span className="ttm-textcolor-white">experience</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style5 text-left res-767-mb-20">
                      <div className="featured-icon">{/* featured-icon*/}
                        <div className="ttm-icon ttm-icon_element-size-lg"> 
                          <i className="flaticon flaticon-intelligent" />
                        </div>
                      </div>{/* featured-icon */}
                      <div className="featured-content">{/* featured-content */}
                        <div className="featured-title">
                          <h5>Experience Design</h5>{/* featured-title */}
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>UX team create web solutions that are both intuitively tailored to match our clients’ specific tasks.</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>{/* featured-content END*/}
                    </div>{/* featured-icon-box */}
                  </div>
                  <div className="col-lg-4 col-md-4">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style5 text-left res-767-mb-20">
                      <div className="featured-icon">{/* featured-icon*/}
                        <div className="ttm-icon ttm-icon_element-size-lg"> 
                          <i className="flaticon flaticon-analytics" />
                        </div>
                      </div>{/* featured-icon */}
                      <div className="featured-content">{/* featured-content */}
                        <div className="featured-title">
                          <h5>Digital Services</h5>{/* featured-title */}
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>Digital solutions have transformed the world’s customer expectations and the profitable growths.</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>{/* featured-content END*/}
                    </div>{/* featured-icon-box */}
                  </div>
                  <div className="col-lg-4 col-md-4">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style5 text-left">
                      <div className="featured-icon">{/* featured-icon*/}
                        <div className="ttm-icon ttm-icon_element-size-lg"> 
                          <i className="flaticon flaticon-analysis" />
                        </div>
                      </div>{/* featured-icon */}
                      <div className="featured-content">{/* featured-content */}
                        <div className="featured-title">
                          <h5>Content Engineering</h5>{/* featured-title */}
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>We are here in the fields of organizing bridging the gaps between strategy and the development.</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>{/* featured-content END*/}
                    </div>{/* featured-icon-box */}
                  </div>
                </div>{/* row end*/}
              </div>
            </section>
            {/* service section end  */}
            <section className="ttm-row zero-padding-section mt_95 res-991-mt-0 res-991-pb-0 clearfix">
              <div className="container-xl">
                <div className="row no-gutters">
                  <div className="col-lg-3">
                    {/* col-bg-img-three */}
                    <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes res-991-h-auto">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-bg-layer-inner" />
                      </div>
                    </div>
                    {/* Responsive View image */}
                    <img src="https://via.placeholder.com/1200X628/444444.jpg" className="img-fluid ttm-equal-height-image" alt="col-bgimage-3" />
                  </div>
                  <div className="col-lg-9">
                    <div className="ttm-bgcolor-skincolor ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-bg-layer-inner" />
                      </div>
                      <div className="layer-content position-relative">
                        <div className="spacing-6 ttm-textcolor-white">
                          <h3 className="mb-2">We Take Care of Your Technology Focus on Your Business</h3>
                          <p className="mb-0">Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* tab section */}
            <section className="ttm-row tab-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h5>What We Offer For You</h5>
                        <h2 className="title">Here are some <span>Milestones </span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                    <Tabs defaultIndex={2} onSelect={index => console.log(index)}>{/* tabs */}
                      <TabList className="tabs">
                        <Tab className="tab" title="Hi-Tech"><span><i className="flaticon flaticon-report" /> Hi-Tech</span></Tab>
                        <Tab className="tab" title="Media"><span><i className="flaticon flaticon-computer" /> Media</span></Tab>
                        <Tab className="tab" title="Industrial"><span><i className="flaticon flaticon-system" /> Industrial</span></Tab>
                        <Tab className="tab" title="Banking"><span><i className="flaticon flaticon-interaction" /> Banking</span></Tab>
                        <Tab className="tab" title="Medical"><span><i className="flaticon flaticon-analysis" /> Medical</span></Tab>
                      </TabList>
                      <div className="box-shadow content-tab">
                        <FadeIn>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                    <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                    <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                    <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Complete software platform development </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="grey-border text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="text-left res-991-mt-30">
                                    <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                    <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                    <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                    <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Complete software platform development </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner active">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                    <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                    <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                    <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Complete software platform development </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="grey-border text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="text-left res-991-mt-30">
                                    <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                    <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                    <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                    <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Complete software platform development </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                            <div className="content-inner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="text-left">
                                    <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                    <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                    <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                    <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Complete software platform development </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="grey-border res-991-mt-30 text-left">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper with-border15">
                                      <img className="img-fluid grey-boder" src="https://via.placeholder.com/495X432/444444.jpg" title="single-img-three" alt="single-img-three" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                  </div>
                                </div>
                              </div>{/* row end */}
                            </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        </FadeIn>
                      </div>
                    </Tabs>  {/* tabs end*/}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* tab section end */}
            {/* testimonial section */}
            <section className="ttm-row bottomzero-padding-section ttm-bgcolor-grey ttm-bg ttm-bgimage-yes bg-img8 clearfix">
              <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
              <div className="container-xl">
                <div className="row">{/* row */}
                  <div className="col-lg-6">
                    <div className="position-relative z-1">{/* spacing-2 */}
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>About us</h5>
                          <h2 className="title">We deal with the aspects of professional <span>IT Services</span></h2>
                        </div>
                      </div>{/* section title end */}
                      <div className="testimonial-slide style1 box-sahdow ttm-bgcolor-white col-bg-img-four">
                          <Slider className="row slick_slider" arrows={false} dots={true}>
                            <div className="col-lg-12">
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
                            </div>
                            <div className="col-lg-12">
                              <div className="testimonials text-center"> 
                                <div className="testimonial-content">{/* testimonials-content */}
                                  <div className="testimonial-avatar">
                                    <div className="testimonial-img">{/* testimonials-img */}
                                      <img className="img-center lazyloaded" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
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
                            </div>
                            <div className="col-lg-12">
                              <div className="testimonials text-center"> 
                                <div className="testimonial-content">{/* testimonials-content */}
                                  <div className="testimonial-avatar">
                                    <div className="testimonial-img">{/* testimonials-img */}
                                      <img className="img-center lazyloaded" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
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
                            </div>
                          </Slider>
                      
                      </div>
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line" />
                      </div>
                      {/* separator END*/}
                      <div className="card border-0">
                        <div className="card-body">
                          {/* featured-icon-box */}
                          <div className="featured-icon-box style2 left-icon icon-align-top">
                            <div className="featured-icon">{/* featured-icon */}
                              <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                <i className="flaticon flaticon-call" />
                              </div>
                            </div>
                            <div className="featured-content">
                              <div className="featured-desc">{/* featured desc */}
                                <p>Need a service &amp; ready to book? Call us</p>
                              </div>
                              <div className="featured-title">{/* featured title */}
                                <h5>Toll Free Number: <strong className="ttm-textcolor-skincolor">1800 1245 7890</strong></h5>
                              </div>
                            </div>
                          </div>{/* featured-icon-box END*/}
                        </div>
                      </div>
                    </div>{/* spacing-2 END */}
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative res-991-mt-30">
                      {/* ttm_single_image-wrapper */}
                      <div className="ttm_single_image-wrapper text-right">
                        <img className="img-fluid" src="https://via.placeholder.com/434X668/444444.jpg" title="single-img-four" alt="single-img-four" />
                      </div>{/* ttm_single_image-wrapper end */}
                      <div className="ttm-highlight-fid-style-1">
                        {/*ttm-fid*/}
                        <div className="ttm-fid inside without-icon">
                          <div className="ttm-fid-contents text-left">
                            <h4 className="ttm-fid-inner ttm-textcolor-skincolor">
                            <CountUp start={0} end={25} duration={30} />
                            </h4>
                            <h3 className="ttm-fid-title">Years of Experience IT Bussiness </h3>
                          </div>
                        </div>{/* ttm-fid end*/}
                      </div>
                    </div>
                  </div>
                </div>{/* row end */}
              </div>
            </section>
            {/* testimonial section end */}
            {/* first-row-title-section */}
            <section className="ttm-row second-row-title-section mt_90 ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img9 clearfix">
              <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
              <div className="container-xl">
                <div className="row">{/* row */}
                  <div className="col-lg-8 offset-lg-2">
                    <div className="text-center">
                      <div className="ttm-play-icon-btn mb-5">
                        <div className="ttm-play-icon-animation">
                          <a id="playbutton">
                            <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                              <i className="fa fa-play" />
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
                      {/* section-title */}
                      <div className="section-title with-desc text-center clearfix">
                        <div className="title-header">
                          <h2 className="title">We Provide Outsourced IT Services For Small &amp; <span className="ttm-textcolor-white">Mid-Sized Business</span></h2>
                        </div>
                        <div className="title-desc">Appropriate for your specific business, making it easy for<br /> you to have quality IT services. What We Do</div>
                      </div>{/* section-title end */}
                      <div className="mt-5">
                        <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">More Services</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* first-row-title-section end*/}
            {/* portfolio-section */}
            <section className="ttm-row bottomzero-padding-section position-relative clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h5>Look At Portfolio</h5>
                        <h2 className="title">Check out our <span>Portfolio</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                {/* row */}
                <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Innovative Technology</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div>
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>IT Management</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div>
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Cyber Security Analysis</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div>
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Web Development</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div>
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Neural Networking</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div>
                  <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Data Management</a></h5>
                        </div>
                      </div>
                    </div>{/* featured-imagebox */}
                  </div> 
                </div>{/* row end */}
              </div>
            </section>
            {/* portfolio-section end */}
            {/* our-partner-section */}
            <section className="ttm-row our-partner-section ttm-bgcolor-skincolor mt_90 res-991-mt-0 res-991-p-0 clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-12 text-center">
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
              </div>
            </section>
            {/* our-partner-section end */}
            {/* blog-section */}
            <section className="ttm-row blog-section clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h5>Our Blog</h5>
                        <h2 className="title">Check Out Our <span>Latest News</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
                <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                        <div className="ttm-blog-overlay-iconbox">
                          <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                        </div>
                        <div className="post-meta">{/* post-meta */}
                          <span className="ttm-meta-line"><i className="fa fa-comments" />2,comments</span>
                          <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                        <div className="ttm-blog-overlay-iconbox">
                          <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Define World Best IT Solution Technology</a></h5>
                        </div>
                        <div className="post-meta">{/* post-meta */}
                          <span className="ttm-meta-line"><i className="fa fa-comments" />3,comments</span>
                          <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href="single_blog">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                        <div className="ttm-blog-overlay-iconbox">
                          <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                        </div>
                        <div className="post-meta">{/* post-meta */}
                          <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                          <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                        </div>
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>Read More <i className="ti ti-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                        <div className="ttm-blog-overlay-iconbox">
                          <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
                        </div>
                        <div className="ttm-box-view-overlay" />
                      </div>
                      <div className="featured-content">{/* featured-content */}
                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                          <span className="ttm-entry-date">
                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">04<span className="entry-month entry-year">Aug</span></time>
                          </span>
                        </div>
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Digital Conference Of IT Tech Events in 2019</a></h5>
                        </div>
                        <div className="post-meta">{/* post-meta */}
                          <span className="ttm-meta-line"><i className="fa fa-comments" />4,comments</span>
                          <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                        </div>
                        <div className="featured-desc">{/* featured-description */}
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                        </div>
                        <a href={process.env.PUBLIC_URL + '/Single_blog'} className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">Read More <i className="ti ti-angle-double-right" /></a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
            {/* blog-section end */}
          </div>
        
        )
    }
}

export default Home2_mainpage;