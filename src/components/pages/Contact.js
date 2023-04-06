import React, { Component } from 'react';
import toast from 'react-hot-toast';
import Header from '../layout/Header';

export class Contact extends Component {


    constructor(props) {
        super();
    }

    state = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    }

    handleSubmitContactForm = (e) => {
        e.preventDefault();
        const apiUrl = "https://hi-api.up.railway.app/api/send-mail";

        const { name, email, phone, subject, message } = this.state;

        const dataToPost = {
            subject,
            contact: {
                name,
                email,
                phone
            },
            body: message
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToPost)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.statusCode === 200) {
                toast.success("Votre message a été envoyé avec succès.")
                this.setState({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                })
            }
            else {
                toast.error("Une erreur s'est produite lors de l'envoi de votre message.")
            }
           
        })

    }

    render() {
        
        return (
            <div className="site-main">
                <Header />
                <section className="ttm-row zero-padding-section clearfix" style={{ marginTop: "2em"}}>
                    <div className="container-xl">
                    <div className="row no-gutters">{/* row */}
                        <div className="col-lg-5">
                        <div className="spacing-9">
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Passez nous voir dans nos locaux!</h5>
                                <h2 className="title">Coordonnées</h2>
                            </div>
                            </div>{/* section title end */}
                            <div className="row">
                            <div className="col-12">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box style2 left-icon icon-align-top">
                                <div className="featured-icon">{/* featured-icon */}
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="ti-location-pin" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Adresse</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>Carrefour Lycée Makepe, Douala, Cameroun</p>
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
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="fa fa-phone" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Téléphone</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>+237 697 098 859</p>
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
                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                    <i className="ti ti-email" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">{/* featured title */}
                                    <h5>Email</h5>
                                    </div>
                                    <div className="featured-desc">{/* featured desc */}
                                    <p>info@houseinnovationgroup.com</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-7" id="message">
                        <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                            <div className="ttm-bg-layer-inner" />
                            </div>
                            {/* section title */}
                            <div className="section-title with-desc clearfix">
                            <div className="title-header">
                                <h5>Une question? Un avis?</h5>
                                <h2 className="title">Laissez un message</h2>
                            </div>
                            </div>{/* section title end */}
                            <form id="ttm-quote-form" className="row ttm-quote-form clearfix" method="post" onSubmit={this.handleSubmitContactForm}>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="name"
                                       type="text"
                                       value={this.state.name}
                                       onChange={(e) => {this.setState({name: e.target.value})}}
                                       className="form-control bg-white"
                                       placeholder="Votre nom complet*"
                                       required="required" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="phone" 
                                       type="text" 
                                       value={this.state.phone}
                                       onChange={(e) => {this.setState({phone: e.target.value})}}
                                       placeholder="Numéro de téléphone*" 
                                       required="required" 
                                       className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="email"
                                       type="email" 
                                       value={this.state.email} 
                                       onChange={(e) => {this.setState({email: e.target.value})}}
                                       placeholder="Adresse email*" 
                                       required="required"
                                       className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="form-group">
                                <input name="subject" 
                                       type="text" 
                                       value={this.state.subject} 
                                       onChange={(e) => {this.setState({subject: e.target.value})}}
                                       placeholder="Sujet"
                                       required="required"
                                       className="form-control bg-white" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="form-group">
                                <textarea name="message" 
                                          rows={6} 
                                          placeholder="Votre message ici..."
                                          required="required"
                                          className="form-control bg-white" 
                                          value={this.state.message}
                                          onChange={(e) => {this.setState({message: e.target.value})}}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="text-left">
                                <button type="submit" id="submit" className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ripple" value>
                                    Envoyer
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* row end */}
                    </div>
                </section>

                <section className="ttm-row map-section res-991-p-0 clearfix">
                    <div className="map-wrapper">
                        {/* <iframe height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.73108660754!2d-122.47279800000001!3d37.803331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1591859311334!5m2!1sen!2sus" /> */}
                        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Carrefour%20Lyc%C3%A9e%20Makepe+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">Evaluer la distance</a></iframe>
                    </div>
                </section>
                
            </div>
            )
    }
}


export default Contact;