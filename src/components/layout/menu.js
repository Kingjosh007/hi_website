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
                            <li><a href={process.env.PUBLIC_URL + '/presentation'}>Qui sommes-nous ?</a></li>        
                            <li><a href={process.env.PUBLIC_URL + '/staff'}>Notre équipe</a></li>
                            {/* <li><a href={process.env.PUBLIC_URL + '/Services_01'}>Services 1</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Services_02'}>Services 2</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Faq'}>FAQs</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Contact_01'}>Contact Us 1</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Contact_02'}>Contact Us 2</a></li>                                                    
                            <li><a href={process.env.PUBLIC_URL + '/Error'}>Error Page</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/Element'}>Elements</a></li> */}
                        </ul>
                    </li>
                    <li className="menu-hasdropdown"><a href="#">Nos services</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/service_apps_web'}>Développement d'applications web</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_apps_mobiles'}>Développement d'applications mobiles</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_sites_vitrines'}>Développement de sites vitrines</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_progiciels'}>Développement de logiciels spécialisés</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_digitalisation'}>Digitalisation de structures</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_robotique_ia'}>Robotique et Intelligence Artificielle</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/service_conseil'}>Conseil en informatique</a></li>
                        </ul>
                    </li>
                    <li className="menu">
                        <a href="/projects">Nos réalisations</a>
                    </li>

                    <li className="menu">
                        <a href={process.env.PUBLIC_URL + '/blog'}>Blog</a>
                    </li>

                    <li className="menu-hasdropdown">
                        <a href="#">Carrières</a>
                    </li>
                    <li className="menu-hasdropdown">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
    
            )
    }
}