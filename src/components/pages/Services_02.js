import React, { Component } from 'react';
import Header from '../layout/Header';

export class Services_02 extends Component {
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
                            <h1 className="title">Our Services</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Services 02</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                <section className="ttm-row grid-section clearfix">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-8 offset-lg-2">
                            {/* section-title */}
                            <div className="section-title with-desc text-center clearfix">
                                <div className="title-header">
                                <h5>Fast Growing Services</h5>
                                <h2 className="title">Providing High-Performance Services For Multiple <span>Information &amp; Technologies!</span></h2>
                                </div>
                            </div>{/* section-title end */}
                            </div>
                        </div>
                        {/* row end */}
                        {/* row */}
                        <div className="row">
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
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
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Progiciels'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
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
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Digital_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        {/* featured-imagebox-services */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
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
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Advisory_services'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        {/* featured-imagebox-services */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
                            <div className="featured-thumbnail">{/* featured-thumbnail */}
                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                            </div> 
                            <div className="featured-content box-shadow">
                            <div className="featured-title">{/* featured-title */}
                                <h5><a href={process.env.PUBLIC_URL + '/DesignGraphique'}>Data Structuring</a></h5>
                            </div>
                            <div className="featured-desc">{/* featured-title */}
                                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/DesignGraphique'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        {/* featured-imagebox-services */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
                            <div className="featured-thumbnail box-shadow">{/* featured-thumbnail */}
                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                            </div> 
                            <div className="featured-content box-shadow">
                            <div className="featured-title">{/* featured-title */}
                                <h5><a href={process.env.PUBLIC_URL + '/Digitalisation'}>Experience Design</a></h5>
                            </div>
                            <div className="featured-desc">{/* featured-title */}
                                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/Digitalisation'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        {/* featured-imagebox-services */}
                        </div>
                        <div className="col-md-6 col-lg-4">
                        {/* featured-imagebox-services */}
                        <div className="featured-imagebox featured-imagebox-services style1 mb-30">
                            <div className="featured-thumbnail">{/* featured-thumbnail */}
                            <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                            </div> 
                            <div className="featured-content box-shadow">
                            <div className="featured-title">{/* featured-title */}
                                <h5><a href={process.env.PUBLIC_URL + '/SitesVitrines'}>Content Engineering</a></h5>
                            </div>
                            <div className="featured-desc">{/* featured-title */}
                                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-2" href={process.env.PUBLIC_URL + '/SitesVitrines'}>Read More <i className="ti ti-angle-double-right" /></a>
                            </div>
                        </div>
                        {/* featured-imagebox-services */}
                        </div>
                    </div>
                    {/* row end*/}
                    </div>
                </section>
            </div>
            )
    }
}


export default Services_02;