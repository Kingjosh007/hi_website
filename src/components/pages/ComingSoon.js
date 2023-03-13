import React, { Component } from 'react';
import Header from '../layout/Header';

export class ComingSoon extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-box text-center">
                                    <div className="page-title-heading">
                                        <h1 className="title">En maintenance</h1>
                                    </div>
                                    <div className="">
                                        <span>La page que vous souhaitez consulter subit quelques modifications et sera bientôt disponible.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* page-title end*/}
            </div>
        )
    }
}

export default ComingSoon;