import React from "react";
import './card.css'
import logo11 from './assets/img/newpdf.PNG'
const Card = () => {
    return ( 
        <>
        <h2>Card</h2>

  <a href="#"><div class="card">
  <img src={logo11}/>
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div></a>
</>
     );
}
 
export default Card;