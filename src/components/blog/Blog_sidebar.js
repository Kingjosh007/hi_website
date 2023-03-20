import React, { Component } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import articles from '../../data/articles.json'
import { convertDateToDayMonthYearArray, convertDateToReadableString, dateComesBefore } from '../../utils/dateUtils';

const allCategories = [...new Set(articles.map(article => article.category))]
    .map(el => el[0].toUpperCase() + el.slice(1))
    .sort((a, b) => a < b ? -1 : 1);

const allTags = [...new Set(articles.map(el => el.tags).flat())]
    .map(el => el[0].toUpperCase() + el.slice(1))
    .sort((a, b) => a < b ? -1 : 1);

const allDates = [...new Set(articles.map(el => el.published_at))]
                .sort((a, b) => dateComesBefore(a, b) ? 1 : -1);

const allMonths = [...new Set(allDates.map(dt => {
    const parts = dt.split("-")
    return `${parts[1]}-${parts[2]}`
}))]

const monthsInLetters = allMonths.map(el => {
    const fullDate = convertDateToReadableString(`01-${el}`);
    const monthAndYear = fullDate.slice(fullDate.indexOf(" ") + 1);
    return monthAndYear[0].toUpperCase() + monthAndYear.slice(1);
})

const monthsObj = {};

for(let i = 0; i < monthsInLetters.length; i++) {
    monthsObj[monthsInLetters[i]] = allMonths[i];
}

export class Blogsidebar extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <aside className="widget widget-search">
                    <form role="search" method="get" className="search-form  box-shadow" action="#">
                        <div className="form-group">
                            <input name="search" type="text" className="form-control bg-white" placeholder="Filtrer les articles...." />
                            <i className="ti-search" />
                        </div>
                    </form>
                </aside>
                <aside className="widget widget-categories">
                    <h3 className="widget-title">Catégories</h3>
                    <ul>
                        {
                            allCategories.map(category => {
                                // return <li><a>{category}</a></li>
                                return (
                                    <Checkbox
                                        icon={<Icon.FiCheck color="#174A41" size={14} />}
                                        name="my-input"
                                        checked={true}
                                        onChange={(value, event) => {
                                            let p = {
                                                isTrue: value,
                                            };
                                            console.log(event);
                                            return alert(value);
                                        }}
                                        borderColor="#2D4A8A"
                                        style={{ cursor: "pointer" }}
                                        labelStyle={{ marginLeft: 5, userSelect: "none" }}
                                        label={category}
                                    />

                                )
                            })
                        }
                    </ul>
                </aside>
                <aside className="widget post-widget">
                    <h3 className="widget-title">Articles récents</h3>
                    <ul className="widget-post ttm-recent-post-list">
                        {
                            articles.sort((a, b) => dateComesBefore(a.published_at, b.published_at) ? 1 : -1)
                                .slice(0, 3)
                                .map((article, index) => {

                                    const dtElts = convertDateToDayMonthYearArray(article.published_at);
                                    const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                    const shortDate = `${dtElts[0]} ${month} ${dtElts[2]}`
                                    return (
                                        <li>
                                            <a href={process.env.PUBLIC_URL + '/article'}><img src={article.image} alt="post-img" /></a>
                                            <a href={process.env.PUBLIC_URL + '/article'}>{article.title}</a>
                                            <span className="post-date"><i className="fa fa-calendar" />{shortDate}</span>
                                        </li>
                                    )
                                })
                        }

                    </ul>
                </aside>
                {/* <aside className="widget widget widget_media_gallery">
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
                </aside> */}
                <aside className="widget tagcloud-widget">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                        {
                            allTags.map((tag, index) => {
                                return (
                                <a className="tag-cloud-link">{tag}</a>
                                )
                            })
                        }
                        
                    </div>
                </aside>
                <aside className="widget widget-categories">
                    <h3 className="widget-title">Archives</h3>
                    <ul>
                    {
                            monthsInLetters.map(monthInLetter => {
                                
                                return (
                                    <Checkbox
                                        key={monthsObj[monthInLetter]}
                                        icon={<Icon.FiCheck color="#174A41" size={14} />}
                                        name="my-input"
                                        checked={true}
                                        onChange={(value, event) => {
                                            let p = {
                                                isTrue: value,
                                            };
                                            return alert(value);
                                        }}
                                        borderColor="#2D4A8A"
                                        style={{ cursor: "pointer" }}
                                        labelStyle={{ marginLeft: 5, userSelect: "none" }}
                                        label={monthInLetter}
                                    />

                                )
                            })
                        }
                    </ul>
                </aside>
            </div>
        )
    }
}


export default Blogsidebar;