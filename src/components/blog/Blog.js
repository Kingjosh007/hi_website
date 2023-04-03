import React, { Component } from 'react';
import Blogsidebar from './Blog_sidebar';
import Header from '../layout/Header';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { convertDateToReadableString, dateTimeComesBefore } from '../../utils/dateUtils';
import { BlogContext } from '../../BlogContext';


export class Blog extends Component {

    state = {
        currentPage: 1,
        articles: [],
        articlesToDisplay: [],
    };

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });
    };

    navigateTo = (url) => {
        const { history } = this.props;
        history.push(url);
    }

    constructor(props) {
        super();
    }
    
    render() {
        return (
            <BlogContext.Consumer>
                {([blogInfos, setBlogInfos]) => {
                    return (
                        <div className="site-main">
                            <Header />
                            {/* page-title */}
                            <div className="sidebar ttm-bgcolor-white clearfix" style={{ marginTop: "3em" }}>
                                <div className="container-xl">
                                    {/* row */}
                                    <div className="row">
                                        <div className="col-lg-9 content-area">
                                            {

                                                blogInfos.articlesToDisplay.sort((a, b) => dateTimeComesBefore(a.publish_at, b.publish_at) ? -1 : 1)
                                                    .map((article, index) => {
                                                        return (
                                                            <article className="post ttm-blog-classic clearfix"
                                                                     style={{cursor: "pointer"}} 
                                                                     onClick={() => {
                                                                        this.navigateTo('/article/' + article.slug)
                                                                     }}>

                                                                <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                                                                    <div className="ttm-post-featured">
                                                                        <img className="img-fluid" src={article.image} alt={`Image illustrant l'article ${article.title}`} />
                                                                    </div>
                                                                </div>

                                                                <div className="ttm-blog-classic-content">
                                                                    <div className="ttm-post-entry-header">
                                                                        <div className="post-meta">
                                                                            <span className="ttm-meta-line byline"><i className="fa fa-user" />{article.author_name}</span>
                                                                            <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time>{convertDateToReadableString(article.publish_at)}</time></span>
                                                                            <span className="ttm-meta-line tags-links"><i className="far fa-comment" />{article.nb_commentaires}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="entry-content">
                                                                        <header className="entry-header">
                                                                            <h2 className="entry-title"><a href={process.env.PUBLIC_URL + '/article/'+ article.slug }>{article.title}</a></h2>
                                                                        </header>
                                                                        <div className="ttm-box-desc-text">
                                                                            <p>{article.description}</p>
                                                                        </div>

                                                                        <div className="separator">
                                                                            <div className="sep-line mt-25 mb-25" />
                                                                        </div>

                                                                        <div className="ttm-blogbox-desc-footer">
                                                                            <div className="ttm-blogbox-footer-readmore d-inline-block">
                                                                                <a className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right"
                                                                                
                                                                                href={process.env.PUBLIC_URL + '/article/'+ article.slug }>Lire l'article <i className="ti ti-angle-double-right" /></a>
                                                                            </div>
                                                                            <div className="ttm-commentbox d-inline-block float-right">
                                                                                <span><i className="fa fa-comments" />{article.nb_commentaires}</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </article>
                                                        )
                                                    })
                                            }



                                            {/* <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="ttm-pagination">
                                        <span className="page-numbers current">1</span>
                                        <a className="page-numbers">2</a>
                                        <a className="next page-numbers"><i className="ti ti-arrow-right" /></a>
                                        </div>
                                    </div>
                                </div> */}

                                            <div>
                                                <Pagination
                                                    currentPage={this.state.currentPage}
                                                    totalPages={10}
                                                    theme="bootstrap"
                                                    changeCurrentPage={this.changeCurrentPage}
                                                    showFirstLastPages={true}
                                                    firstPageText="«"
                                                    lastPageText="»"
                                                    previousPageText="<"
                                                    nextPageText=">"
                                                    style={{ cursor: "pointer" }}
                                                />
                                                {/* <h2>current Page:{this.state.currentPage}</h2> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-3 widget-area">
                                            <Blogsidebar />
                                        </div>
                                    </div>{/* row end */}
                                </div>
                            </div>
                        </div>)
                }}
            </BlogContext.Consumer>
        )
    }
}


export default Blog;