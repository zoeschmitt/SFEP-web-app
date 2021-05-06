import React, { useState } from "react";
import "./styles.css";
import PostService from '../../services/postService'


function PostBox(props) {
   
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PostBox;

// const PostBox = ({  }) => {
//     const [scrollNav, setScrollNav] = useState(false);

//     return (
//         <>
//             {/* //container covers whole page with some opacity */}
//         </>
//     )
// }

// export default PostBox
