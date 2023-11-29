import React from "react";

import classes from "./NotificationSlider.module.scss";

function NotificationSlider() {

  const post = <div className={classes["ns__recentScroll--notifications-post"]}>
  <div
    className={
      classes["ns__recentScroll--notifications-post-image"]
    }
  >
    <img
      src={`https://picsum.photos/500/${100}`}
      alt="Post"
    />
  </div>
  <div
    className={
      classes["ns__recentScroll--notifications-post-details"]
    }
  >
    <span className={classes["ns__recentScroll--notifications-post-details--name"]}>classic_Here</span> started following you. <span className={classes["ns__recentScroll--notifications-post-details--time"]}>2w</span>
  </div>
  <div
    className={
      classes["ns__recentScroll--notifications-post-button"]
    }
  >
    <button>Follow</button>
  </div>
</div>

  return (
    <div className={classes.ns}>
      <h2 className={classes["ns--Notifications"]}>Notifications</h2>
      <div className={classes["ns__recent"]}>
        <h3 className={classes["ns__recent--h3"]}>This month</h3>
        <div className={classes["ns__recentScroll"]}>
          <div className={classes["ns__recentScroll--notifications"]}>
            {/* <div className={classes["ns__recentScroll--notifications-post"]}>
              <div
                className={
                  classes["ns__recentScroll--notifications-post-image"]
                }
              >
                <img
                  src={`https://picsum.photos/500/${100}`}
                  alt="Post"
                />
              </div>
              <div
                className={
                  classes["ns__recentScroll--notifications-post-details"]
                }
              >
                <span className={classes["ns__recentScroll--notifications-post-details--name"]}>classic_Here</span> started following you. <span className={classes["ns__recentScroll--notifications-post-details--time"]}>2w</span>
              </div>
              <div
                className={
                  classes["ns__recentScroll--notifications-post-button"]
                }
              >
                <button>Follow</button>
              </div>
            </div> */}
            {post}
            {post}
            {post}
            {post}
            {post}
          </div>
        </div>
      </div>

      <div className={classes["ns__recent"]}>
        <h3 className={classes["ns__recent--h3"]}>Earlier</h3>
        <div className={classes["ns__recentScroll"]}>
          <div className={classes["ns__recentScroll--notifications"]}>
            {post}
            {post}
            {post}
            {post}
            {post}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSlider;
