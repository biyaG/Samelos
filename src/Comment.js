import React from 'react';
import {Slide} from 'react-slideshow-image';
import './Comment.css';

const slideImages = [
  <p>slide 1</p>,
  <p>slide 2</p>,
  <p>slide 3</p>,
  <p>slide 4</p>
 ]


 const properties = {
   duration : 5000,
   transitionDuration: 500,
   infinite : true,
   indicators : false,
   arrows : true
 }


class Comment extends React.Component {
    render(){
    
    return(
      
      <div  className="sliderComment" >
   
   <p className="section-title">What People Say About us?</p>
           <Slide {...properties}>
           
        <div className="each-slide-comment">
        <div>
        <span>
            <blockquote class="blockquore-reverse">
            <p>I am thrilled to work with samelos they are so motivated, active and hard workers.
              <br/> I am very happy with your services.</p>
            <footer><cite title="Belayneh Alemu">Solomon Gebremeskel</cite></footer> 
            </blockquote>
            </span>
          </div>
          </div>
          <div className="each-slide-comment">
          <div>
          <span >
          <blockquote class="blockquore-reverse">
            <p>I am so glad to work with this young and skilled team. 
              <br/>They are goal oriented and try to accomplish their task quickly. </p>
            <footer><cite title="Belayneh Alemu">Genet Abede</cite></footer> 
            </blockquote>            
          </span>
          </div>
          </div>
          <div className="each-slide-comment">
          <div >
          <span>
          <blockquote class="blockquore-reverse">
            <p>Samelos team is very collabortive, energetic and welcoming.
              <br/>I am so happy i get the opportunity to work with them. </p>
            <footer> <cite title="Belayneh Alemu">Selamawit Bayu</cite></footer> 
            </blockquote>
          </span>
          </div>
          </div>
          <div className="each-slide-comment" >
          <div>
          <span>
          <blockquote class="blockquore-reverse">
            <p></p>
            <footer>Quote by <cite title="Belayneh Alemu">Bruhe Tesfa</cite></footer> 
            </blockquote>
          </span>
          </div>
          </div>
          </Slide>
          
            </div>
    )
  }
}
export default Comment;














