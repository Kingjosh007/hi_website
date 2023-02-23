import React, { Component } from 'react';
import Header from '../layout/Header';

export class Error extends Component {
    render() {

        return (
            <div className="site-main">
                <Header />
                {/* error 404 */}
                <section className="error-404 ttm-textcolor-grey">
                    <div className="container-xl">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="ttm-big-icon ttm-textcolor-skincolor">
                            <i className="far fa-thumbs-down" />
                        </div>
                        <header className="page-header"><h1 className="page-title">404 ERROR</h1></header>
                        <div className="page-content"> <p>This page may have been moved or deleted. Be sure to check your spelling.</p></div>
                            <a className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mb-15" href={process.env.PUBLIC_URL + '/'}>Back To Home</a>
                        </div>
                    </div>
                    </div>
                </section>
                {/* error 404 end*/}
            </div>
            )
    }
}


export default Error;