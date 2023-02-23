import React, { Component } from 'react';
import Header3 from './layout/Header3';
import Home3_mainpage from './Home3_mainpage';
import CarouselPage2 from './banner/Home2_banner';

export class Home3_Header3 extends Component {
  render() {
    return(
      <div>
          <Header3/>
          <CarouselPage2 />
          <Home3_mainpage />
      </div>
      
    )
  }
} 

export default Home3_Header3;