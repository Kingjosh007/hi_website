import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from '../layout/Header';

export class Services_01 extends Component {
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
                            <h1 className="title">Our Services</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services 01</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {/* about-services-section */}
                <section className="ttm-row about-services-section clearfix">
                    <div className="container-xl">
                    <div className="row align-items-center">{/* row */}
                        <div className="col-lg-6">
                        <div className="position-relative">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center">
                            <img className="img-fluid" src="https://via.placeholder.com/550X604/444444.png" title="single-img-ten" alt="single-img-ten" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="res-991-mt-30">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Our Services</h5>
                                <h2 className="title">Would you like to take over<br /> our <span>web services</span></h2>
                            </div>
                            <div className="title-desc">
                                <p>We have a special team for website style who has been involved in designing professional websites of all the web app categories.</p>
                            </div>
                            </div>{/* section title end */}
                            {/* row */}
                            <div className="row mt-25">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box iconalign-before-heading">
                                <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-icon ttm-bgcolor-grey style1">
                                    <i className="ti ti-info ttm-num" />
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                    <h5>Exclusive Service</h5>
                                    </div>
                                </div>
                                <div className="featured-desc">{/* featured-desc */}
                                    <p>Lorem Ipsum is simply dummy textover of the printing and typesetting industryin. printing and typesetting industry.</p>
                                </div>
                                </div>{/* featured-icon-box */}
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
                                <div className="featured-icon-box iconalign-before-heading">
                                <div className="featured-content">{/* featured-content */}
                                    <div className="ttm-icon ttm-bgcolor-grey style1">
                                    <i className="ti ti-info ttm-num" />
                                    </div>
                                    <div className="featured-title">{/* featured-title */}
                                    <h5>Experts Team</h5>
                                    </div>
                                </div>
                                <div className="featured-desc">{/* featured-desc */}
                                    <p>Lorem Ipsum is simply dummy textover of the printing and typesetting industryin. printing and typesetting industry.</p>
                                </div>
                                </div>{/* featured-icon-box */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>
                {/* about-services-section end */}
                {/* services-slide-section */}
                <section className="ttm-row services-slide-section ttm-bgcolor-grey ttm-bg ttm-bgimage-yes bg-img14 clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
                    <div className="container-xl">                        
                        <div className="row align-items-center">{/* row */}
                            <div className="col-lg-9 col-xl-9 col-md-9">
                            {/* section-title */}
                            <div className="section-title style2 clearfix">
                                <div className="title-header">
                                <h5>Fast Growing Information &amp; technologies Estates.</h5>
                                <h2 className="title">Providing High-Performance Services For Multiple <span>Information &amp; Technologies!</span></h2>
                                </div>
                            </div>{/* section-title end */}
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-3">
                            <div className="text-md-right">
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey mb-5" > Read More </a>
                            </div>
                            </div>
                        </div>
                        <Slider className="position-relative z-1 row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
                            <div className="ttm-box-col-wrapper">
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
                            <div className="ttm-box-col-wrapper">
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
                            <div className="ttm-box-col-wrapper">
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
                            {/* featured-imagebox-services */}
                            <div className="ttm-box-col-wrapper">
                            <div className="featured-imagebox featured-imagebox-services style1">
                                <div className="featured-thumbnail">{/* featured-thumbnail */}
                                <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                </div> 
                                <div className="featured-content box-shadow">
                                <div className="featured-title">{/* featured-title */}
                                    <h5><a href={process.env.PUBLIC_URL + '/Data_structuring'}>Data Structuring</a></h5>
                                </div>
                                <div className="featured-desc">{/* featured-title */}
                                    <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Data_structuring'}>Read More <i className="ti ti-angle-double-right" /></a>
                                </div>
                            </div>
                            {/* featured-imagebox-services */}
                        </div>                             
                        </Slider>
                    </div>
                </section>
                {/* services-slide-section end */}
                {/* portfolio-section */}
                <section className="ttm-row zero-padding-section mt_230  res-991-mt-0 position-relative clearfix">
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Innovative Technology</a></h5>
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>IT Management</a></h5>
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Cyber Security Analysis</a></h5>
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Development</a></h5>
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
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
                                <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
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
                        <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5} arrows={false}>
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
                            <h5><a herf={process.env.PUBLIC_URL + '/Single_blog'}>You Must Try 20 Secret Of Digital Transform</a></h5>
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
                            <h5><a herf={process.env.PUBLIC_URL + '/Single_blog'}>Define World Best IT Solution Technology</a></h5>
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
                            <h5><a herf={process.env.PUBLIC_URL + '/Single_blog'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
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
                            <h5><a herf={process.env.PUBLIC_URL + '/Single_blog'}>Digital Conference Of IT Tech Events in 2019</a></h5>
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


export default Services_01;