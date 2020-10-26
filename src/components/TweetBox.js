import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";


function TweetBox() {


  const sendTweet = (e) => {
    e.preventDefault();

    // setTweetMessage("");
   //  setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-0LJEXFN3NMisjzbnyvmPPq2WDEShG58cIPRPd=s32-c-mo" />
          <input
            // onChange={(e) => setTweetMessage(e.target.value)}
            // value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
         // value={tweetImage}
         //  onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
         // onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;