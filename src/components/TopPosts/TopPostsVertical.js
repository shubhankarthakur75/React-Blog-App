import React, { Component } from "react";
import "./TopPostsVertical.css";
import { Link } from "react-router-dom";
import HorizontalPost from "../Post/HorizontalPost";

export class TopPostsVertical extends Component {
  render() {
    // console.log(this.props.propsBlogsArr);
    const [...sortedArr] = this.props.propsBlogsArr;
    sortedArr.sort((a, b) => {
      return b.claps - a.claps;
    });
    const topPostsArr = sortedArr.slice(0, 4);

    return (
      <div className="top-posts-vertical">
        <h2 className="top-posts-title">Top Posts</h2>
        <div className="top-posts-container">
          {topPostsArr.map((post, index) => {
            return (
              <div className="post-container" key={index}>
                <Link to={`/React-Blog-App/${post.id}`}>
                  <HorizontalPost propsPost={post} propsRank={index + 1} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopPostsVertical;
