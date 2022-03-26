import React from 'react'
import './changerpro.css'
import img from "../assets/img/mai1.jpg"
const Changer = () => {
 return(
     <div>
       <h1>uploard</h1> 
       <div className='profile-pic-div'>
<img src={img}/>
<input type="file" id="file"/>
<label for=""></label>
           </div> 
     </div>
 )
}
 
export default Changer;