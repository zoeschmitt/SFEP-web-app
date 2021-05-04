import PostButtons from '../PostButtons';
import './styles.css';
import React, { useState, useEffect } from 'react'
import { FiArrowUpCircle, FiArrowDownCircle, FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function PostContainer({ post, user, token, setSelectedPost, getPosts }) {
    const [likes, setLikes] = useState(false)
    const [dislikes, setDislikes] = useState(false)
    const [cred, setCred] = useState(false)
    const [uncred, setUncred] = useState(false)


    useEffect(() => {
        setLikes(post.likes.length ?? 0);
        setDislikes(post.dislikes.length ?? 0);
        setCred(post.credibleVotes.length ?? 0);
        setUncred(post.uncredibleVotes.length ?? 0);
    }, [post.credibleVotes, post.dislikes, post.likes, post.uncredibleVotes, user._id])

    const setPostStats = (l, d, c, u) => {
        setLikes(post.likes.length + l);
        setDislikes(post.dislikes.length + d);
        setCred(post.dislikes.length + c);
        setUncred(post.dislikes.length + u);
    }

    const updatePosts = () => {
        console.log('updating posts');
        getPosts();
    }

    return (
        <div className="post-buttons-container">
            <div className="post-container" onClick={()=>setSelectedPost(post)}>
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
                            <p>{likes}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiArrowDownCircle />
                            </div>
                            <p>{dislikes}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiPlusCircle />
                            </div>
                            <p>{cred}</p>
                        </div>
                        <div className="icon-text-container">
                            <div className="p-icon">
                                <FiMinusCircle />
                            </div>
                            <p>{uncred}</p>
                        </div>
                    </div>
                </div>
                <p>{post.body}</p>
            </div>
            <PostButtons post={post} user={user} token={token} setPostStats={setPostStats} updatePosts={updatePosts}/>
        </div>
    )
}

export default PostContainer;