import React, { Component } from 'react';
import Header from '../layout/Header';

export class Checkout extends Component {
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
                                <h1 className="title">Checkout</h1>
                                </div>{/* /.page-title-captions */}
                                <div className="breadcrumb-wrapper">
                                <span>
                                    <a title="Homepage" href={process.env.PUBLIC_URL + '/'}><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                </span>
                                <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                <span>Checkout</span>
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
                            <div className="coupon_toggle">
                                <div className="coupon_code">
                                Have a coupon? <a href={process.env.PUBLIC_URL + '/Checkout'}>Click here to enter your code</a>
                                </div>
                            </div>
                            <form name="checkout" className="checkout row">
                                <div className="col-lg-6">
                                <h3>Billing details</h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name<abbr>*</abbr></label>
                                        <input type="text" name="fname" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name<abbr>*</abbr></label>
                                        <input type="text" name="lname" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Company name (optional)<abbr>*</abbr></label>
                                        <input type="text" name="cname" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Country <abbr>*</abbr></label>
                                        <select name="billing_country" tabIndex={-1} aria-hidden="true" className="form-control border">
                                        <option value>Select a country…</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Street address<abbr>*</abbr></label>
                                        <input type="text" name="address" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Town / City<abbr>*</abbr></label>
                                        <input type="text" name="city" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>State<abbr>*</abbr></label>
                                        <select name="billing_state" id="billing_state" className="form-control border">
                                        <option value>Select a state…</option>
                                        <option value="AP">Andhra Pradesh</option>
                                        <option value="AR">Arunachal Pradesh</option>
                                        <option value="AS">Assam</option>
                                        <option value="BR">Bihar</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>ZIP<abbr>*</abbr></label>
                                        <input type="text" name="zip" className="form-control border" />
                                    </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Phone (optional)<abbr>*</abbr></label>
                                        <input type="text" name="phone" className="form-control border" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <h3>Additional information</h3>
                                <div className="row">
                                    <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Order notes <abbr>*</abbr></label>
                                        <textarea name="order" className="form-control border" rows={4} defaultValue={""} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <h3 id="order_review_heading">Your order</h3>
                                <div id="order_review" className="checkout-review-order">
                                    <table className="shop_table checkout-review-order-table">
                                    <thead>
                                        <tr>
                                        <th className="product-name">Product</th>
                                        <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cart_item">
                                        <td className="product-name">Hoodie with Zipper&nbsp;
                                            <strong className="product-quantity">× 1</strong>
                                        </td>
                                        <td className="product-total">
                                            <span className="Price-amount amount">
                                            <span className="Price-currencySymbol">$</span>40.00
                                            </span>
                                        </td>
                                        </tr>
                                        <tr className="cart_item">
                                        <td className="product-name">Cap&nbsp;
                                            <strong className="product-quantity">× 1</strong>
                                        </td>
                                        <td className="product-total">
                                            <span className="Price-amount">
                                            <span className="Price-currencySymbol">$</span>18.00
                                            </span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <span className="Price-amount amount">
                                            <span className="Price-currencySymbol">$</span>1610.00
                                            </span>
                                        </td>
                                        </tr>
                                        <tr className="order-total">
                                        <th>Total</th>
                                        <td><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>1610.00</span></strong> </td>
                                        </tr>
                                    </tfoot>
                                    </table>
                                    <div id="payment" className="checkout-payment">
                                    <ul className="payment_methods">
                                        <li className="payment_method_ppec_paypal">
                                        <div className="payment_box">
                                            <p className="mb-0">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                                        </div>
                                        </li>
                                    </ul>
                                    <div className="checkout-form place-order clearfix">
                                        <p className="payment_policy">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a className="ttm-textcolor-skincolor">Privecy policy</a> </p>
                                        <button type="submit" className="button ttm-btn ttm-btn-size-sm ttm-bgcolor-darkgrey float-right" name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>{/* row end */}
                        </div>
                    </div>
            </div>
        )
    }
}


export default Checkout;