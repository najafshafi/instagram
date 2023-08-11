import React from "react";
import "./Stroy.css";
import ChildStories from "./ChildStories";
import { useData } from "../../DataProvider/Data";

const Story = () => {
  const { data } = useData();
  return (
    <div>
      <div className="Main__story__container">
        {data.map((childData, index) => (
          <ChildStories key={index} data={childData} />
        ))}
        {/* Maping multiple times */}
        {data.map((childData, index) => (
          <ChildStories key={index} data={childData} />
        ))}

        {data.map((childData, index) => (
          <ChildStories key={index} data={childData} />
        ))}

        {data.map((childData, index) => (
          <ChildStories key={index} data={childData} />
        ))}

        {/* <div className="Story__Navigation">
          <button onClick={scrollLeft}>
            <NavigateNextOutlinedIcon />
          </button>
</div> */}
      </div>
    </div>
  );
};

export default Story;
