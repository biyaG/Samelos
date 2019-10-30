import React from 'react';
import logo from './logo.svg';
import './Teams.css';




function Team() {
     

  return (
       
    <div className="team"  id="ourteam">
        
        <div className="teams-section">
            <div className="inner-width">
            <p className="section-title">Our Team</p>
            
                <div className="teams-container">

                <div class="flip-card">
                <div class="flip-card-inner">
                <div className="team-box">
                <div class="flip-card-front">

                <img src={require("./profile.jpg")} alt="Avatar" style={ {width:"200px",height:"300px;"}} />
                </div>
                <div class="flip-card-back">
                <h4>Samelos</h4> 
                <h6>Marketing</h6> 
                <a href="#"><i class="fab fa-instagram"></i></a> 
                <a href="#"><i class="fab fa-twitter"></i></a>  
                <a href="#"><i class="fab fa-linkedin"></i></a>  
                <a href="#"><i class="fab fa-facebook"></i></a> 
           </div>
                </div>
                </div>
                </div>  

                <div class="flip-card">
                <div class="flip-card-inner">
                <div className="team-box">  
                <div class="flip-card-front">
                <img src={require("./profile.jpg")} alt="Avatar" style={ {width:"200px",height:"300px;"}} />
                </div>
                <div class="flip-card-back">
                <h4>Samelos</h4> 
                <h6>Marketing</h6> 
                <a href="#"><i class="fab fa-instagram"></i></a> 
                <a href="#"><i class="fab fa-twitter"></i></a>  
                <a href="#"><i class="fab fa-linkedin"></i></a>  
                <a href="#"><i class="fab fa-facebook"></i></a> 
           </div>
                </div>
                </div>
                </div>

                <div class="flip-card">
                <div class="flip-card-inner">
                <div className="team-box">
                <div class="flip-card-front">
                <img src={require("./profile.jpg")} alt="Avatar" style={ {width:"200px",height:"300px;"}} />
                </div>
                <div class="flip-card-back">
                <h4>Samelos</h4> 
                <h6>Marketing</h6> 
                <a href="#"><i class="fab fa-instagram"></i></a> 
                <a href="#"><i class="fab fa-twitter"></i></a>  
                <a href="#"><i class="fab fa-linkedin"></i></a>  
                <a href="#"><i class="fab fa-facebook"></i></a> 
           </div>
                </div>
                </div>
                </div>

                <div class="flip-card">
                <div class="flip-card-inner">
                <div className="team-box">
                <div class="flip-card-front">
                <img src={require("./profile.jpg")} alt="Avatar" style={ {width:"200px",height:"300px;"}} />
                </div>
                <div class="flip-card-back">
                <h4>Samelos</h4> 
                <h6>Marketing</h6> 
                <a href="#"><i class="fab fa-instagram"></i></a> 
                <a href="#"><i class="fab fa-twitter"></i></a>  
                <a href="#"><i class="fab fa-linkedin"></i></a>  
                <a href="#"><i class="fab fa-facebook"></i></a> 
           </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Team;
