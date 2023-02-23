import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from '../layout/Header';

export class Data_structuring extends Component {
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
                            <h1 className="title">Data Structuring</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Data-Structuring</span>
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
                                <div className="ttm-service-description">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-eighteen" />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <h3 className="res-767-mt-20">Exterior Structuring</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, scrambled it to make a type specimen book.</p>
                                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the.</p>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-6">
                                        <h4>Commercial Data Planning</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,&amp;<b>eaque ipsa quae ab illo inventore</b>veritatis et quasi architecto.</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
                                        </div>
                                        </div>
                                    </div>
                                    <h3>Data Services</h3>
                                    <div className="ttm_single_image-wrapper mb-35 res-991-mb-20">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-fourteen" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                                    </div>
                                    {/* separator */}
                                    <div className="row mb-35">
                                        <div className="col-md-6">
                                        <h4>Commercial Data Planning</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,&amp;<b>eaque ipsa quae ab illo inventore</b>veritatis et quasi architecto.</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="ttm_single_image-wrapper res-767-mt-20">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="single-img-nineteen" />
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


export default Data_structuring;