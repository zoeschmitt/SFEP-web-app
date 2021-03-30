import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

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
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar