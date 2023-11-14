import React from "react";
import { NavLink } from "react-router-dom";
import {home, search, explore, reel, messages, notification, create} from '../ui/svg/Notification';

import "./Navigation.scss";

function Navigation() {

  return (
    <React.Fragment>
      <div className="button-container">
        <div className="Catsgram">
          <p>Catsgram</p>
        </div>
        <button className="button home">
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
        <button id='idSearch' className="button">
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
        <button className="button explore">
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
        <button className="button reel">
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
        <button className="button messages">
          <NavLink
            to="/profile"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "button" : "button")}
            end={true}
          >
            {messages}
            <h3>Messages</h3>
          </NavLink>
        </button>
        <button className="button notification">
          <NavLink
            to="/profile"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "button" : "button")}
            end={true}
          >
            {notification}
            <h3>Notification</h3>
          </NavLink>
        </button>
        <button className="button create">
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
    </React.Fragment>
  );
}

export default Navigation;
