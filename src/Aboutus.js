import React, { Component } from 'react';
import './Aboutus.css';
import Slogan from './slogan.js';
import MVC from './MVC.js';
import Motive from './Motive.js';

class Slanted extends Component {
  componentDidMount(){
    document.getElementsByClassName('container-aboutus')[0].classList.remove('effect-aboutus');
    
  }
 componentWillMount(){
  var scrollpos = window.scrollY;
 
  
  window.addEventListener('scroll', function(){
    scrollpos = window.scrollY;
     if(scrollpos > 200 ) {
      console.log(document.body.scrollTop)
     }
    else {
         

    }
  })
}  
    render() {
      return (
        <div> 
      <div className="container-aboutus"  id="aboutus">
      <div  id="aboutus-header">
          <p class="text-sm-center" style={{ fontSize: "250%"}}>Who We Are </p></div>
          <div class="row mt-sm-4 mt-md-0" style={{marginTop : "12%"}}>
            <div class="col-sm-12 col-md-4  text-md-left">
             <Slogan/>
            </div>
          
          <div class="col-sm col-md-8 text-md-center">
          <p class="text-left" style={{fontSize : "125%", marginTop: "-6%"}}>
          <br/>
          We are a team of <b style={{color : "blue"}}>self-motivated</b>, talented and creative thinkers who have come around
          <b style={{color : "blue"}}> wisdom-driven initiatives</b> to make a difference in thinking, atitude, and business making 
          among our society in Ethiopia through <b style={{color : "blue"}}>innovative approach.</b> <br/><br/>


             </p>
            
          </div>
          </div>
        </div>
    
        <MVC/>
        <Motive/></div>
      
      );
    }
  }

  export default Slanted;