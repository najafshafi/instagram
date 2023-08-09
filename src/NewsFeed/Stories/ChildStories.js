import React from "react";
import "./ChildStories.css";
import { Avatar } from "@mui/material";

const ChildStories = ({ user, postImage }) => {
  return (
    <div className="Story__container">
      <div className="Story_box">
        <span>
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            sx={{ width: 56, height: 56 }}
            src={postImage}
          />
        </span>
        <span>{user}</span>
      </div>
    </div>
  );
};

export default ChildStories;
