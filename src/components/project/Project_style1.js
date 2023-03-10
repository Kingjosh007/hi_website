import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../layout/Header';
import projects from '../../data/projects.json'

const uniqueCategories = [...new Set(projects.reduce((t, e) => [...t, ...e.categories], []))];
console.log(projects);

export class Project_style1 extends Component {

    // Create a state variable called projectsToDisplay that will be an array of projects to display as the selected categories changes

    constructor(props) {
        super(props);
        this.state = {
            projectsToDisplay: projects
        };

        this.resetProjects = this.resetProjects.bind(this);
        this.handleFilterProjects = this.handleFilterProjects.bind(this);
    }

    resetProjects = () => {
        this.setState({
            projectsToDisplay: projects
        });
    }

    handleFilterProjects = (category) => {
        this.setState({
            projectsToDisplay: projects.filter(project => project.categories
                .map(el => el.toLowerCase())
                .includes(category.toLowerCase()))
        });
    }

render() {

    const { projectsToDisplay, resetProjects } = this.state;
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
                                        <Tab onClick={resetProjects}>
                                            <span>All</span>
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
                                        <TabPanel>
                                            <div className="row multi-columns-row ttm-boxes-spacing-5px">
                                                {
                                                    projectsToDisplay.map((project, index) => {
                                                        return (
                                                            <div className="ttm-box-col-wrapper col-lg-4 col-md-4 col-sm-6" key={index}>
                                                                <div className="featured-imagebox featured-imagebox-portfolio style2">
                                                                    <div className="featured-thumbnail">
                                                                        <img className="img-fluid" src={project.image} alt={`Illustration du projet ${project.name}`} />
                                                                    </div>
                                                                    <div className="featured-content">
                                                                        <div className="category">
                                                                            <p>{project.categories.join(", ").toLowerCase()}</p>
                                                                        </div>
                                                                        <div className="featured-title">
                                                                            <h5><a href={process.env.PUBLIC_URL + '/Single_style1'}>{project.name}</a></h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </TabPanel>
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


export default Project_style1;