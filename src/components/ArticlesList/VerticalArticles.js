import React, { Component } from "react";
import "./VerticalArticles.css";
import HorizontalArticle from "../Article/HorizontalArticle";
import downwardArrow from "../../assets/images/downward-arrow.svg";
import { Link } from "react-router-dom";

class VerticalArticles extends Component {
  state = {
    noOfVerticalArticlesToBeDisplayed: this.props.propsNoOfArticles,
  };

  componentDidUpdate(prevProps) {
    if (this.props.propsCategoryName !== prevProps.propsCategoryName) {
      this.setState({
        noOfVerticalArticlesToBeDisplayed: this.props.propsNoOfArticles,
      });
    }
  }

  loadMoreHandler = (n) => {
    this.setState((prevState) => {
      return {
        noOfVerticalArticlesToBeDisplayed:
          prevState.noOfVerticalArticlesToBeDisplayed + 4,
      };
    });
  };

  render() {
    const [...blogsArr] = this.props.propsBlogsArr;
    const blogs = blogsArr.slice(
      0,
      this.state.noOfVerticalArticlesToBeDisplayed
    );

    return (
      <div className="vertical-articles">
        <h2 className="vertical-articles-title">
          {this.props.propsCategoryName}
        </h2>
        <div className="vertical-articles-container">
          {blogs.map((blog, index) => {
            return (
              <div className="article-container" key={index}>
                <Link to={`/React-Blog-App/${blog.id}`}>
                  <HorizontalArticle
                    propsBlogName={blog.name}
                    propsDescription={blog.description}
                    propsCategory={blog.category}
                    propsImageURL={blog.imageURL}
                  />
                </Link>
              </div>
            );
          })}

          <div className="expand-btn">
            <button onClick={this.loadMoreHandler}>
              <img src={downwardArrow} alt="downward-arrow" />
              <span>LOAD MORE</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalArticles;
