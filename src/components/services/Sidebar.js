import React, { Component } from 'react';
import services from '../../data/services.json'


export class Sidebar extends Component {
    render() {     

        const { toHighlight } = this.props; 
        const labelToHighlight = services[Number(toHighlight)].label;
        return (            
            <div>
                <div className="widget widget-nav-menu">
                    <h3 className="widget-title">Explorez nos services</h3>
                    <ul className="widget-menu">
                        {

                            services.sort((a, b) => {
                                if(a.label == labelToHighlight) return -1;
                                if(b.label == labelToHighlight) return 1;
                                return 0;
                            })
                                .map((service, index) => {
                                const myClass = service.label === labelToHighlight ? "highlight" : "active";
                                
                                return (
                                    <li key={index}>
                                        <a className={myClass} href={service.link}>{service.label}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="widget widget-text">
                    <h3 className="widget-title">Qui sommes-nous ?</h3>
                    <div className="ttm-author-widget">
                    <div className="author-widget_img">
                        <img className="author-img img-fluid" src="/images/houseinnovation-warehouse.jpeg" alt="Bâtiment portant l'enseigne House Innovation" />
                    </div>
                    <h4 className="author-name">House Innovation</h4>
                    <p className="author-widget_text">Nous sommes <b>House Innovation</b>, entreprise d'innovation technologique. Notre but est de mettre la technologie de pointe que nous maîtrisons au service des entreprises et des particuliers.</p>
                    </div>
                </div>
                <div className="widget widget-download">
                    <h3 className="widget-title">Plaquette</h3>
                    <ul className="download">
                        <li>
                            <i className="far fa-file-pdf" />
                            <a title="Télécharger" href="/docs/ServiceHI.pdf" target="_blank" rel="noopener noreferrer">Télécharger la plaquette</a>
                        </li>
                    </ul>
                </div>
                <div className="widget widget_media_image">
                    <div className="banner-img-box ttm-textcolor-white text-left">
                    <div className="featured-content featured-content-banner">
                        <i className="flaticon flaticon-call" />
                        <div className="featured-title ttm-box-title">
                        <h5>Besoin d'un service ?</h5>
                        </div>
                        <div className="featured-desc">
                        <p>N'hésitez pas à entrer en contact<br /> si vous avez besoin d'un service ou d'éclairages.</p>
                        </div>
                        <ul>
                        <li><i className="fa fa-phone" /> (+237) 697 098 859</li>
                        <li><i className="far fa-envelope" /><a href="mailto:info@houseinnovationgroup.com">info@houseinnovationgroup.com</a></li>
                        </ul>
                    </div>
                    </div>
                </div>                        
            </div>
        );
    }
}

export default Sidebar;