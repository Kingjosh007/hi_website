import React, { Component } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import articles from '../../data/articles.json'
import { convertDateToDayMonthYearArray, convertDateToReadableString, dateComesBefore, daysBetweenTwoDatesInDDMMYYYY } from '../../utils/dateUtils';
import BlogContext from '../../BlogContext';
import Blogsidebar from './Blog_sidebar';

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

const findArticlesInSameCategory = (art, listOfArt) => {
    const category = art.category;
    const sameCategory = listOfArt.filter(art => art.category === category)
        .filter(art2 => art2.slug !== art.slug)
    return sameCategory;
}

export class ArticleSidebar extends Component {

    state = {
        isSearchButtonClicked: false,
        filterText: "",
        categories: allCategories.map(category => ({ category, selected: true })),
        tags: allTags.map(tag => ({ tag, selected: false })),
        months: monthsInLetters.map(month => ({ month, selected: true })),
    }

    constructor(props) {
        super();
    }
    render() {
        return (
            <BlogContext.Consumer>
                {([blogInfos, setBlogInfos]) => {

                    const recentArticles = blogInfos.articles.sort((a, b) => dateComesBefore(a.published_at, b.published_at) ? 1 : -1)
                        .filter((article) => article.slug !== blogInfos.articleToDisplay.slug)
                        .slice(0, 3);

                    const sameCategoryArticles = findArticlesInSameCategory(blogInfos.articleToDisplay, blogInfos.articles)
                        .sort((a, b) => dateComesBefore(a.published_at, b.published_at) ? 1 : -1)
                        .slice(0, 3);

                    const samePeriodArticles = blogInfos.articles.filter((article) => (daysBetweenTwoDatesInDDMMYYYY(article.published_at, blogInfos.articleToDisplay.published_at) < 1000))
                        .filter((article) => article.slug !== blogInfos.articleToDisplay.slug)
                        .slice(0, 10)
                        .sort((a, b) => dateComesBefore(a.published_at, b.published_at) ? 1 : -1)


                    const filterArticlesFromText = () => {
                        const text = this.state.filterText;
                        const filteredArticles = [...blogInfos.articles].filter(article => {
                            if (text.length >= 3) {
                                const titleCondition = article.title.toLowerCase().includes(text.toLowerCase());
                                const descriptionCondition = article.description.toLowerCase().includes(text.toLowerCase());
                                const contentCondition = article.content.toLowerCase().includes(text.toLowerCase());
                                return titleCondition || descriptionCondition || contentCondition;
                            }
                            return true;
                        })

                        setBlogInfos({
                            ...blogInfos,
                            articlesToDisplay: filteredArticles
                        });
                    }


                    return (
                        <div>


                            <aside className="widget post-widget">
                                <h3 className="widget-title">Articles récents</h3>
                                <ul className="widget-post ttm-recent-post-list">
                                    {
                                        recentArticles.length > 0 &&
                                        (
                                            recentArticles.map((article, index) => {

                                                const dtElts = convertDateToDayMonthYearArray(article.published_at);
                                                const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                const shortDate = `${dtElts[0]} ${month} ${dtElts[2]}`
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

                            <aside className="widget post-widget">
                                <h3 className="widget-title">Dans la même catégorie</h3>
                                <ul className="widget-post ttm-recent-post-list">
                                    {

                                        sameCategoryArticles.length > 0 && (
                                            sameCategoryArticles.map((article, index) => {

                                                const dtElts = convertDateToDayMonthYearArray(article.published_at);
                                                const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                const shortDate = `${dtElts[0]} ${month} ${dtElts[2]}`
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

                                samePeriodArticles.length > 0 && (

                                    <aside className="widget post-widget">
                                        <h3 className="widget-title">Publiés à la même période</h3>
                                        <ul className="widget-post ttm-recent-post-list">

                                            {
                                                samePeriodArticles.map((article, index) => {

                                                    const dtElts = convertDateToDayMonthYearArray(article.published_at);
                                                    const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                    const shortDate = `${dtElts[0]} ${month} ${dtElts[2]}`
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
            </BlogContext.Consumer>
        )
    }
}


export default ArticleSidebar;