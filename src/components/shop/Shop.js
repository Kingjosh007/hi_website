import React, { Component } from 'react';
import Header from '../layout/Header';

export class Shop extends Component {
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
                                <h1 className="title">Product</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Shop</span>
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
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="products-result-count">Showing 1–9 of 14 results</p>
                                        <form className="products-ordering float-sm-right" method="get">
                                            <div className="form-group mb-30">
                                                <select name="orderby" className="form-control border">
                                                    <option value="menu_order">Default sorting</option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by newness</option>
                                                    <option value="price">Sort by price: low to high</option>
                                                    <option value="price-desc">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
                                                    <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Cap</a></h2>
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
                                                <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Hoodie with Zipper</a></h2>
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
                                                    <span className="product-Price-currencySymbol">$</span>40.00
                                                    </span>
                                                </del>
                                                <ins><span className="product-Price-amount">
                                                    <span className="product-Price-currencySymbol">$</span>35.00
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
                                                <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Logo Collection</a></h2>
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
                                            <img className="img-fluid w-100" src="https://via.placeholder.com/300X300/444444.jpg" alt="" />
                                            <div className="ttm-shop-icon">{/* ttm-shop-icon */}
                                                <div className="product-btn add-to-cart-btn"><a  >ADD TO CART</a></div>
                                            </div>
                                            </div>{/* product-thumbnail end */}
                                            <div className="product-content text-left">{/* product-content */}
                                            <div className="product-title">{/* product-title */}
                                                <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Long Sleeve Tee</a></h2>
                                            </div>
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <span className="product-price">{/* product-Price */}
                                                <span className="product-Price-currencySymbol">$</span>32.00
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
                                                <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Polo</a></h2>
                                            </div>
                                            <div className="ttm-ratting-star">{/* ratting-star */}
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <span className="product-price">{/* product-Price */}
                                                <span className="product-Price-currencySymbol">$</span>40.00
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
                                                <h2><a href={process.env.PUBLIC_URL + '/Product_details'}>Single</a></h2>
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
                                                    <span className="product-Price-currencySymbol">$</span>50.00
                                                    </span>
                                                </del>
                                                <ins><span className="product-Price-amount">
                                                    <span className="product-Price-currencySymbol">$</span>40.00
                                                    </span>
                                                </ins>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="ttm-pagination">
                                            <span className="page-numbers current">1</span>
                                            <a className="page-numbers"  >2</a>
                                            <a className="next page-numbers"  ><i className="ti ti-arrow-right" /></a>
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
                                    <a   className="tag-cloud-link">Accessories</a>
                                    <a   className="tag-cloud-link">Decor</a>
                                    <a   className="tag-cloud-link">Hoodies</a>
                                    <a   className="tag-cloud-link">Music</a>
                                    <a   className="tag-cloud-link">Tshirts</a>
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


export default Shop;