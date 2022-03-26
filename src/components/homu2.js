import { useEffect, useState } from "react";
import BlogList2 from './BlogList2'
import useFetch from "./customs";
import Dash from "./dashboard";
import Invoices from "./invoices";
const Homu2 = () => {
    const {data:invoices,isPending,error}=useFetch('http://localhost:8000/letters')
    
    return ( 
        <Dash>
<div className="homu" style={{marginLeft:"300px"}}>
    {error && <div><h4><b>{ error }</b></h4></div>}
    {isPending && <div><h2>Loading...</h2></div>}
{invoices && <BlogList2 invoices={invoices}title='invoices'/>}



</div>
</Dash>
     );
}
 
export default Homu2;