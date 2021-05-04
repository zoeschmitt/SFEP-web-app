import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import './styles.css';
import PostService from '../../services/postService'
import {useState, useEffect} from "react";
import Comment from "C:/Users/Julian/Desktop/school/FinalSEApp/SFEP-web-app/src/components/commentForm.js";


export default function DiscussionContainer({selectedPost}) {
    const [comments, setComments] = useState([]);
    const postService = new PostService();

    const getComments = useCallback(async () => {
        try {
            var res = await postService.getDiscussion();
            console.log(res.comments);
            setComments(res.comments);
        } catch (e) {
            console.log(e);
        }
    }, [])


    //this loads when the page loads
    useEffect(() => {
        getComments();
    }, [])

return (
    <div className="discussion-container">
       <h5 className="text-muted mb-4">
           <span className="badge badge-success">{comments.length}</span>{" "}
           Comment {comments.length > 0 ? "s" : ""}
       </h5>

       { comments.length === 0 && (
           <div className="alert text-center alert-info">
               Comment things
            </div>
       )}

       {comments.map((comment, index) => (
           <Comment key={comment._id} comment={comment} />
       ))}
        </div>
       );
    }
       