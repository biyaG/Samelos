import React from 'react';
import logo from './logo.svg';
import './Services.css';

class Service extends React.Component {
    constructor(props){
        super(props);
        
        
        
      }
      componentDidMount(){
        document.getElementsByClassName('service-title')[0].classList.remove('effect-title');
          document.getElementsByClassName('service-title2')[0].classList.remove('effect-title2');
          document.getElementsByClassName('service-title3')[0].classList.remove('effect-title3');
          document.getElementsByClassName('service-title4')[0].classList.remove('effect-title4');
          document.getElementsByClassName('service-title5')[0].classList.remove('effect-title5');
          document.getElementsByClassName('service-title6')[0].classList.remove('effect-title6');
      }
     componentWillMount(){
      var scrollpos = window.scrollY;
     
      
      window.addEventListener('scroll', function(){
        scrollpos = window.scrollY;
         if(scrollpos > 180 ) {
          console.log(document.body.scrollTop)
         
          document.getElementsByClassName('service-title')[0].classList.add('effect-title');
          document.getElementsByClassName('service-title2')[0].classList.add('effect-title2');
          document.getElementsByClassName('service-title3')[0].classList.add('effect-title3');
          document.getElementsByClassName('service-title4')[0].classList.add('effect-title4');
          document.getElementsByClassName('service-title5')[0].classList.add('effect-title5');
          document.getElementsByClassName('service-title6')[0].classList.add('effect-title6');



        }
        else {
          document.getElementsByClassName('service-title')[0].classList.remove('effect-title');
          document.getElementsByClassName('service-title2')[0].classList.remove('effect-title2');
          document.getElementsByClassName('service-title3')[0].classList.remove('effect-title3');
          document.getElementsByClassName('service-title4')[0].classList.remove('effect-title4');
          document.getElementsByClassName('service-title5')[0].classList.remove('effect-title5');
          document.getElementsByClassName('service-title6')[0].classList.remove('effect-title6');

          

        }
      })
    }  
    render() {
  return (
    <div className="services" id="services">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
        <div className="services-section">
            <div className="inner-width">
                <div id="Services">
                <p  className="section-title">Our services</p>
                </div>
                
                <div className="services-container">
                <div className="service-box">
                <div className="service-icon">
                <i className="fas fa-ad fa-2x"></i>
                </div>
                <div className="service-title  effect-title"  id="service-title">Advertizing</div>
                <div className="service-desc">
                Advertizing Materials, Brand Activation, Content Distribution and Target Audience
                </div>
                </div>

                <div className="service-box">
                <div className="service-icon">
                <i className="fas fa-calendar-week fa-2x"></i>
                </div>
                <div className="service-title2 effect-title2"  id="service-title">Event Organizing</div>
                <div className="service-desc">
                Samelos handles events such as Concert, Conference,
Festival, Celebration, Exhibition, Seminar, Tournament  for any kind of organization.

                </div>
                </div>

                <div className="service-box ">
                <div className="service-icon">
                <i className="fas fa-bullhorn fa-2x"></i>
                </div>
                <div className="service-title3 effect-title3"  id="service-title">Promotion</div>
                <div className="service-desc">
                Upgrading Products, Brochures, Magazines and  Promotional Materials
                </div>
                </div>

                <div className="service-box">
                <div className="service-icon">
                <i className="fas fa-tv fa-lg"></i>
                </div>
                <div className="service-title4 effect-title4"  id="service-title">Media</div>
                <div className="service-desc">
                Samelos purchases on both goverment and private broadcast for radio and television programs.
                </div>
                </div>

                <div className="service-box">
                <div className="service-icon">
                <i className="fas fa-satellite-dish fa-2x"></i>
                </div>
                <div className="service-title5 effect-title5"  id="service-title">Communication</div>
                <div className="service-desc">
                Marketing, Audience, Product Launching and Media Relationships.
                </div>
                </div>

                <div className="service-box">
                <div className="service-icon">
                <i className="fas fa-paint-brush fa-2x"></i>
                </div>
                <div className="service-title6 effect-title6"  id="service-title">Creative Service</div>
                <div className="service-desc">
                 Logo design, Branding design, Creative design and concepts.
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

  );}
}

export default Service;
