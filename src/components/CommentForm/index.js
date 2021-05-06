import React, { useState } from "react";
import PostService from '../../services/postService'
import './styles.css';

const CommentForm = ({ updateComments, user, post, token, trigger, setTrigger, setPosts }) => {
  const [textValue, setTextValue] = useState("");
  //props: user (userId, userTitle, userName), token, postId
  const postService = new PostService();

  const text = (value) => {
    setTextValue(value);
  };

  async function submitComment() {
    const res = await postService.createComment(
      user._id,
      post._id,
      textValue,
      user.name,
      user.title,
      token
    );
    console.log(res);
    if (res.status) {
      //setPosts();
      updateComments();
      setTrigger(false);
    }
  }

  return (
    trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Close
          </button>
          <h3>Join the discussion</h3>
          <textarea
            className="textBox"
            type="text"
            onChange={(e) => text(e.target.value)}
          ></textarea>
          <button onClick={submitComment}>Submit</button>
        </div>
      </div>
    ) : (
      ""
    ));
}

export default CommentForm;