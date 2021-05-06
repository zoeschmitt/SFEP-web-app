import React, { Component } from "react";
import PostService from '../../services/postService'

const CommentForm = ({ trigger, setTrigger }) => {
    //props: user (userId, userTitle, userName), token, postId
    const postService = new PostService();

return (
    trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Close
          </button>
          
        </div>
      </div>
    ) : (
      ""
    ));
}

export default CommentForm;