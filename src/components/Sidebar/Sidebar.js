import React, { Component } from "react";
import "./Sidebar.css";
import TopPostsVertical from "../TopPosts/TopPostsVertical";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="ad-container">
          <p>Advertisement</p>
        </div>
        <div className="top-posts-container">
          <TopPostsVertical />
        </div>
      </div>
    );
  }
}

export default Sidebar;
