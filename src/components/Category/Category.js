import React, { Component } from "react";
import "./Category.css";
import Header from "../Header/Header";
import VerticalArticles from "../ArticlesList/VerticalArticles";
import TopPostsVertical from "../TopPosts/TopPostsVertical";
import Advertisement from "../Advertisement/Advertisement";

export class Category extends Component {
  render() {
    const [...blogs] = this.props.propsBlogsArr;
    return (
      <div className="category">
        <Header />
        <div className="flex-row">
          <div className="left-box">
            <VerticalArticles
              propsCategoryName={this.props.propsCategoryName}
              propsBlogs={blogs}
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
