import { useEffect, useState } from "react";
import BlogList1 from './BlogList1'
import useFetch from "./customs";
import Dash from "./dashboard";
import Letters from "./letter";
const Homu1 = () => {
    const {data:letters,isPending,error}=useFetch('http://localhost:8000/letters')
    
    return ( 
        <Dash>
<div className="homu" style={{marginLeft:"300px"}}>
    {error && <div><h4><b>{ error }</b></h4></div>}
    {isPending && <div><h2>Loading...</h2></div>}
{letters && <BlogList1 letters={letters}title='letters'/>}



</div>
</Dash>
     );
}
 
export default Homu1;