import { useState } from "react";
import { Link } from "react-router-dom";
import './BlogList1.css'
const BlogList2 = ({invoices,title}) => {
  

   
    return ( 
    
        <div className="blog-list">
          <h2>{title}</h2>
      {invoices.map((invoices)=>(
          <div className="blog-preview" key={invoices.id}>
     <a href ={`/invoices/${invoices.id}`}>
     <h2>{invoices.title}</h2>
     <p>written by {invoices.author}</p>
     </a>
          </div>
        ))  }

        
        </div>
     );
}
 
export default BlogList2 ;