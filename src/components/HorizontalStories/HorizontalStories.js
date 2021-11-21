import React, { Component } from "react";
import "./HorizontalStories.css";
import { Link } from "react-router-dom";
import Story from "../Story/Story";
import rightArrow from "../../assets/images/right-arrow.svg";
import downArrow from "../../assets/images/downward-arrow.svg";

class HorizontalStories extends Component {
  state = {
    nthStory: 3,
  };

  viewMoreHandler = () => {
    this.setState((prevState) => ({ nthStory: prevState.nthStory + 1 }));
  };
  render() {
    const blogs = this.props.propsBlogsArr.slice(
      this.state.nthStory - 3,
      this.state.nthStory
    );

    return (
      <div className="horizontal-stories">
        <div className="horizontal-stories-title">
          <h2>Latest Stories</h2>
          <div className="stories-container">
            {blogs.map((blog, index) => {
              return (
                <div className="story-container" key={index}>
                  <Link to={`/${blog.id}`}>
                    <Story
                      propsBlogName={blog.name}
                      propsDescription={blog.description}
                      propsCategory={blog.category}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="expand-btn expand-right-btn">
            <button onClick={this.viewMoreHandler}>
              <span>VIEW MORE</span>
              <img src={rightArrow} alt="right-arrow" />
            </button>
          </div>
          <div className="expand-btn expand-down-btn">
            <button onClick={this.viewMoreHandler}>
              <span>VIEW MORE</span>
              <img src={downArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalStories;
