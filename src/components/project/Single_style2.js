import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import Detailbox from './Detail_box';

export class Single_style2 extends Component {
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
                            <h1 className="title">Single Style 2</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Single-Style-02</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <section className="ttm-row project-single-section clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                            <div className="mb-35">
                                <iframe width={560} height={400} src="https://www.youtube.com/embed/7e90gBu4pas?feature=oembed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-xl-8">
                            <h4>IT Management</h4>
                            <p>hether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously change to follow the latest. Despite the competition from startups and the ever-present economic challenges, the banking industry is gradually adopting what the latest technologies have to offer.</p>
                            <p>From cloud technology to cyber risk management to machine learning in investment banking, join us as we explore the banking industry trends for 2019 and beyond.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper mt-35">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-twenty" alt="single-img-fourteen" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                </div>
                                <div className="col-md-6">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper mt-35">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-twenty" alt="single-img-twenty" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                </div>
                                <div className="col-12 mt-35">
                                    <p>One of the new trends in the banking industry, ensuring fail-safe security will also be a core question of the regardless of the type of a cloud solution and its scale. Cloud is one of the current banking industry trends as well. It is expected that the technology will serve as a foundation for the core modernization of banking organizations. ever-present economic challenges, the banking industry is gradually.</p>
                                    <p>hether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools maintained PHP frameworks provide those tools in abundance, hether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools maintained PHP frameworks provide those tools in abundance.</p>
                                </div>
                                {/* separator */}
                                <div className="col-12">
                                    <div className="separator">
                                        <div className="sep-line mt-4 mb-35" />
                                    </div>
                                </div>
                                {/* separator */}
                                <div className="col-12">
                                    <div className="ttm-nextprev-bottom-nav mb-4">
                                        <nav className="navigation post-navigation">
                                        <div className="nav-links">
                                            <div className="nav-links">
                                            <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-icon-btn-left"><i className="fa fa-angle-double-left" />Previous</a> 
                                            <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-icon-btn-right float-md-right">Next<i className="fa fa-angle-double-right" /></a> 
                                            </div>
                                        </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-xl-4">
                                <Detailbox />
                            </div>
                        </div>
                        {/* row end*/}
                        {/* row */}
                        <div className="row ttm-pf-single-related-wrapper ">
                            <div className="col-12">
                                <h4 className="mb-30">Related Projects</h4>
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Business , Campaign</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Innovative Technology</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Campaign , Technology</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>IT Management</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                {/* featured-imagebox */}
                                <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    <div className="featured-content">
                                    <div className="category">
                                        <p>Corporate , Workshop</p>
                                    </div>
                                    <div className="featured-title">
                                        <h5><a href={process.env.PUBLIC_URL + '/Projet'}>Cyber Security Analysis</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-imagebox */}
                            </div>
                        </div>{/* row end*/}
                    </div>
                </section>
            </div>
        )
    }
}


export default Single_style2;