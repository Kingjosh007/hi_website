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
                        <MDBDropdownToggle nav>
                            <a href="/contact">Accueil</a>
                        </MDBDropdownToggle>
                         <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Page d'accueil</MDBDropdownItem>
                        </MDBDropdownMenu> 
                    </MDBDropdown>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>À propos</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/aboutus_01'}>Qui sommes-nous ?</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/Our_expert'}>Notre équipe </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Nos services</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/advisory_services'}>Développement d'applications web</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/digital_services'}>Développement d'applications mobiles</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/advisory_services'}>Développement de sites vitrines</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/it_consultancy'}>Développement de logiciels spécialisés</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/experience_design'}>Digitalisation de structures</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/content_engineering'}>Intelligence Artificielle</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/data_structuring'}>Conseil en informatique</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <span>Nos réalisations</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/project_style1'}>Portfolio</MDBDropdownItem>
                        </MDBDropdownMenu> 
                    </MDBDropdown>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <span>Blog</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/blog'}>Consulter les articles</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <span>Carrières</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '#'}>Offres d'emploi</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <span>Contact</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/contact'}>Nos coordonnées</MDBDropdownItem>
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