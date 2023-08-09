import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Route, Routes, Link } from "react-router-dom";

import insta from "../assets/insta.png";
import "./Main.css";

function Main() {
  return (
    <>
      <div id="left_Navgation">
        <Link to="/Main">
          {<img id="image" src={insta} alt="Logo Here"></img>}
        </Link>
        <Routes>
          <Route path="/Main" element={Main} />
        </Routes>

        <button className="Icons">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="Icons">
          <SearchOutlinedIcon />
          <span>Search</span>
        </button>
        <button className="Icons">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>
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
          <AccountCircleOutlinedIcon />
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
