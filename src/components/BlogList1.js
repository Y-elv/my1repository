import { useState } from "react";
import { Link } from "react-router-dom";
import './BlogList1.css'
const BlogList1 = ({letters,title}) => {
  

   
    return ( 
    
        <div className="blog-list">
          <h2>{title}</h2>
      {letters.map((letters)=>(
          <div className="blog-preview" key={letters.id}>
     <a href ={`/letters/${letters.id}`}>
     <h2>{letters.title}</h2>
     <p>written by {letters.author}</p>
     </a>
          </div>
        ))  }

        
        </div>
     );
}
 
export default BlogList1 ;