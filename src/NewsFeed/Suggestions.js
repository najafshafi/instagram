import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";
import { useData } from "../DataProvider/Data";

const Suggestions = () => {
  const { data } = useData();

  const Account = data[0];
  return (
    <div className="Suggestions">
      <div className="Profile_div">
        <div className="account">
          <Avatar className="picture" src={Account.postImage} />

          <div>
            <div className="Username_acc">{Account.user}</div>
            <div className="accName">Muhammad Najaf</div>
          </div>
        </div>
        <div className="switch__acc">
          <span>Switch</span>
        </div>
      </div>

      <div className="suggestion__tittle">Suggested for You</div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles" src={data[2].postImage} />
          <div>
            <div className="suggestion__username">{data[2].user}</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles" src={data[3].postImage} />
          <div>
            <div className="suggestion__username">{data[3].user}</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles" src={data[2].postImage} />
          <div>
            <div className="suggestion__username">{data[3].user}</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles" src={data[3].postImage} />
          <div>
            <div className="suggestion__username">{data[3].user}</div>
            <div className="suggestion__accname">New to Instagram</div>
          </div>
        </div>
        <div className="follow__button">
          <button>Follow</button>
        </div>
      </div>

      <div className="suggestion__profiles">
        <div className="suggestion__acc">
          <Avatar className="suggesttion_profiles" src={data[1].postImage} />
          <div>
            <div className="suggestion__username">{data[1].user}</div>
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
