import React from 'react';
import './Contactus.css';
import { Form, Input, Textarea, FormGroup, Button } from 'reactstrap'
import axios from 'axios';

class Contactus extends React.Component
{
  constructor(){
    super()

    this.state = {
      name : '',
      email : '',
      phone : '',
      message : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange = e => {
    this.setState({[e.target.name] : e.target.vlaue})
  }
  async handleSubmit(e){
    e.preventDefault()

    const { name, email, phone, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      phone,
      message
    })
  }
  
    render(){
        return(
            <div  id="contactus">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"/>
                <div className="contact-section">
            
                <div class="row mt-sm-4 col-md-12 mt-md-0" style={{marginTop : "10%", paddingLeft : "10%"}}>
            <div class="col-sm-12 col-md-6  text-md-left">
            <h1>Contact Us</h1>
                 
                 <Form onSubmit={this.handleSubmit} className="contact-form" >
                 <FormGroup className="contactfg">
                   <Input type="text" name="name" onChange={this.handleChange} className="contact-form-text" placeholder="Your name"/>
                  </FormGroup>
                  <FormGroup className="contactfg">
                   <Input type="email" name="email" onChange={this.handleChange} className="contact-form-text" placeholder="Your email"/>
                   </FormGroup>
                   <FormGroup className="contactfg">
                   <Input type="text" name="phone"onChange={this.handleChange} className="contact-form-text" placeholder="Your phone"/>
                   </FormGroup>
                   <FormGroup className="contactfg">
                   <Input type="textarea" name="message" onChange={this.handleChange} className="contact-form-textarea" placeholder="Your message"/>
                   </FormGroup>
                   <FormGroup className="contactfg">
                   <Button type="submit" className="contact-form-btn" value="Send">Send</Button>
                   </FormGroup>
                 </Form>
            </div>
          
          <div class="col-sm col-md-6 text-md-left  mt-4" className="contact-info" style={{paddingTop : "8%", fontSize : "120%", marginLeft : "0%"}}>
                  Contact:<br/>
                  samelos<br/>
                  Zewdu Building, 5th floor.<br/>
                  Bole Medhanialem Qelebet Menged<br/>
                  Next to Kebe Pastry<br/>
                  P.O.Box 101823 Addis Ababa<br/>
                  contact@samelos.com<br/>
                  +251(0) 11 667 4804<br/>

                  www.samelos.com<br/>
                  innovation | collaboration | entrepreneurship<br/>
                  <a style={{textDecoration : "none"}} href="#"><i class="fab fa-instagram"></i></a> 
                <a className="links-contactus" href="#"><i class="fab fa-twitter"></i></a>  
                <a className="links-contactus" href="#"><i class="fab fa-linkedin"></i></a>  
                <a className="links-contactus" href="#"><i class="fab fa-facebook"></i></a> 
                <a className="links-contactus" href="#"><i class="fab fa-google"></i></a> 
          </div>
          </div>
                
                </div>
                <p className="footer" style={{paddingLeft:"30%"}}><b>Copyright@Samelos 2019 | Designed by Biya Girma and Samrawit Mulugeta.</b></p>
          </div>

        )
    }
}

export default Contactus;