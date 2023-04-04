import React, { useState, Component, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Blogsidebar from './Blog_sidebar';
import Header from '../layout/Header';
import { BlogContext } from '../../BlogContext';
import { convertDateToReadableString, convertDateToReadableStringWithTime, dateTimeComesBefore } from '../../utils/dateUtils';
import ArticleSidebar from './ArticleSidebar';
import ReactMarkdown from 'react-markdown';
import { render } from '@testing-library/react';


const apiBaseUrl = "https://hi-api.up.railway.app/api";


export class Article extends Component {

    state = {
        articleToDisplay: {},
        shouldSetArticle: false,
        nbSet: 0
    }

    constructor(props) {
        super();
    }

    fetchArticle = () => {
        const urlToFetch = `${apiBaseUrl}/articles/publish/${this.props.match.params.articleSlug}`;
        fetch(urlToFetch)
            .then(response => response.json())
            .then(data => {
                this.setState({ shouldSetArticle: true })
                this.setState({ articleToDisplay: data.data })
            })
    };

    componentDidMount() {
        this.fetchArticle();
    }


    render() {

        const { match } = this.props;
        const { articleSlug } = match.params;



        return (
            <BlogContext.Consumer>

                {([blogInfos, setBlogInfos]) => {

                    if (articleSlug.length > 0 && this.state.shouldSetArticle && this.state.nbSet <= 1) {
                        const thisArticle = (blogInfos.articles || []).find(article => article.slug === articleSlug);
                        this.setState({ articleToDisplay: thisArticle });

                        setBlogInfos({
                            ...blogInfos,
                            articleToDisplay: thisArticle
                        })

                        console.log(blogInfos.articleToDisplay);

                        this.setState({ nbSet: this.state.nbSet + 1 })
                    }
                    return (
                        this.state.articleToDisplay && Object.keys(this.state.articleToDisplay).length > 0 &&
                        (
                            <div className="site-main">
                                <Header />
                                <div className="sidebar ttm-bgcolor-white clearfix" style={{ marginTop: "3em" }}>
                                    <div className="container-xl">
                                        {/* row */}
                                        <div className="row">
                                            <div className="col-lg-9 content-area">
                                                {/* ttm-service-single-content-are */}
                                                <article className="post ttm-blog-single clearfix">
                                                    {/* post-featured-wrapper */}
                                                    <div className="ttm-post-featured-wrapper">
                                                        <div className="ttm-post-featured">
                                                            <img className="img-fluid"
                                                                src={this.state.articleToDisplay?.image || ""}
                                                                alt={this.state.articleToDisplay?.slug?.split("-").join(" ") || "Dummy"} />
                                                        </div>
                                                    </div>{/* post-featured-wrapper end */}
                                                    {/* ttm-blog-classic-content */}
                                                    <div className="ttm-blog-single-content">
                                                        <div className="entry-content">
                                                            <div className="ttm-post-entry-header">
                                                                <div className="post-meta">
                                                                    <span className="ttm-meta-line byline"><i className="fa fa-user" />Par {this.state.articleToDisplay?.author || "Auteur non identifié"}</span>
                                                                    <span className="ttm-meta-line entry-date"><i className="fa fa-calendar" /><time className="entry-date published">{convertDateToReadableStringWithTime(this.state.articleToDisplay?.publish_at || "01-01-2023")}</time></span>
                                                                    <span className="ttm-meta-line tags-links"><i className="far fa-comment" />{this.state.articleToDisplay?.comment_count || 0}</span>
                                                                </div>
                                                            </div>

                                                            <h4>{this.state.articleToDisplay?.title || "Dummy title"}</h4>

                                                            <div className="separator">
                                                                <div className="sep-line mt-3 mb-4" />
                                                            </div>

                                                            {
                                                                this.state.articleToDisplay?.description?.length > 0 && (
                                                                    <p className="mb-30" style={{ fontStyle: "italic" }}>
                                                                        {this.state.articleToDisplay?.description}
                                                                    </p>

                                                                )

                                                            }



                                                            <p>
                                                                <ReactMarkdown>
                                                                    {this.state.articleToDisplay?.content}
                                                                </ReactMarkdown>

                                                            </p>



                                                            <div className="ttm-blog-classic-box-comment">
                                                                <div id="comments" className="comments-area">
                                                                    <h2 className="comments-title">
                                                                        {
                                                                            this.state.articleToDisplay?.comments.length === 0 ?
                                                                                ("Aucun commentaire pour le moment") : (this.state.articleToDisplay?.comments.length === 1 ?
                                                                                    ("1 commentaire") : (this.state.articleToDisplay?.comments.length + " commentaires"))

                                                                        }
                                                                    </h2>

                                                                    {
                                                                        this.state.articleToDisplay?.comments.length > 0 && (

                                                                            <ol className="comment-list">
                                                                                {
                                                                                    this.state.articleToDisplay?.comments.sort((a, b) => {
                                                                                        return dateTimeComesBefore(a.created_at, b.created_at) ? -1 : 1;
                                                                                    }).map((comment, index) => {
                                                                                        return (
                                                                                            <li className="children comment">
                                                                                                <div className="comment-body">
                                                                                                    <div className="comment-box">
                                                                                                        <div className="comment-meta">
                                                                                                            <h5 className="ttm-comment-owner">{comment.author}</h5>
                                                                                                            <a>{convertDateToReadableStringWithTime(comment.created_at)}</a>
                                                                                                        </div>
                                                                                                        <div className="author-content-wrap">
                                                                                                            <p>{comment.content}</p>
                                                                                                        </div>
                                                                                                        <div className="reply">
                                                                                                            <a rel="nofollow" className="comment-reply-link">Réagir</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </ol>
                                                                        )
                                                                    }




                                                                    <div className="comment-respond">
                                                                        <h3 className="comment-reply-title">Laisser un commentaire</h3>
                                                                        <p className="comment-notes">Votre adresse email ne sera pas affichée </p>
                                                                        <form id="ttm-comment-form" className="row comment-form clearfix" method="post" action="#">
                                                                            <div className="col-sm-12 col-md-12">
                                                                                <div className="form-group">
                                                                                    <textarea name="Massage" rows={5} placeholder="Votre commentaire" required="required" className="form-control with-grey-bg" defaultValue={""} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12 col-md-4">
                                                                                <div className="form-group">
                                                                                    <input name="name" type="text" className="form-control with-grey-bg" placeholder="Nom (requis)" required="required" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12 col-md-4">
                                                                                <div className="form-group">
                                                                                    <input name="email" type="text" placeholder="Email (requis)" required="required" className="form-control with-grey-bg" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 mb-2">
                                                                                <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" defaultValue="yes" />&nbsp; &nbsp;
                                                                                <label htmlFor="comment-cookies-consent">Enregistrer mes informations pour mes futurs commentaires</label>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="form-group text-left mt-4">
                                                                                    <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-bgcolor-darkgrey" value>
                                                                                        Commenter
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
                                                {
                                                    this.state.nbSet >= 1 && (
                                                        <ArticleSidebar />
                                                    )
                                                }

                                            </div>
                                        </div>{/* row end */}
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }}
            </BlogContext.Consumer>
        )
    }
}

export default Article;