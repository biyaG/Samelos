import React from 'react';
import logo from './logo.svg';
import './Products1.css';
import image1 from './3.jpg';
import image2 from './15c.jpg';
import image3 from './7.jpg';
import image4 from './17c.jpg';
import { BrowserRouter, Route} from 'react-router-dom';
import Gallery from './Gallery.js'


function Service() {
  return (
          <div className="products"  id="ourworks">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
        <div className="products-section">
            <div className="inner-widthp">
                <p className="section-title">Our Works</p>
                <div className="products-container">
                <div className="products-box">
                <div style={{"box-shadow" : "10px 2px 4px 10px rgba(0, 0, 0, 0.5)", "border-top-left-radius": "12px", "border-top-right-radius": "12px","border-bottom-left-radius": "12px", "border-bottom-right-radius": "12px"}}>
<img className="product-img" src={image1} alt="Card image cap" style={{"border-top-left-radius": "12px", "border-top-right-radius": "12px", height : "122%"}}/>
<div className="product-body">
<h4 >Event Organizing</h4>
<p >Samelos has organized an event held at St.Lideta College on Ict, Tourism and marketing domain.
     </p>
</div>

<div className="product-footer-body">
    <div  className="product-footer"></div>
    <BrowserRouter>
    View More
    <Route path="/Gallery" component={Gallery}/>
    </BrowserRouter>
<a></a>
</div>
</div>
                </div>

                <div className="products-box">
                <div style={{"box-shadow" : "10px 2px 4px 10px rgba(0, 0, 0, 0.5)", "border-top-left-radius": "12px", "border-top-right-radius": "12px","border-bottom-left-radius": "12px", "border-bottom-right-radius": "12px"}}>
<img className="product-img" src={image2} alt="Card image cap" style={{"border-top-left-radius": "12px", "border-top-right-radius": "12px"}}/>
<div className="product-body">
<h4 >TV Shows</h4>
<p >Samelos has showed a program Enkeche Enkechu on Jtv channel for Easter Holiday.</p>
</div>

<div className="product-footer-body">
    <div  className="product-footer"></div>
<small>You tube link</small>
</div>
</div>
                </div>

                <div className="products-box">
                <div style={{"box-shadow" : "10px 2px 4px 10px rgba(0, 0, 0, 0.5)", "border-top-left-radius": "12px", "border-top-right-radius": "12px","border-bottom-left-radius": "12px", "border-bottom-right-radius": "12px"}}>
<img className="product-img" src={image3} alt="Card image cap" style={{"border-top-left-radius": "12px", "border-top-right-radius": "12px"}}/>
<div className="product-body">
<h4 >Radio Program</h4>
<p >Samelos has worked with Ahadu Radio , and presented Birkirkita <br/><br/></p>
</div>

<div className="product-footer-body">
    <div  className="product-footer"></div>
<small>You tube link</small>
</div>
</div>
                </div>

                <div className="products-box">
                <div style={{"box-shadow" : "10px 2px 4px 10px rgba(0, 0, 0, 0.5)", "border-top-left-radius": "12px", "border-top-right-radius": "12px","border-bottom-left-radius": "12px", "border-bottom-right-radius": "12px"}}>
<img className="product-img" src={image4} alt="Card image cap" style={{"border-top-left-radius": "12px", "border-top-right-radius": "12px"}}/>
<div className="product-body">
<h4 >Andromeda</h4>
<p >Andromeda is a program that is still broadcasted on Jtv channel.<br/><br/></p>
</div>

<div className="product-footer-body">
    <div  className="product-footer"></div>
<small>Comming Soon</small>
</div>
</div>
                </div>

                
                </div>
            </div>
        </div>

        
    </div>

  );
}

export default Service;
