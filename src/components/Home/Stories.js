import React from "react";

import classes from "./Stories.module.scss";

function Stories() {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((ele) => {
    return (
      <div key={ele} className={classes.storyHolder}>
        <div className={classes.story}>
          <img src={`https://picsum.photos/500/${ele+100}`} alt="Ranm" />
        </div>
        <h4>Hello</h4>
      </div>
    );
  });
  
  return (
    <div className={classes.layout}>
      <div className={classes.stories}>
        {stories}
      </div>
    </div>
  );
}

export default Stories;
