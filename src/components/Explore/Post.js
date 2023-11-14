import React from "react";

import classes from "./Post.module.scss";

function Post(props) {
  let { url } = props;
  //url = "https://cdn2.thecatapi.com/images/405.jpg";

  return (
    <div className={classes.Post}>
      <div className={classes.Post__imagediv}>
        <img src={url} alt="Post" />
      </div>
    </div>
  );
}

export default Post;
