import React, { Component } from 'react';
import Blogsidebar from './Blog_sidebar';
import Header from '../layout/Header';

export class Single_blog extends Component {
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
                                        <h1 className="title">Blog Single View</h1>
                                    </div>{/* /.page-title-captions */}
                                    <div className="breadcrumb-wrapper">
                                        <span>
                                            <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                        </span>
                                        <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                        <span>Single Blog</span>
                                    </div>  
                                </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <div className="sidebar ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-9 content-area">
                                {/* ttm-service-single-content-are */}
                                <article className="post ttm-blog-single clearfix">
                                    {/* post-featured-wrapper */}
                                    <div className="ttm-post-featured-wrapper">
                                        <div className="ttm-post-featured">
                                            <img className="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" alt="post-01" />
                                        </div>
                                    </div>{/* post-featured-wrapper end */}
                                    {/* ttm-blog-classic-content */}
                                    <div className="ttm-blog-single-content">
                                        <div className="entry-content">
                                            <div className="ttm-post-entry-header">
                                                <div className="post-meta">
                                                    <span className="ttm-meta-line byline"><i className="fa fa-user" />By Admin</span>
                                                    <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published" dateTime="2018-07-28T00:39:29+00:00">July 28, 2018</time></span>
                                                    <span className="ttm-meta-line tags-links"><i className="far fa-comment" />03</span>
                                                </div>
                                            </div>
                                            {/* separator */}
                                            <div className="separator">
                                                <div className="sep-line mt-3 mb-4" />
                                            </div>
                                            {/* separator */}
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.it to make a type specimen book. It has survived not only five centuries.</p>
                                            <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                            <h4>Innovative solutions to move your business forward</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-20">
                                                    <img src="https://via.placeholder.com/480X550/444444.jpg" className="img-fluid" alt="blog" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-20">
                                                    <img src="https://via.placeholder.com/480X550/444444.jpg" className="img-fluid" alt="blog" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <blockquote>
                                                <p className="mb-20">Donec ornare, est sed tincidunt placerat, sem mi suscipit mi, at varius enim Mauris ienim id purus ort. Aene auat riss. Proin viverra. enim maurisupn est sed tincidunt placerat, ienim id purus ort</p>
                                            </blockquote>
                                            <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <h4>Make Yourself Accountable</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived of a not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <div className="ttm-post-featured mb-4">
                                            <img className="img-fluid" src="https://via.placeholder.com/1024X683/444444.jpg" alt="post-06" />
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of a type and scrambled and it to make a types specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It has survived to not only five type centuries, but also the leap into electronic typesetting, remaining centu essentially unchanged</p>
                                            {/* separator */}
                                            <div className="separator">
                                                <div className="sep-line mt-4 mb-4" />
                                            </div>
                                            {/* separator */}
                                            <div className="clearfix">
                                                <div className="ttm-tag-list float-md-left">
                                                    <span>
                                                        <a>Business</a>
                                                        <a>Data</a>
                                                        <a>Solution</a>
                                                        <a>Marketing</a>
                                                    </span>
                                                </div>
                                                <div className="social-icons square float-md-right">
                                                    <ul className="list-inline mb-0 d-inline-block">
                                                        <li className="social-facebook"><a><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                                                        <li className="social-twitter"><a><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                                                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="ttm-blog-classic-box-comment">
                                                <div id="comments" className="comments-area">
                                                    <h2 className="comments-title">2 Replies to “Use Minimal Amount On All Foods”</h2>
                                                    <ol className="comment-list">
                                                    <li>
                                                        <div className="comment-body">
                                                        <div className="comment-author vcard">
                                                            <img src="https://via.placeholder.com/100X100/444444.jpg" className="avatar" alt="comment-img" />
                                                        </div>
                                                        <div className="comment-box">
                                                            <div className="comment-meta commentmetadata">
                                                            <h5 className="ttm-comment-owner">Alex</h5>
                                                            <a>February 14, 2019 at 8:41 am</a>
                                                            </div>
                                                            <div className="author-content-wrap">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eius, sunt porro corporis maiores ea, voluptatibus omnis maxime</p>
                                                            </div>
                                                            <div className="reply">
                                                            <a rel="nofollow" className="comment-reply-link">Reply</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </li>
                                                    <li className="children comment">
                                                        <div className="comment-body">
                                                        <div className="comment-author vcard">
                                                            <img src="https://via.placeholder.com/100X100/444444.jpg" className="avatar" alt="comment-img" />
                                                        </div>
                                                        <div className="comment-box">
                                                            <div className="comment-meta">
                                                            <h5 className="ttm-comment-owner">Cherieh</h5>
                                                            <a>February 14, 2019 at 8:42 am</a>
                                                            </div>
                                                            <div className="author-content-wrap">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eius, sunt porro corporis maiores ea, voluptatibus omnis maxime</p>
                                                            </div>
                                                            <div className="reply">
                                                            <a rel="nofollow" className="comment-reply-link">Reply</a>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </li>
                                                    </ol>
                                                    <div className="comment-respond">
                                                    <h3 className="comment-reply-title">Leave a Reply</h3>
                                                    <p className="comment-notes">Your email address will not be published. </p>
                                                    <form id="ttm-comment-form" className="row comment-form clearfix" method="post" action="#">
                                                        <div className="col-sm-12 col-md-12">
                                                            <div className="form-group">
                                                                <textarea name="Massage" rows={5} placeholder="Comments" required="required" className="form-control with-grey-bg" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4">
                                                            <div className="form-group">
                                                                <input name="name" type="text" className="form-control with-grey-bg" placeholder="Name (required)" required="required" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4">
                                                            <div className="form-group">
                                                                <input name="email" type="text" placeholder="Email (required)" required="required" className="form-control with-grey-bg" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4">
                                                            <div className="form-group">
                                                                <input name="website" type="text" placeholder="Website" required="required" className="form-control with-grey-bg" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-2">
                                                            <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" defaultValue="yes" />&nbsp; &nbsp;
                                                            <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group text-left mt-4">
                                                                <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-darkgrey" value>
                                                                Post Comment
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>{/* ttm-blog-classic-content end */}
                                </article>
                                {/* ttm-service-single-content-are end */}
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

export default Single_blog;