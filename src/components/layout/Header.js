import React, { Component } from 'react'
import { Menu } from './menu';
import Mobilemenu from './Mobile_menu';

export class Header extends Component {
    state = {
        show: false,
    }
    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
    render() {
        return (
            <header id="masthead" className="header ttm-header-style-01">
                {/* ttm-topbar-wrapper */}
                <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-5">
                                <ul className="top-contact text-left">
                                    <li><i className="fas fa-map-marker-alt" />&nbsp;&nbsp;Makepe, Douala</li>
                                    <li><i className="far fa-envelope" />&nbsp;&nbsp;<a href="mailto:info@houseinnovationgroup.com">info@houseinnovationgroup.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-7">
                                <div className="topbar-right text-right d-flex justify-content-end">
                                    <ul className="top-contact">
                                        <li><i className="far fa-clock" />&nbsp;&nbsp;Horaires: 08:00 - 18:00pm</li>
                                    </ul>
                                    <div className="ttm-social-links-wrapper list-inline">
                                        <ul className="social-icons">
                                            <li>
                                                <a className=" tooltip-bottom" data-tooltip="Linkedin" href="https://www.linkedin.com/company/house-innovation-sarl/" target="_blank"><i className="fab fa-linkedin-in" /></a>
                                            </li>
                                            <li>
                                                <a className=" tooltip-bottom" data-tooltip="Twitter" href="https://twitter.com/House_INNOV" target="_blank"><i className="fab fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a className="tooltip-bottom" data-tooltip="Facebook" href="https://www.facebook.com/housinnov" target="_blank"><i className="fab fa-facebook-f" /></a>
                                            </li>
                                            <li>
                                                <a className=" tooltip-bottom" data-tooltip="Instagram" href="https://www.instagram.com/house_innovation_group/" target="_blank"><i className="fab fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-btn">
                                        < a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" to="#">Envoyer un message</ a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ttm-topbar-wrapper end */}
                {/* ttm-header-wrap */}
                <div className="ttm-header-wrap">
                    <div id="navbar" className="ttm-stickable-header clearfix">
                        <div className="site-header-menu">
                            <div className="container-xl">
                                {/* site-branding */}
                                <div className="site-branding">
                                    <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="Altech" rel="home">
                                        <img id="logo-img" className="img-fluid" alt="logo" src="images/logo_hi-nobg.png"/>
                                    </a>
                                </div>
                                {/* site-branding end*/}
                                {/*site-navigation */}
                                <div className="site-navigation">
                                    <div className="ttm-right-header">
                                        <ul className="ttm-header-icons">
                                            <li className="ttm-header-search-link ttm-bgcolor-skincolor ttm-textcolor-white">
                                                <a onClick={this.toggle}> {this.state.show ? <i className="ti-close" /> : <i className="ti-search" />}</a>
                                                {this.state.show && <div className="ttm-search-overlay">
                                                    <form className="ttm-site-searchform">
                                                        <div className="w-search-form-h">
                                                            <div className="w-search-form-row">
                                                                <div className="w-search-input">
                                                                    <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                                    <button type="submit">
                                                                        <i className="ti ti-search" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>}
                                            </li>
                                            {/* <li className="ttm-header-cart-link ttm-bgcolor-darkgrey ttm-textcolor-white"><a><i className="ti-shopping-cart" /><span>0</span></a></li> */}
                                        </ul>
                                    </div>
                                    <Menu />
                                    <div className="mobilemenu"><Mobilemenu /></div>
                                </div>
                                {/*site-navigation end*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ttm-header-wrap end*/}
            </header>
        )
    }
}

export default Header;