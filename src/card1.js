import React from "react";
import './card.css'
import logo12 from './assets/img/word.PNG'
const Card1 = () => {
    return ( 
        <>
        <h2>Card</h2>

  <a href="#"><div class="card">
  <img src={logo12}/>
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div></a>
</>
     );
}
 
export default Card1;