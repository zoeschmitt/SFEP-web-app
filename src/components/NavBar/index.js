import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import "./styles.css";
import PostService from "../../services/postService";
import SearchBar from "../SearchBar";
import Popup from "reactjs-popup";
import PostBox from "C:/Users/Adam Castillo/Desktop/SEP/src/components/PostBox/index.js";

const NavBar = ({ toggle, setPosts }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const postService = new PostService();
  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  async function submitSearch(searchT) {
    console.log(searchT);
    const res = await postService.search(searchT);

    if (res.status && Array.isArray(res.posts)) {
      console.log(res.posts);
      setPosts(res.posts);
    } else console.log("error");
  }

  
  return (
    <>
      <nav
        style={{
          background: scrollNav ? "rgba(255, 255, 255, 0.5)" : "transparent",
          color: scrollNav ? "#000" : "#fff",
        }}
      >
        <div className="nav-bar-container">
          <div className="icon">
            {/* <FiSearch font-size="1.3rem" style={{color: '#000'}}/>
                        <input type="text" name="search" placeholder="Search..." /> */}
            <SearchBar submitSearch={submitSearch} />
          </div>
          <h1 style={{ color: "#000" }}>Acucheck</h1>
          <button>Open Popup</button>
          <PostBox trigger={true}>
            <h3>Popup</h3>
          </PostBox>
          <div className="icon">
            <FiUser style={{ color: "#000" }} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
