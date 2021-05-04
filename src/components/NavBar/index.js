

import React, { useState } from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';
import SideBar from '../SideBar/index'

import './styles.css';

const NavBar = ({ toggle, setIsOpen}) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    function handleNavClick(e){
        e.preventDefault();
        console.log('The link was clicked.');
        setIsOpen(true);
    }

    return (
        <>
            <nav style={{background: scrollNav ? 'rgba(255, 255, 255, 0.5)' : 'transparent', color: scrollNav ? '#000' : '#fff'}} >
                <div className="nav-bar-container">
                    <div className="icon">
                        <FiSearch font-size="1.3rem" style={{color: '#000'}}/>
                        <input type="text" name="search" placeholder="Search..." />


                    </div>
                    <h1 style={{color: '#000'}}>Acucheck</h1>
                    <div className="icon">
                        <FiUser style={{color: '#000'}}
                        onClick={handleNavClick}
                        ></FiUser>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar