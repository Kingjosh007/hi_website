import React, { Component } from 'react';
import Slider from 'react-slick';
import { MDBProgress } from 'mdbreact';
import { Header } from './layout/Header';
import { CarouselPage } from './banner/Home1_banner';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg'
];

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
                      <p>À la pointe de la technologie</p>
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
                      <h5>Expérience personnalisée</h5>
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
                      <h5>Service de qualité</h5>
                    </div>
                    <div className="featured-desc">{/*  featured-desc */}
                      <p>Clients satisfaits à l'international</p>
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
                    <h5>À propos de nous</h5>
                    <h2 className="title">Nous justifions de 5 <span>années d'experience</span></h2>
                  </div>
                  <div className="title-desc">
                    <p>House Innovation est une entreprise spécialisée dans l'innovation technologique. Fondée il y a 5 ans par cinq ingénieurs talentueux, notre mission est de mettre la technologie au service des entreprises et des particuliers, en résolvant des problèmes spécifiques grâce aux dernières avancées technologiques. </p>
                    <p>Nous travaillons avec des clients de divers secteurs pour leur offrir des solutions sur mesure qui répondent à leurs besoins uniques. Avec notre expertise en matière de technologie, nous aidons nos clients à améliorer leur efficacité opérationnelle, à réduire leurs coûts et à augmenter leur rentabilité. Chez House Innovation, nous sommes passionnés par l'innovation technologique et nous sommes fiers de fournir à nos clients des solutions de pointe pour les aider à réussir leur transformation digitale.</p>
                    <p>Nos services sont divers et variés:</p>
                  </div>
                </div>{/* section title end */}
                {/* row */}
                <div className="row no-gutters mt-4">
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Développement web </span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Développement de progiciels</span></li>
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Design graphique</span></li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <ul className="ttm-list ttm-list-style-icon">
                      <li><i className="far fa-circle ttm-textcolor-skincolor" /><span className="ttm-list-li-content">Développement mobile</span></li>
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
                    <h2 className="title">Nous proposons des services touchant à sensiblement <span> tous les domaines du digital</span></h2>
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
                    <div className="ttm-historybox-title"><h5>Développement web</h5></div>
                    <div className="ttm-historybox-description">
                      Conception, hébergement et maintenance de vos landing pages et sites vitrines.
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
                    <div className="ttm-historybox-title"><h5>Logiciels avancés</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Dashboards, e-boutiques, progiciels, applications spécialisées...
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
                      Conception, développement, maintenance et sécurité de vos applications mobiles.
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
                          <i className="flaticon flaticon-business-and-finance" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Robotique &amp; I.A.</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Technologies automatisées et intelligentes à l'aide d'algorithmes complexes.
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
                    <div className="ttm-historybox-title"><h5>Design graphique</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                        Votre identité visuelle et vos supports de communication en ligne et hors ligne.
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
                          <i className="flaticon flaticon-smartphone" />{/*  ttm-icon */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-history-box-border" />{/* ttm-history-box-border  */}
                  <div className="ttm-history-box-details ttm-bgcolor-white">
                    <div className="ttm-historybox-title"><h5>Conseil</h5></div>{/* historybox-title  */}
                    <div className="ttm-historybox-description">{/* description  */}
                      Solutions pour aider votre entreprise à optimiser son utilisation de la technologie.
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
            </Slider>

            <div className="row">
              <div className="col-md-12 text-center mt-5 res-991-mt-30">
                <p className="mb-0">N'hésitez pas à <strong><u><a className="ttm-textcolor-darkgrey" href="/contact_01">nous contacter</a></u></strong> en cas de question.</p>
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
                <img src="images/why-question-mark.jpg" className="ttm-equal-height-image img-fluid" alt="col-bgimage-1" />
              </div>
              <div className="col-lg-6 z-9">
                <div className="ttm-bgcolor-skincolor ttm-textcolor-white position-relative ttm-right-span">
                  <div className="spacing-1">
                    {/* section title */}
                    <div className="section-title with-desc clearfix">
                      <div className="title-header">
                        <h5>Pourquoi choisir House Innovation</h5>
                        <h2 className="title">Nous vous accompagnons de bout en bout dans la <span>digitalisation de votre structure</span></h2>
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
                              <i className="flaticon flaticon-process" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>Product Designs</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>Our firm is expert to create an efficient user interface that makes user interaction is lively.</p>
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
                              <i className="flaticon flaticon-system" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>Big Data &amp; Analytics</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>Statistical analysis to help an organization to gain insights from large information web sets.</p>
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
                              <i className="flaticon flaticon-data" />
                            </div>
                          </div>
                          <div className="featured-content">
                            <div className="featured-title">{/* featured title */}
                              <h5>Maintain App Data</h5>
                            </div>
                            <div className="featured-desc">{/* featured desc */}
                              <p>We Create the optimal platform to develop and run digital applications for our clients app.</p>
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
                    <h5>About us</h5>
                    <h2 className="title">Meet our <span>Leadership</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 res-991-text-center">
                <div className="title-desc">The positive distinction within the World Inspiring of Success and Connections of People and Organizations.</div>
              </div>
              <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"> En savoir plus </a>
              </div>
            </div>
            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liamss</a></h5>
                    </div>
                    <p className="category">Web Designer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" src="https://via.placeholder.com/480X520/444444.jpg" alt="" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
                    </div>
                    <p className="category">Project Manager</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
                    </div>
                    <p className="category">Consultant Officer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jennifer Garcia</a></h5>
                    </div>
                    <p className="category">IT Service Officer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liam</a></h5>
                    </div>
                    <p className="category">Web Designer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
                    </div>
                    <p className="category">Project Manager</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Amanda Brown</a></h5>
                    </div>
                    <p className="category">Consultant Officer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jennifer Garcia</a></h5>
                    </div>
                    <p className="category">IT Service Officer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Robert Liam</a></h5>
                    </div>
                    <p className="category">Web Designer</p>{/* category */}
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="featured-thumbnail">{/* featured-thumbnail */}
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/480X520/444444.jpg" />
                    <div className="ttm-social-links-wrapper">
                      <ul className="social-icons list-inline">{/* social-icons */}
                        <li className="social-facebook"><a ><i className="fab fa-facebook-f" /></a></li>
                        <li className="social-twitter"><a ><i className="fab fa-twitter" /></a></li>
                        <li className="social-linkedin"><a ><i className="fab fa-linkedin-in" /></a></li>
                        <li className="social-googleplus"><a ><i className="fab fa-google-plus-g" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>Jessica Ethan</a></h5>
                    </div>
                    <p className="category">Project Manager</p>{/* category */}
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* team-section end*/}
        {/* first-row-title-section */}
        <section className="ttm-row first-row-title-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes bg-img4 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">{/* row */}
              <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                  <div className="ttm-play-icon-btn mb-5">
                    <div className="ttm-play-icon-animation">
                      <a id="playbutton">
                        <div className="ttm-icon ttm-bgcolor-white ttm-textcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                          <i className="fas fa-play" />
                        </div>
                      </a>
                      <div id="videobox">
                        <i id="close-btn" className="fa fa-times"></i>
                        <div id="video-wrapper">
                          <iframe width="500" height="500" src="https://www.youtube.com/embed/7e90gBu4pas" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* section-title */}
                  <div className="section-title with-desc text-center clearfix">
                    <div className="title-header">
                      <h2 className="title">We Provide Outsourced IT Services For Small &amp; <span className="ttm-textcolor-white">Mid-Sized Business</span></h2>
                    </div>
                    <div className="title-desc">Appropriate for your specific business, making it easy for<br /> you to have quality IT services. What We Do</div>
                  </div>{/* section-title end */}
                  <div className="mt-5">
                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">More Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* first-row-title-section end*/}
        {/* testimonial-section */}
        <section className="ttm-row zero-padding-section clearfix">
          <div className="container-xl">
            <div className="row no-gutters mt_100 res-991-mt-0">
              <div className="col-md-6">
                <div className="ttm-bgcolor-darkgrey ttm-textcolor-white z-11 position-relative h-100">
                  <div className="layer-content">{/* layer-content */}
                    <div className="spacing-2">{/* spacing-2 */}
                      {/* section title */}
                      <div className="section-title ttm with-desc clearfix">
                        <div className="title-header">
                          <h5>What We Do</h5>
                          <h2 className="title">We help you to grow your business <span className="ttm-textcolor-white">Exponentially</span></h2>
                        </div>
                      </div>{/* section title end */}
                      {/* progress-bar */}
                      <div className="ttm-progress-bar">
                        <div className="progress-bar-title float-left">UI/UX Design</div>{/* progress-bar-title */}
                        <label className="float-right">90%</label>
                        <MDBProgress className="w-100" material value={90}></MDBProgress>
                      </div>
                      {/* progress-bar END */}
                      {/* progress-bar */}
                      <div className="ttm-progress-bar">
                        <div className="progress-bar-title float-left">App Development</div>{/* progress-bar-title */}
                        <label className="float-right">80%</label>
                        <MDBProgress className="w-100" material value={80}></MDBProgress>
                      </div>
                      {/* progress-bar END */}
                    </div>{/* spacing-2 END */}
                  </div>{/* layer-content END */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                  <div className="layer-content">
                    <div className="testimonial-slide style1">
                      <Slider className="row slick_slider" arrows={false} dots={true}>
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content">{/* testimonials-content */}
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">{/* testimonials-img */}
                                  <img className="img-center" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
                                </div>
                              </div>
                              <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption">{/* testimonials-caption */}
                                <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content">{/* testimonials-content */}
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">{/* testimonials-img */}
                                  <img className="img-center" src="https://via.placeholder.com/150X150/444444.jpg" alt="testimonial-img" />
                                </div>
                              </div>
                              <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption">{/* testimonials-caption */}
                                <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="testimonials text-center">
                            <div className="testimonial-content">{/* testimonials-content */}
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">{/* testimonials-img */}
                                  <img className="img-center" alt="testimonial-img" src="https://via.placeholder.com/150X150/444444.jpg" />
                                </div>
                              </div>
                              <blockquote>Our team discussed every single detail to make sure Creatives Planet is the most versatile and unique theme created so far. No coding skills.</blockquote>
                              <div className="ttm-ratting-star">
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />&nbsp;
                                <i className="fa fa-star" />
                              </div>
                              <div className="testimonial-caption">{/* testimonials-caption */}
                                <h6>Victor Williamson</h6>
                                <label>Web Devloper</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-section end */}
        {/* process-section */}
        <section className="ttm-row process-section clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>how it work</h5>
                    <h2 className="title">Check Out Our Work <span>Process</span></h2>
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
                      <img className="img-fluid" alt="step-one" title="step-one" src="https://via.placeholder.com/185X185/444444.jpg" />
                      <div className="process-num">
                        <span className="number">01</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Choose a Service</h5></div>
                      <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="step-two" title="step-two" src="https://via.placeholder.com/185X185/444444.jpg" />
                      <div className="process-num">
                        <span className="number">02</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Request a Meeting</h5></div>
                      <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="step-three" title="step-three" src="https://via.placeholder.com/185X185/444444.jpg" />
                      <div className="process-num">
                        <span className="number">03</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Receive Custom Plan</h5></div>
                      <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
                    </div>
                  </div>
                  <div className="ttm-processbox text-center res-991-mb-0">
                    <div className="ttm-box-image">
                      <img className="img-fluid" alt="step-four" title="step-four" src="https://via.placeholder.com/185X185/444444.jpg" />
                      <div className="process-num">
                        <span className="number">04</span>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"><h5>Let’s Make it Happen</h5></div>
                      <div className="ttm-box-description">Aute irure dolor reprehenderit velit esse cillum dolore fugiat</div>
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
                    <h5>We Make Connections</h5>
                    <h2 className="title">Explore recent <span className="ttm-textcolor-white">Projects</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 res-991-text-center">
                <div className="title-desc">A project is a temporary endeavor with a defined beginning and end, scope, and assigned resources.</div>
              </div>
              <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
                <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"> En savoir plus </a>
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
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
                  </div>{/* featured-thumbnail end*/}
                  {/* ttm-box-view-overlay */}
                  <div className="ttm-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">{/* ttm-media-link */}
                      <a onClick={() => this.setState({ isOpen: true })} className="ttm_image"><i className="ti ti-search" /></a>
                      <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link"><i className="ti ti-link" /></a>
                    </div>
                  </div>{/* ttm-box-view-overlay end*/}
                  <div className="featured-content">
                    <div className="featured-title">{/* featured-title */}
                      <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>Business Seminarsetwst</a></h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
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
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
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
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
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
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
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
              <div className="ttm-box-col-wrapper">
                {/* featured-imagebox-portfolio */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src="https://via.placeholder.com/600X750/444444.jpg" />
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
            </Slider>
          </div>
        </section>
        {/* process-section end */}
        {/* blog-section */}
        <section className="ttm-row blog-section res-991-pt-0 clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>Our Blog</h5>
                    <h2 className="title">Check Out Our <span>Latest News</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
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
                    <div className="featured-desc">{/* featured-description */}
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
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
                    <div className="featured-desc">{/* featured-description */}
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
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
                    <div className="featured-desc">{/* featured-description */}
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>En savoir plus <i className="ti ti-angle-double-right" /></a>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-blog">
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
                    <div className="featured-desc">{/* featured-description */}
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20" href={process.env.PUBLIC_URL + '/Single_blog'}>En savoir plus <i className="ti ti-angle-double-right" /></a>
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


export default Home;
