import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import database from "../firebase/firebase"
import FlipMove from "react-flip-move";

function Feed() { 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

       <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            uid={post.uid}
          />
        ))}
      </FlipMove>
     
    </div>
  );
}

export default Feed;
