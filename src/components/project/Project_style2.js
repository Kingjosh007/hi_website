import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg',
    'https://via.placeholder.com/600X750/444444.jpg'
  ];

export class Project_style2 extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
    render() {
        const { photoIndex, isOpen } = this.state;
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
                            <h1 className="title">Gallery Style 2</h1>
                            </div>{/* /.page-title-captions */}
                            <div className="breadcrumb-wrapper">
                            <span>
                                <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                            </span>
                            <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                            <span>Project-Style-02</span>
                            </div>  
                        </div>
                        </div>{/* /.col-md-12 */}  
                    </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                {/* page-title end*/}
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                    }
                  />
                )}
                <div className="ttm-row tab-section clearfix">
                    <div className="container-xl">
                        <div className="row multi-columns-row ttm-boxes-spacing-5px">
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Business Seminar</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>IT Management</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Cyber Security Analysis</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                            <div className="col-lg-4 col-md-6 ttm-box-col-wrapper">
                                {/* featured-imagebox-portfolio */}
                                <div className="featured-imagebox featured-imagebox-portfolio style1">
                                    {/* featured-thumbnail */}
                                    <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600X750/444444.jpg" alt="image" />
                                    </div>{/* featured-thumbnail end*/}
                                    {/* ttm-box-view-overlay */}
                                    <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                                        <a onClick={() => this.setState({ isOpen: true })}><i className="ti ti-search" /></a>
                                        <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                                    </div>
                                    </div>{/* ttm-box-view-overlay end*/}
                                    <div className="featured-content">
                                    <div className="featured-title">{/* featured-title */}
                                        <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Devlopment</a></h5>
                                    </div>
                                    </div>
                                </div>{/* featured-thumbnail */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}


export default Project_style2;