import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu"><a href="/">Accueil</a>
                    </li>
                    <li className="menu-hasdropdown"><a href="/">À propos</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/aboutus_01'}>Qui sommes-nous ?</a></li>        
                            <li><a href={process.env.PUBLIC_URL + '/Our_expert'}>Notre équipe</a></li>
                            {/* <li><a href={process.env.PUBLIC_URL + '/Services_01'}>Services 1</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Services_02'}>Services 2</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Faq'}>FAQs</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Contact_01'}>Contact Us 1</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Contact_02'}>Contact Us 2</a></li>                                                    
                            <li><a href={process.env.PUBLIC_URL + '/Error'}>Error Page</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Element'}>Elements</a></li> */}
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a>Nos services</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/digital_services'}>Développement d'applications mobiles</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/advisory_services'}>Développement d'applications web</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/advisory_services'}>Développement de sites vitrines</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/it_consultancy'}>Développement de logiciels spécialisés</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/experience_design'}>Digitalisation de structures</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/content_engineering'}>Intelligence Artificielle</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/data_structuring'}>Conseil en informatique</a></li>
                        </ul>
                    </li>
                    <li className="menu"><a>Nos réalisations</a>
                        {/* <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/project_style1'}>Project Style 1</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/project_style2'}>Project Style 2</a></li>
                            <li className="menu-hasdropdown menu-hasflyout">
                                <a href={process.env.PUBLIC_URL + '/single_style1'}>Project Single</a>
                                <ul className="menu-dropdown">
                                    <li><a href={process.env.PUBLIC_URL + '/single_style1'}>Single Style 1</a></li>
                                    <li><a href={process.env.PUBLIC_URL + '/single_style2'}>Single Style 2</a></li>
                                    <li><a href={process.env.PUBLIC_URL + '/single_style3'}>Single Style 3</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li className="menu"><a href={process.env.PUBLIC_URL + '/blog'}>Blog</a>
                        {/* <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/single_blog'}>Blog Single View</a></li>
                            </ul> */}
                    </li>
                    <li className="menu-hasdropdown"><a>Carrières</a>
                        {/* <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/Shop'}>Default Shop</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Product_details'}>Single Product Details</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Cart'}>Cart</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Checkout'}>Checkout</a></li>
                        </ul> */}
                    </li>
                    <li className="menu-hasdropdown"><a>Contact</a>
                        {/* <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/Shop'}>Default Shop</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Product_details'}>Single Product Details</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Cart'}>Cart</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Checkout'}>Checkout</a></li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
    
            )
    }
}