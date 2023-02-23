import React, { Component } from 'react';
import Header from '../layout/Header';

export class Contact_01 extends Component {
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
                            <h1 className="title">Contact Us</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Contact 01</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row zero-padding-section clearfix">
                    <div className="container-xl">
                    <div className="row no-gutters">{/* row */}
                        <div className="col-lg-5">
                        <div className="spacing-9">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Come Visit Us At</h5>
                                <h2 className="title">Our Address</h2>
                            </div>
                            </div>{/* section title end */}
                            <div className="row">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="ti-location-pin" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Office Address</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>229 Young Street Irwin, PA 15642</p>
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
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-phone" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Our Phone Number</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>+12-323-778-4054</p>
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
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="ti ti-email" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Our Email</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>info@example.com</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                            <div className="ttm-bg-layer-inner" />
                            </div>
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Send Message</h5>
                                <h2 className="title">Drop Us A Line</h2>
                            </div>
                            </div>{/* section title end */}
                            <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" action="#">
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="name" type="text" className="form-control bg-white" placeholder="Full Name*" required="required" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="subject" type="text" placeholder="Subject" required="required" className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="form-group">
                                <textarea name="Massage" rows={5} placeholder="Write A Massage..." required="required" className="form-control bg-white" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="text-left">
                                <button type="submit" id="submit" className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" value>
                                    Submit Quote
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>
                <section className="ttm-row map-section res-991-p-0 clearfix">
                    <div className="map-wrapper">
                        <iframe height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.73108660754!2d-122.47279800000001!3d37.803331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1591859311334!5m2!1sen!2sus" />
                    </div>
                </section>
            </div>
            )
    }
}


export default Contact_01;