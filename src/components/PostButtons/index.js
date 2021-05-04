import './styles.css';
import React, { useState, useEffect } from 'react'
import { FiArrowUpCircle, FiArrowDownCircle, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import PostService from '../../services/postService'

function PostButtons({ post, user, token, updatePosts }) {
    const postService = new PostService();
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [isCred, setIsCred] = useState(false)
    const [isUncred, setIsUncred] = useState(false)

    function doesContain(array, id) {
        return array.includes(id);
    }

    useEffect(() => {
        setIsLiked(doesContain(post.likes, user._id));
        setIsDisliked(doesContain(post.dislikes, user._id));
        setIsCred(doesContain(post.credibleVotes, user._id));
        setIsUncred(doesContain(post.uncredibleVotes, user._id));
    }, [post.credibleVotes, post.dislikes, post.likes, post.uncredibleVotes, user._id])

    //if isLike: user already in likes -> ignore
    //if not isLike: user already in dislikes -> ignore
    async function likeOrDislike(isLike) {
        if (isLike) {
            await postService.updateLikes(user._id, post._id, true, token);
        } else {
            await postService.updateLikes(user._id, post._id, false, token);
        }
        updatePosts();
    }

    async function credibleOrNotCredible(isCredible) {
        if (isCredible) {
            await postService.updateCredibility(user._id, post._id, true, token);
        } else {
            await postService.updateCredibility(user._id, post._id, false, token);
        }
        updatePosts();
    }

    return (
        <div className="buttons-container">
            <div className="icon" onClick={() => likeOrDislike(true)}>
                <FiArrowUpCircle style={{ color: isLiked && 'rgb(47, 180, 241)' }} />
            </div>
            <div className="icon" onClick={() => likeOrDislike(false)}>
                <FiArrowDownCircle style={{ color: isDisliked && 'rgb(47, 180, 241)' }} />
            </div>
            <div className="icon" onClick={() => credibleOrNotCredible(true)}>
                <FiPlusCircle style={{ color: isCred && 'rgb(47, 180, 241)' }} />
            </div>
            <div className="icon" onClick={() => credibleOrNotCredible(false)}>
                <FiMinusCircle style={{ color: isUncred && 'rgb(47, 180, 241)' }} />
            </div>
        </div>
    )
}

export default PostButtons;