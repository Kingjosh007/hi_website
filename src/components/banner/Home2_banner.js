import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";

export class CarouselPage2 extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={false}
            id="Home_banner2"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl d-flex">
                        <div className="carousel-caption-inner">
                            <MDBAnimation className="slideInUp" count={1} delay="2s" >
                            <h5 className="ttm-textcolor-skincolor">Delight your Customers&nbsp;&nbsp;&nbsp;</h5>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <h2 className="ttm-textcolor-darkgrey">Don't Listen to What They Say. <strong className="ttm-textcolor-skincolor">Go See</strong></h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p className="text">We are equipped with an updated technical knowledge to serve our customers properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3.5s" >
                            <p>
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3">view more details</button>
                                <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey">contact us</button>
                            </p>  
                            </MDBAnimation>                          
                        </div>
                        <div className="d-inline-block effect position-relative">
                            <img className="img-fluid" src="https://via.placeholder.com/578X564/444444.png" alt="First slide" />
                            <span></span>
                            <span></span>
                            <span>
                            <i className="far fa-paper-plane" />
                                100% Client Satisfaction
                            </span>
                            <span></span>
                        </div>
                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                <MDBView>
                    <img className="d-block w-100" src="https://via.placeholder.com/1920X850/888888.jpg" alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl d-flex">
                        <div className="carousel-caption-inner">
                            <MDBAnimation className="slideInUp" count={1} delay="5s" >
                            <h5 className="ttm-textcolor-skincolor">Trust and Client Focus&nbsp;&nbsp;&nbsp;</h5>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="5.5s" >
                            <h2 className="ttm-textcolor-darkgrey">Best <strong className="ttm-textcolor-skincolor">Digital Agency</strong> And Bussiness</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="6s" >
                            <p className="text">We are equipped with an updated technical knowledge to serve our customers properly. Our method of application maintains the industry.</p>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="6.5s" >
                            <p>
                                <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3">read more</button>
                                <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey">get hi_website_front</button>
                            </p>
                            </MDBAnimation>
                        </div>
                        <div className="d-inline-block effect position-relative">
                            <img className="img-fluid" src="https://via.placeholder.com/578X564/444444.png" alt="First slide" />
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

export default CarouselPage2;