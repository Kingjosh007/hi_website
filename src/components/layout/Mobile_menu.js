import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Mobilemenu extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return (
    <Router>
        <MDBNavbar>
            <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Home</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Homepage 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home2'}>Homepage 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Home3'}>Homepage 3</MDBDropdownItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span>Header Styles</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Header Style 01</MDBDropdownItem>
                                    <MDBDropdownItem target="_blank" href={process.env.PUBLIC_URL + '/Header_style_02'}>Header Style 02</MDBDropdownItem>
                                    <MDBDropdownItem target="_blank" href={process.env.PUBLIC_URL + '/Header_style_03'}>Header Style 03</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>pages</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Aboutus_01'}>About Us 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Aboutus_02'}>About Us 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Services_01'}>Services 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Services_02'}>Services 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Our_expert'}>Our Expert</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Faq'}>FAQs</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_01'}>Contact Us 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_02'}>Contact Us 2</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error'}>Error Page</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Element'}>Elements</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>services</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/It_consultancy'}>IT Consultancy</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Digital_services'}>Digital Services</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Advisory_services'}>Advisory Services</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Data_structuring'}>Data Structuring</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Experience_design'}>Experience Design</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Content_engineering'}>Content Engineering</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Project</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Project_style1'}>Project Style 1</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Project_style2'}>Project Style 2</MDBDropdownItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span>Project Single</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style1'}>Single Style 01</MDBDropdownItem>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style2'}>Single Style 02</MDBDropdownItem>
                                    <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_style3'}>Single Style 03</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Blog</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog'}>Blog Classic</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_grid'}>Blog Grid View</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_top_image'}>Blog Top Image</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Blog_left_image'}>Blog Left Image</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Single_blog'}>Blog Single View</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Shop</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Shop'}>Default Shop</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Product_details'}>Single Product Details</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Cart'}>Cart</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Checkout'}>Checkout</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBNavbar>
    </Router>
    );
  }
}

export default Mobilemenu;