import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import projects from '../../data/projects.json'

const uniqueCategories = [...new Set(projects.reduce((t, e) => [...t, ...e.categories], []))];


export class Projects extends Component {

    state = {
        projectsToDisplay: projects
    }

    constructor(props) {
        super();
    }

    resetProjects = () => {
        this.setState({
            projectsToDisplay: projects
        });
    }

    handleFilterProjects = (category) => {
        const projectsWithCategory = projects.filter(project => 
                                            project.categories
                                                   .map(el => el.toLowerCase())
                                            .includes(category.toLowerCase()));
        
        
        this.setState({
            projectsToDisplay: projectsWithCategory
        });

    }

    navigateTo = (url) => {
        const { history } = this.props;
        history.push(url);
    }

render() {

    return (
        <div className="site-main">
            <Header />
            <div className="ttm-row tab-section clearfix">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <div className="ttm-tabs text-center ttm-tab-style-classic style2">
                                <Tabs>
                                    <TabList className="text-uppercase mb-4">
                                        <Tab onClick={() => {this.resetProjects()}}>
                                            <span>Tous</span>
                                        </Tab>
                                        {
                                            uniqueCategories.map((category, index) => {
                                                return (
                                                    <Tab onClick={() => {
                                                        this.handleFilterProjects(category)
                                                    }}>
                                                        <span>{category}</span>
                                                    </Tab>
                                                )
                                            })
                                        }
                                    </TabList>

                                    <div className="content-tab">
                                            <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                {
                                                    this.state.projectsToDisplay.map((project, index, w) => {
                                                        return (
                                                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6" key={index}>
                                                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                                    <div className="featured-thumbnail">
                                                                        <img className="img-fluid" src={project.image} alt={`Illustration du projet ${project.name}`} />
                                                                    </div>
                                                                    <div className="featured-content" 
                                                                         style={{cursor: "pointer"}}
                                                                         onClick={
                                                                            () => {
                                                                                this.navigateTo('/projet/' + project.id)
                                                                            }
                                                                         }>
                                                                        <div className="category">
                                                                            <p>{project.categories.join(", ").toLowerCase()}</p>
                                                                        </div>
                                                                        <div className="featured-title">
                                                                            <h5 style={{color: "#fff"}}>{project.name}</h5> 
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}


export default Projects;