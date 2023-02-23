import React, { Component } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';


export class Home3_mainpage extends Component {
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
            {/* service-section */}
            <section className="ttm-row service-section-style2 res-991-pb-0 ttm-bgcolor-grey clearfix">
                <div className="container-xl">
                <div className="row">{/* row */}
                    <div className="col-lg-12">
                    {/* section title */}
                    <div className="section-title with-desc text-center clearfix">
                        <div className="title-header">
                        <h5>We Make Connections</h5>
                        <h2 className="title">We provide best <span>Services</span></h2>
                        </div>
                    </div>{/* section title end */}
                    </div>
                </div>
                <div className="row no-gutters">{/* row */}
                    <div className="col-md-6 col-lg-3">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box style6">
                        <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                            <h5>Experience Design</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                            <p>Our firm is an expert to creates an efficient user interface that make user interaction.</p>
                        </div>
                        </div>
                        <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-system" />{/*  ttm-icon */} 
                        </div>
                        </div>
                        <a className="ttm-btn btn-inline style2">Read More </a>
                    </div>{/*  featured-icon-box END */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box style6">
                        <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                            <h5>IT Consultancy</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                            <p>We provide an IT management services is for according to an organization’s needs.</p>
                        </div>
                        </div>
                        <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-computer" />{/*  ttm-icon */} 
                        </div>
                        </div>
                        <a className="ttm-btn btn-inline style2">Read More </a>
                    </div>{/*  featured-icon-box END */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box style6">
                        <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                            <h5>Cyber Security</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                            <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
                        </div>
                        </div>
                        <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-chart" />{/*  ttm-icon */} 
                        </div>
                        </div>
                        <a className="ttm-btn btn-inline style2" >Read More </a>
                    </div>{/*  featured-icon-box END */}
                    </div>
                    <div className="col-md-6 col-lg-3">
                    {/*  featured-icon-box */} 
                    <div className="featured-icon-box style6">
                        <div className="featured-content">{/*  featured-content */}
                        <div className="featured-title">{/*  featured-title */}
                            <h5>Digital Services</h5>
                        </div>
                        <div className="featured-desc">{/*  featured-desc */}
                            <p>We develop, migrate &amp; work on applications to ensure that run capably on cloud.</p>
                        </div>
                        </div>
                        <div className="featured-icon">{/*  featured-icon */} 
                        <div className="ttm-icon ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-data" />{/*  ttm-icon */} 
                        </div>
                        </div>
                        <a className="ttm-btn btn-inline style2">Read More </a>
                    </div>{/*  featured-icon-box END */}
                    </div>
                </div>
                {/* row end */}
                </div>
            </section>
            {/* service-section end*/}
            {/* progress-bar-section */}
            <section className="ttm-row zero-padding-section ttm-bgcolor-grey clearfix">
                <div className="container-xl">
                <div className="row no-gutters">
                    <div className="col-md-12">
                    <div className="ttm-bgcolor-white ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-7 position-relative z-1">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-bg-layer-inner" />
                        </div>
                        <div className="layer-content">
                        <div className="row">
                            <div className="col-lg-6">
                            {/* ttm_single_image-wrapper */}
                            <div className="ttm_single_image-wrapper">
                                <img className="img-fluid" src="https://via.placeholder.com/547X582/444444.jpg" title="single-img-five" alt="single-img-five" />
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
                                    <h5>About Altech</h5>
                                    <h2 className="title">We deal with the aspects of professional <span>IT Services</span></h2>
                                </div>
                                <div className="title-desc">
                                    <p>We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us.</p>
                                </div>
                                </div>{/* section title end */}
                                <div className="mt-4">
                                    {/* progress-bar */}
                                    <div className="ttm-progress-bar" data-percent="90%">
                                    <div className="progress-bar-title">UI/UX Design</div>{/* progress-bar-title */}
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar ttm-bgcolor-skincolor" />
                                    </div>
                                    <div className="progress-bar-percent" data-percentage={90}>90%</div>{/* progress-bar-percent */}
                                    </div>
                                    {/* progress-bar END */}
                                    {/* progress-bar */}
                                    <div className="ttm-progress-bar" data-percent="80%">
                                    <div className="progress-bar-title">App Development</div>{/* progress-bar-TITLE */}
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar ttm-bgcolor-skincolor" />
                                    </div>
                                    <div className="progress-bar-percent" data-percentage={80}>80%</div>{/* progress-bar-PERCENT */}
                                    </div>
                                    {/* progress-bar END */}
                                    {/* progress-bar */}
                                    <div className="ttm-progress-bar" data-percent="90%">
                                    <div className="progress-bar-title">UI/UX Design</div>{/* progress-bar-title */}
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar ttm-bgcolor-skincolor" />
                                    </div>
                                    <div className="progress-bar-percent" data-percentage={90}>90%</div>{/* progress-bar-percent */}
                                    </div>
                                    {/* progress-bar END */}
                                    {/* progress-bar */}
                                    <div className="ttm-progress-bar" data-percent="80%">
                                    <div className="progress-bar-title">App Development</div>{/* progress-bar-TITLE */}
                                    <div className="progress-bar-inner">
                                        <div className="progress-bar ttm-bgcolor-skincolor" />
                                    </div>
                                    <div className="progress-bar-percent" data-percentage={80}>80%</div>{/* progress-bar-PERCENT */}
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
            {/* team-section */}
            <section className="ttm-row team-member-section clearfix">
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
                  <div className="col-lg-2 pl-0 text-right res-991-mt-20 res-991-text-center">
                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"> Read More </a>
                  </div>
                </div>
                <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3} autoplay={false}>
                  <div className="ttm-box-col-wrapper">
                    <div className="featured-imagebox featured-imagebox-team style1">
                      <div className="featured-thumbnail">{/* featured-thumbnail */}
                        <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
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
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
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
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
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
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
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
                        <div className="ttm-social-as-wrapper">
                          <ul className="social-icons list-inline">{/* social-icons */}
                            <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                            <li className="social-aedin"><a><i className="fab fa-aedin-in" /></a></li>
                            <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
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
                </Slider>
              </div>
            </section>
            {/* team-section end*/}
            {/* testimonial-section */}
            <section className="ttm-row only-testimonial-section bg-img11 pb-0 res-991-pb-0 clearfix">
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
                        <Slider className="testimonial-slide style1 pt-0 slick_slider res-991-pb-0" arrows={false} dots={false}>
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
                            
                          </Slider>                      
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial-section end */}
            {/* about-us-section */}
            <section className="ttm-row zero-padding-section ttm-bgcolor-grey clearfix">
              <div className="container-xl">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <div className="ttm-bgcolor-white ttm-bg ttm-col-bgcolor-yes ttm-right-span spacing-8 position-relative z-1">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-bg-layer-inner" />
                      </div>
                      <div className="layer-content">
                        <div className="row">
                          <div className="col-lg-6">
                            <div>
                              {/* section title */}
                              <div className="section-title with-desc clearfix">
                                <div className="title-header">
                                  <h5>Why Altech</h5>
                                  <h2 className="title">We deal with the aspects of professional <span>IT Services</span></h2>
                                </div>
                                <div className="title-desc">
                                  <p>Web designing in a powerful way of just not a profession, however, in a passion for our Company. We have a tendency to believe the idea that smart looking of any website is the first impression on visitors. And the smart design.</p>
                                  <p>We have a special team for website style who has been involved in designing professional websites.</p>
                                </div>
                              </div>{/* section title end */}
                              {/* row */}
                              <div className="row no-gutters mt-35">
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                  <ul className="ttm-list ttm-list-style-icon">
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Web And Mobile Application </span></li>
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">New Domain Registration</span></li>
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Data Text Synchronization</span></li>
                                  </ul>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                  <ul className="ttm-list ttm-list-style-icon">
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Improving Our Website Design</span></li>
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Web &amp; Email Hosting Services </span></li>
                                    <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Artificial Intelligence Web App</span></li>
                                  </ul>
                                </div>
                              </div>
                              {/* row END */}
                            </div>
                          </div>
                          <div className="col-lg-6 res-991-text-center">
                            <div className="res-991-mt-30">
                              {/* ttm_single_image-wrapper */}
                              <div className="ttm_single_image-wrapper">
                                <img className="img-fluid" src="https://via.placeholder.com/538X512/444444.png" title="single-img-six" alt="single-img-six" />
                              </div>{/* ttm_single_image-wrapper end */}
                              <div className="about-overlay-03">
                                <h3>25 Years Experience</h3>
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
            {/* about-us-section end*/}
            {/* first-row-title-section */}
            <section className="ttm-row third-row-title-section ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img12 mt_230 res-991-mt-0 clearfix">
              <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
              <div className="container-xl">
                <div className="row">{/* row */}
                  <div className="col-lg-6 col-xl-7">
                    <div className="text-center">
                      <img src="images/map-png.png" alt="map-png" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-5">
                    <div className="text-center">
                      <div className="mb-4">
                        <img src="https://via.placeholder.com/112X118/444444.png" alt="icon-image" />
                      </div>
                      <div className="separator">
                        <div className="sep-line mt-2 mb-4 desc-line" />
                      </div>
                      <div>
                        <p className="fs-20">Call Us Now!</p>
                      </div>
                      {/* section-title */}
                      <div className="row-title clearfix">
                          <h2 className="title">+12 3456 78901</h2>
                          <h2 className="title fs-38 mb-3">For Expert Consultation</h2>
                      </div>{/* section-title end */}
                      <div>
                        <p className="fs-20 mb-0">Or Send Message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* first-row-title-section end*/}
            {/* price text section */}
            <section className="ttm-row price-text-section res-991-pb-0 ttm-bgcolor-grey clearfix">
              <div className="container-xl">
                <div className="row">
                  <div className="col-md-12">
                    {/* section title */}
                    <div className="section-title text-center with-desc clearfix">
                      <div className="title-header">
                        <h5>Our Pricing Plans</h5>
                        <h2 className="title">A monthly project fee <span>Price Plans</span></h2>
                      </div>
                    </div>{/* section title end */}
                  </div>
                </div>
              </div>
            </section>
            {/* price text section end*/}
            {/* price section*/}
            <section className="ttm-row topzero-padding-section res-991-pt-0 clearfix">
              <div className="container-xl">
                {/* row */}
                <div className="row no-gutters mt_100 res-991-mt-0">
                  <div className="col-md-4">
                    {/*ttm-pricing-plan*/}
                    <div className="ttm-pricing-plan box-shadow text-left clearfix">
                      <div className="ttm-ptablebox-title"><h3>Professional</h3></div>{/*title*/}
                      <div className="ttm-ptablebox-desc">Designed for businesses with standard health requirements</div>
                      <div className="ttm-ptablebox-content">
                        <div className="ttm-ptablebox-price-w">
                          <div className="ttm-ptablebox-cur-symbol-before">$</div>
                          <div className="ttm-ptablebox-price">70.00</div>{/*price*/}
                          <div className="ttm-ptablebox-frequency">per month</div>
                        </div>
                        <div className="ttm-ptablebox-features">{/*features*/}
                          <ul className="ttm-feature-lines">
                            <li>24/7 Support</li>
                            <li>Advanced Options</li>
                            <li>16 GB Storage</li>
                            <li>Unlimited Support</li>
                          </ul>
                        </div>
                      </div>
                      <div className="price_btn">
                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-grey mb-3 w-100">Get Started</a>
                      </div>
                    </div>{/*ttm-pricing-plan*/}
                  </div>
                  <div className="col-md-4">
                    {/*ttm-pricing-plan*/}
                    <div className="ttm-pricing-plan ttm-pricing-plan-col box-shadow text-left clearfix">
                      <div className="ttm-featured-title"><i className="fa fa-star" />MOST POPULAR</div>
                      <div className="ttm-ptablebox-title"><h3>Standard</h3></div>{/*title*/}
                      <div className="ttm-ptablebox-desc">Designed for businesses with standard health requirements</div>
                      <div className="ttm-ptablebox-content">
                        <div className="ttm-ptablebox-price-w">
                          <div className="ttm-ptablebox-cur-symbol-before">$</div>
                          <div className="ttm-ptablebox-price">90.00</div>{/*price*/}
                          <div className="ttm-ptablebox-frequency">per month</div>
                        </div>
                        <div className="ttm-ptablebox-features">{/*features*/}
                          <ul className="ttm-feature-lines">
                            <li>24/7 Support</li>
                            <li>Advanced Options</li>
                            <li>16 GB Storage</li>
                            <li>Unlimited Support</li>
                          </ul>
                        </div>
                      </div>
                      <div className="price_btn">
                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor w-100">Get Started</a>
                      </div>
                    </div>{/*ttm-pricing-plan*/}
                  </div>
                  <div className="col-md-4">
                    {/*ttm-pricing-plan*/}
                    <div className="ttm-pricing-plan box-shadow text-left clearfix">
                      <div className="ttm-ptablebox-title"><h3>Basic</h3></div>{/*title*/}
                      <div className="ttm-ptablebox-desc">Designed for businesses with standard health requirements</div>
                      <div className="ttm-ptablebox-content">
                        <div className="ttm-ptablebox-price-w">
                          <div className="ttm-ptablebox-cur-symbol-before">$</div>
                          <div className="ttm-ptablebox-price">60.00</div>{/*price*/}
                          <div className="ttm-ptablebox-frequency">per month</div>
                        </div>
                        <div className="ttm-ptablebox-features">{/*features*/}
                          <ul className="ttm-feature-lines">
                            <li>24/7 Support</li>
                            <li>Advanced Options</li>
                            <li>16 GB Storage</li>
                            <li>Unlimited Support</li>
                          </ul>
                        </div>
                      </div>
                      <div className="price_btn">
                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-grey mb-3 w-100" >Get Started</a>
                      </div>
                    </div>{/*ttm-pricing-plan*/}
                  </div>
                </div>{/* row end */}
              </div>
            </section>
            {/* price section end*/}
          </div>
        )
    }
}


export default Home3_mainpage;
