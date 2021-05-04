import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import './styles.css';
import React from "react";
import Comment from "/Users/macuser/Desktop/NewSoftware/SFEP-web-app/src/components/comment.js";


export default function CommentList(props) {
return (
    <div className="discussion-container">
       <h5 className="text-muted mb-4">
           <span className="badge badge-success">{props.comments.length}</span>{" "}
           Comment {props.comments.length > 0 ? "s" : ""}
       </h5>

       { props.comments.length === 0 && !props.loading ? (
           <div className="alert text-center alert-info">
               Comment things
            </div>
       ) : null}

       {props.comments.map((comment, index) => (
           <Comment key={index} comment={comment} />
       ))}
        </div>
       );
    }
       