import React, { Component } from 'react';

export class Detailbox extends Component {

    constructor(props) {
        super()
    }

    render() {


        const {project} = this.props;

        return (
            
            <div className="ttm-pf-single-detail-box mb-35">
                <div className="ttm-pf-single-title">
                <h5>Détails de {project.name}</h5>
                </div>
                <p>{project.description}</p>
                <ul className="ttm-pf-detailbox-list">
                <li><i className="fa fa-user" /><span> Client : </span>{project.client_name}</li>
                <li><i className="fa fa-map-marker" /><span>Localisation: </span>{project.client_location}</li>
                <li><i className="fa fa-calendar" /><span> Durée:</span>{project.duration}</li>
                <li><i className="ti ti-world" /><span> Lien: </span> <a href={project.link} target="_blank" rel="noreferrer noopener">{project.link}</a></li>
                <li><i className="far fa-bookmark" /><span> Catégories:</span>{project.categories?.join(", ") || "Digitalisation"}</li>
                
                </ul>
            </div>
            )
    }
}


export default Detailbox;