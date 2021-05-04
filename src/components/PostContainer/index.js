import PostButtons from '../PostButtons';
import './styles.css';
import { FiArrowUpCircle, FiArrowDownCircle, FiPlusCircle, FiMinusCircle, FiMessageCircle } from "react-icons/fi";

function PostContainer({ post, user }) {

    return (
        <div className="post-buttons-container">
            <div className="post-container">
                <div className="header-container">
                    <div className="name-and-title-container">
                        <h4>{post.userName}</h4>
                        <p>{post.usertTitle}</p>
                    </div>
                    <div className="like-cred-comments-container">
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiArrowUpCircle />
                            </div>
                            <p>{post.likes.length ?? ''}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiArrowDownCircle />
                            </div>
                            <p>{post.dislikes.length ?? ''}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiPlusCircle />
                            </div>
                            <p>{post.credibleVotes.length ?? ''}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiMinusCircle />
                            </div>
                            <p>{post.uncredibleVotes.length ?? ''}</p>
                        </div>
                    </div>
                </div>
                <p>{post.body}</p>
            </div>
            <PostButtons post={post} user={user} />
        </div>
    )
}

export default PostContainer;