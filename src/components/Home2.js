import React, { Component } from 'react';
import { Header } from './layout/Header';
import Home2_mainpage from './Home2_mainpage';
import CarouselPage2 from './banner/Home2_banner';


export class Home2 extends Component {
     render() {
        
        return (
          <div>
            <Header /> 
            <CarouselPage2 />
            <Home2_mainpage />
          </div>
          
        )
    }
}

export default Home2;