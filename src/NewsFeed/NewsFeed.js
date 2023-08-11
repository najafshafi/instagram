import React from "react";
import "./NewsFeed.css";
import Suggestion from "./Suggestions";
import Timeline from "./Timeline";
import Story from "./Stories/Story";
import { DataProvider } from "../DataProvider/Data";

const NewsFeed = () => {
  return (
    <DataProvider>
      <div className="NewsFeed">
        <div className="Timeline">
          <Story />
          <Timeline />
        </div>
        <div className="Suggestions">
          <Suggestion />
        </div>
      </div>
    </DataProvider>
  );
};

export default NewsFeed;
