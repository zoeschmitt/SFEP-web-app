import React, { useState, useEffect, useCallback } from 'react'
import DiscussionContainer from '../../components/DiscussionContainer'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import PostContainer from '../../components/PostContainer'
import SideBar from '../../components/SideBar'
import PostService from '../../services/postService'
import './styles.css';

const Home = ({token, user}) => {
    const postService = new PostService();
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const [posts, setPosts] = useState([]) 
    const [selectedPost, setSelectedPost] = useState(null) 
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    const getPosts = useCallback(async () => {
        try {
            var posts = await postService.getAllPosts();
            console.log(posts.posts.posts);
            setPosts(posts.posts.posts);
        } catch (e) {
            console.log(e);
        }
    }, [])


    //this loads when the page loads
    useEffect(() => {
        getPosts();
    }, [])

    const updateSelectedPost = (post) => {
        setSelectedPost(post);
        console.log(`Selected post id: ${post.id}`);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} user={user}/>
            <NavBar toggle={toggle} />
            <div className="posts-discussion-wrapper">
                <div className="posts-container-wrapper">
                <ul className="posts-list-container">
                    {posts.map(post => (
                        <li key={post._id} onClick={() => updateSelectedPost(post)}>
                            <PostContainer post={post} />
                        </li>
                    ))}
                </ul>

                <DiscussionContainer user={user} selectedPost={selectedPost} token={token}/>
            </div>
            <Footer />
        </>
    )
}

export default Home