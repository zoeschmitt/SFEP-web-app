import React, { useState, useEffect, useCallback } from 'react'
import DiscussionContainer from '../../components/DiscussionContainer'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import PostBox from '../../components/PostBox'
import PostContainer from '../../components/PostContainer'
import SideBar from '../../components/SideBar'
import PostService from '../../services/postService'
import './styles.css';

const Home = ({token, user, toggleCreatePostBox}) => {
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
            var posts = await postService.getAllPosts();
            console.log(posts.posts.posts);
            setPosts(posts.posts.posts);
            setSelectedPost(posts.posts.posts[0])
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
            <NavBar toggle={toggle} postBoxToggle={postBoxToggle}/>
            {postBoxOpen && <PostBox/>}
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
            </div>
            <Footer />
        </>
    )
}

export default Home