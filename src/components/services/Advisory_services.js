import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Digital_services extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                
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
                                <h4>About Advisory Services</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>There re many variaions of passags of Lorem Ipsum available, but majority have suffeed alteration in some , by injectd humour, or randomised ws which ly believable.There re many variaions of passags of Lorem Ipsum available, but majority have suffeed alteration in some</p>
                                {/* separator */}
                                <div className="separator">
                                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                </div>
                                {/* separator */}
                                <div className="row">
                                    <div className="col-md-8">
                                    <h4>Fully Trained Employees</h4>
                                    <p className="mb-35 res-991-mb-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuswqo doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo et inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ab ilo loream inventore veritatis et quasi architecto beatae vitae dicta sunt sed ut the perspiciatis unde omnis iste natus error sit voluptatem totam ipsum.</p>
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey">Read more</a>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="ttm_single_image-wrapper res-767-mt-20">
                                        <img className="img-fluid" src="https://via.placeholder.com/480X550/444444.jpg" alt="single-img-sixteen" />
                                    </div>
                                    </div>
                                </div>
                                {/* separator */}
                                <div className="separator">
                                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                </div>
                                {/* separator */}
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="ttm_single_image-wrapper mb-35 res-991-mb-20">
                                        <img className="img-fluid" src="https://via.placeholder.com/480X550/444444.jpg" alt="single-img-seventeen" />
                                    </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Quality Maintain Every Time</h4>
                                    <p className="mb-35 res-991-mb-20">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuswqo doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo et inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ab ilo loream inventore veritatis et quasi architecto beatae vitae dicta sunt sed ut the perspiciatis unde omnis iste natus error sit voluptatem totam ipsum.</p>
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-bgcolor-darkgrey">Read more</a>
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