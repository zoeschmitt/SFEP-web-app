import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import './index.css';

const SideBar = ({isOpen, toggle}) => {
    return (
        <aside className="/side-bar-container" style={{ opacity: isOpen ? '100%' : '0'}} onClick={toggle}>
            <div className="icon" onClick={toggle}>
                {/* <FaTimes className="close-icon" /> */}
            </div>
            <div className="side-bar-wrapper">
                <ul className="side-bar-menu-list">
                    <LinkS className="side-bar-link" to="about" onClick={toggle}>Edit</LinkS>
                    <LinkS className="side-bar-link" to="business" onClick={toggle}>Logout</LinkS>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar