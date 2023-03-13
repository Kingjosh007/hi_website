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
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/presentation'}>Qui sommes-nous ?</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/staff'}>Notre équipe</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>


                  <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span>Nos services</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_apps_web'}>Développement d'applications web</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_apps_mobiles'}>Développement d'applications mobiles</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_sites_vitrines'}>Développement de sites vitrines</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_progiciels'}>Développement de logiciels spécialisés</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_digitalisation'}>Digitalisation de structures</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_robotique_ia'}>Robotique et Intelligence Artificielle</MDBDropdownItem>
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/service_conseil'}>Conseil en informatique</MDBDropdownItem>
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
                            <MDBDropdownItem href={process.env.PUBLIC_URL + '/carrieres'}>Offres d'emploi</MDBDropdownItem>
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