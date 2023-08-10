import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { NavLink } from "react-router-dom";
import insta from "../assets/insta.png";
import "./Main.css";
import { Avatar } from "@mui/material";
import { useState } from "react";

function Main() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <div id="left_Navgation">
        <NavLink onClick={() => handleLinkClick("home")} to="/">
          {<img id="image" src={insta} alt="Logo Here"></img>}
        </NavLink>

        <NavLink
          className={`clickable-link ${
            activeLink === "home" ? "bold-link" : ""
          } Icons`}
          onClick={() => handleLinkClick("home")}
          to="/"
        >
          {activeLink === "home" ? <HomeIcon /> : <HomeOutlinedIcon />}

          <span>Home</span>
        </NavLink>
        <button className="Icons">
          <SearchOutlinedIcon />
          <span>Search</span>
        </button>

        <NavLink
          className={`clickable-link ${
            activeLink === "explore" ? "bold-link" : ""
          } Icons`}
          onClick={() => handleLinkClick("explore")}
          to="/explore"
        >
          {activeLink === "explore" ? <ExploreIcon /> : <ExploreOutlinedIcon />}
          <span>Explore</span>
        </NavLink>

        <button className="Icons">
          <MovieOutlinedIcon />
          <span>Reels</span>
        </button>
        <button className="Icons">
          <MessageOutlinedIcon />
          <span>Message</span>
        </button>
        <button className="Icons">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="Icons">
          <AddBoxOutlinedIcon />
          <span>Create</span>
        </button>
        <button className="Icons">
          <Avatar sx={{ width: 24, height: 24 }}>n</Avatar>
          <span>Profile</span>
        </button>
        <button className="Icons">
          <MenuOutlinedIcon />
          <span>More</span>
        </button>
      </div>
    </>
  );
}

export default Main;
