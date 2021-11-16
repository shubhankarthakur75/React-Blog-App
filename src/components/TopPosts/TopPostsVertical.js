import React, { Component } from "react";
import "./TopPostsVertical.css";
import HorizontalPost from "../Post/HorizontalPost";

export class TopPostsVertical extends Component {
  render() {
    return (
      <div className="top-posts-vertical">
        <h2 className="top-posts-title">Top Posts</h2>
        <div className="top-posts-container">
          <div className="post-container">
            <HorizontalPost />
          </div>
          <div className="post-container">
            <HorizontalPost />
          </div>
          <div className="post-container">
            <HorizontalPost />
          </div>
          <div className="post-container">
            <HorizontalPost />
          </div>
        </div>
      </div>
    );
  }
}

export default TopPostsVertical;
