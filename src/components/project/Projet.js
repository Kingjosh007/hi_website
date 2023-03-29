import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import Detailbox from './Detail_box';

import projects from '../../data/projects.json'

export class Projet extends Component {

    constructor(props) {
        super()
    }

    state = {
        project: {},
        isSet: false,
        nbSet: 0
    }

    xClosestProjects = (p, x) => {
        const projectCategories = p.categories.map(c => c.toLowerCase());
        const projectWithLowerCaseCategories = projects.map(p => {
            return {
                ...p,
                categories: p.categories.map(c => c.toLowerCase())
            }
        });

        const closestProjects = projectWithLowerCaseCategories.sort((a, b) => {
            const aCategories = a.categories.filter(c => projectCategories.includes(c)).length;
            const bCategories = b.categories.filter(c => projectCategories.includes(c)).length;
            return bCategories - aCategories;
        })
        .filter(pp => p.id !== pp.id)

        return closestProjects.slice(0, x);
    }
    render() {

        const { match } = this.props;
        const { projectId } = match.params;



        if (!this.state.isSet) {
            this.setState({
                project: projects.find(p => p.id === projectId),
                isSet: true,
                nbSet: this.state.nbSet + 1
            })
        }


        return (
            <div className="site-main">
                <Header />
                <section className="ttm-row project-single-section clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-6 col-xl-8">

                                <div className="ttm_single_image-wrapper mb-35">
                                    <img className="img-fluid"
                                        src={this.state.project.image}
                                        title={`Bannière du projet ${this.state.project.name}`}
                                        alt={`Bannière du projet ${this.state.project.name}`} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <Detailbox project={this.state.project} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h4>Description</h4>
                                <p>{this.state.project.short_desc}</p>
                            </div>

                            <div className="col-12">
                                <div className="separator">
                                    <div className="sep-line mt-35 mb-35" />
                                </div>
                            </div>

                        </div>
                        <div className="row ttm-pf-single-related-wrapper ">
                            <div className="col-12">
                                <h4 className="mb-30">Projets similaires</h4>
                            </div>
                            { 
                               
                                this.state.isSet && this.xClosestProjects(this.state?.project, 3).map(p => {
                                    return (
                                        <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-12">
                                            <div className="featured-imagebox featured-imagebox-portfolio style2 mb-20">
                                                <div className="featured-thumbnail">
                                                    <img className="img-fluid" src={p.image} alt="image" />
                                                </div>
                                                <div className="featured-content">
                                                    <div className="category">
                                                        <p>{p.categories.map(el => el.toLowerCase()).join(", ")}</p>
                                                    </div>
                                                    <div className="featured-title">
                                                        <h5><a href={process.env.PUBLIC_URL + '/projet/' + p.id}>{p.name}</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Projet;