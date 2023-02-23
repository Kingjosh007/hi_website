import React, { Component } from 'react';


export class Sidebar extends Component {
    render() {     
        return (            
            <div>
                <div className="widget widget-nav-menu">
                    <ul className="widget-menu">
                        <li><a activeClassName="active" href={process.env.PUBLIC_URL + '/it_consultancy'}>IT Consultancy</a></li>
                        <li><a href={process.env.PUBLIC_URL + '/digital_services'}>Digital Services</a></li>
                        <li><a href={process.env.PUBLIC_URL + '/advisory_services'}>Advisory Services</a></li>
                        <li><a href={process.env.PUBLIC_URL + '/data_structuring'}>Data Structuring</a></li>
                        <li><a href={process.env.PUBLIC_URL + '/experience_design'}>Experience Design</a></li>
                        <li><a href={process.env.PUBLIC_URL + '/content_engineering'}>Content Engineering</a></li>
                    </ul>
                </div>
                <div className="widget widget-text">
                    <h3 className="widget-title">About Us</h3>
                    <div className="ttm-author-widget">
                    <div className="author-widget_img">
                        <img className="author-img img-fluid" src="https://via.placeholder.com/294X190/444444.jpg" alt="author image" />
                    </div>
                    <h4 className="author-name">Altech-author</h4>
                    <p className="author-widget_text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece orem Ipsum is not simply random text. It has roots in a piece of loream classical.</p>
                    </div>
                </div>
                <div className="widget widget-download">
                    <h3 className="widget-title">Brouchers</h3>
                    <ul className="download">
                    <li>
                        <i className="far fa-file-pdf" />
                        <a title="Download">Download.pdf</a>
                    </li>
                    <li>
                        <i className="far fa-file-word" />
                        <a title="Download">Our ISO Certificate</a>
                    </li>
                    <li>
                        <i className="far fa-file" />
                        <a title="Download">Download.txt</a>
                    </li>
                    </ul>
                </div>
                <div className="widget widget_media_image">
                    <div className="banner-img-box ttm-textcolor-white text-left">
                    <div className="featured-content featured-content-banner">
                        <i className="flaticon flaticon-call" />
                        <div className="featured-title ttm-box-title">
                        <h5>How Can We Help?</h5>
                        </div>
                        <div className="featured-desc">
                        <p>If you need any help, please<br /> feel free to contact us.</p>
                        </div>
                        <ul>
                        <li><i className="fa fa-phone" />+1234567890</li>
                        <li><i className="far fa-envelope" /><a href="mailto:info@example.com">info@example.com</a></li>
                        </ul>
                    </div>
                    </div>
                </div>                        
            </div>
        );
    }
}

export default Sidebar;