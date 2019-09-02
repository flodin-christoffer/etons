import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (



<div className="center margin-top-25px margin-bottom-15px">
       <div className="menu margin-bottom-15px">
        <hr className="margin-bottom-15px"/>
          <ul>
             <li><a href="stores.html">Stores</a></li>
             <li><a href="login.html">Login</a></li>
             <li>
             <img src={'./se.png'} alt="" /><a href="about.html">Sweden</a><i class="fas fa-arrow-down"></i></li>
          </ul>
        <hr className="margin-top-15px"/>
      </div>


      <div className="margin-bottom-25px">
        <input className="input" type="email" name="email" placeholder="Your Email" required="" /> 
        <button className="btn inputbtn"> subscribe</button>
      </div>

       
      <div className="margin-bottom-25px">
        <img src={'./social.png'} alt="" />
      </div>

      <hr className="margin-bottom-25px"/>

      <div className="margin-bottom-25px">
        <h5>
          CUSTOMER CARE <br/>
          PRESS <br/>
          PR AGENCIES <br/>
          CAREER <br/>
          RETAILERS 
        </h5>
      </div>

    <hr className="margin-bottom-15px"/>

  <div>
    <img src={'./creditcards.png'} alt="" />
  </div>

  <div className="margin-bottom-25px">
    <p className="greyishTextLight">
      &copy; 2019 Christoffer, All rights reserved
    </p>
  </div>
      
</div>
    )
  }
}

export default Footer
