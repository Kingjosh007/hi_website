import React, { Component } from 'react';

export class Blogsidebar extends Component {
  constructor(props){
    super();
}
render() {
    return (
        <div>
            <aside className="widget widget-search">
                <form role="search" method="get" className="search-form  box-shadow" action="#">
                    <div className="form-group">
                    <input name="search" type="text" className="form-control bg-white" placeholder="Search...." />
                    <i className="ti-search" />
                    </div>
                </form>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    <li><a>Consulting</a></li>
                    <li><a>Cyber Data</a></li>
                    <li><a>Design</a></li>
                    <li><a>Digital</a></li>
                    <li><a>Marketing</a></li>
                    <li><a>Security</a></li>
                    <li><a>Security</a></li>
                    <li><a>UI/UX Design</a></li>
                </ul>
            </aside>
            <aside className="widget post-widget">
                <h3 className="widget-title">Latest News</h3>
                <ul className="widget-post ttm-recent-post-list">
                    <li>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img" /></a>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>Define World Best IT Solution Technology</a>
                    <span className="post-date"><i className="fa fa-calendar" />May 01, 2019</span>
                    </li>
                    <li>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img" /></a>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>You Must Try 20 Secret Of Digital Transform</a>
                    <span className="post-date"><i className="fa fa-calendar" />May 03, 2019</span>
                    </li>
                    <li>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img" /></a>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>10 PHP Frameworks You Need To Use Anywhere</a>
                    <span className="post-date"><i className="fa fa-calendar" />May 05, 2019</span>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget widget_media_gallery">
                <h3 className="widget-title">Gallery</h3>
                <div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                    <div className="gallery-item">
                    <img src="https://via.placeholder.com/150X150/444444.jpg" className="img-fluid" alt="blog-img" />
                    </div>
                </div>
            </aside>
            <aside className="widget tagcloud-widget">
                <h3 className="widget-title">Tags</h3>
                <div className="tagcloud">
                    <a className="tag-cloud-link">Business</a>
                    <a className="tag-cloud-link">Consult</a>
                    <a className="tag-cloud-link">Cyber</a>
                    <a className="tag-cloud-link">Data</a>
                    <a className="tag-cloud-link">Design</a>
                    <a className="tag-cloud-link">IT-Services</a>
                    <a className="tag-cloud-link">IT-Solution</a>
                    <a className="tag-cloud-link">Marketing</a>
                    <a className="tag-cloud-link">Object</a>
                    <a className="tag-cloud-link">Solution</a>
                </div>
            </aside>
            <aside className="widget widget-categories">
                <h3 className="widget-title">Archives</h3>
                <ul>
                    <li><a>October 2019</a></li>
                    <li><a>August 2019</a></li>
                    <li><a>July 2019</a></li>
                    <li><a>June 2019</a></li>
                </ul>
            </aside>
        </div>
        )
    }
}


export default Blogsidebar;