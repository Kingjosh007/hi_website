import React, { Component } from 'react';
import Slider from 'react-slick';
import { MDBProgress } from 'mdbreact';
import { Header } from './layout/Header';
import { CarouselPage } from './banner/Home1_banner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import staff from '../data/hiStaff.json';
import mediaCoverage from '../data/mediaArticles.json';
import latestProjects from '../data/projects.json';
import articles from '../data/articles.json';
import { convertDateToDayMonthYearArray, dateComesBefore } from '../utils/dateUtils';


const images = latestProjects.map(p => p.image_mini);

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
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

        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div className="site-main">
        <Header />
        {/* home banner */}
        <CarouselPage />
        {/* home banner end*/}


        {/* service-section */}

        <section className="ttm-row service-section position-relative z-1 clearfix">
          <div className="container-xl">
            <div className="row no-gutters featured-icon-box-style1-row ttm-bgcolor-darkgrey">
              <div className="col-md-4">
                {/*  featured-icon-box */}
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="featured-icon">{/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                      <i className="flaticon flaticon-developer" />{/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">{/*  featured-content */}
                    <div className="featured-title">{/*  featured-title */}
                      <h5>Expertise technique</h5>
                    </div>
                    <div className="featured-desc">{/*  featured-desc */}
                      <p>?? la pointe de la technologie</p>
                    </div>
                  </div>
                </div>{/*  featured-icon-box END */}
              </div>

              <div className="col-md-4">
                {/*  featured-icon-box */}
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-darkgrey ttm-textcolor-white">
                  <div className="featured-icon">{/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md">
                      <i className="flaticon flaticon-clock" />{/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">{/*  featured-content */}
                    <div className="featured-title">{/*  featured-title */}
                      <h5>Exp??rience personnalis??e</h5>
                    </div>
                    <div className="featured-desc">{/*  featured-desc */}
                      <p>Chaque projet est unique</p>
                    </div>
                  </div>
                </div>{/*  featured-icon-box END */}
              </div>

              <div className="col-md-4">
                <div className="featured-icon-box left-icon style1 ttm-bgcolor-skincolor ttm-textcolor-white h-100">
                  <div className="featured-icon">{/*  featured-icon */}
                    <div className="ttm-icon ttm-bgcolor-darkgrey ttm-icon_element-size-md">
                      <i className="flaticon flaticon-system" />{/*  ttm-icon */}
                    </div>
                  </div>
                  <div className="featured-content">{/*  featured-content */}
                    <div className="featured-title">{/*  featured-title */}
                      <h5>Service de qualit??</h5>
                    </div>
                    <div className="featured-desc">{/*  featured-desc */}
                      <p>Clients satisfaits ?? l'international</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* service-section end */}
        {/* aboutus-section */}
        <section className="ttm-row aboutus-section clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-6">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>?? propos de nous</h5>
                    <h2 className="title">Nous justifions de 5 <span>ann??es d'experience</span></h2>
                  </div>
                  <div className="title-desc">
                    <p>House Innovation est une entreprise sp??cialis??e dans l'innovation technologique. Fond??e il y a 5 ans par cinq ing??nieurs talentueux, notre mission est de mettre la technologie au service des entreprises et des particuliers, en r??solvant des probl??mes sp??cifiques gr??ce aux derni??res avanc??es technologiques. </p>
                    <p>Nous travaillons avec des clients de divers secteurs pour leur offrir des solutions sur mesure qui r??pondent ?? leurs besoins uniques. Avec notre expertise en mati??re de technologie, nous aidons nos clients ?? am??liorer leur efficacit?? op??rationnelle, ?? r??duire leurs co??ts et ?? augmenter leur rentabilit??. Chez House Innovation, nous sommes passionn??s par l'innovation technologique et nous sommes fiers de fournir ?? nos clients des solutions de pointe pour les aider ?? r??ussir leur transformation digitale.</p>
                    <p>Nos services sont divers et vari??s:</p>
                  </div>
                </div>{/* section title end */}
                {/* row */}
                <div className="row no-gutters mt-4">
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">D??veloppement web </span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">D??veloppement de progiciels</span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Design graphique</span></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">D??veloppement mobile</span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Robotique mobile </span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Intelligence artificielle</span></li>
                    </ul>
                  </div>
                </div>{/* row END*/}
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="fs-16 ttm-textcolor-darkgrey">
                  <span>Appelez pour <a className="fw-500 ttm-textcolor-darkgrey"><u>en savoir plus</u></a></span>
                  <p>
                    <strong className="fs-18">(+237) 697 098 859</strong> ou <strong className="fs-18">(+237) 698 776 757</strong>
                  </p >
                </div>
              </div>
              <div className="col-lg-6 res-991-mt-40 res-991-text-center">
                <div className="position-relative res-991-mt-30">
                  {/* ttm_single_image-wrapper */}
                  <div className="ttm_single_image-wrapper">
                    <img className="img-fluid" src="images/houseinnovation-warehouse.jpeg" title="single-img-one" alt="single-img-one" />
                  </div>{/* ttm_single_image-wrapper end */}
                  {/*featured-icon-box*/}
                  {/* <div className="about-overlay-01">
                    <p className="mb-0">HI!</p>
                  </div> */}
                  {/* featured-icon-box end*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* aboutus-section end */}


        {/* history-section */}
        <section className="ttm-row history-section bg-img3 ttm-bgcolor-grey ttm-bg ttm-bgimage-yes clearfix">

          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h5>Nos services</h5>
                    <h2 className="title">Nous proposons des services touchant ?? sensiblement <span> tous les domaines du digital</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>

            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider}>

              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-global-1" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>D??veloppement web</h5></div>
                    <div className="ttm-historybox-description">
                      Conception, h??bergement et maintenance de vos landing pages et sites vitrines.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" >En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>

              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-computer" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Logiciels avanc??s</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Dashboards, e-boutiques, progiciels, applications sp??cialis??es...
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" >En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          {/* Give Me the flaticon icon for mobile phone application */}
                          <i className="flaticon flaticon-smartphone" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Apps. mobiles</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Conception, d??veloppement, maintenance et s??curit?? de vos applications mobiles.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" >En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>

              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-process" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Robotique &amp; I.A.</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Technologies automatis??es et intelligentes ?? l'aide d'algorithmes complexes.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" >En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>

              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-ui" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Design graphique</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Votre identit?? visuelle et vos supports de communication en ligne et hors ligne.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>

              <div className="ttm-box-col-wrapper">
                <div className="ttm-history-box-wrapper">{/* ttm-history-box-wrapper  */}
                  <div className="ttm-history-box-icon-wrapper">{/* ttm-history-box-icon-wrapper  */}
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box">
                      <div className="featured-icon">{/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md">
                          <i className="flaticon flaticon-interaction" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Conseil</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Solutions pour aider votre entreprise ?? optimiser son utilisation de la technologie.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" >En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
            </Slider>

            <div className="row">
              <div className="col-md-12 text-center mt-5 res-991-mt-30">
                <p className="mb-0">N'h??sitez pas ?? <strong><u><a className="ttm-textcolor-darkgrey" href="/contact">nous contacter</a></u></strong> en cas de question.</p>
              </div>
            </div>
          </div>
        </section>
        {/* history-section end*/}



        {/* zero-padding-section */}
        <section className="ttm-row zero-padding-section mt_80 res-991-mt-0 clearfix">
          <div className="container-xl">
            <div className="row no-gutters">
              <div className="col-lg-6">
                {/* col-bg-img-one */}
                <div className="col-bg-img-one ttm-bg ttm-col-bgimage-yes ttm-left-span res-991-h-auto">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                </div>

                {/* Responsive View image */}
                <img src="images/illustrations/why-question-mark.jpg" className="ttm-equal-height-image img-fluid" alt="col-bgimage-1" />
              </div>
              <div className="col-lg-6 z-9 mt-n5">
                <div className="ttm-bgcolor-skincolor ttm-textcolor-white position-relative ttm-right-span">
                  <div className="spacing-1">
                    {/* section title */}
                    <div className="section-title with-desc clearfix">
                      <div className="title-header">
                        <h5>Pourquoi choisir House Innovation ?</h5>
                        <h2 className="title">Nous vous accompagnons <span>de bout en bout</span></h2>
                      </div>
                      <div className="title-desc">
                        <p></p>
                      </div>
                    </div>{/* section title end */}
                    <div className="row mt-40">
                      <div className="col-12">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style2 left-icon icon-align-top">
                          <div className="featured-icon">{/* featured-icon */}
                            <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                              <i className="flaticon flaticon-web" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>Analyse &amp; Conception</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>Nous travaillons en ??troite collaboration avec vous pour comprendre vos besoins sp??cifiques en mati??re de digitalisation. Nous analysons votre structure et vos processus m??tiers, puis concevons une solution sur mesure qui r??pond ?? vos attentes.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* separator */}
                    <div className="separator">
                      <div className="sep-line mt-4 mb-4" />
                    </div>
                    {/* separator */}
                    <div className="row">
                      <div className="col-12">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style2 left-icon icon-align-top">
                          <div className="featured-icon">{/* featured-icon */}
                            <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                              <i className="flaticon flaticon-code" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>R??alisation du projet</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>Une fois que la solution a ??t?? con??ue et valid??e, nous passons ?? sa r??alisation concr??te. Nous proc??dons par ??tapes, en d??veloppant chaque fonctionnalit?? de mani??re modulaire pour assurer une progression r??guli??re et minimiser les risques de dysfonctionnement.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* separator */}
                    <div className="separator">
                      <div className="sep-line mt-4 mb-4" />
                    </div>
                    {/* separator */}
                    <div className="row">
                      <div className="col-12">
                        {/* featured-icon-box */}
                        <div className="featured-icon-box style2 left-icon icon-align-top">
                          <div className="featured-icon">{/* featured-icon */}
                            <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-md">
                              <i className="flaticon flaticon-computer" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>Formation et maintenance</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>Nous ne nous contentons pas de livrer la solution : nous vous accompagnons dans la prise en main de vos nouveaux outils. Si n??cessaire, nous proposons des formations adapt??es aux utilisateurs, ainsi qu'un suivi r??gulier pour s'assurer que la solution fonctionne parfaitement.</p>
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
        {/* zero-padding-section end */}
        {/* team-section */}
        <section className="ttm-row team-section res-991-pt-0 clearfix">
          <div className="container-xl">
            <div className="row align-items-center mb-5">
              <div className="col-lg-5 res-991-text-center">
                <div className="section-title style2 mb-0 clearfix">
                  <div className="title-header mb-0">
                    <h5>?? propos de nous</h5>
                    <h2 className="title">Rencontrez notre <span>??quipe</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 res-991-text-center">
                <div className="title-desc"><em>"Le talent remporte des matchs, mais c'est le travail d'??quipe et l'intelligence collective qui remportent des championnats."</em> - Michael Jordan</div>
              </div>
              <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey" href="/staff">En savoir plus</a>
              </div>
            </div>
            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
              {
                staff.map((staffMember, index) => {
                  return (
                    <div className="ttm-box-col-wrapper">
                      <div className="featured-imagebox featured-imagebox-team style1">
                        <div className="featured-thumbnail">{/* featured-thumbnail */}
                          <img className="img-fluid" src={staffMember.photo} alt={`${staffMember.surname} ${staffMember.name.toUpperCase()}`} />
                          <div className="ttm-social-links-wrapper">
                            <ul className="social-icons list-inline">{/* social-icons */}
                              {
                                staffMember.linkedin?.display && staffMember.linkedin.link.length > 5 && (
                                  <li className="social-linkedin"><a target="_blank" rel="noopener noreferrer" href={staffMember.linkedin.link}><i className="fab fa-linkedin-in" /></a></li>
                                )
                              }
                              {
                                staffMember.twitter?.display && staffMember.twitter.link.length > 5 && (
                                  <li className="social-twitter"><a target="_blank" rel="noopener noreferrer" href={staffMember.twitter.link}><i className="fab fa-twitter" /></a></li>
                                )
                              }
                            </ul>
                          </div>
                        </div>
                        <div className="featured-content box-shadow">
                          <div className="featured-title">{/* featured-title */}
                            <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>{staffMember.surname} {staffMember.name.toUpperCase()}</a></h5>
                          </div>
                          <p className="category">{staffMember.role}</p>{/* category */}
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </Slider>
          </div>
        </section>
        {/* team-section end*/}

        {/* process-section */}
        <section className="ttm-row process-section clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>Comment ??a marche?</h5>
                    <h2 className="title">Voici le <span>process standard</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="ttm-processbox-wrapper">
                  <div className="ttm-processbox text-center">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="??tape 1" title="??tape 1" src="images/choose-service.jpeg" />
                      <div className="process-num">
                        <span className="number">01</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Choisissez un service</h5></div>
                      <div className="ttm-box-description">Explorez notre liste de services et choisissez celui qui correspond le mieux ?? vos besoins.</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="??tape 2" title="??tape 2" src="images/request-meeting.png" />
                      <div className="process-num">
                        <span className="number">02</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Demander une rencontre</h5></div>
                      <div className="ttm-box-description">Entrez en contact avec nous pour planifier une rencontre. Nous discuterons pour mieux comprendre vos besoins et vos objectifs.</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="??tape 3" title="??tape 3" src="images/custom-plan.jpg" />
                      <div className="process-num">
                        <span className="number">03</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Recevez un plan personnalis??</h5></div>
                      <div className="ttm-box-description">Nous travaillons avec vous pour ??laborer un plan personnalis?? qui r??pond ?? vos besoins et ?? votre budget.</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center res-991-mb-0">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="??tape 4" title="??tape 4" src="images/action.jpeg" />
                      <div className="process-num">
                        <span className="number">04</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Passons ?? l'action !</h5></div>
                      <div className="ttm-box-description">Apr??s l'approbation du plan, nous passons ?? la r??alisation du projet. Nous nous assurons en permanence que le projet est ?? la hauteur de vos attentes et que vous ??tes satisfait.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* row end */}
          </div>
        </section>
        {/* portfolio-section */}
        <section className="ttm-row bottomzero-padding-section  ttm-bg ttm-bgimage-yes bg-img5 ttm-bgcolor-skincolor clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl pb-5 res-991-pb-0">
            <div className="row align-items-center ttm-textcolor-white">
              <div className="col-lg-5 res-991-text-center">
                <div className="section-title style3 mb-0 clearfix">
                  <div className="title-header mb-0">
                    <h5>Nous donnons vie ?? vos envies</h5>
                    <h2 className="title">Consultez nos <span className="ttm-textcolor-white">projets r??cents</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 res-991-text-center">
                <div className="title-desc">Plongez dans notre portfolio et voyez notre passion pour la cr??ation de technologies de pointe r??pondant ?? des besoins concrets.</div>
              </div>
              <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white" href="/projects"> En savoir plus </a>
              </div>
            </div>
          </div>
        </section>


        <section className="ttm-row mt-10 zero-padding-section clearfix">
          <div className="container-fluid p-0">
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
            <Slider className="row slick_slider ttm-boxes-spacing-10px" {...slick_slider} slidesToShow={5}>
              {
                latestProjects.map((project, index) => {
                  return (
                    <div className="ttm-box-col-wrapper">
                      <div className="featured-imagebox featured-imagebox-portfolio style1">
                        <div className="featured-thumbnail">
                          <img className="img-fluid" alt="" src={project.image_mini} />
                        </div>
                        <div className="ttm-box-view-overlay">
                          <div className="featured-iconbox ttm-media-link">
                            <a onClick={() => this.setState({ isOpen: true })} className="ttm_image"><i className="ti ti-search" /></a>
                            <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>{project.name}</a></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })

              }

            </Slider>
          </div>
        </section>
        {/* process-section end */}

        <section className="ttm-row blog-section res-991-pt-0 clearfix" style={{backgroundColor: "#eee"}}>
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>HI-Blog</h5>
                    <h2 className="title">Nos <span>Publications R??centes</span></h2>
                  </div>
                </div>
              </div>
            </div>
            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
              {
                articles.sort((a, b) => dateComesBefore(a.published_at, b.published_at) ? 1 : -1)
                        .slice(0, 3)
                        .map((article, index) => {
                    const dateArr = convertDateToDayMonthYearArray(article.published_at);
                  return (
                    <div className="ttm-box-col-wrapper">
                      <div className="featured-imagebox featured-imagebox-blog">
                        <div className="featured-thumbnail">
                          <img className="img-fluid" alt={article.title} src={article.image} />
                          <div className="ttm-blog-overlay-iconbox">
                            <a href={process.env.PUBLIC_URL + '/Single_blog'}><i className="ti ti-plus" /></a>
                          </div>
                          <div className="ttm-box-view-overlay" />
                        </div>
                        <div className="featured-content">
                          <div className="ttm-box-post-date">
                            <span className="ttm-entry-date">
                              <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">{dateArr[0]}<span className="entry-month entry-year">{dateArr[1]}</span></time>
                            </span>
                          </div>
                          <div className="featured-title">
                            <h5><a href={process.env.PUBLIC_URL + '/Single_blog'}>{article.title}</a></h5>
                          </div>
                          <div className="post-meta">
                            <span className="ttm-meta-line"><i className="fa fa-comments" />{article.nb_commentaires} commentaires</span>
                            <span className="ttm-meta-line"><i className="fa fa-user" />{article.author_name}</span>
                          </div>
                          <div className="featured-desc">
                            <p>{article.description.slice(0, 150) + "..."}</p>
                          </div>
                          <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>Lire plus <i className="ti ti-angle-double-right" /></a>
                        </div>
                      </div>
                    </div>
                  )

                })
              }

            </Slider>
          </div>
        </section>

        <section className="ttm-row first-row-title-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes bg-img4">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="overlay" style={{ backgroundColor: "#2D4A8A", opacity: 0.95}}>
            <div className="container-xl" style={{ backgroundColor: "#263045", marginBottom: "2em", paddingBlock: "1em"}}>
              <h3 className="title">Quelques r??f??rences clients</h3>
              <div className="container clients-container" style={{display: "flex", justifyContent: "center"}}>
                {
                      <div className="client-item w-100" style={{ display: "flex", justifyContent: "center", maxWidth: "90vw"}} >
                          <img src="/images/clients/tous.png" alt="Quelques clients de House Innovation" style={{width: "80%"}}/>
                      </div>

                }
              </div>
              {/* </div> */}
            </div>

            <div className="container-xl">
              <h3 className="title">Ils parlent de nous</h3>
              <div className="container media-container">
                {
                  mediaCoverage.map((item, index) => {

                    return (
                      <div className="media-item" key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <img src={`images/medias/${item.logo}`} alt={item.media} />
                        </a>
                      </div>
                    )
                  })
                }
              </div>
              {/* </div> */}
            </div>

            <div className="container-xl" style={{ backgroundColor: "#263045", marginBottom: "2em", paddingBlock: "1em"}}>
              <h3 className="title">Nos partenaires</h3>
              <div className="container partners-container" style={{display: "flex", justifyContent: "center"}}>
                {
                      <div className="partner-item w-100" style={{ display: "flex", justifyContent: "center", maxWidth: "90vw", backgroundColor: "#fff"}} >
                          <img src="/images/partenaires/tous.png" alt="Quelques partenaires de House Innovation" style={{width: "80%"}}/>
                      </div>

                }
              </div>

              {/* </div> */}
            </div>
          </div>

        </section>

      </div>
    )
  }
}


export default Home;
