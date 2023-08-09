import React from "react";
import "./NewsFeed.css";
import Suggestion from "./Suggestions";
import Timeline from "./Timeline";

const NewsFeed = () => {
  return (
    <div className="NewsFeed">
      <div className="Timeline">
        <Timeline />
      </div>
      <div className="Suggestions">
        <Suggestion />
      </div>
    </div>
  );
};

export default NewsFeed;
