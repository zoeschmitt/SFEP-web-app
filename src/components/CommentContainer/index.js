import React from "react";
import './styles.css';

export default function CommentContainer({comment}) {
  

  return (
    <div className="comment-container">
        <h6 className="name-and-title-container">{comment.userName}</h6>
       <p> {comment.text}</p>
    </div>
  );
}