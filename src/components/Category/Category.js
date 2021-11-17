import React, { Component } from "react";
import "./Category.css";
import Header from "../Header/Header";
import VerticalArticles from "../ArticlesList/VerticalArticles";
import TopPostsVertical from "../TopPosts/TopPostsVertical";
import Advertisement from "../Advertisement/Advertisement";

export class Category extends Component {
  state = {
    noOfVerticalArticlesToBeDisplayed: 5,
  };
  render() {
    const [...blogs] = this.props.propsBlogsArr;
    console.log(blogs);
    console.log(this.props.propsCategoryName);

    // test-
    const filteredArr = blogs.filter((blog) => {
      return blog.category == this.props.propsCategoryName;
    });
    console.log(filteredArr);

    return (
      <div className="category">
        <Header />
        <div className="flex-row">
          <div className="left-box">
            <VerticalArticles
              propsCategoryName={this.props.propsCategoryName}
              propsBlogs={blogs}
              propsNoOfArticles={this.state.noOfVerticalArticlesToBeDisplayed}
            />
          </div>
          <div className="right-box">
            <TopPostsVertical />
            <Advertisement />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
