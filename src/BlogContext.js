import React, { createContext, useState, useEffect } from "react";
// import what is necessary to read .env files
// import articles from "./data/articles.json"

// const BlogContext = React.createContext([{
//     articles,
//     articlesToDisplay: articles,
//     articleToDisplay: {slug: ""}
// }, () => {}]);

const apiBaseUrl = "https://hi-api.up.railway.app/api";


const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [blogInfos, setBlogInfos] = useState({
        articles: [],
        articlesToDisplay: [],
        articleToDisplay: {slug: ""}
    });

    useEffect(() => {
        const fetchArticles = () => {
            const urlToFetch = `${apiBaseUrl}/articles/publish`;
            fetch(urlToFetch)
                .then(response => response.json())
                .then(data => {
                    setBlogInfos({
                        ...blogInfos,
                        articles: data.data,
                        articlesToDisplay: data.data
                    })
                })
        };

        fetchArticles();
    }, []);

    return (
        // the Provider gives access to the context to its children
        <BlogContext.Provider value={[blogInfos, setBlogInfos]}>
          {children}
        </BlogContext.Provider>
      );
};

export { BlogContext, BlogContextProvider };