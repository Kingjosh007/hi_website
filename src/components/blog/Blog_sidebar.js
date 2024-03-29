import React, { Component } from 'react';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { convertDateToDayMonthYearArray, convertDateToReadableString, dateComesBefore } from '../../utils/dateUtils';
import { BlogContext } from '../../BlogContext';



export class Blogsidebar extends Component {

    state = {
        isSearchButtonClicked: false,
        filterText: "",
        categories: [],
        tags: [],
        months: [],
        isSet: false,
        nbSet: 0,
    }

    constructor(props) {
        super();
    }
    render() {
        return (
            <BlogContext.Consumer>
                {([blogInfos, setBlogInfos]) => {
                    if (blogInfos.articles.length > 0) {

                        const allCategories = [...new Set(blogInfos.articles.map(article => article.category))]
                            .map(el => el[0].toUpperCase() + el.slice(1))
                            .sort((a, b) => a < b ? -1 : 1);

                        const allTags = [...new Set(blogInfos.articles.map(el => el.tags).flat())]
                            .map(el => el[0].toUpperCase() + el.slice(1))
                            .sort((a, b) => a < b ? -1 : 1);

                        const allDates = [...new Set(blogInfos.articles.map(el => el.publish_at.split("T")[0]))]
                            .sort((a, b) => dateComesBefore(a, b) ? 1 : -1);

                        const allMonths = [...new Set(allDates.map(dt => {
                            const parts = dt.split("-")
                            return `${parts[0]}-${parts[1]}`
                        }))]

                        const monthsInLetters = allMonths.map(el => {
                            const fullDate = convertDateToReadableString(`${el}-01`);
                            const monthAndYear = fullDate.slice(fullDate.indexOf(" ") + 1);
                            return monthAndYear[0].toUpperCase() + monthAndYear.slice(1);
                        })

                        if(!this.state.isSet) {
                            this.setState({
                                categories: allCategories.map(category => ({ category, selected: true })),
                                tags: allTags.map(tag => ({ tag, selected: false })),
                                months: monthsInLetters.map(month => ({ month, selected: true }))
                            })

                            this.setState({ isSet: true })
                            this.setState({ nbSet: this.state.nbSet + 1 })
                        }

                        const monthsObj = {};

                        for (let i = 0; i < monthsInLetters.length; i++) {
                            monthsObj[monthsInLetters[i]] = allMonths[i];
                        }

                        console.log(monthsObj);

                        const transformDateToMonthInLetters = (date) => {
                            const parts = date.split("-")
                            const month = `${parts[0]}-${parts[1]}`;
                            let monthInLetters = "";
                            for (let key in monthsObj) {    
                                if (monthsObj[key] === month) {
                                    monthInLetters = key;
                                    break;
                                }
                            }
                            return monthInLetters;
                        }

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
                        const filterArticles = () => {
                            const acceptedCategories = [...this.state.categories].filter(c => c.selected === true).map(c => c.category.toLowerCase());
                            const monthsToLower = [...this.state.months].filter(m => m.selected).map(el => el.month.toLowerCase());
                            const tagsToLower = [...this.state.tags].filter(t => t.selected).map(el => el.tag.toLowerCase());
                            


                            const filteredArticles = [...blogInfos.articles].filter(article => {

                                const articleMonth = transformDateToMonthInLetters(article.publish_at.split("T")[0]).toLowerCase();
                                const categoryCondition = (acceptedCategories.length === 0
                                    || acceptedCategories.includes(article.category.toLowerCase()))

                                const monthsCondition = (monthsToLower.length === 0
                                    || monthsToLower.includes(articleMonth));

                                const tagsCondition = (tagsToLower.length === 0 || article.tags.map(t => t.toLowerCase()).some(t => tagsToLower.includes(t)));

                                return categoryCondition && monthsCondition && tagsCondition;

                            })

                            console.log(this.state.months);

                            setBlogInfos({
                                ...blogInfos,
                                articlesToDisplay: filteredArticles
                            })

                        }

                        const handleCheckUncheckCategory = (category) => {
                            const categories = [...this.state.categories].map(c => {
                                if (c.category === category) {
                                    c.selected = !c.selected;
                                }
                                return c;
                            })
                            this.setState({ categories });
                            filterArticles();
                        }

                        const handleMarkUnmarkTag = (tag) => {
                            const tags = [...this.state.tags].map(t => {
                                if (t.tag === tag) {
                                    t.selected = !t.selected;
                                }
                                return t;
                            })
                            this.setState({ tags });
                            filterArticles();
                        }

                        const handleCheckUncheckMonth = (month) => {
                            const months = [...this.state.months].map(m => {
                                if (m.month === month) {
                                    m.selected = !m.selected;
                                }
                                return m;
                            })
                            this.setState({ months });
                            filterArticles();
                        }

                        const rippleClassName = this.state.isSearchButtonClicked ? "ripple" : "";

                        return (

                            this.state.isSet && (
                                <div>
                                    <aside className="widget widget-search">
                                        <form role="search" method="get" className="search-form  box-shadow" action="#">
                                            <div className="form-group">
                                                <input name="search"
                                                    type="text"
                                                    className="form-control bg-white"
                                                    placeholder="Filtrer les articles...."
                                                    onChange={(e) => {
                                                        this.setState({ filterText: e.target.value });
                                                    }}

                                                />
                                                <i className={`ti-search ${rippleClassName}`}
                                                    onClick={() => {
                                                        this.setState({ isSearchButtonClicked: true });

                                                        setTimeout(() => this.setState({
                                                            isSearchButtonClicked: false
                                                        }), 1000);

                                                        filterArticlesFromText()
                                                    }}
                                                />
                                            </div>
                                        </form>
                                    </aside>
                                    {
                                        this.state.categories.length > 0 && (
                                            <aside className="widget widget-categories">
                                                <h3 className="widget-title">Catégories</h3>
                                                <ul>
                                                    {
                                                        allCategories.map(category => {
                                                            return (
                                                                <Checkbox
                                                                    icon={<Icon.FiCheck color="#174A41" size={14} />}
                                                                    name="my-input"
                                                                    checked={this.state.categories.find(c => c.category === category).selected}
                                                                    onChange={(value, event) => {
                                                                        handleCheckUncheckCategory(category);
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
                                        )
                                    }

                                    <aside className="widget post-widget">
                                        <h3 className="widget-title">Articles récents</h3>
                                        <ul className="widget-post ttm-recent-post-list">
                                            {
                                                blogInfos.articles.sort((a, b) => dateComesBefore(a.publish_at, b.publish_at) ? 1 : -1)
                                                    .slice(0, 3)
                                                    .map((article, index) => {

                                                        const dtElts = convertDateToDayMonthYearArray(article.publish_at);
                                                        const month = dtElts[1].length > 4 ? dtElts[1].slice(0, 4) + "." : dtElts[1];
                                                        const shortDate = `${dtElts[2]} ${month} ${dtElts[0]}`
                                                        return (
                                                            <li>
                                                                <a href={process.env.PUBLIC_URL + '/article/' + article.slug}><img src={article.image} alt="post-img" /></a>
                                                                <a href={process.env.PUBLIC_URL + '/article/' + article.slug}> {article.title} </a>
                                                                <span className="post-date"><i className="fa fa-calendar" />{shortDate}</span>
                                                            </li>
                                                        )
                                                    })
                                            }

                                        </ul>
                                    </aside>

                                    {
                                        this.state.tags.length > 0 && (
                                            <aside className="widget tagcloud-widget">
                                                <h3 className="widget-title">Tags</h3>
                                                <div className="tagcloud">
                                                    {
                                                        allTags.map((tag, index) => {
                                                            const isSelected = this.state.tags.find(t => t.tag === tag).selected;

                                                            return isSelected ? (
                                                                <a className="tag-cloud-link marked"
                                                                    onClick={() => {
                                                                        handleMarkUnmarkTag(tag);
                                                                    }}
                                                                >{tag}</a>
                                                            ) : (
                                                                <a className="tag-cloud-link"
                                                                    onClick={() => {
                                                                        handleMarkUnmarkTag(tag);
                                                                    }}
                                                                >{tag}</a>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </aside>
                                        )
                                    }


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
                                                                handleCheckUncheckMonth(monthInLetter);
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

                        )
                    }
                }
                }
            </BlogContext.Consumer>
        )
    }
}


export default Blogsidebar;