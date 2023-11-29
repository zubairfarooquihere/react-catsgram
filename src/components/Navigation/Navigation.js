import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  home,
  search,
  explore,
  reel,
  messages,
  notification,
  create,
} from "../ui/svg/Notification";
import NotificationSlider from "./NotificationSlider";

import "./Navigation.scss";

function Navigation(props) {
  const [activeTab, setActiveTab] = useState("");
  const [notificationSlider, setNotificationSlider] = useState(false);

  const msgClick = useCallback(
    (gotClass = "") => {
      const currentURL = window.location.pathname;
      gotClass = (notificationSlider === true || currentURL === "/message") ? 'message-active' : '';
      setActiveTab(gotClass);
      props.layoutFunc(gotClass);
    },
    [setActiveTab, props, notificationSlider]
  );

  const openSlider = () => {
    setNotificationSlider((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    const currentURL = window.location.pathname;
    if (currentURL === "/message") {
      msgClick("message-active");
    } else {
      msgClick();
    }
  }, [msgClick]);

  return (
    <React.Fragment>
      <div className="ch">
        <div className={`button-container ${activeTab}`}>
          <div className={`Catsgram ${activeTab}`}>
            <p>Catsgram</p>
          </div>
          <button
            onClick={() => {
              msgClick();
            }}
            className={`button home ${activeTab}`}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {home}
              <h3>Home</h3>
            </NavLink>
          </button>
          <button
            onClick={() => {
              msgClick();
            }}
            id="idSearch"
            className={`button ${activeTab}`}
          >
            <NavLink
              to="/search"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {search}
              <h3>Search</h3>
            </NavLink>
          </button>
          <button
            onClick={() => {
              msgClick();
            }}
            className={`button explore ${activeTab}`}
          >
            <NavLink
              to="/explore"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {explore}
              <h3>Explore</h3>
            </NavLink>
          </button>
          <button
            onClick={() => {
              msgClick();
            }}
            className={`button reel ${activeTab}`}
          >
            <NavLink
              to="/profile"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {reel}
              <h3>Reels</h3>
            </NavLink>
          </button>
          <button
            onClick={() => {
              msgClick("message-active");
            }}
            className={`button messages ${activeTab}`}
          >
            <NavLink
              to="/message"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {messages}
              <h3>Messages</h3>
            </NavLink>
          </button>
          <button
            onClick={() => {
              msgClick();
            }}
            className={`button notification ${activeTab}`}
          >
            <div
              style={{ textDecoration: "none" }}
              className={"button"}
              onClick={openSlider}
            >
              {notification}
              <h3>Notification</h3>
            </div>
          </button>
          <button
            onClick={() => {
              msgClick();
            }}
            className={`button create ${activeTab}`}
          >
            <NavLink
              to="/profile"
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "button" : "button")}
              end={true}
            >
              {create}
              <h3>Create</h3>
            </NavLink>
          </button>
        </div>
        {notificationSlider && <NotificationSlider />}
      </div>
    </React.Fragment>
  );
}

export default Navigation;
