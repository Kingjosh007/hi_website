import React, { Component } from 'react';
import { Header } from './layout/Header';
import Home3_mainpage from './Home3_mainpage';
import { CarouselPage } from './banner/Home1_banner';

export class Home3 extends Component {
    render() {        
        return (       
          <div>
            <Header />
            <CarouselPage />
            <Home3_mainpage />
          </div>
          )
    }
}


export default Home3;
