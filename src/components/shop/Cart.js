import React, { Component } from 'react';
import Header from '../layout/Header';

export class Cart extends Component {
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
                                <h1 className="title">Cart</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Cart</span>
                                </div>  
                            </div>
                            </div>{/* /.col-md-12 */}  
                        </div>{/* /.row */}  
                    </div>{/* /.container */}                      
                </div>
                <div className="ttm-row only-one-section ttm-bgcolor-white clearfix">
                    <div className="container-xl">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                            {/* ttm-cart-form */}
                            <form className="ttm-cart-form">
                                <table className="shop_table shop_table_responsive">
                                <thead>
                                    <tr>
                                    <th className="product-remove">&nbsp;</th>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-mainprice">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cart_item">
                                    <td className="product-remove">
                                        <a className="remove">×</a>
                                    </td>
                                    <td className="product-thumbnail">
                                        <a href={process.env.PUBLIC_URL + '/Product_details'}>
                                        <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                        </a>
                                    </td>
                                    <td className="product-name" data-title="Product">
                                        <a href={process.env.PUBLIC_URL + '/Product_details'}>Hoodie with Zipper</a>
                                    </td>
                                    <td className="product-mainprice" data-title="Price">
                                        <span className="Price-amount">
                                        <span className="Price-currencySymbol">$</span>40.00
                                        </span>
                                    </td>
                                    <td className="product-quantity" data-title="Quantity">
                                        <div className="quantity">
                                        <input type="number" className="form-control" defaultValue={1} min={0} title="Qty" />
                                        </div>
                                    </td>
                                    <td className="product-subtotal" data-title="Total">
                                        <span className="Price-amount">
                                        <span className="Price-currencySymbol">$</span>40.00
                                        </span>
                                    </td>
                                    </tr>
                                    <tr className="cart_item">
                                    <td className="product-remove">
                                        <a className="remove">×</a>
                                    </td>
                                    <td className="product-thumbnail">
                                        <a href={process.env.PUBLIC_URL + '/Product_details'}>
                                        <img className="img-fluid" src="https://via.placeholder.com/300X300/444444.jpg" alt="product-img" />
                                        </a>
                                    </td>
                                    <td className="product-name" data-title="Product">
                                        <a href={process.env.PUBLIC_URL + '/Product_details'}>Cap</a>
                                    </td>
                                    <td className="product-price">
                                        <span className="Price-amount" data-title="Price">
                                        <span className="Price-currencySymbol">$</span>18.00
                                        </span>
                                    </td>
                                    <td className="product-quantity" data-title="Quantity">
                                        <div className="quantity">
                                        <input type="number" className="form-control" defaultValue={1} min={0} title="Qty" />
                                        </div>
                                    </td>
                                    <td className="product-subtotal" data-title="Total">
                                        <span className="Price-amount">
                                        <span className="Price-currencySymbol">$</span>18.00
                                        </span>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td colSpan={6} className="actions">
                                        <div className="coupon">
                                        <input type="text" name="coupon_code" className="form-control border" defaultValue placeholder="Coupon code" />
                                        <button type="submit" className="button ttm-btn ttm-bgcolor-darkgrey" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                        </div>
                                        <button type="submit" className="cart_button button ttm-btn ttm-bgcolor-darkgrey" name="update_cart" value="Update cart" disabled="disabled">Update cart</button>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </form>{/* ttm-cart-form end */}
                            {/* cart-collaterals */}
                            <div className="cart-collaterals">
                                <div className="cart_totals ">
                                <h2>Cart totals</h2>
                                <table className="shop_table shop_table_responsive">
                                    <tbody>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td data-title="Subtotal">
                                        <span className="Price-amount">
                                            <span className="Price-currencySymbol">$</span>128.00
                                        </span>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td data-title="Total">
                                        <strong><span className="Price-amount">
                                            <span className="Price-currencySymbol">$</span>128.00</span>
                                        </strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="proceed-to-checkout">
                                    <a href={process.env.PUBLIC_URL + '/Checkout'} className="button ttm-btn ttm-bgcolor-darkgrey checkout-button">Proceed to checkout</a>
                                </div>
                                </div>
                            </div>{/* cart-collaterals end*/}
                            </div>
                        </div>{/* row end */}
                        </div>
                    </div>
            </div>
        )
    }
}


export default Cart;