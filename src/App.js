import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Navigation/Main";
import NewsFeed from "./NewsFeed/NewsFeed";
import Explore from "./Explore/Explore";

function App() {
  return (
    <>
      <div className="App">
        <div className="Nav_component">
          <Main />
        </div>
        <div className="Right_component">
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
