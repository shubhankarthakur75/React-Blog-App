import React, { Component } from "react";
import "./HorizontalStories.css";
import { Link } from "react-router-dom";
import Story from "../Story/Story";
import rightArrow from "../../assets/images/right-arrow.svg";

class HorizontalStories extends Component {
  render() {
    return (
      <div className="horizontal-stories">
        <div className="horizontal-stories-title">
          <h2>Latest Stories</h2>
          <div className="stories-container">
            {this.props.propsBlogs.map((blog, index) => {
              return (
                <div className="story-container">
                  <Story
                    propsBlogName={blog.name}
                    propsDescription={blog.description}
                    propsCategory={blog.category}
                  />
                </div>
              );
            })}
          </div>
          <div className="expand-btn">
            <button>
              <span>VIEW MORE</span>
              <img src={rightArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalStories;
