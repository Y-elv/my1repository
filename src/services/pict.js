import React from "react";
import './pict.css'
import img from "../assets/img/mai3.jpg"
const Pic = () => {
    return ( 
        <div className="wrapper">
            <img src={img}/>
        <input type="file"className="my_file"/>
        
        </div>
     );
}
 
export default Pic;