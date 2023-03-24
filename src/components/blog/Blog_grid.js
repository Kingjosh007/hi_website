import React, { Component } from 'react';
import Header from '../layout/Header';

export class Blog_grid extends Component {
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
                                <h1 className="title">Blog grid</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Blog-grid</span>
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
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">17<span className="entry-month entry-year">Apr</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />2,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">12<span className="entry-month entry-year">Dec</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Define World Best IT Solution Technology</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />3,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">22<span className="entry-month entry-year">May</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">04<span className="entry-month entry-year">Aug</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Digital Conference Of IT Tech Events in 2019</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />4,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">22<span className="entry-month entry-year">May</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/* featured-imagebox-blog */}
                                <div className="featured-imagebox featured-imagebox-blog style2 mb-30">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src="https://via.placeholder.com/654X490/444444.jpg" alt="" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/article'}><i className="ti ti-plus" /></a>
                                        </div>
                                        <div className="ttm-box-view-overlay" />
                                    </div>
                                    <div className="featured-content">{/* featured-content */}
                                        <div className="ttm-box-post-date">{/* ttm-box-post-date */}
                                            <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">04<span className="entry-month entry-year">Aug</span></time>
                                            </span>
                                        </div>
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/article'}>Digital Conference Of IT Tech Events in 2019</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />4,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>{/* featured-imagebox-blog end */}
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

export default Blog_grid;