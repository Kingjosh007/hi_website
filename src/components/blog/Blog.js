import React, { Component } from 'react';
import Blogsidebar from './Blog_sidebar';
import Header from '../layout/Header';

export class Blog extends Component {
  constructor(props){
    super();
}
    render() {
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                {/* <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12"> 
                            <div className="title-box text-center">
                                <div className="page-title-heading">
                                <h1 className="title">Blog</h1>
                                </div>
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Blog</span>
                                </div>  
                            </div>
                            </div>
                        </div>
                    </div>                     
                </div> */}
                <div className="sidebar ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-9 content-area">
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-classic clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                        <div className="ttm-post-featured">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-01" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-classic-content">
                                        <div className="ttm-post-entry-header">
                                        <div className="post-meta">
                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                        </div>
                                        </div>
                                        <div className="entry-content">
                                        <header className="entry-header">
                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/Single_blog'}>Define World Best IT Solution Technology</a></h2>
                                        </header>
                                        <div className="ttm-box-desc-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-25 mb-25" />
                                        </div>
                                        {/* separator */}
                                        <div className="ttm-blogbox-desc-footer">
                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                            <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right">Read More <i className="ti ti-angle-double-right" /></a>
                                            </div>
                                            <div className="ttm-commentbox d-inline-block float-right">
                                            <span><i className="fa fa-comments" />2</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-classic clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                        <div className="ttm-post-featured">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-02" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-classic-content">
                                        <div className="ttm-post-entry-header">
                                        <div className="post-meta">
                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                        </div>
                                        </div>
                                        <div className="entry-content">
                                        <header className="entry-header">
                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/Single_blog'}>You Must Try 20 Secret Of Digital Transform</a></h2>
                                        </header>
                                        <div className="ttm-box-desc-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-25 mb-25" />
                                        </div>
                                        {/* separator */}
                                        <div className="ttm-blogbox-desc-footer">
                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                            <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right">Read More <i className="ti ti-angle-double-right" /></a>
                                            </div>
                                            <div className="ttm-commentbox d-inline-block float-right">
                                            <span><i className="fa fa-comments" />2</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-classic clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                        <div className="ttm-post-featured">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-03" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-classic-content">
                                        <div className="ttm-post-entry-header">
                                        <div className="post-meta">
                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                        </div>
                                        </div>
                                        <div className="entry-content">
                                        <header className="entry-header">
                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/Single_blog'}>10 PHP Frameworks You Need To Use Anywhere</a></h2>
                                        </header>
                                        <div className="ttm-box-desc-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-25 mb-25" />
                                        </div>
                                        {/* separator */}
                                        <div className="ttm-blogbox-desc-footer">
                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                            <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right">Read More <i className="ti ti-angle-double-right" /></a>
                                            </div>
                                            <div className="ttm-commentbox d-inline-block float-right">
                                            <span><i className="fa fa-comments" />2</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-classic clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                        <div className="ttm-post-featured">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-04" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-classic-content">
                                        <div className="ttm-post-entry-header">
                                        <div className="post-meta">
                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                        </div>
                                        </div>
                                        <div className="entry-content">
                                        <header className="entry-header">
                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/Single_blog'}>Digital Conference Of IT Tech Events in 2019</a></h2>
                                        </header>
                                        <div className="ttm-box-desc-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-25 mb-25" />
                                        </div>
                                        {/* separator */}
                                        <div className="ttm-blogbox-desc-footer">
                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                            <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right">Read More <i className="ti ti-angle-double-right" /></a>
                                            </div>
                                            <div className="ttm-commentbox d-inline-block float-right">
                                            <span><i className="fa fa-comments" />2</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-classic clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                        <div className="ttm-post-featured">
                                        <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-05" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-classic-content">
                                        <div className="ttm-post-entry-header">
                                        <div className="post-meta">
                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                        </div>
                                        </div>
                                        <div className="entry-content">
                                        <header className="entry-header">
                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/Single_blog'}>Where And How To Watch Live Stream Today</a></h2>
                                        </header>
                                        <div className="ttm-box-desc-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                                        </div>
                                        {/* separator */}
                                        <div className="separator">
                                            <div className="sep-line mt-25 mb-25" />
                                        </div>
                                        {/* separator */}
                                        <div className="ttm-blogbox-desc-footer">
                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                            <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right">Read More <i className="ti ti-angle-double-right" /></a>
                                            </div>
                                            <div className="ttm-commentbox d-inline-block float-right">
                                            <span><i className="fa fa-comments" />2</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
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
                            <div className="col-lg-3 widget-area">
                                <Blogsidebar />
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Blog;