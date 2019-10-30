import React from 'react';
import './Motive.css';

class Motive extends React.Component {
    componentDidMount(){
        document.getElementsByClassName('motive')[0].classList.remove('effect-motive');
        
      }
     componentWillMount(){
      var scrollpos = window.scrollY;
     
      
      window.addEventListener('scroll', function(){
        scrollpos = window.scrollY;
         if(scrollpos > 180 ) {
          console.log(document.body.scrollTop)
         
  
        }
        else {
         
          
    
        }
      })
    }  
    render(){
        return (
            <div className="motive">
                <p className="section-title" id="motive">Our Motive</p>
            <div class="col-sm col-md-10 text-md-center" style={{padding :"0% 0% 0% 15%", fontSize : "150%"}}>
          <p class="text-center">
          <br/>
          
          We create and facilitate platforms that enable different segments of society to <i style={{color: "red"}}>excel 
          in ways of thinking.</i> We enable our clients and partners to effectively advance their 
          business and strategy. We rekindle the <i style={{color : "red"}}>spirit of enlightment</i> to achieve individual and
          collective goals of noble causes.
             </p>
          </div>
          </div>
        )
    }
}
export default Motive;