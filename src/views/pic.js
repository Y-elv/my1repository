import React from "react";
import img from "../assets/img/mai2.jpg"
import "./profilepic.css"
const ProfilePic=()=>{
    return(
        < div className="body">
        
        <h1>uploard</h1> 
       <div className='profile-pic-div'>
<img src={img} id="photo"></img>
<input type="file" id="file"/>
<label for="file" id="uploadBtn">choose photo</label>
           </div> 
        </div>
    )
}
export default  ProfilePic;