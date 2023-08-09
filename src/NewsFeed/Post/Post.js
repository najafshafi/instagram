import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import React from "react";
import "./Post.css";
const Post = ({ user, postImage, likes, postTime, caption }) => {
  return (
    <>
      <div className="Post__container">
        <div className="Post">
          <div className="Post__Header">
            <div className="Avtar_username">
              <Avatar>{user.charAt(0)}</Avatar>
              <span>{user} •</span>
              <span className="hours">{postTime}</span>
            </div>

            <div>
              <MoreHorizOutlinedIcon />
            </div>
          </div>
          <div className="image__Header">
            <img src={postImage} alt="A new post img here" />
          </div>
          <div className="footer__Header">
            <div className="footer__icons">
              <FavoriteBorderOutlinedIcon className="Post__Icon" />
              <ModeCommentOutlinedIcon className="Post__Icon" />
              <IosShareOutlinedIcon className="Post__Icon" />
            </div>
            <div className="Post__Icon">
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>

          <div>
            <div className="Likes">{likes} Likes</div>

            <div className="footer__caption">
              <span>
                <strong>{user + " "}</strong>
              </span>

              {caption}
              <div className="footer__text">Add a comment</div>
            </div>

            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
