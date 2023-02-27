import React, { Component } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Aboutus_02 extends Component {
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
      
            breakpoint: 767,
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
                            <h1 className="title">About Us</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>About Us 02</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* aboutus-section */}
                <section className="ttm-row aboutus-section-style3 clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center mr-35 res-991-m-0">
                            <img className="img-fluid" src="https://via.placeholder.com/500X521/444444.jpg" title="single-img-nine" alt="single-img-nine" />
                            </div>{/* ttm_single_image-wrapper end */}
                            <div className="ttm-highlight-fid-style-2">
                            {/*ttm-fid*/}
                            <div className="ttm-fid inside without-icon">
                                <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={135} duration={30} />+
                                </h4>
                                <h3 className="ttm-fid-title">Successully Projects </h3>
                                </div>
                            </div>{/* ttm-fid end*/}
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>About us</h5>
                                <h2 className="title">Product development for<br /> better <span>Business</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s web applications.</p>
                            </div>
                            </div>{/* section title end */}
                            {/* row */}
                            <div className="row mt-15">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style3 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-tourism" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>DevOps Development</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>Our firm is expert to create an efficient user interface that makes user interaction is lively and run digital applications.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                            <div className="sep-line mt-4 mb-3" />
                            </div>
                            {/* separator */}
                            <div className="row">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style3 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-process" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Automated Software</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>Statistical analysis to help an organization to gain insights from large information for web optimal platform to develop.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>
                 {/* aboutus-section end */}
                {/* zero-padding-section */}
                <section className="ttm-row zero-padding-section res-991-p-0 mt_80 res-991-mt-0 clearfix">
                    <div className="container-xl">
                    <div className="row no-gutters">
                    <div className="col-lg-6">
                        {/* col-bg-img-one */}
                        <div className="col-bg-img-one ttm-bg ttm-col-bgimage-yes ttm-left-span res-991-h-auto">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                            <div className="ttm-bg-layer-inner" />
                        </div>
                        </div>
                        {/* Responsive View image */}
                        <img src="https://via.placeholder.com/1533X720/888888.jpg" className="img-fluid ttm-equal-height-image" alt="col-bgimage-1" />
                    </div>
                    <div className="col-lg-6 z-9">
                        <div className="ttm-bgcolor-skincolor ttm-textcolor-white position-relative ttm-right-span">
                        <div className="spacing-1">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Why House Innovation</h5>
                                <h2 className="title">We deal with the aspects of professional <span className="ttm-textcolor-white">IT Services</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>Our IT services converge business and technology experts to help to manage business processes of all categories.</p>
                            </div>
                            </div>{/* section title end */}
                            <div className="row mt-40">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
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
                                    <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
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
                                    <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
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
                    </div>
                </div>
                </section>
                {/* zero-padding-section end */}
                {/* team-section */}
                <section className="ttm-row team-section clearfix">
                <div className="container-xl">
                    <div className="row align-items-center mb-5">
                    <div className="col-lg-5 res-991-text-center">
                        <div className="section-title style2 mb-0 clearfix">
                        <div className="title-header mb-0">
                            <h5>About us</h5>
                            <h2 className="title">Meet our <span>Leadership</span></h2>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5 res-991-text-center">
                        <div className="title-desc">The positive distinction within the World Inspiring of Success and Connections of People and Organizations.</div>
                    </div>
                    <div className="col-lg-2 pl-0 text-right res-991-text-center res-991-mt-20">
                        <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey"> Read More </a>
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
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liamss</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jennifer Garcia</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liam</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jennifer Garcia</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liam</a></h5>
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
                            <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                            <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                            <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div> 
                      <div className="featured-content box-shadow">
                        <div className="featured-title">{/* featured-title */}
                          <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
                        </div>
                        <p className="category">Project Manager</p>{/* category */}
                      </div>
                    </div>
                  </div>
                </Slider>
                </div>
                </section>
                {/* team-section end*/}
                {/* our-partner-section */}
                <section className="ttm-row our-client-section res-991-p-0 ttm-bgcolor-skincolor clearfix">
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
                        <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>Read More <i className="ti ti-angle-double-right" /></a>
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
    
    
    export default Aboutus_02;