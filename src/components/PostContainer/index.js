import { Link } from 'react-router-dom';
import './styles.css';

function PostContainer({ post }) {

return (
    <div className="post-container">
        <h3>{post.userName}</h3>
    </div>
)
}

export default PostContainer;