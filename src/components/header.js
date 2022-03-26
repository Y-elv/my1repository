import React from 'react'
import './header.css'
const Header = () => {
    return ( 
        <div className="Header">
        <div className="logo">
            <h2>Archima</h2>
        </div>
     
        <div className="home">
           <a href="#"><h5>Home</h5></a>
        </div>
           <div classname="content">
        <div>
         <a href="#"> <h5>services</h5></a>
        </div>
        <div>
          <a href="#"><h5>Contact us</h5></a>
        </div>
       </div>
       </div>
     );
}
 
export default Header;