import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
const Suggestions = () => {
  return (
    <div className="Suggestions">
      
      <div className="Profile_div">
        <div className="account">
          <Avatar className="picture">n</Avatar>
          <div>
            <div className="Username_acc">najaf.shafi</div>
            <div className="accName">New to Instagram</div>
          </div>
        </div>
        <div className="switch__acc">
          <span>Switch</span>
        </div>
      </div>

      <div className="suggestion__tittle">Suggested for You</div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles">j</Avatar>
          <div>
            <div className="suggestion__username">johnwick__</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles">z</Avatar>
          <div>
            <div className="suggestion__username">zohaibkamran</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>
      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles">a</Avatar>
          <div>
            <div className="suggestion__username">ammadprospective</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>
      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles">w</Avatar>
          <div>
            <div className="suggestion__username">wapdafear</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>
      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles">c</Avatar>
          <div>
            <div className="suggestion__username">codeninja</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
