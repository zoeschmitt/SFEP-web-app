import React, { useState } from 'react'
import DiscussionContainer from '../components/DiscussionContainer'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PostContainer from '../components/PostContainer'
import SideBar from '../components/SideBar'
import { posts } from './testData'
import './styles.css';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const [selectedPost, setSelectedPost] = useState(null) //posts[0]
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const updateSelectedPost = (post) => {
        setSelectedPost(post);
        console.log(`Selected post id: ${post.id}`);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <div className="posts-discussion-wrapper">
                <ul className="posts-list-container">
                    {posts.map(post => (
                        <li key={post.id} onClick={() => updateSelectedPost(post)}>
                            <PostContainer post={post} />
                        </li>
                    ))}
                </ul>
                <DiscussionContainer /> 
            </div>
            <Footer />
        </>
    )
}

export default Home