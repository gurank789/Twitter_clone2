import {
    BookmarkBorderRounded,
    ListAltOutlined,
    MailOutlineRounded,
    MoreHoriz,
    MoreHorizOutlined,
    NotificationsNoneRounded,
    PersonOutlineOutlined,
    Twitter,
  } from "@mui/icons-material";
  import HomeIcon from '@mui/icons-material/Home';
  import ExploreIcon from '@mui/icons-material/Explore';
  import { Avatar } from "@mui/material";
  import React, { useState } from "react";
  import Home from "../Home/Home" ;
  import "./Sidebar.css";
  import './../new.css'
  import { useNavigate } from "react-router-dom";
  
  function Sidebar() {
    const [active, setActive] = useState("Home");
    const [logOut, setLogOut] = useState(false);

     const navigate= useNavigate()

    function getLogOut(){
        navigate('/')
    }

    function toggleLogOut(){
      setLogOut((prevState)=>!prevState)
    }

    return (
      <div className="appContainer">
        <div className="sideBar">
          <h1>
            <Twitter className="sidebarIcon" />
          </h1>
          <ul className="sideBarList">
            <li
              className="sideBarListItem"
              onClick={() => setActive("Home")}
              style={{ fontWeight: active === "Home" ? "bolder" : "" }}
            >
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <ExploreIcon className="sidebarIcon" />
              Explore
            </li>
            <li className="sideBarListItem">
              <NotificationsNoneRounded className="sidebarIcon" />
              Notifications
            </li>
            <li className="sideBarListItem">
              <MailOutlineRounded className="sidebarIcon" />
              Messages
            </li>
            <li className="sideBarListItem">
              <ListAltOutlined className="sidebarIcon" />
              Lists
            </li>
            <li className="sideBarListItem">
              <BookmarkBorderRounded className="sidebarIcon" />
              Bookmarks
            </li>
            <li
              className="sideBarListItem">
              <PersonOutlineOutlined className="sidebarIcon" />
              Profile
            </li>
            <li className="sideBarListItem">
              <MoreHorizOutlined className="sidebarIcon" />
              More
            </li>
          </ul>
          <button className="sideBarTweetButton">Tweet</button>
          <div className="profileSetting">
            <div className="row-nospace">
              <Avatar src="https://st.depositphotos.com/1011643/4430/i/950/depositphotos_44309759-stock-photo-young-indian-man-outdoors.jpg"/>
              <div className="profileSettingInfo">
                <h5>Shravan_Jaju</h5>
                <p>Shravan_Jaju</p>
              </div>
            </div>

            <MoreHoriz onClick={toggleLogOut}
              className="log_out"
            />


          </div>
        </div>
        <div>
          {active === "Home" ? <Home /> : null}
        </div>
        <div className="logoutPopup" style={{display : logOut ? "block": "none"}}>
         {logOut && (
          <div >
          <p>Are you sure you want to logout ?</p>
            <button onClick={getLogOut}>Log Out</button>
            <button onClick={()=>setLogOut(false)}>Cancel</button>
          </div>
         )}
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  