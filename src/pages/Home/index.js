import React, { useState, useEffect, useCallback } from 'react'
import DiscussionContainer from '../../components/DiscussionContainer'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import PostBox from '../../components/PostBox'
import PostContainer from '../../components/PostContainer'
import SideBar from '../../components/SideBar'
import PostService from '../../services/postService'
import './styles.css';

const Home = ({ token, user, toggleCreatePostBox }) => {
    const postService = new PostService();
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const [postBoxOpen, setPostBoxOpen] = useState(false) //post box
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const postBoxToggle = () => {
        setPostBoxOpen(!isOpen)
    }


    const getPosts = useCallback(async () => {
        try {
            var res = await postService.getAllPosts();
            var posts = res.posts.posts;
            console.log(posts);
            posts.sort(function (a, b) {
                return (a.createdAt < b.createdAt) ? -1 : ((a.createdAt > b.createdAt) ? 1 : 0);
            });
            setPosts(posts);
            if (selectedPost === null) { 
                console.log(`setting`);
                updateSelectedPost(posts[0]) 
            }
            console.log(`Selected post id: ${selectedPost._id}`);
        } catch (e) {
            console.log(e);
        }
    }, [postService, selectedPost])


    useEffect(() => {
        getPosts();
    }, [])

    const updateSelectedPost = (post) => {
        setSelectedPost(post);
        console.log(`Selected post id: ${post._id}`);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} user={user} />

            <NavBar toggle={toggle} postBoxToggle={postBoxToggle} setPosts={setPosts} />
            {postBoxOpen && <PostBox />}
            <div className="posts-discussion-wrapper">
                <div className="posts-container-wrapper">
                    <ul className="posts-list-container">
                        {posts.map(post => (
                            <li key={post._id}>
                                <PostContainer post={post} user={user} token={token} setSelectedPost={updateSelectedPost} getPosts={getPosts} />
                            </li>
                        ))}
                    </ul>

                    <DiscussionContainer user={user} selectedPost={selectedPost} token={token} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home