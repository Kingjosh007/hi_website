import React, { Component } from 'react';
import Header from '../layout/Header';

export class Carrieres extends Component {
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
                                        <h1 className="title">Aucune offre disponible pour le moment</h1>
                                    </div>
                                    <div className="">
                                        <span>Malheureusement, nous n'avons aucun poste à pouvoir pour le moment. Consultez régulièrement cette page pour voir s'il y a du nouveau. En attendant, continuez à donner le meilleur de vous-même et à grandir dans votre carrière! </span>
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

export default Carrieres;