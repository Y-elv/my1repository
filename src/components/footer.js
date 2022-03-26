import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import React from 'react'
import './footer.css'
import "antd/dist/antd.css"
import './blogdetails.css'
import allDocument from "../services/carddoc.json"
// import Dash from './dashboard'
import logo from '../assets/img/mai1.jpg'
import logo1 from '../assets/img/mai1.jpg'
import logo2 from '../assets/img/mai2.jpg'


const Footer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isSettingVisible, setIsSettingVisible] = useState(false);

  const showSetting = () => {
    setIsSettingVisible(true);
  };

  const handl1eOk = () => {
    setIsSettingVisible(false);
  };

  const handle1Cancel = () => {
    setIsSettingVisible(false);
  };
    return ( 
    
    //  <Dash>      
 <div>
            
     <div className='curved'>
    
        <div className="footer">
            
         <div className="logoo">
             <h2>Archima</h2>
         </div>
         <div className="home"><a href="#"onClick={showModal}><h4>Home</h4></a>
         
      <Modal style={{width:"300px",height:"300px"}}visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
         </div>

         <div className="aboutus"><a href="#"onClick={showSetting}><h4>About us</h4></a>
         <Modal style={{width:"300px",height:"300px"}}visible={isSettingVisible} onOk={handl1eOk} onCancel={handle1Cancel}>
        <h1>Some contents..22222222222.</h1>
        <p>Some contents..33333333.</p>
        <p>Some contents.33..</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
         </div>

         <div className="login"><a href="/home"><h4>login</h4></a>
         
         </div>

         <div className="signup"><a href="#"><h4>sign up</h4></a>
         
         </div>
         <div className="contact"><a href="#"><h4>contact us</h4></a>
         
         </div>

         
         </div>
         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,117.3C384,117,480,139,576,149.3C672,160,768,160,864,181.3C960,203,1056,245,1152,266.7C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
        <div className="div1">
           
           
          

           <div className="leftm">
            <h1 style={{paddingTop:" 400px",paddingLeft:"70px"}}><b>PROTECTING WHAT<br/> MATTERS</b></h1><br/>
             <h1 style={{paddingLeft:"70px"}}>From the everyday to the extraordinary,<br/>we store and secure what matters the most to you.</h1>
           </div>

           <div className="div-2">
              <img src ={logo1}/>
           </div>
           
          <></>
        </div>
        <div className="learn-more">
            <div className='learn1'></div>
            <div className='learn2'></div>
            <div className='learn3'><div/>
        </div>
        </div>
  
        {/* <Dash></Dash> */}
        </div>
        
        // </Dash>    
        
     );
}
 
export default Footer;