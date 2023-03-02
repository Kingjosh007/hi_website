import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            id="Home_banner"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <div class="image-container" style={{display: "flex", backgroundColor: "#888"}}>
                        <img className="d-block w-100" src="images/technology-innovation.jpg" alt="First slide" style={{opacity: 0.25}}/>
                    </div>
                </MDBView>
                <MDBCarouselCaption>
                     <div className="container-xl">
                        <div className="carousel-caption-inner banner1">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                <h2 className="ttm-textcolor-darkgrey flipInY">Innovation technologique <strong className="ttm-textcolor-skincolor">sur mesure</strong></h2>
                            </MDBAnimation>

                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <p className="text">Nous concevons des solutions digitales innovantes<br /> et personnalisées, adaptées aux besoins spécifiques des clients.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p>
                            <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" href="/contact_01">Quel est votre projet?</a>&nbsp; &nbsp;
                                {/* <button className="ttm-btn btn-inline ttm-btn-size-md ttm-textcolor-darkgrey ml-3"><i className="ti-arrow-circle-right" />get a Quote</button> */}
                            </p>                            
                            </MDBAnimation>
                            
                            
                        </div>
                      </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <div class="image-container" style={{display: "flex", backgroundColor: "#988"}}>
                        <img className="d-block w-100" src="images/black-people-coding.jpg" alt="First slide" style={{opacity: 0.25}}/>
                    </div>
                </MDBView>
                <MDBCarouselCaption>
                <div className="container-xl">
                        <div className="carousel-caption-inner banner1" >
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                                <h2 className="ttm-textcolor-darkgrey flipInY">Une équipe <strong className="ttm-textcolor-skincolor">hautement qualifiée</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s">
                                <p className="text"> Notre équipe est composée d'experts passionnés et talentueux dans leur domaine. <br />Avec des années d'expérience et une formation approfondie, ils sont équipés pour résoudre les problèmes les plus complexes et offrir des solutions innovantes à nos clients.</p>
                            </MDBAnimation>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage;