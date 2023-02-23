import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../layout/Header';

export class Product_details extends Component {
    render() {
        return (
            <div className="site-main">
                <Header/>
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12"> 
                                <div className="title-box text-center">
                                    <div className="page-title-heading">
                                        <h1 className="title">Product Details</h1>
                                    </div>{/* /.page-title-captions */}
                                    <div className="breadcrumb-wrapper">
                                        <span>
                                            <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                        </span>
                                        <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                        <span>Product Details</span>
                                    </div>  
                                </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <div className="sidebar ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-9 content-area">
                                <div className="ttm-single-product-details product">
                                    <div className="ttm-single-product-info clearfix">
                                        <div className="product-gallery images">
                                            <figure className="ttm-product-gallery__wrapper">
                                                <div className="product-gallery__image">
                                                    <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                                </div>
                                                <div className="product-gallery__image">
                                                    <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                                </div>
                                                <div className="product-gallery__image">
                                                    <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                                </div>
                                                <div className="product-gallery__image">
                                                    <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="summary entry-summary">
                                            <h3 className="singel_product_title">Beanie with Logo</h3>
                                            <div className="product-rating clearfix">
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <a href="#reviews" className="review-link" rel="nofollow">(<span className="count">1</span> customer review)</a>
                                            </div>
                                            <p className="price">
                                            <span className="Price-amount amount">
                                                <span className="Price-currencySymbol">$</span>20.00
                                            </span>
                                            </p>
                                            <div className="product-details__short-description">
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>
                                            </div>
                                            <form className="cart">
                                            <div className="quantity"><label className="screen-reader-text">Quantity</label>
                                                <input type="number" id="quantity" className="form-control qty text border" step={1} min={1} max={50} name="quantity" defaultValue={1} title="Qty" />
                                            </div>
                                            <button className="cart_button ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-bgcolor-darkgrey" title="Submit now">Add to cart</button>
                                            </form>
                                            <div className="product_meta">
                                            <div className="sku_wrapper">
                                                <span>SKU: </span>
                                                <a rel="tag">Woo-beanie-logo</a>
                                            </div>
                                            <div className="posted_in">
                                                <span>Category: </span>
                                                <a rel="tag">Accessories</a>
                                            </div>
                                            <div className="tagged_as">
                                                <span>Tag: </span>
                                                <span className="sku">Decor</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ttm-tabs tabs-for-single-products">
                                        <Tabs>
                                            <TabList>
                                                <Tab><span>Description</span></Tab>
                                                <Tab><span>Additional information</span></Tab>
                                                <Tab><span>Reviews (1)</span></Tab>
                                            </TabList>   
                                            <div className="content-tab">                        
                                                <TabPanel>
                                                    {/* content-inner */}
                                                    <div className="content-inner">
                                                        <h2>Description</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>{/* content-inner end*/}
                                                </TabPanel>
                                                <TabPanel>
                                                    {/* content-inner */}
                                                    <div className="content-inner">
                                                        <h2>Additional information</h2>
                                                        <table className="shop_attributes">
                                                            <tbody><tr><th>color</th><td><p>Blue</p></td></tr></tbody>
                                                        </table>
                                                    </div>{/* content-inner end*/}
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="content-inner">
                                                        <div id="reviews" className="woocommerce-Reviews">
                                                            <div id="comments">
                                                                <h2 className="woocommerce-Reviews-title">1 review for <span>Beanie with Logo</span></h2>
                                                                <ol className="commentlist">
                                                                    <li className="review">
                                                                        <div className="comment_container">
                                                                            <img className="avatar" src="https://via.placeholder.com/100X100/444444.jpg" alt="comment-img" />
                                                                            <div className="comment-text">
                                                                                <div className="ttm-ratting-star float-right">{/* ratting-star */}
                                                                                    <i className="fa fa-star" />
                                                                                    <i className="fa fa-star" />
                                                                                    <i className="fa fa-star" />
                                                                                    <i className="fa fa-star" />
                                                                                    <i className="fa fa-star" />
                                                                                </div>
                                                                                <p className="meta">
                                                                                    <strong className="review__author">Cherie </strong><span className="review__dash">–</span>
                                                                                    <time className="woocommerce-review__published-date" dateTime="2018-11-01T04:58:58+00:00">November 1, 2018</time>
                                                                                </p>
                                                                                <div className="description">
                                                                                    <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante<br />Very good product and amazing quality.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                            <div id="review_form_wrapper">
                                                                <div className="comment-respond">
                                                                    <span className="comment-reply-title">Add a review
                                                                        <small><a rel="nofollow" id="cancel-comment-reply-link"  >Cancel reply</a></small>
                                                                    </span>
                                                                    <form action="#" method="post" id="commentform" className="comment-form">
                                                                        <p className="comment-notes">
                                                                            <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                                                                        </p>
                                                                        <div className="comment-form-rating">
                                                                            <label>Your rating</label>
                                                                            <ul className="stars">
                                                                            <li className="fa fa-star-o" />
                                                                            <li className="fa fa-star-o" />
                                                                            <li className="fa fa-star-o" />
                                                                            <li className="fa fa-star-o" />
                                                                            <li className="fa fa-star-o" />
                                                                            </ul>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-12">
                                                                                <div className="form-group">
                                                                                    <label>Your review*</label>
                                                                                    <textarea name="Massage" rows={3} required="required" className="form-control border-bottom" defaultValue={""} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="form-group">
                                                                                    <label>Name*</label>
                                                                                    <input name="name" type="text" className="form-control border-bottom" required="required" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-12">
                                                                                <div className="form-group">
                                                                                    <label>Email*</label>
                                                                                    <input name="email" type="text" required="required" className="form-control border-bottom" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" defaultValue="yes" />
                                                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                                                            </div>
                                                                            <div className="col-md-12">
                                                                                <div className="form-group text-left mt-30">
                                                                                    <button type="submit" id="submit" className="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey" value>
                                                                                    Submit
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                        
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                                <div className="related products">
                                    <h3>Related products</h3>
                                    <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product">{/* product */}
                                        <div className="product-thumbnail">{/* product-thumbnail */}
                                            <img className="img-fluid w-100" src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                            <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                                            <div className="product-btn add-to-cart-btn"><a  >ADD TO CART</a></div>
                                            </div>
                                        </div>{/* product-thumbnail end */}
                                        <div className="product-content text-left">{/* product-content */}
                                            <div className="product-title">{/* product-title */}
                                            <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Album</a></h2>
                                            </div>
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            </div>
                                            <span className="product-price">{/* product-Price */}
                                            <span className="product-Price-currencySymbol">$</span>16.00
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product">{/* product */}
                                        <div className="product-thumbnail">{/* product-thumbnail */}
                                            <span className="onsale">Sale!</span>
                                            <img className="img-fluid w-100" src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                            <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                                            <div className="product-btn add-to-cart-btn"><a  >ADD TO CART</a></div>
                                            </div>
                                        </div>{/* product-thumbnail end */}
                                        <div className="product-content text-left">{/* product-content */}
                                            <div className="product-title">{/* product-title */}
                                            <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Beanie with Logo</a></h2>
                                            </div>
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            </div>
                                            <span className="product-price">{/* product-Price */}
                                            <span className="product-Price-currencySymbol">
                                                <del><span className="product-Price-amount">
                                                    <span className="product-Price-currencySymbol">$</span>20.00
                                                </span>
                                                </del>
                                                <ins><span className="product-Price-amount">
                                                    <span className="product-Price-currencySymbol">$</span>18.00
                                                </span>
                                                </ins>
                                            </span>
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product">{/* product */}
                                        <div className="product-thumbnail">{/* product-thumbnail */}
                                            <img className="img-fluid w-100" src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                            <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                                            <div className="product-btn add-to-cart-btn"><a  >ADD TO CART</a></div>
                                            </div>
                                        </div>{/* product-thumbnail end */}
                                        <div className="product-content text-left">{/* product-content */}
                                            <div className="product-title">{/* product-title */}
                                            <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Belt</a></h2>
                                            </div>
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            </div>
                                            <span className="product-price">{/* product-Price */}
                                            <span className="product-Price-currencySymbol">$</span>16.00
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 widget-area">
                            <aside className="widget widget-search">
                                <form role="search" method="get" className="search-form  box-shadow" action="#">
                                <div className="form-group">
                                    <input name="search" type="text" className="form-control bg-white" placeholder="Search...." />
                                    <i className="ti-search" />
                                </div>
                                </form>
                            </aside>
                            <aside className="widget widget-categories">
                                <h3 className="widget-title">Categories</h3>
                                <ul>
                                <li><a  >Consulting</a></li>
                                <li><a  >Cyber Data</a></li>
                                <li><a  >Design</a></li>
                                <li><a  >Digital</a></li>
                                <li><a  >Marketing</a></li>
                                <li><a  >Security</a></li>
                                <li><a  >Security</a></li>
                                <li><a  >UI/UX Design</a></li>
                                </ul>
                            </aside>
                            <aside className="widget widget-top-rated-products">
                                <h3 className="widget-title">Popular Dishes</h3>
                                <ul>
                                <li className="clearfix">
                                    <a  ><img src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                    <span className="product-title">Album</span>
                                    </a>
                                    <div className="ttm-ratting-star">{/* ratting-star */}
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    </div>
                                    <span className="product-Price-amount amount"><span className="product-Price-currencySymbol">$</span>33.00</span>
                                </li>
                                <li className="clearfix">
                                    <a  ><img src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                    <span className="product-title">Beanie with Logo</span>
                                    </a>
                                    <div className="ttm-ratting-star">{/* ratting-star */}
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    </div>
                                    <span className="product-Price-amount amount">
                                    <span className="product-Price-currencySymbol">
                                        <del><span className="product-Price-amount">
                                            <span className="product-Price-currencySymbol">$</span>50.00
                                        </span>
                                        </del>
                                        <ins><span className="product-Price-amount">
                                            <span className="product-Price-currencySymbol">$</span>40.00
                                        </span>
                                        </ins>
                                    </span>
                                    </span>
                                </li>
                                <li className="clearfix">
                                    <a  ><img src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                    <span className="product-title">Polo</span>
                                    </a>
                                    <div className="ttm-ratting-star">{/* ratting-star */}
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    </div>
                                    <span className="product-Price-amount amount"><span className="product-Price-currencySymbol">$</span>33.00</span>
                                </li>
                                </ul>
                            </aside>
                            <aside className="widget tagcloud-widget">
                                <h3 className="widget-title">Tags</h3>
                                <div className="tagcloud">
                                <a className="tag-cloud-link">Accessories</a>
                                <a className="tag-cloud-link">Decor</a>
                                <a className="tag-cloud-link">Hoodies</a>
                                <a className="tag-cloud-link">Music</a>
                                <a className="tag-cloud-link">Tshirts</a>
                                </div>
                            </aside>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Product_details;