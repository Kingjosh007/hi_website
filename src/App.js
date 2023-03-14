import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layout
import { Footer } from './components/layout/Footer';
// pages
import Home from './components/Home';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home2_Header2 from './components/Header_style_02';
import Home3_Header3 from './components/Header_style_03';
import Presentation from './components/pages/Presentation';
import Aboutus_02 from './components/pages/Aboutus_02';
import Services_01 from './components/pages/Services_01';
import Services_02 from './components/pages/Services_02';
import Our_expert from './components/pages/Our_expert';
import Team_detail from './components/pages/Team_detail';
import Faq from './components/pages/Faq';
import Contact_01 from './components/pages/Contact_01';
import Contact_02 from './components/pages/Contact_02';
import Error from './components/pages/Error';
import Element from './components/pages/Element';
import It_consultancy from './components/services/It_consultancy';
import AppsMobiles from './components/services/AppsMobiles';
import AppsWeb from './components/services/AppsWeb';
import Data_structuring from './components/services/Data_structuring';
import Experience_design from './components/services/Experience_design';
import SitesVitrines from './components/services/SitesVitrines';
import Project_style1 from './components/project/Project_style1';
import Project_style2 from './components/project/Project_style2';
import Single_style1 from './components/project/Single_style1';
import Single_style2 from './components/project/Single_style2';
import Single_style3 from './components/project/Single_style3';
import Blog from './components/blog/Blog';
import Blog_grid from './components/blog/Blog_grid';
import Blog_left_image from './components/blog/Blog_left_image';
import Blog_top_image from './components/blog/Blog_top_image';
import Single_blog from './components/blog/Single_blog';
import Shop from './components/shop/Shop';
import Product_details from './components/shop/Product_details';
import Cart from './components/shop/Cart';
import Checkout from './components/shop/Checkout';
import ScrollToTop from './components/layout/Gotop';
import ComingSoon from './components/pages/ComingSoon';

const appHistory = {
  basename: process.env.PUBLIC_URL
};
const history = createBrowserHistory(appHistory);
function App() {
 
  return (
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
            <Route path="/staff" component={Our_expert} />
            <Route path="/team_detail" component={Team_detail} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact_01} />
            <Route path="/contact_02" component={Contact_02} />
            <Route path="/error" component={Error} />
            <Route path="/element" component={Element} />

            {/* <Route path="/service_digitalisation" component={It_consultancy} /> */}
            <Route path="/service_digitalisation" component={ComingSoon} />

            <Route path="/service_design_graphique" component={ComingSoon} />

            <Route path="/service_apps_mobiles" component={AppsMobiles} />

            <Route path="/service_apps_web" component={AppsWeb} />

            {/* <Route path="/service_conseil" component={Data_structuring} /> */}
            <Route path="/service_conseil" component={ComingSoon} />

            {/* <Route path="/service_progiciels" component={It_consultancy} /> */}
            <Route path="/service_progiciels" component={ComingSoon} />

            {/* <Route path="/service_robotique_ia" component={Experience_design} /> */}
            <Route path="/service_robotique_ia" component={ComingSoon} />

            <Route path="/service_sites_vitrines" component={SitesVitrines} />
            {/* <Route path="/service_sites_vitrines" component={ComingSoon} /> */}


            <Route path="/projects" component={Project_style1} />
            <Route path="/project_style2" component={Project_style2} />
            <Route path="/single_style1" component={Single_style1} />
            <Route path="/single_style2" component={Single_style2} />
            <Route path="/single_style3" component={Single_style3} />

            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/blog" component={ComingSoon} />

            <Route path="/carrieres" component={ComingSoon} />



            <Route path="/blog_grid" component={Blog_grid} />
            <Route path="/blog_left_image" component={Blog_left_image} />
            <Route path="/blog_top_image" component={Blog_top_image} />
            <Route path="/single_blog" component={Single_blog} />
            <Route path="/shop" component={Shop} />
            <Route path="/product_details" component={Product_details} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
        <Footer />
    </Router>  
    </div> 
  );
 }

export default App;
