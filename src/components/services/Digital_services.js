import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Digital_services extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12"> 
                        <div className="title-box text-center">
                            <div className="page-title-heading">
                            <h1 className="title">Digital Services</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Digital-Services</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-9 content-area order-lg-2">
                        {/* ttm-service-single-content-are */}
                        {/* ttm-service-single-content-are */}
                            <div className="ttm-service-single-content-area">
                                {/* section title */}
                                <div className="section-title with-desc text-left clearfix">
                                    <div className="title-header">
                                        <h5>We Build everything</h5>
                                        <h2 className="title">Advisory Services</h2>
                                    </div>
                                </div>{/* section title end */}
                                <div className="ttm_single_image-wrapper mb-35">
                                    <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-twelve" />
                                </div>
                                <div className="ttm-service-description">
                                    <h3>App Installation &amp; Cloud Services</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,<b>eaque ipsa quae ab illo inventore</b>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                    <div className="ttm_single_image-wrapper mb-35">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-fourteen" />
                                    </div>
                                    <h3>Digital Data Transformation</h3>
                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row">
                                        <div className="col-md-6">
                                        <h3>Digital Planning</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam,<b>eaque ipsa quae ab illo inventore</b>veritatis etqo quasi architecto beatae vitae dicta sunt explicabo &amp; Nemo enimjq Letraset sheets containing Lorem Ipsum.</p>
                                        <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, but the majority suffered. sheets lorem ipsum.</p>
                                        <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor">View more</a>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/535X425/444444.jpg" alt="single-img-fifteen" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* ttm-service-single-content-are end */}
                        </div>
                        <div className="col-lg-3 widget-area">
                            <Sidebar/>
                        </div>
                    </div>{/* row end */}
                    </div>
                </div>
            </div>
            )
    }
}


export default Digital_services;