import React, { Component } from 'react'
import articles from '../../data/articles.json'
import { convertDateToReadableString } from '../../utils/dateUtils'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer widget-footer clearfix">
                {this.props.children}
                <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                    <div className="container-xl">
                        <div className="row align-items-md-center">
                            <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                                <div className="footer-logo text-sm-center">
                                    <img data-src="images/hi_logo_transparent_text.png" src="images/logo_hi-nobg.png" className="img-fluid" alt="footer-logo" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 order-md-1 res-767-mt-20">
                                <div className="text-left">
                                    {/*  featured-icon-box */}
                                    <div className="featured-icon-box left-icon icon-align-top">
                                        <div className="featured-icon">{/*  featured-icon */}
                                            <div className="ttm-icon ttm-textcolor-white ttm-icon_element-size-md">
                                                <i className="ti ti-location-pin" />{/*  ttm-icon */}
                                            </div>
                                        </div>
                                        <div className="featured-content">{/*  featured-content */}
                                            <div className="featured-desc">
                                                <p>Carrefour Lycée Makepe, Douala, Cameroun.</p>
                                            </div>
                                        </div>
                                    </div>{/*  featured-icon-box END */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 order-md-3 res-767-mt-20">
                                <div className="text-sm-right">
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white" href="mailto:info@houseinnovationgroup.com"><i className="far fa-envelope" />info@houseinnovationgroup.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-footer ttm-textcolor-white bg-img2">
                    <div className="footer-overlay" style={{backgroundColor: "#394252", opacity: 0.96}}>
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                                <div className="widget widget_text  clearfix">
                                    <h3 className="widget-title">À propos de nous</h3>
                                    <div className="textwidget widget-text">
                                        House Innovation est une entreprise d’innovation technologique. Notre but est de mettre la technologie au service des entreprises et particuliers, ceci en résolvant des problèmes spécifiques grâce aux dernières avancées technologiques.
                                    </div>
                                    <div className="quicklink-box">
                                        {/*  featured-icon-box */}
                                        <div className="featured-icon-box left-icon">
                                            <div className="featured-icon">{/*  featured-icon */}
                                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                    <span className="flaticon flaticon-call" />{/*  ttm-icon */}
                                                </div>
                                            </div>
                                            <div className="featured-content">{/*  featured-content */}
                                                <div className="featured-desc" style={{width: "80%"}}>{/*  featured-desc */}
                                                    <p>Infoline</p>
                                                </div>
                                                <div className="featured-title">{/*  featured-title */}
                                                    <h5 style={{fontWeight: "bold", fontSize: "1.15em"}}>(+237) 697 098 859</h5>
                                                </div>
                                            </div>
                                        </div>{/*  featured-icon-box END */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                                <div className="widget link-widget clearfix">
                                    <h3 className="widget-title">Liens rapides</h3>
                                    <ul id="menu-footer-services">
                                        <li><a>À propos de nous</a></li>
                                        <li><a>Nous contacter</a></li>
                                        <li><a>Nos services</a></li>
                                        <li><a>Notre équipe</a></li>
                                        <li><a>Blog</a></li>
                                        <li><a>Portfolio</a></li>
                                        <li><a>Carrières</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-991-mb-40 res-767-mb-0">
                                <div className="widget widget_text clearfix">
                                    <h3 className="widget-title">Articles récents</h3>
                                    {
                                        articles.map((article, index) => {

                                            return (
                                                <ul className="widget-post ttm-recent-post-list">
                                                    <li>
                                                        <a href={process.env.PUBLIC_URL + '/Single_blog'}><img className="img-fluid" alt={article.title} src={article.image} /></a>
                                                        <a href={process.env.PUBLIC_URL + '/Single_blog'}>{article.title.slice(0, 60) + "..."}</a>
                                                        <span className="post-date"><i className="fa fa-calendar" />{convertDateToReadableString(article.published_at)}</span>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-767-mb-40">
                                <div className="widget flicker_widget clearfix">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <div className="textwidget widget-text">
                                        Abonnez-vous pour ne rien rater de nos actualités et annonces.
                                        <form id="subscribe-form" className="newsletter-form" method="post" action="#" data-mailchimp="true">
                                            <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                                                <i className="fa fa-envelope" />
                                                <input type="email" name="email" placeholder="Votre email" required />
                                                <input type="submit" value="" />
                                            </div>
                                            <div id="subscribe-msg" />
                                        </form>
                                        <h5>Suivez-nous !</h5>
                                        <div className="social-icons circle social-hover">
                                            <ul className="list-inline">
                                                <li className="social-linkedin"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="LinkedIn" href="https://www.linkedin.com/company/house-innovation-sarl"><i className="fab fa-linkedin-in" /></a></li>
                                                <li className="social-twitter"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Twitter" href="https://twitter.com/House_INNOV"><i className="fab fa-twitter" /></a></li>
                                                <li className="social-facebook"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Facebook" href="https://www.facebook.com/housinnov"><i className="fab fa-facebook-f" /></a></li>
                                                <li className="social-instagram"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="Instagram" href="https://www.instagram.com/house_innovation_group"><i className="fab fa-instagram" /></a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
                    <div className="container-xl">
                        <div className="row copyright align-items-center res-767-text-center">
                            <div className="col-md-6">
                                <div>
                                    <span>Copyright © 2023&nbsp;<a href="/">House Innovation</a>.</span>&nbsp;&nbsp;
                                    <span class="hide-on-mobile">Tous droits réservés.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}