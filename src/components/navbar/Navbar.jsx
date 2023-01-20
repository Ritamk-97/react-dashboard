import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
