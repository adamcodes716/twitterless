import React from "react";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"771383283552772096"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="muchgooder"
          options={{ height: 400 }}
        />

        <TwitterShareButton
        url={"https://facebook.com/muchgooder"}
        options={{ text: "#reactjs is awesome", via: "muchgooder" }}
      />
      </div>
        

       
    </div>
  );
}

export default Widgets;
