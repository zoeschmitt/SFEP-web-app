import React, { useState } from 'react'
import DiscussionContainer from '../components/DiscussionContainer'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PostContainer from '../components/PostContainer'
import SideBar from '../components/SideBar'
import { posts } from './testData'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const [selectedPost, setSelectedPost] = useState(posts[0])
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <div className="posts-discussion-wrapper">
                <ul className="posts-list-container">
                    {posts.map(post => (
                        <li key={post.id} onClick={() => setSelectedPost(post.id)}>
                            <PostContainer />
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