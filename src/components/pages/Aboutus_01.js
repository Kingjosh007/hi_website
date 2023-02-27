import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Aboutus_01 extends Component {
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
                {/* aboutus-section */}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-6">
                        {/* section title */}
                        <div className="section-title with-desc clearfix">
                            <div className="title-header">
                            <h5>À propos de nous</h5>
                            <h2 className="title">We are here to IT Solution with 20 years of <span>experience</span></h2>
                            </div>
                            <div className="title-desc">
                            <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors. And the smart design of any website is the starting point.</p>
                            <p>We have a special team for website style who has been involved in designing professional websites of all categories.</p>
                            </div>
                        </div>{/* section title end */}
                        {/* row */}
                        <div className="row no-gutters mt-4 mb-4">
                            <div className="col-md-6 col-lg-6 col-sm-6">
                            <ul className="ttm-list ttm-list-style-icon">
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">24/7 Hours Support Flexible Price </span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Web And Mobile Application </span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">New Domain Registration</span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Data Text Synchronization</span></li>
                            </ul>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6">
                            <ul className="ttm-list ttm-list-style-icon">
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Quick To Respond Flexible Price </span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Improving Our Website Design</span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Web &amp; Email Hosting Services </span></li>
                                <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Artificial Intelligence Web App</span></li>
                            </ul>
                            </div>
                        </div>{/* row END*/}
                        <p className="mb-2">High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s for web applications.</p>
                        <a className="ttm-btn ttm-bgcolor-skincolor ttm-btn-size-md mt-4">More About Us</a>
                        </div>
                        <div className="col-lg-6">
                        <div className="position-relative res-991-mt-30">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper text-sm-center">
                            <img className="img-fluid" src="https://via.placeholder.com/533X708/444444.png" title="single-img-seven" alt="single-img-seven" />
                            </div>{/* ttm_single_image-wrapper end */}
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>
                {/* aboutus-section end*/}
                {/* progress-bar-section */}
                <section className="ttm-row zero-padding-section res-991-p-0 ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                        <div className="ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-7 position-relative z-1">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                            <div className="ttm-bg-layer-inner" />
                            </div>
                            <div className="layer-content">
                            <div className="row">
                                <div className="col-lg-6">
                                {/* ttm_single_image-wrapper */}
                                <div className="ttm_single_image-wrapper">
                                    <img className="img-fluid" src="https://via.placeholder.com/547X581/444444.jpg" title="single-img-eight" alt="single-img-eight" />
                                </div>{/* ttm_single_image-wrapper end */}
                                <div className="about-overlay-02">
                                    <h3>15 Years of</h3>
                                    <p>IT Business Experience</p>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="res-991-mt-30">
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
                                    <div className="mt-4">
                                        {/* progress-bar */}
                                        <div className="ttm-progress-bar">
                                            <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                            <label className="float-right">90%</label>
                                            <MDBProgress className="w-100" material value={90}></MDBProgress>
                                        </div>
                                        {/* progress-bar END */}
                                        {/* progress-bar */}
                                        <div className="ttm-progress-bar">
                                            <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                            <label className="float-right">80%</label>
                                            <MDBProgress className="w-100" material value={80}></MDBProgress>
                                        </div>
                                        {/* progress-bar END */}
                                        {/* progress-bar */}
                                        <div className="ttm-progress-bar">
                                            <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                            <label className="float-right">90%</label>
                                            <MDBProgress className="w-100" material value={90}></MDBProgress>
                                        </div>
                                        {/* progress-bar END */}
                                        {/* progress-bar */}
                                        <div className="ttm-progress-bar">
                                            <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                            <label className="float-right">80%</label>
                                            <MDBProgress className="w-100" material value={80}></MDBProgress>
                                        </div>
                                        {/* progress-bar END */}
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
                {/* progress-bar-section end */}
                {/* fid-section */}
                <section className="ttm-row fid-section ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img10 mt_225 res-991-mt-0 clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                    <div className="container-xl">
                    {/* row */}
                    <div className="row">
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                        <div className="col-md-3 col-6">
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
                </section>
                {/* fid-section end */}
                {/* testimonial-section */}
                <section className="ttm-row only-testimonial-section bg-img11 clearfix">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title with-desc text-center clearfix">
                                <div className="title-header">
                                    <h5>Recent Projects</h5>
                                    <h2 className="title">Check out our work <span>Process</span></h2>
                                </div>
                            </div>{/* section title end */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                            <Slider className="testimonial-slide style1 slick_slider pb-0" arrows={false} dots={false}>
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
                                        <label className="mb-0">Web Devloper</label>
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
                                        <label className="mb-0">Web Devloper</label>
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
                                        <label className="mb-0">Web Devloper</label>
                                    </div>
                                    </div>
                                </div>
                                
                            </Slider>                      
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-section end */}
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
                    <div className="featured-imagebox featured-imagebox-blog style2">
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
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog style2">
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
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog style2">
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
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-blog style2">
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


export default Aboutus_01;