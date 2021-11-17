import React, { Component } from "react";
import "./Story.css";

class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="story-title">{this.props.propsBlogName}</div>
        <div className="story-desc">{this.props.propsDescription}</div>
        <div className="story-category-and-date">
          <span className="story-category">{this.props.propsCategory}</span>
          <span className="story-date">TODAY AT 11:54</span>
        </div>
      </div>
    );
  }
}

export default Story;
