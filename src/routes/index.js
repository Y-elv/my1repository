import React from "react";
import {Routes, Route} from "react-router-dom"
import Dash from "../components/dashboard";
import Profile from "../components/profile"
import Edit from "../components/editp"
import Home from "../components/home"
import Footer from "../components/footer"
import Homu from "../components/homu"
import Homu1 from "../components/homu1"
import Homu2 from "../components/homu2"
import Homu3 from "../components/homu3"
import  Changer from "../components/changerpro"
import  Card from "../card"
import  Card1 from "../card1"
import  BlogD from "../blogdetails"
import  BlogD1 from "../blogdetails1"
import  BlogD2 from "../blogdetails2"
import  BlogD3 from "../blogdetails3"
import Header  from "../components/header"
import Homm  from "../components/hookss"
import Functionclick from "../components/functionclick"
import ProfilePic from "../views/pic"
import Letters from "../components/letter";
import Invoices from '../components/invoices'
import Pic from "../services/pict";
import CardList from "../components/showcard";
import DashContent from "../components/dashcontent"
import Receipt from "../components/receipt";
const Index = () => {
    return ( 
        <Routes>   
            
            
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/edit" element={<Edit/>} ></Route>
            <Route path="/footer" element={<Footer/>} ></Route>
            <Route path="/header" element={<Header/>} ></Route>
            <Route path="/hom" element={<Homm/>} ></Route>
            <Route path="/card" element={<Card/>} ></Route>
            <Route path="/card1" element={<Card1/>} ></Route>
            <Route path="/letters" element={<Homu1/>} ></Route>
            <Route path="/ch" element={<Changer/>} ></Route>
            <Route path="/profile" element={<ProfilePic/>} ></Route>
            <Route path="/blogs/:id" element={<BlogD/>} ></Route>
            <Route path="/receipt/:id" element={<BlogD3/>} ></Route>
            <Route path="/dashcontent" element={<DashContent/>} ></Route>
            <Route path="/receipt" element={<Homu3/>} ></Route>
            <Route path="/invoices" element={<Homu2/>} ></Route>
            <Route path="/invoices/:id" element={<BlogD1/>} ></Route>
            <Route path="/letters/:id" element={<BlogD2/>} ></Route>
         <Route path="/pic" element={<Pic/>} ></Route>
         
        </Routes>
     );
}
 
export default Index;