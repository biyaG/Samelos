import React from 'react';
import './slogan.css';
import samelos from'./samelosLogoRed.png';

function Slogan() {
  return (
        <div className="slogan">

                <img src={samelos} />
              <p className="mvc">State Of Wisdom</p>
              </div>
  )
}
export default Slogan;