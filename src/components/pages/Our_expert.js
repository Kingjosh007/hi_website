import React, { Component } from 'react';
import Header from '../layout/Header';
import staff from '../../data/hiStaff.json';

export class Our_expert extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />
               <div className="" style={{marginBottom: "2em"}}>
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12"> 
                            </div> 
                        </div>  
                    </div>
                </div> 
                <section className="ttm-row grid-section clearfix">
                    <div className="container-xl">
                    <div className="row">
                     {
                         staff.sort((a, b) => a.id - b.id).map((staffMember, index) => {
                            return (
                                <div className="col-md-6 col-lg-4 col-sm-6">
                                    {/* featured-imagebox-team */}
                                    <div className="featured-imagebox featured-imagebox-team style1 mb-30">
                                        <div className="featured-thumbnail">{/* featured-thumbnail */}
                                        <img className="img-fluid" src={staffMember.photo} alt={`${staffMember.surname} ${staffMember.name}`} />
                                        <div className="ttm-social-links-wrapper">
                                            <ul className="social-icons list-inline">{/* social-icons */}
                                            {
                                                staffMember.linkedin?.display && staffMember.linkedin.link.length > 5 && (
                                                    <li className="social-linkedin"><a target="_blank" rel="noopener noreferrer" href={staffMember.linkedin.link}><i className="fab fa-linkedin-in" /></a></li>
                                                )
                                            }
                                            {
                                                staffMember.twitter?.display && staffMember.twitter.link.length > 5 && (
                                                    <li className="social-twitter"><a target="_blank" rel="noopener noreferrer" href={staffMember.twitter.link}><i className="fab fa-twitter" /></a></li>
                                                )
                                            }
                                            </ul>
                                        </div>
                                        </div> 
                                        <div className="featured-content box-shadow">
                                        <div className="featured-title">{/* featured-title */}
                                            <h5><a href={process.env.PUBLIC_URL + '/Team_detail'}>{staffMember.surname} {staffMember.name.toUpperCase()}</a></h5>
                                        </div>
                                        <p className="category">{staffMember.role}</p>{/* category */}
                                        </div>
                                    </div>{/* featured-imagebox-team end*/}
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


export default Our_expert;