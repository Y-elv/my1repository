import React from "react";
import {Routes, Route} from "react-router-dom"
import Dash from "../components/dashboard";
import Profile from "../components/profile"
import Edit from "../components/editp"
import Home from "../components/home"
const Index = () => {
    return ( 
        <Routes>   
            <Route path="/dash" element={<Dash/>} ></Route>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/edit" element={<Edit/>} ></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
        </Routes>
     );
}
 
export default Index;