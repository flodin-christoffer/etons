import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (

        /*   Eton Nav bar */
      <nav className="navbar">
        <div className="container">
          <ul>
         <li className="topLeft"><a href="index.html">ETON</a></li>
         <li className="topRight"> 
       <i className="fas fa-suitcase"></i>
       <a href="shop.html">0 SEK</a></li>
         </ul>
        </div>
          <hr/>
       <div className="searchbar">
          <i className="fa fa-search whiteishTextLight" aria-hidden="true"></i>
          <input type="text" className="searchInput"  placeholder=""/>
        </div>

        <div className="dropdown">
         <ul>
         <li><a href="index.html">SHIRTS</a>
         </li>
         <li><a href="about.html">ACCESSORIES</a></li>
         <li><a href="about.html">OUR WORLD</a></li>
         </ul>
        </div>


        {/* Html for blue drop down menu */ }
        <div className="sub-menu"> 
            <div class="sub-menu-top">
            <div className="sub-top-left">
                <h4>BODY FIT</h4>
                <p> 
           Super Slim <br/>
           Slim <br/>
           Contemporary <br/>
           Classic <br/>
           Extra Long Sleeve
           </p>
           </div>

           <div className="sub-top-right">
            <p>
            All Shirts <br/>
            New Arrivals <br/>
            White Shirts <br/>
            Outlet <br/> <br/>
            Size Guide <br/>
            Eton Express
            </p>
          </div>
          </div>

          <div className="sub-bottom-left">
           <h4> COLLECTION</h4>
           <p>
                Red Ribbon <br/>
                Green Ribbon <br/>
                Black Ribbon 
           </p>
            </div>
            </div>
      </nav>
    )
  }
}

export default Navbar
