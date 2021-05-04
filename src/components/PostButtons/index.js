import './styles.css';
import { FiArrowUpCircle, FiArrowDownCircle, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import PostService from '../../services/postService'

function PostButtons({ post, user }) {
    const postService = new PostService();

    function doesContain(array, id) {
        return array.includes(id);
    }

    //if isLike: user already in likes -> ignore
    //if not isLike: user already in dislikes -> ignore
    async function likeOrDislike(isLike) {
        var containsLike = doesContain(post.likes, user._id);
        var containsDislike = doesContain(post.dislikes, user._id);
        if (isLike) {
            // if (containsDislike) {
            //     //filter out the user from the dislikes
            //     const newDislikesList = user.dislikes.filter(users => users.id !== user._id);
            //     post.dislikes = newDislikesList;
            //     var res1 = await postService.
            // }
            // if (containsLike == false) {
            //     post.likes.push(user._id);
            //     //api call
            // }
        } else {
            if (containsLike) {
                const newLikesList = user.likes.filter(users => users.id !== user._id);
                post.likes = newLikesList;
                //api call
            }
            if (containsDislike == false) {
                post.dislikes.push(user._id);
                //api call
            }
        }
    }

    async function credibleOrNotCredible(isCredible) {

    }

    return (
        <div className="buttons-container">
            <div className="icon" onClick={likeOrDislike(true)}>
                <FiArrowUpCircle style={{color: doesContain(post.likes, user._id) && 'rgb(47, 180, 241)'}}/>
            </div>
            <div className="icon" onClick={likeOrDislike(false)}>
                <FiArrowDownCircle style={{color: doesContain(post.dislikes, user._id) && 'rgb(47, 180, 241)'}}/>
            </div>
            <div className="icon" onClick={credibleOrNotCredible(true)}>
                <FiPlusCircle  style={{color: doesContain(post.credibleVotes, user._id) && 'rgb(47, 180, 241)'}}/>
            </div>
            <div className="icon" onClick={credibleOrNotCredible(false)}>
                <FiMinusCircle  style={{color: doesContain(post.uncredibleVotes, user._id) && 'rgb(47, 180, 241)'}}/>
            </div>
        </div>
    )
}

export default PostButtons;