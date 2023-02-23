import React, { Component } from 'react';
import Header from '../layout/Header';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Contact_02 extends Component {
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
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Contact 02</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row contact-section clearfix">
                    <div className="container-xl">
                    <div className="row">{/* row */}
                        <div className="col-lg-8 offset-lg-2">
                        {/* section-title */}
                        <div className="section-title with-desc text-center clearfix">
                            <div className="title-header">
                            <h5>Contact Us</h5>
                            <h2 className="title">Drop us a line</h2>
                            </div>
                        </div>{/* section-title end */}
                        </div>
                    </div>
                    {/* row end */}
                    {/* row */}
                    <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" action="#">
                        <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                            <input name="name" type="text" className="form-control bg-white border" placeholder="Full Name*" required="required" />
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                        <div className="form-group">
                            <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control bg-white border" />
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                        <div className="form-group">
                            <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control bg-white border" />
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                            <textarea name="Massage" rows={5} placeholder="Write A Massage..." required="required" className="form-control bg-white border" defaultValue={""} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="text-center">
                            <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20" value>
                            Submit Massage
                            </button>
                        </div>
                        </div>
                    </form>
                    {/* row end*/}
                    </div>
                </section>
                {/* contact-box-section */}
                <div className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 res-991-mb-60 res-991-mt-30">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style8 text-center box-shadow">
                            <div className="featured-icon">{/* featured-icon*/}
                            <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle"> 
                                <i className="far fa-envelope" />
                            </div>
                            </div>{/* featured-icon */}
                            <div className="featured-content">{/* featured-content */}
                            <div className="featured-title">
                                <h5>Email</h5>{/* featured-title */}
                            </div>
                            <div className="featured-desc">{/* featured-description */}
                                <p>
                                <a href="mailto:info@example.com">info@example.com</a><br />
                                <a href="mailto:emailexample@demo.com">emailexample@demo.com</a>
                                </p>
                            </div>
                            </div>{/* featured-content END*/}
                        </div>{/* featured-icon-box */}
                        </div>
                        <div className="col-lg-4 res-991-mb-60">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style8 text-center box-shadow">
                            <div className="featured-icon">{/* featured-icon*/}
                            <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle"> 
                                <i className="fa fa-phone" />
                            </div>
                            </div>{/* featured-icon */}
                            <div className="featured-content">{/* featured-content */}
                            <div className="featured-title">
                                <h5>Phone</h5>{/* featured-title */}
                            </div>
                            <div className="featured-desc">{/* featured-description */}
                                <p>
                                +01-4488-64585458<br />
                                11415(12456)2424
                                </p>
                            </div>
                            </div>{/* featured-content END*/}
                        </div>{/* featured-icon-box */}
                        </div>
                        <div className="col-lg-4">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style8 text-center box-shadow">
                            <div className="featured-icon">{/* featured-icon*/}
                            <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle"> 
                                <i className="ti ti-target" />
                            </div>
                            </div>{/* featured-icon */}
                            <div className="featured-content">{/* featured-content */}
                            <div className="featured-title">
                                <h5>Address</h5>{/* featured-title */}
                            </div>
                            <div className="featured-desc">{/* featured-description */}
                                <p>
                                229 Young Street Irwin, PA 15642<br />
                                New York
                                </p>
                            </div>
                            </div>{/* featured-content END*/}
                        </div>{/* featured-icon-box */}
                        </div>  
                    </div>
                    </div>
                </div>
                {/* contact-box-section end */}
                {/* map-section */}
                <section className="ttm-row map-section clearfix">
                    <div className="map-wrapper">
                    <iframe height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.73108660754!2d-122.47279800000001!3d37.803331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1591859311334!5m2!1sen!2sus" />
                    </div>
                </section>
                {/* map-section end */}
            </div>
            )
    }
}


export default Contact_02;
