import React from "react";
import "./dashboard.css"
import Dash from "./dashboard";
import Homu from './homu'
const DashContent = () => {
    return (  
        <Dash>

            <Homu ></Homu>
            <div style={{marginLeft:"300px"}}>
         <div className="am-footer"style={{marginTop:"790px"}}>
            <span >Copyright ©. All Rights Reserved. Archima.</span>
            <span>Created by: Archima office, Inc.</span>
          </div>
          </div>

        </Dash>
    );
}
 
export default DashContent;