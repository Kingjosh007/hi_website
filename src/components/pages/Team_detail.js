import React, { Component } from 'react';
import Header from '../layout/Header';
import { MDBProgress } from 'mdbreact';

export class Team_detail extends Component {
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
                            <h1 className="title">Team Details</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href="/"><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Our Expert</span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Team Details</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row team-details-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-4">
                        <div className="ttm-featured-wrapper"> 
                            <div className="featured-thumbnail text-center">
                            <img className="img-fluid" src="images/team-member/team-img01.jpg" alt="image" />
                            </div> 
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="ttm-team-member-content shadow-box res-991-mt-30">
                            <div className="ttm-team-member-single-list">
                            <h2 className="ttm-team-member-single-title">Michal Holway</h2>
                            <span className="ttm-team-member-single-position">Web Designer</span>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.               </p>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-4 mb-4" />
                            </div>
                            {/* separator */}
                            <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                <ul className="ttm-team-details-list clearfix">
                                    <li>
                                    <div className="ttm-team-list-title"><i className="fa fa-phone" /> Phone :</div>
                                    <div className="ttm-team-list-value"><a href="tel:+1800200145">+1800200145</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-email" /> Email :</div>
                                    <div className="ttm-team-list-value"><a href="mailto:info@example.com">info@example.com</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-world" /> Website :</div>
                                    <div className="ttm-team-list-value"><a target="_blank" href="https://www.themetechmount.com/">https://www.themetechmount.com/</a></div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-time" /> Experience :</div>
                                    <div className="ttm-team-list-value">6 Years</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-calendar" /> Since :</div>
                                    <div className="ttm-team-list-value">2012</div>
                                    </li>
                                    <li>
                                    <div className="ttm-team-list-title"><i className="ti ti-location-pin" /> Address Info :</div>
                                    <div className="ttm-team-list-value">Los Angeles, USA, Los Angeles, USA</div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            {/* separator */}
                            <div className="separator">
                                <div className="sep-line mt-3 mb-4" />
                            </div>
                            {/* separator */}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row">{/* row */}
                        <div className="col-md-6">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">69%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={69}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                        <div className="col-md-6 res-767-mt-30">
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                                <label className="float-right">77%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={77}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                            {/* progress-bar */}
                            <div className="ttm-progress-bar">
                                <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                                <label className="float-right">69%</label>
                                <MDBProgress className="w-100 ttm-bgcolor-darkgrey" material value={69}></MDBProgress>
                            </div>
                            {/* progress-bar END */}
                        </div>
                    </div>
                    {/* row end */}
                    <div className="row mt-5">
                        <div className="col-12">
                        <h4>Career Guidelines</h4>
                        <p className="mb-5">Prior to joining Integrio, he spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP &amp; Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <h4>Contact Me</h4>
                        </div>
                        <div className="col-12">
                        <div className="row">
                            <div className="col-lg-4">
                            <div className="member-info-box border mb-30">
                                <div className="timing-box">
                                <i className="ti ti-time" />
                                <h5>Working Time</h5>
                                </div>
                                <ul className="timing-list">
                                <li>
                                    <span className="day">Monday - Friday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                <li>
                                    <span className="day">Saturday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                <li>
                                    <span className="day">Sunday :</span>
                                    <span className="time">8.00 - 10.00</span>
                                </li>
                                </ul>
                            </div>
                            <div className="member-info-box border">
                                <div className="timing-box">
                                <i className="flaticon flaticon-developer" />
                                <h5>General Information</h5>
                                </div>
                                <ul className="info-list">
                                <li>
                                    <i className="ti ti-location-pin" />
                                    <span>Los Angeles, USA, Los Angeles, USA</span>
                                </li>
                                <li>
                                    <i className="ti ti-mobile" />
                                    <span>(+01) 123 456 7890</span>
                                </li>
                                <li>
                                    <i className="ti ti-comment" />
                                    <span>info@example.com</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="member-contact-form border res-991-mt-30">
                                <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" action="#">
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="name" type="text" className="form-control ttm-bgcolor-grey" placeholder="Full Name*" required="required" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <div className="form-group">
                                    <input name="subject" type="text" placeholder="Subject" required="required" className="form-control  ttm-bgcolor-grey" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <div className="form-group">
                                    <textarea name="Massage" rows={6} placeholder="Write A Massage..." required="required" className="form-control  ttm-bgcolor-grey" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="text-left">
                                    <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" value>
                                        Book An Appointment
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            )
    }
}


export default Team_detail;