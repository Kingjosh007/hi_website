import React, { Component } from 'react';
import Header from '../layout/Header';

export class Blog_left_image extends Component {
    constructor(props){
      super();
    }
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
                                <h1 className="title">Blog Left Image</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Blog-Left-Image</span>
                                </div>  
                            </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <section className="ttm-row grid-section ttm-bgcolor-grey clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Business</a>
                                            <a>Consulting</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Successful Growth In Business 2018</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>January 16, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Security</a>
                                            <a>UI/UX Design</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>January 12, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Digital</a>
                                            <a>Marketing</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>March 10, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Cyber Data</a>
                                            <a>Digital</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Digital Conference Of IT Tech Events in 2019</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>May 22, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Cyber Data</a>
                                            <a>Design</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Where And How To Watch Live Stream Today</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>April 20, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                                {/* featured-imagebox-post */}
                                <div className="row no-gutters featured-imagebox featured-imagebox-post ttm-box-view-left-image box-shadow">
                                    <div className="col-lg-5 col-md-12 col-sm-6 ttm-featured-img-left">
                                        <div className="featured-thumbnail"> 
                                            <img className="img-fluid" src="https://via.placeholder.com/450X600/444444.jpg" alt="blog" /> 
                                        </div> 
                                    </div>
                                    <div className="col-lg-7 col-md-12 col-sm-6 featured-content">
                                        <span className="category">
                                            <a>Business</a>
                                            <a>Consulting</a>
                                        </span>
                                        <div className="post-title featured-title">
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>5 Easy Ways to Improve Your Web Security</a></h5>
                                        </div>
                                        <div className="featured-desc ttm-box-desc">
                                            <p>Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus.Proin viverra nisi at nisl impe...</p>
                                        </div>
                                        <div className="post-meta">
                                            <span className="ttm-meta-line"><a href={process.env.PUBLIC_URL + '/article'}>May 14, 2019</a></span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-post end*/}
                            </div>
                        </div>{/* row end */}
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <div className="ttm-pagination">
                                <span className="page-numbers current">1</span>
                                <a className="page-numbers">2</a>
                                <a className="next page-numbers"><i className="ti ti-arrow-right" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
            </div>            
        )
    }
}

export default Blog_left_image;