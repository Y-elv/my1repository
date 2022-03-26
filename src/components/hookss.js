import './hookss.css'
import { useState } from "react";
const Homm = () => {
    const[name,setName]=useState('mario');
    const[age,setAge]=useState(25);
    const handleClick = () => {
        setName('lucci');
        setAge(30)
   
   
   
  
    }
    return ( 
        <div className="home12">

            <p>{name} is {age} years old </p>
          
            <button onClick={handleClick}>click mi</button>
    <>hello</>
        
        </div>
     );
}
 
export default Homm ;