import React from 'react';
import logo from './logo.svg';
import './Partners.css';
import image1 from './Sonet.png';
import image2 from './jtv.png';
import image3 from './ahadu.jpg';
import image4 from './55.png';
// import image4 from 'slide_1.jpg';
import Comment from './Comment.js';


function Partner() {
  return (
      <div>
    <div className="partners" id="partners">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
        <div className="partners-section">
            <div className="inner-widthp">
                <p className="section-title">Our Partners</p>
                <div className="partners-container">
                <div className="partners-box">
<img className="partners-img1" src={image1} alt="Card image cap"/>


                </div>

                <div className="partners-box">
<img className="partners-img" src={image2} alt="Card image cap"/>


                </div>

                <div className="partners-box">
<img className="partners-img3" src={image3} alt="Card image cap" />


                </div>

                <div className="partners-box">
<img className="partners-img4" src={image4} alt="Card image cap"/>

                </div>
                </div>
            </div>
        </div>
    </div>
    <Comment/></div>
  );
}

export default Partner;
