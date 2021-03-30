import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) // sidebar
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            
            <Footer />
        </>
    )
}

export default Home