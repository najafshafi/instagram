import React from "react";
import "./NewsFeed.css";
import Suggestion from "./Suggestions";
import Timeline from "./Timeline";
import Story from "./Stories/Story";
import Data from "../DataProvider/Data";

const NewsFeed = ({ child }) => {
  return (
    <div className="NewsFeed">
      <div className="Timeline">
        <Story />
        <Timeline />
      </div>
      <div className="Suggestions">
        <Suggestion />
      </div>
    </div>
  );
};

export default NewsFeed;
