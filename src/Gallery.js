import React from 'react';
import logo from './logo.svg';
import './Gallery.css';
import image1 from './3.jpg';
import image2 from './15.jpg';
import image3 from './7.jpg';
import image4 from './17.jpg';
import imageuu from './2.jpg';
import header from './pexels-photo-744318.jpeg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";





function Gallery() {
  return (
    <div className="gallery-img" >
    <div class="w3-container w3-teal">
    <div class="img-back" >
  <a target="_blank" href={imageuu}>
  <img className="control" src={header} alt="Trolltunga Norway" width="100%" height="400" ></img>
  </a>
                </div>
              </div>

              <div className="headerTitle">
<span> HOME -> Gallery</span>
</div>
        <div class="img">
  <a target="_blank" href={imageuu}>
    <img src={require('./2.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_forest.jpg">
    <img src={require('./3.jpg')} alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_lights.jpg">
    <img src={require('./4.jpg')} alt="Northern Lights" width="600" height="400"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_mountains.jpg">
    <img src={require('./5.jpg')} alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./6.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./7.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">St.Lideta College exhibition</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./8.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./9.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./10.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./11.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./12.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./13.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Event Organizers</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./14.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./15.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Ahadu</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./16.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Andromeda</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./17.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Andromeda</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./18.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./19.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./20.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>



<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./24.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>

<div class="img">
  <a target="_blank" href="img_fjords.jpg">
    <img src={require('./26.jpg')} alt="Trolltunga Norway" width="300" height="200"/>
  </a>
  <div class="desc">Birikirkita</div>
</div>



    </div>

  );
}

export default Gallery;
