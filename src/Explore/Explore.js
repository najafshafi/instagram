import React from "react";
import "./Explore.css";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch("9CD0RQDnsIQnu6aiP7XhYUWc4OqyHoPp");

// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

const Explore = () => {
  return (
    <>
      <div className="Explore__container">
        <Grid width={935} columns={3} fetchGifs={fetchGifs} />
      </div>
    </>
  );
};

export default Explore;
