import React from "react";
import articles from "./data/articles.json"

const BlogContext = React.createContext([{
    articles,
    articlesToDisplay: articles,
}, () => {}]);

export default BlogContext;