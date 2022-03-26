import { useEffect, useState } from "react";
import BlogList3 from './BlogList3'
import useFetch from "./customs";
import Dash from "./dashboard";
import Receipt from "./receipt";
const Homu3 = () => {
    const {data:receipt,isPending,error}=useFetch('http://localhost:8000/letters')
    
    return ( 
      <Dash>  
<div className="homu" style={{marginLeft:"300px"}}>
    {error && <div><h4><b>{ error }</b></h4></div>}
    {isPending && <div><h2>Loading...</h2></div>}
{receipt && <BlogList3 receipt={receipt}title='receipts'/>}



</div>
</Dash>
     );
}
 
export default Homu3;