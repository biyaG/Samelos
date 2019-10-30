import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import samelos from'./logoformel1.png';
import './NavigationT.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navmenu extends React.Component {
    constructor(props){
      super(props);
      
      this.toggleNavbar = this.toggleNavbar.bind(this);

  
      this.state = {
        collapsed : true,
        menu_class: ''
      }
    }
   
    
    toggleNavbar(){
      this.setState({
        collapsed : !this.state.collapsed
        
  
      })
      if(!(this.state.collapsed)){
        console.log(this.state.collapsed)
        document.getElementsByClassName('items')[0].classList.add('items-parent');
        

        
      }
      else {
        document.getElementsByClassName('items')[0].classList.add('items-parent');
        

      }
      
      
    }

    componentDidMount(){
      document.getElementsByClassName('header')[0].classList.remove('home-section');
          document.getElementsByClassName('items')[0].classList.remove('navlink-text');
          document.getElementsByClassName('items')[0].classList.remove('items-parent');
    }

    componentWillMount(){
      var scrollpos = window.scrollY;
     
      
      window.addEventListener('scroll', function(){
        scrollpos = window.scrollY;
         if(scrollpos > 10 ) {
          console.log(document.body.scrollTop)
         
          document.getElementsByClassName('header')[0].classList.add('home-section');
          // document.getElementsByClassName('items')[0].classList.add('navlink-text');
          // document.getElementsByClassName('items')[0].classList.remove('items-parent');


        }
        else {
          document.getElementsByClassName('header')[0].classList.remove('home-section');
          // document.getElementsByClassName('items')[0].classList.remove('navlink-text');
          // document.getElementsByClassName('items')[0].classList.remove('items-parent');

        }
      })
    }   
    
    render(){
      let top_menu_class = `top-menu ${this.state.menu_class}`;
      return(
        
        <div id="home">
          <div className="navigation">
        <Navbar  navbar fixed="top" color="faded" bg="primary" light expand="lg"  className="header home-section">
        <NavbarBrand  href="/" className="ml-auto" style={{color:"orange", zIndex : "35"}} className="nav-padding"><img src={samelos}/></NavbarBrand> 
            <NavbarToggler onClick={this.toggleNavbar} />
       
         
            <Collapse isOpen={!this.state.collapsed}   navbar  className="items items-parent">
              <Nav  navbar className="ml-auto menus">
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Home
              </Link>
                </NavItem >
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Services
              </Link>
                </NavItem>
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                About Us
              </Link>
                </NavItem>
                <NavItem  style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="ourworks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Our Works
              </Link>
                </NavItem>
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="ourteam"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Our Team
              </Link>
                </NavItem>
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="partners"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Partners
              </Link>
                </NavItem>
                <NavItem style={{zIndex : "35", paddingLeft : "2%"}}>
                  <Link
                  className="items navlink-text"
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
              >
                Contact Us
              </Link>
                </NavItem>
              </Nav>
              
            </Collapse>
            </Navbar>
            </div>
            </div>
    )
  }
}

  
export default Navmenu;