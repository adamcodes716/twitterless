import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { connect } from 'react-redux';
import database from "../firebase/firebase";
import { auth } from "firebase";

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    database.collection("posts").add({
      displayName: { displayName },
      username: { email },
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: {photoURL},
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={props.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state.auth);
 // return { photoURL : state.auth.photoURL };
 return {  googleUser  : state.auth,
          displayName : state.auth.displayName,
          email: state.auth.displayName, 
          photoURL : state.auth.photoURL
           }
};

export default connect(mapStateToProps) (TweetBox);
