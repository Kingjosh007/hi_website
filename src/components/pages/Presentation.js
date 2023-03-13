import React, { Component } from 'react';
import { MDBProgress } from 'mdbreact';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Header from '../layout/Header';

export class Presentation extends Component {
    render() {
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,

            responsive: [{

                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div className="site-main">
                <Header />
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-6">

                                <div className="section-title with-desc clearfix">
                                    <div className="title-header">
                                        <h5>À propos de nous</h5>
                                        <h2 className="title">Jeunesse, Talent &amp; <span>Innovation</span></h2>
                                    </div>
                                    <div className="title-desc">
                                        <p><strong>House Innovation</strong> est une entreprise d'innovation technologique fondée il y a 5 ans par des ingénieurs talentueux et passionnés d'innovation.</p>
                                        <p>Nous avons l'expertise et les ressources nécessaires pour vous accompagner dans vos projets digitaux qui s'inscrivent dans l'une des catégories suivantes:</p>
                                    </div>
                                </div>

                                <div className="row no-gutters mt-4 mb-4">
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <ul className="ttm-list ttm-list-style-icon">
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_apps_web" target="_blank" rel="noopener noreferrer">Applications web</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_apps_mobiles" target="_blank" rel="noopener noreferrer">Applications mobiles</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_sites_vitrines" target="_blank" rel="noopener noreferrer">Sites vitrines</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_progiciels" target="_blank" rel="noopener noreferrer">Progiciels et logiciels spécialisés</a></span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <ul className="ttm-list ttm-list-style-icon">
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_digitalisation" target="_blank" rel="noopener noreferrer">Digitalisation de structures</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_robotique_ia" target="_blank" rel="noopener noreferrer">Robotique, Systèmes embarqués</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_robotique_ia" target="_blank" rel="noopener noreferrer">Intelligence articielle</a></span></li>
                                            <li><i className="ti-check-box ttm-textcolor-skincolor" /><span className="ttm-list-li-content"><a href="/service_conseil" target="_blank" rel="noopener noreferrer">Conseil en informatique</a></span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <div className="position-relative res-991-mt-30">
                                    <div className="ttm_single_image-wrapper text-sm-center">
                                        <img className="img-fluid" src="/images/houseinnovation-warehouse.jpeg" title="single-img-seven" alt="single-img-seven" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* progress-bar-section */}
                <section className="ttm-row zero-padding-section res-991-p-0 ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                        <div className="row no-gutters">
                            <div className="col-md-12">
                                <div className="ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-7 position-relative z-1">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                        <div className="ttm-bg-layer-inner" />
                                    </div>
                                    <div className="layer-content">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="ttm_single_image-wrapper">
                                                    <img className="img-fluid" src="/images/about-hi/about-coder.jpg" title="single-img-eight" alt="single-img-eight" />
                                                </div>
                                                <div className="about-overlay-02">
                                                    <h3>5 années d'expérience</h3>
                                                    <p>dans la technologie de pointe</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="res-991-mt-30">
                                                    <div className="section-title with-desc clearfix">
                                                        <div className="title-header">
                                                            <h3 className="title"><span>Notre vision</span></h3>
                                                        </div>
                                                        <div className="title-desc">
                                                            <p>Être un acteur incontournable dans le développement logiciel et la robotique mobile au niveau international dans 10 prochaines années</p>
                                                        </div>
                                                    </div>

                                                    <div className="section-title with-desc clearfix">
                                                        <div className="title-header">
                                                            <h3 className="title"><span>Notre mission</span></h3>
                                                        </div>
                                                        <div className="title-desc">
                                                            <p>Développer des outils à la pointe de la technologie pour permettre aux entreprises comme aux particuliers de réaliser des profits et améliorer leur performance.</p>
                                                        </div>
                                                    </div>

                                                    <div className="section-title with-desc clearfix">
                                                        <div className="title-header">
                                                            <h3 className="title"><span>Quelques dates clés</span></h3>
                                                        </div>
                                                        <div className="title-desc">
                                                            <ul style={{listStyleType: "none"}}>
                                                                <li><b>Nov. 2017</b>: <span> Naissance de House Innovation à l'initiative de 5 jeunes étudiants talentueux.</span></li>

                                                            </ul>

                                                            <ul style={{listStyleType: "none"}}>
                                                                <li><b>Avr. 2018</b>: <span> Premier client étranger</span></li>
                                                            </ul>

                                                            <ul style={{listStyleType: "none"}}>
                                                                <li><b>Mars 2022</b>: <span> Acquisition des nouveaux locaux. Déménagement.</span></li>
                                                            </ul>


                                                        </div>
                                                    </div>
                                                    
                                                   

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* progress-bar-section end */}
                {/* fid-section */}
                <section className="ttm-row fid-section ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img10 mt_225 res-991-mt-0 clearfix">
                    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-md-3 col-6">
                                {/*  ttm-icon */}
                                <div className="ttm-fid inside ttm-fid-view-topicon">
                                    <div className="ttm-fid-icon-wrapper">
                                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-call" />{/*  ttm-icon */}
                                        </div>
                                    </div>
                                    <div className="ttm-fid-contents">
                                        <h4>
                                            <CountUp start={0} end={70} duration={18} />
                                        </h4>
                                        <h3 className="ttm-fid-title">Clients</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                {/*  ttm-icon */}
                                <div className="ttm-fid inside ttm-fid-view-topicon">
                                    <div className="ttm-fid-icon-wrapper">
                                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-online-library" />{/*  ttm-icon */}
                                        </div>
                                    </div>
                                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                        <h4>
                                            <CountUp start={0} end={97} duration={18} />
                                        </h4>
                                        <h3 className="ttm-fid-title">Projets livrés</h3>{/*  ttm-fid-title */}
                                    </div>{/* ttm-fid-contents end */}
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                {/*  ttm-icon */}
                                <div className="ttm-fid inside ttm-fid-view-topicon">
                                    <div className="ttm-fid-icon-wrapper">
                                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-global" />{/*  ttm-icon */}
                                        </div>
                                    </div>
                                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                        <h4>
                                            <CountUp start={0} end={13} duration={10} />
                                        </h4>
                                        <h3 className="ttm-fid-title">Partenaires, dont 3 à l'international</h3>{/*  ttm-fid-title */}
                                    </div>{/* ttm-fid-contents end */}
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                {/*  ttm-icon */}
                                <div className="ttm-fid inside ttm-fid-view-topicon">
                                    <div className="ttm-fid-icon-wrapper">
                                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                            <i className="flaticon flaticon-global-1" />{/*  ttm-icon */}
                                        </div>
                                    </div>
                                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                                        <h4>
                                            <CountUp start={0} end={12} duration={10} />
                                        </h4>
                                        <h3 className="ttm-fid-title">Prix et distinctions, dont 1 à l'international.</h3>{/*  ttm-fid-title */}
                                    </div>{/* ttm-fid-contents end */}
                                </div>
                            </div>
                        </div>
                        {/* row end*/}
                    </div>
                </section>
                {/* fid-section end */}

                {/* our-partner-section */}
                <section className="ttm-row our-client-section res-991-p-0 ttm-bgcolor-skincolor clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12 text-center">
                                <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5}>
                                    <div className="ttm-box-col-wrapper">
                                        <div className="client-box ttm-box-view-boxed-logo">
                                            <div className="client">
                                                <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                                                    <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-box-col-wrapper">
                                        <div className="client-box ttm-box-view-boxed-logo">
                                            <div className="client">
                                                <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                                                    <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-box-col-wrapper">
                                        <div className="client-box ttm-box-view-boxed-logo">
                                            <div className="client">
                                                <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                                                    <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-box-col-wrapper">
                                        <div className="client-box ttm-box-view-boxed-logo">
                                            <div className="client">
                                                <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                                                    <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-box-col-wrapper">
                                        <div className="client-box ttm-box-view-boxed-logo">
                                            <div className="client">
                                                <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                                                    <img className="img-fluid" src="https://via.placeholder.com/94X47/444444.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </section>
                {/* our-partner-section end */}
                {/* blog-section */}
                <section className="ttm-row blog-section clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                {/* section title */}
                                <div className="section-title text-center with-desc clearfix">
                                    <div className="title-header">
                                        <h5>HI Blog</h5>
                                        <h2 className="title">Consultez nos derniers <span>billets de blog</span></h2>
                                    </div>
                                </div>{/* section title end */}
                            </div>
                        </div>
                        <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-blog style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                                            <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>You Must Try 20 Secret Of Digital Transform</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />2,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-blog style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                                            <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Define World Best IT Solution Technology</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />3,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-blog style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                                            <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>10 PHP Frameworks You Need To Use Anywhere</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />1,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ttm-box-col-wrapper">
                                <div className="featured-imagebox featured-imagebox-blog style2">
                                    <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" alt="" src="https://via.placeholder.com/654X490/444444.jpg" />
                                        <div className="ttm-blog-overlay-iconbox">
                                            <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
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
                                            <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>Digital Conference Of IT Tech Events in 2019</a></h5>
                                        </div>
                                        <div className="post-meta">{/* post-meta */}
                                            <span className="ttm-meta-line"><i className="fa fa-comments" />4,comments</span>
                                            <span className="ttm-meta-line"><i className="fa fa-user" />Admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
                {/* blog-section end */}
            </div>
        )
    }
}


export default Presentation;