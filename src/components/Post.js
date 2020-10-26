import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post =  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-0LJEXFN3NMisjzbnyvmPPq2WDEShG58cIPRPd=s32-c-mo" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Display Name {" "}
                <span className="post__headerSpecial">
                   <VerifiedUserIcon className="post__badge" /> @
                  User Name
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Text</p>
            </div>
          </div>
          <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-0LJEXFN3NMisjzbnyvmPPq2WDEShG58cIPRPd=s32-c-mo" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }


export default Post;
