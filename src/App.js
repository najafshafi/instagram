import React from "react";
import Main from "./Navigation/Main";
import NewsFeed from "./NewsFeed/NewsFeed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav_component">
        <Main />
      </div>

      <div className="News_component">
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
