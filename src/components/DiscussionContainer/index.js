import './styles.css';
import { FiPlusSquare } from "react-icons/fi";
import PostService from '../../services/postService'
import { useState, useEffect, useCallback } from "react";
import CommentContainer from '../CommentContainer';
import CommentForm from '../CommentForm';
import Popup from 'reactjs-popup';

export default function DiscussionContainer({ user, selectedPost, token, setPosts }) {
    const [comments, setComments] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const postService = new PostService();

    const getComments = useCallback(async () => {
        try {
            var res = await postService.getDiscussion(selectedPost._id);
            console.log(res.comments);
            setComments(res.comments);
        } catch (e) {
            console.log(e);
        }
    }, [, selectedPost])


    //this loads when the page loads
    useEffect(() => {
        getComments();
    }, [selectedPost])

    return (
        <div className="discussion-container">
        { selectedPost &&   
        <>
        <div className="header-container">
                <h5 className="badge-text">
                    <span className="badge">{comments.length}</span>{" "}
            Comment {comments.length === 1 ? "" : "s"}
                </h5>
                <CommentForm updateComments={getComments} user={user} post={selectedPost} token={token} trigger={buttonPopup} setTrigger={setButtonPopup} setPosts={setPosts} />
                <div className="n-icon">
                    <FiPlusSquare onClick={() => setButtonPopup(true)} style={{ color: "#000" }} />
                </div>
            </div>
            <ul className="comments-list-container">
                {comments.map((comment, index) => (
                    <li key={comment._id}>
                        <CommentContainer comment={comment} />
                    </li>
                ))}
            </ul>
            </>
            }
        </div>
    );
}
