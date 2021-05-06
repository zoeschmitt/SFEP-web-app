import React, { useState } from "react";
import { FiSearch, FiUser, FiPlusSquare, FiSquare } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";
import "./styles.css";
import PostService from "../../services/postService";
import SearchBar from "../SearchBar";
import Popup from "reactjs-popup";
import PostBox from "../PostBox/index.js";

const NavBar = ({ toggle, setPosts, user, token, getPosts }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [searchValue, setValueList] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const search = (value) => {
    setValueList(value);
  };

  const postService = new PostService();

  async function submitSearch(searchT) {
    console.log(searchT);
    const res = await postService.search(searchT);

    if (res.status && Array.isArray(res.posts)) {
      console.log(res.posts);
      setPosts(res.posts);
    } else console.log("error");
  }
  

  async function makePost() {
    const res = await postService.createPost(
      user._id,
      " ",
      searchValue,
      user.name,
      user.title,
      token
    );
    console.log(res);
    if (res.status) {
      getPosts();
      setButtonPopup(false)
    }
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
            <SearchBar submitSearch={submitSearch} />
          </div>
          <h1 style={{ color: "#000" }}>Acucheck</h1>
          <PostBox trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>What are you thinking?</h3>
            <textarea
              className="textBox"
              type="text"
              onChange={(e) => search(e.target.value)}
            ></textarea>
            <button onClick={makePost}>Submit</button>
          </PostBox>
          <div className="n-icon">
            <FiPlusSquare onClick={() => setButtonPopup(true)} style={{ color: "#000" }} />
          </div>
          {/* <div className="profile-add-icons">
          
            <div className="icon">
              <FiUser style={{ color: "#000" }} />
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
