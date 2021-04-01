import React, { useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import './styles.css';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <nav style={{background: scrollNav ? 'rgba(255, 255, 255, 0.5)' : 'transparent', color: scrollNav ? '#000' : '#fff'}} >
                <div className="nav-bar-container">
                    <div className="icon">
                        <FiSearch style={{color: '#000'}}/>
                    </div>
                    <h1 style={{color: '#000'}}>Website</h1>
                    <div className="icon">
                        <FiUser style={{color: '#000'}}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar