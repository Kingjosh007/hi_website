import React, { Component } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { convertDateToDayMonthYearArray, convertDateToReadableString, dateComesBefore, dateTimeComesBefore, daysBetweenTwoDatesInDDMMYYYY, daysBetweenTwoDatesInYYYYMMDD, todayInYYYYMMDD } from '../../utils/dateUtils';
import { BlogContext } from '../../BlogContext';
import Blogsidebar from './Blog_sidebar';


export class ArticleSidebar extends Component {

    state = {
        tags: [],
        months: [],

    }

    constructor(props) {
        super();
    }

    render() {

        const { slugToExclude, category } = this.props;

        
        return (
            <BlogContext.Consumer>
                {([blogInfos, setBlogInfos]) => {

                    if(!blogInfos.articleToDisplay) return null;

                    if (blogInfos.articles.length > 0) {
                        
                        const allCategories = [...new Set(blogInfos.articles.map(article => article.category))]
                        .map(el => el[0].toUpperCase() + el.slice(1))
                        .sort((a, b) => a < b ? -1 : 1);
                    
                         const allTags = [...new Set(blogInfos.articles.map(el => el.tags).flat())]
                        .map(el => el[0].toUpperCase() + el.slice(1))
                        .sort((a, b) => a < b ? -1 : 1);

                        if(this.state.tags.length === 0 && allTags.length > 0) {
                            this.setState({ tags: allTags.map(tag => ({ tag, selected: false })) });
                        } 
                        
                        const allDates = [...new Set(blogInfos.articles.map(el => el.publish_at))]
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
                    
                    for (let i = 0; i < monthsInLetters.length; i++) {
                        monthsObj[monthsInLetters[i]] = allMonths[i];
                    }
                    
                    const transformDateToMonthInLetters = (date) => {
                        const parts = date.split("-")
                        const month = `${parts[1]}-${parts[2]}`;
                        let monthInLetters = "";
                        for (let key in monthsObj) {
                            if (monthsObj[key] === month) {
                                monthInLetters = key;
                                break;
                            }
                        }
                        return monthInLetters;
                    }

                    if(this.state.months.length === 0 && monthsInLetters.length > 0) {
                        this.setState({ months: monthsInLetters.map(month => ({ month, selected: true }))})
                    }
                    
                    const findArticlesInSameCategory = (listOfArt) => {
                        const sameCategory = listOfArt.filter(art => art.category === category)
                            .filter(art2 => art2.slug !== slugToExclude)
                        return sameCategory;
                    }

                    const recentArticles = [...blogInfos.articles].sort((a, b) => dateTimeComesBefore(a.publish_at, b.publish_at) ? 1 : -1)
                        .filter((article) => article.slug !== blogInfos.articleToDisplay.slug)
                        .slice(0, 3);

                    const sameCategoryArticles = findArticlesInSameCategory([...blogInfos.articles])
                        .sort((a, b) => dateTimeComesBefore(a.publish_at.split(".")[0], b.publish_at.split(".")[0]) ? 1 : -1)
                        .slice(0, 3);

                    const samePeriodArticles = [...blogInfos.articles].filter((article) => {
                        const daysInterval = daysBetweenTwoDatesInYYYYMMDD((article.publish_at || todayInYYYYMMDD()).split("T")[0] || todayInYYYYMMDD(), blogInfos.articleToDisplay.publish_at?.split("T")[0] || todayInYYYYMMDD()) || 1000;
                        return daysInterval <= 30
                    })
                        .filter((article) => article.slug !== blogInfos.articleToDisplay.slug)
                        .slice(0, 10)
                        .sort((a, b) => dateTimeComesBefore(a.publish_at, b.publish_at) ? 1 : -1)


                    return (
                        <div>
                            <aside className="widget post-widget">
                                <h3 className="widget-title">Articles récents</h3>
                                <ul className="widget-post ttm-recent-post-list">
                                    {
                                        recentArticles.length > 0 &&
                                        (
                                            recentArticles.filter(a => a.slug !== slugToExclude)
                                                          .map((article, index) => {

                                                const dtElts = convertDateToDayMonthYearArray(article.publish_at.split("T")[0]);
                                                const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                const shortDate = `${dtElts[2]} ${month} ${dtElts[0]}`
                                                return (
                                                    <li>
                                                        <a href={process.env.PUBLIC_URL + '/article/' + article.slug}><img src={article.image} alt="post-img" /></a>
                                                        <a href={process.env.PUBLIC_URL + '/article/' + article.slug}>{article.title}</a>
                                                        <span className="post-date"><i className="fa fa-calendar" />{shortDate}</span>
                                                    </li>
                                                )
                                            })
                                        )
                                    }
                                </ul>
                            </aside>

                            {
                                sameCategoryArticles.length > 0 && (

                                    <aside className="widget post-widget">
                                        <h3 className="widget-title">Dans la même catégorie</h3>
                                        <ul className="widget-post ttm-recent-post-list">
                                            {
                                                sameCategoryArticles.filter(a => a.slug !== slugToExclude)
                                                                    .map((article, index) => {
                                                    const dtElts = convertDateToDayMonthYearArray(article.publish_at.split("T")[0]);
                                                    const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                    const shortDate = `${dtElts[2]} ${month} ${dtElts[0]}`
                                                    return (
                                                        <li>
                                                            <a href={process.env.PUBLIC_URL + '/article/' + article.slug}><img src={article.image} alt="post-img" /></a>
                                                            <a href={process.env.PUBLIC_URL + '/article/' + article.slug}>{article.title}</a>
                                                            <span className="post-date"><i className="fa fa-calendar" />{shortDate}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </aside>
                                )
                            }

                            {

                                samePeriodArticles.length > 0 && (

                                    <aside className="widget post-widget">
                                        <h3 className="widget-title">Publiés à la même période</h3>
                                        <ul className="widget-post ttm-recent-post-list">

                                            {
                                                samePeriodArticles.filter(a => a.slug !== slugToExclude)
                                                                  .map((article, index) => {

                                                    const dtElts = convertDateToDayMonthYearArray(article.publish_at.split("T")[0]);
                                                    const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                    const shortDate = `${dtElts[2]} ${month} ${dtElts[0]}`
                                                    return (
                                                        <li>
                                                            <a href={process.env.PUBLIC_URL + '/article/' + article.slug}><img src={article.image} alt="post-img" /></a>
                                                            <a href={process.env.PUBLIC_URL + '/article/' + article.slug}>{article.title}</a>
                                                            <span className="post-date"><i className="fa fa-calendar" />{shortDate}</span>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </aside>
                                )
                            }
                        </div>)
                }}
                }
            </BlogContext.Consumer>
        )
    }
}


export default ArticleSidebar;