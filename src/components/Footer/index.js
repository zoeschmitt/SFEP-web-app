import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkS } from 'react-scroll'
import './styles.css';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="content-container">
                    <LinkS className="logo-container" to='/' onClick={toggleHome}>
                        <img className="logo-image" src="" alt="logo" />
                    </LinkS>
                </div>
                <div className="content-container">
                    <p className="footer-sub-heading">Company Name</p>
                    <LinkS className="footer-link" to="about" smooth={true} duration={500} spy={true} exact='true'>Home</LinkS>
                </div>
                <div className="content-container">
                    <p className="footer-sub-heading">Get in Touch</p>
                    <p className="footer-link" to="about" smooth={true} duration={500} spy={true} exact='true'>(512) - 566 - 8921</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer