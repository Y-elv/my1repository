import React,{useState} from 'react'
import { Menu } from 'antd';
import { Modal, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined,DownloadOutlined,EditOutlined} from '@ant-design/icons';

const Dash = ({children}) => {
  
  
    return ( 
       
    
      
      <div>
        <div className="am-header">
          <div className="am-header-left">
            <a id="naviconLeft" href="#" className="am-navicon d-none d-lg-flex"><i className="icon ion-navicon-round" /></a>
            <a id="naviconLeftMobile" href="#" className="am-navicon d-lg-none"><i className="icon ion-navicon-round" /></a>
            <a href="index.html" className="am-logo">Archima</a>
            {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
          </div>{/* am-header-left */}
          <div className="am-header-right">
            <div className="dropdown dropdown-notification">
              <a href="#" className="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
                <i className="icon ion-ios-bell-outline tx-24" />
                {/* start: if statement */}
                <span className="square-8 bg-danger pos-absolute t-15 r-0 rounded-circle" />
                {/* end: if statement */}
              </a>
              <div className="dropdown-menu wd-300 pd-0-force">
                <div className="dropdown-menu-header">
                  <label>Notifications</label>
                  <a href="#">Mark All as Read</a>
                </div>{/* d-flex */}
                <div className="media-list">
                  {/* loop starts here */}
                  <a href="#" className="media-list-link read">
                    <div className="media pd-x-20 pd-y-15">
                      <img src="../img/img8.jpg" className="wd-40 rounded-circle" alt />
                      <div className="media-body">
                        <p className="tx-13 mg-b-0"><strong className="tx-medium">Suzzeth Bungaos</strong> tagged you and 18 others in a post.</p>
                        <span className="tx-12">October 03, 2017 8:45am</span>
                      </div>
                    </div>{/* media */}
                  </a>
                  {/* loop ends here */}
                  <a href="#" className="media-list-link read">
                    <div className="media pd-x-20 pd-y-15">
                      <img src="../img/img9.jpg" className="wd-40 rounded-circle" alt />
                      <div className="media-body">
                        <p className="tx-13 mg-b-0"><strong className="tx-medium">Mellisa Brown</strong> appreciated your work <strong className="tx-medium">The Social Network</strong></p>
                        <span className="tx-12">October 033, 2017 12:44am</span>
                      </div>
                    </div>{/* media */}
                  </a>
                  <a href="#" className="media-list-link read">
                    <div className="media pd-x-20 pd-y-15">
                      <img src="../img/img10.jpg" className="wd-40 rounded-circle" alt />
                      <div className="media-body">
                        <p className="tx-13 mg-b-0">20+ new items added are for sale in your <strong className="tx-medium">Sale Group</strong></p>
                        <span className="tx-12">October 01, 2017 10:20pm</span>
                      </div>
                    </div>{/* media */}
                  </a>
                  <a href="#" className="media-list-link read">
                    <div className="media pd-x-20 pd-y-15">
                      <img src="../img/img5.jpg" className="wd-40 rounded-circle" alt />
                      <div className="media-body">
                        <p className="tx-13 mg-b-0"><strong className="tx-medium">Julius Erving</strong> wants to connect with you on your conversation with <strong className="tx-medium">Ronnie Mara</strong></p>
                        <span className="tx-12">October 01, 2017 6:08pm</span>
                      </div>
                    </div>{/* media */}
                  </a>
                  <div className="media-list-footer">
                    <a href="#" className="tx-12"><i className="fa fa-angle-down mg-r-5" /> Show All Notifications</a>
                  </div>
                </div>{/* media-list */}
              </div>{/* dropdown-menu */}
            </div>{/* dropdown */}
          <div>
        
  
        


          </div>
          </div>{/* am-header-right */}
        </div>{/* am-header */}
        <div className="am-sideleft">
          <ul className="nav am-sideleft-tab">
            <li className="nav-item">
              <a href="#mainMenu" className="nav-link active"><i className="icon ion-ios-home-outline tx-24" /></a>
            </li>
            <li className="nav-item">
              <a href="#emailMenu" className="nav-link"><i className="icon ion-ios-email-outline tx-24" /></a>
            </li>
            <li className="nav-item">
              <a href="#chatMenu" className="nav-link"><i className="icon ion-ios-chatboxes-outline tx-24" /></a>
            </li>
            <li className="nav-item">
              <a href="#settingMenu" className="nav-link"><i className="icon ion-ios-gear-outline tx-24" /></a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="mainMenu" className="tab-pane active ps ps--theme_default" data-ps-id="9a7da229-6777-9e3e-ea43-00fa91c0bfc4">
              <ul className="nav am-sideleft-menu">
                <li className="nav-item">
                  <a href="/dashcontent" className="nav-link active">
                    <i className="icon ion-ios-home-outline" />
                    <span>Application letters</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/invoices" className="nav-link active">
                    <i className="icon ion-ios-home-outline" />
                    <span>Invoices</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="/letters" className="nav-link active">
                    <i className="icon ion-ios-home-outline" />
                    <span>Letters</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="/receipt" className="nav-link active">
                    <i className="icon ion-ios-home-outline" />
                    <span>Receipt</span>
                  </a>
                </li>{/* nav-item */}
                
                  
               
               
                
              </ul>
  {/* <div>
              <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<icon ion-ios-person-outline/>} title="profile">
      <a href="#" onClick={showModal} ><Menu.Item key="1">Your profile</Menu.Item></a>
        <a href="#"><Menu.Item key="2">Edit profile</Menu.Item></a>
       <a href ="#"><Menu.Item key="3">Downloads</Menu.Item></a>
        
      </SubMenu>
      
      
    </Menu>
    </div> */}




              <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #mainMenu */}
            <div id="emailMenu" className="tab-pane ps ps--theme_default" data-ps-id="b54d689f-b311-270d-707f-eaccf5bef2fd">
              <div className="pd-x-20 pd-y-10">
                <a href="#" className="btn btn-orange btn-block btn-compose">Compose Email</a>
              </div>
              <ul className="nav am-sideleft-menu">
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-filing-outline" />
                    <span>Inbox</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-filing-outline" />
                    <span>Drafts</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-paperplane-outline" />
                    <span>Sent</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-trash-outline" />
                    <span>Trash</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-filing-outline" />
                    <span>Spam</span>
                  </a>
                </li>{/* nav-item */}
              </ul>
              <label className="pd-x-20 tx-uppercase tx-11 mg-t-10 tx-orange mg-b-0 tx-medium">My Folder</label>
              <ul className="nav am-sideleft-menu">
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-folder-outline" />
                    <span>Updates</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-folder-outline" />
                    <span>Social</span>
                  </a>
                </li>{/* nav-item */}
                <li className="nav-item">
                  <a href="page-inbox.html" className="nav-link">
                    <i className="icon ion-ios-folder-outline" />
                    <span>Promotions</span>
                  </a>
                </li>{/* nav-item */}
              </ul>
              <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #emailMenu */}
            <div id="chatMenu" className="tab-pane ps ps--theme_default" data-ps-id="8e6dfd2d-b6f8-443c-1f67-319921a935dc">
              <div className="chat-search-bar">
                <input type="search" className="form-control wd-150" placeholder="Search chat..." />
                <button className="btn btn-secondary"><i className="fa fa-search" /></button>
              </div>{/* chat-search-bar */}
              <label className="pd-x-15 tx-uppercase tx-11 mg-t-20 tx-orange mg-b-10 tx-medium">Recent Chat History</label>
              <div className="list-group list-group-chat">
                <a href="#" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <img src="../img/img6.jpg" className="wd-32 rounded-circle" alt />
                    <div className="mg-l-10">
                      <h6>Russell M. Evans</h6>
                      <span>Tuesday, 10:33am</span>
                    </div>
                  </div>{/* d-flex */}
                  <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain...</p>
                </a>{/* list-group-item */}
                <a href="#" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <img src="../img/img7.jpg" className="wd-32 rounded-circle" alt />
                    <div className="mg-l-10">
                      <h6>James F. Sears</h6>
                      <span>Monday, 4:21pm</span>
                    </div>
                  </div>{/* d-flex */}
                  <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has...</p>
                </a>{/* list-group-item */}
                <a href="#" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <img src="../img/img8.jpg" className="wd-32 rounded-circle" alt />
                    <div className="mg-l-10">
                      <h6>Sharon R. Rowe</h6>
                      <span>Sunday, 7:45pm</span>
                    </div>
                  </div>{/* d-flex */}
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
                </a>{/* list-group-item */}
                <a href="#" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <img src="../img/img9.jpg" className="wd-32 rounded-circle" alt />
                    <div className="mg-l-10">
                      <h6>Ruby M. Martin</h6>
                      <span>Sunday, 7:45pm</span>
                    </div>
                  </div>{/* d-flex */}
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
                </a>{/* list-group-item */}
                <a href="#" className="list-group-item">
                  <div className="d-flex align-items-center">
                    <img src="../img/img10.jpg" className="wd-32 rounded-circle" alt />
                    <div className="mg-l-10">
                      <h6>Joslyn C. Mayo</h6>
                      <span>Sunday, 7:45pm</span>
                    </div>
                  </div>{/* d-flex */}
                  <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
                </a>{/* list-group-item */}
              </div>{/* list-group */}
              <span className="d-block pd-15 tx-12">Loading messages...</span>
              <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #chatMenu */}
            <div id="settingMenu" className="tab-pane ps ps--theme_default" data-ps-id="c1416ddd-f049-0c56-4fed-22466c26f97a">
              <div className="pd-x-15">
                <label className="tx-uppercase tx-11 mg-t-10 tx-orange mg-b-15 tx-medium">Quick Settings</label>
                <div className="bd pd-15">
                  <h6 className="tx-13 tx-normal tx-gray-800">Daily Newsletter</h6>
                  <p className="tx-12">Get notified when someone else is trying to access your account.</p>
                  <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
                </div>{/* bd */}
                <div className="bd pd-15 mg-t-15">
                  <h6 className="tx-13 tx-normal tx-gray-800">Call Phones</h6>
                  <p className="tx-12">Make calls to friends and family right from your account.</p>
                  <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
                </div>{/* bd */}
                <div className="bd pd-15 mg-t-15">
                  <h6 className="tx-13 tx-normal tx-gray-800">Login Notifications</h6>
                  <p className="tx-12">Get notified when someone else is trying to access your account.</p>
                  <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
                </div>{/* bd */}
                <div className="bd pd-15 mg-t-15">
                  <h6 className="tx-13 tx-normal tx-gray-800">Phone Approvals</h6>
                  <p className="tx-12">Use your phone when login as an extra layer of security.</p>
                  <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
                </div>{/* bd */}
              </div>
              <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #settingMenu */}
          </div>{/* tab-content */}
        </div>{/* am-sideleft */}
        <div className="am-mainpanel" style={{position: 'relative'}}>
          <div className="am-pagetitle">
            <h5 className="am-title">Dashboard</h5>
            <form id="searchBar" className="search-bar" action="http://themepixels.me/demo/amanda/app/index.html">
              <div className="form-control-wrapper">
                <input type="search" className="form-control bd-0" placeholder="Search..." />
              </div>{/* form-control-wrapper */}
              <button id="searchBtn" className="btn btn-orange"><i className="fa fa-search" /></button>
            </form>{/* search-bar */}
          </div>{/* am-pagetitle */}
          {/* downloads */}
          <div><div/>
         {/* am-footer */}
          {/* Mirrored from themepixels.me/demo/amanda/app/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 01 Mar 2022 09:59:19 GMT */}
        </div>
        <div>
       </div>
      </div>
      {children}
      
        </div>
      
      
      
    
      
      
     );
}
 
export default Dash;