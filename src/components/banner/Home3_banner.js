import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage3 extends Component {
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
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner3">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                                <h2>Give your Customer Experience a Human Touch</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                                <p className="text">We are equipped with an updated technical knowledge to serve our customers properly. Our method of application maintains the industry.</p>
                                <span></span>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                                <p>
                                    <button className="mt-5 res-767-mt-0 ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white ttm-textcolor-white">view our projects</button>
                                </p>                           
                            </MDBAnimation>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl">
                        <div className="carousel-caption-inner banner4">
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                            <h2>Say Goodbye to Bring Repetitive Legal Work </h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                            <p className="text">We are equipped with an updated technical knowledge to serve our customers  properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="6s" >
                            <p className="mt-4">
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mr-3">read more</button>
                                <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">get hi_website_front</button>
                            </p>
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

export default CarouselPage3;