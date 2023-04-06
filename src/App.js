import React, { Component, useState } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import articles from "./data/articles.json";
import projects from "./data/projects.json";
import BlogContext, { BlogContextProvider } from './BlogContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from './components/layout/Footer';
// pages
import Home from './components/Home';
import Home2_Header2 from './components/Header_style_02';
import Home3_Header3 from './components/Header_style_03';
import Presentation from './components/pages/Presentation';
import Aboutus_02 from './components/pages/Aboutus_02';
import Services_01 from './components/pages/Services_01';
import Services_02 from './components/pages/Services_02';
import Staff from './components/pages/Staff';
import Team_detail from './components/pages/Team_detail';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import Contact_02 from './components/pages/Contact_02';
import Error from './components/pages/Error';
import Element from './components/pages/Element';
import Progiciels from './components/services/Progiciels';
import AppsMobiles from './components/services/AppsMobiles';
import AppsWeb from './components/services/AppsWeb';
import DesignGraphique from './components/services/DesignGraphique';
import Digitalisation from './components/services/Digitalisation';
import SitesVitrines from './components/services/SitesVitrines';
import Projects from './components/project/Projects';
import Project_style2 from './components/project/Project_style2';
import Projet from './components/project/Projet';
import Blog from './components/blog/Blog';
import Article from './components/blog/Article';
import Shop from './components/shop/Shop';
import Product_details from './components/shop/Product_details';
import Cart from './components/shop/Cart';
import Checkout from './components/shop/Checkout';
import ScrollToTop from './components/layout/Gotop';
import ComingSoon from './components/pages/ComingSoon';
import RobotiqueIA from './components/services/RobotiqueIA';
import Conseil from './components/services/Conseil';
import Carrieres from './components/pages/Carrieres';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
const App = () => {

  // const [blogInfos, setBlogInfos] = useState({articles, articlesToDisplay: articles});

  return (
    <BlogContextProvider>
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>  
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>   
        <ScrollToTop />
            <Route exact path='/' component={ Home } /> 
            <Route path='/header_style_02' component={ Home2_Header2 } />
            <Route path='/header_style_03' component={ Home3_Header3 } />
            <Route path="/presentation" component={Presentation} />
            <Route path="/aboutus_02" component={Aboutus_02} />
            <Route path="/services_01" component={Services_01} />
            <Route path="/services_02" component={Services_02} />
            <Route path="/staff" component={Staff} />
            <Route path="/team_detail" component={Team_detail} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/contact_02" component={Contact_02} />
            <Route path="/error" component={Error} />
            <Route path="/element" component={Element} />


            <Route path="/service_apps_web" component={AppsWeb} />
            <Route path="/service_apps_mobiles" component={AppsMobiles} />
            <Route path="/service_sites_vitrines" component={SitesVitrines} />
            <Route path="/service_progiciels" component={Progiciels} />
            <Route path="/service_digitalisation" component={Digitalisation} />
            <Route path="/service_robotique_ia" component={RobotiqueIA} />
            <Route path="/service_design_graphique" component={DesignGraphique} />
            <Route path="/service_conseil" component={Conseil} />

            <Route path="/projects" component={Projects} />
            <Route path="/project_style2" component={Project_style2} />
            <Route path="/projet/:projectId" component={Projet} />

            <Route path="/blog" component={Blog} />
            <Route path="/article/:articleSlug" component={Article} />

            {/* <Route path="/carrieres" component={ComingSoon} /> */}
            <Route path="/carrieres" component={Carrieres} />

            {/* <Route path="/blog_grid" component={Blog_grid} /> */}
            {/* <Route path="/blog_left_image" component={Blog_left_image} />
            <Route path="/blog_top_image" component={Blog_top_image} /> */}

            <Route path="/shop" component={Shop} />
            <Route path="/product_details" component={Product_details} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
        <Footer />
    </Router>  
    </div> 
    </BlogContextProvider>

  );
 }

export default App;
