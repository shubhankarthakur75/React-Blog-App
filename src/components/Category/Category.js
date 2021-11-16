import React, { Component } from "react";
import "./Category.css";
import Header from "../Header/Header";
import VerticalArticles from "../ArticlesList/VerticalArticles";
export class Category extends Component {
  render() {
    return (
      <div className="category">
        <Header />
        <VerticalArticles />
      </div>
    );
  }
}

export default Category;
