import React from 'react';
import logo from './logo.svg';
import {Slide} from 'react-slideshow-image';
import './Slideshow.css';
import Service from './Services.js';
import Products from './Products1.js';
import Slanted from './Aboutus.js';
import Team from './Teams.js';
import Contactus from './Contactus.js';
import Navmenu from './NavigationT.js';
import Partner from './Partners.js';


const slideImages = [
  require('./mic.jpg'),
   require('./Branding4.jpg'),
   require('./controller1.jpg'),
   require('./concert2.jpg')
 ]


 const properties = {
   duration : 5000,
   transitionDuration: 500,
   infinite : true,
   indicators : true,
   arrows : false
 }


class Navigation extends React.Component {

    render(){
    
    return(
      
      <div>
        
        <Navmenu/>
         
          <div className="overlay">
           <Slide {...properties} className="slider" >
        <div className="each-slide">
        <div style={{'background-image' : `url(${slideImages[0]})`}}>
        <span style={{fontSize: "400%","text-align" : "center", "color": "white", "font-family": "Brush Script MT"}}>Always Keen To Serve You.
            
          </span>
          </div>
          </div>
          <div className="each-slide">
          <div style={{'background-image' : `url(${slideImages[1]})`}}>
          <span className="branding" style={{fontSize: "400%","text-align" : "center", "color": "black", "font-family": "Brush Script MT"}}>
            Logo  , Marketing ,  Creativity , Design
          </span>
          </div>
          </div>
          <div className="each-slide">
          <div style={{'background-image' : `url(${slideImages[2]})`}}>
          <span style={{fontSize: "400%","text-align" : "center", "color": "white", "font-family": "Brush Script MT", }}>You will be happy with our service.</span>
          </div>
          </div>
          <div className="each-slide" >
          <div style={{'background-image' : `url(${slideImages[3]})`}}>
          <span style={{fontSize: "400%","text-align" : "center", "color": "white", "font-family": "Brush Script MT"}}>We Create. You Celebrate.</span>
          </div>
          </div>
          </Slide>
          </div>
         <Service/>
          <Slanted/>
          <Products/>
          <Team/>
          <Partner/>
          <Contactus/>  
            </div>
    )
  }
}














export default Navigation;
