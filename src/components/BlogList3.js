import { useState } from "react";
import { Link } from "react-router-dom";
import './BlogList1.css'
const BlogList3 = ({receipt,title}) => {
  

   
    return ( 
    
        <div className="blog-list">
          <h2>{title}</h2>
      {receipt.map((receipt)=>(
          <div className="blog-preview" key={receipt.id}>
     <a href ={`/receipt/${receipt.id}`}>
     <h2>{receipt.title}</h2>
     <p>written by {receipt.author}</p>
     </a>
          </div>
        ))  }

        
        </div>
     );
}
 
export default BlogList3 ;