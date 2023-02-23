import React, { Component } from 'react';
import Header2 from './layout/Header2';
import Home2_mainpage from './Home2_mainpage';
import CarouselPage3 from './banner/Home3_banner';

export class Home2_Header2 extends Component {
  render() {
    return(
      <div>
          <Header2/>
          <CarouselPage3 />
          <Home2_mainpage />
      </div>
      
    )
  }
} 

export default Home2_Header2;