import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGIfcOj3an3wQ/profile-displayphoto-shrink_800_800/0/1638360629724?e=1655337600&v=beta&t=mojULqWsb8khBG0n3QvcQzqrxYJ8M27fJMJQouePxmM" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}