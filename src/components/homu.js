import { useEffect, useState } from "react";
import BlogList from './BlogList'
import useFetch from "./customs";
import Dash from "./dashboard";
const Homu = () => {
    const {data:blogs,isPending,error}=useFetch('http://localhost:8000/letters')
    
    return ( 
        <Dash>
<div className="homu" style={{marginLeft:"300px"}}>
    {error && <div><h4><b>{ error }</b></h4></div>}
    {isPending && <div><h2>Loading...</h2></div>}
{blogs && <BlogList blogs={blogs}title='application letters'/>}



</div>
</Dash>
     );
}
 
export default Homu;