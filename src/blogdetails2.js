import { useParams } from "react-router-dom";
import React from "react"
import './blogdetails.css'
import allDocument from "../src/services/carddoc.json"
import Dash from "./components/dashboard";
import logo12 from './assets/img/word.PNG'
import logo11 from './assets/img/newpdf.PNG'
const  BlogD2= () => {
const {id} =useParams();
    return (
        <Dash>
           <h3 style={{marginLeft:"300px",marginTop:"30px",marginBottom:'150px'}}> <b>Description:</b></h3>
        <hr/>
            
         {allDocument.map((receipt1)=>(
<div className="fine">

        
<div className="fine">
  <a href="#"><div class="card1">
  <img src={logo12}/>
  <div class="container1">
    <h4><b>word</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div></a></div>

<div className="fine">
<a href="#"><div class="card">
  <img src={logo11}/>
  <div class="container">
    <h4><b>PDF</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div></a>
           </div> 
</div> 
         )
         
         
         
         )}
         
        

        </Dash>
     
      );
}
 
export default BlogD2 ;