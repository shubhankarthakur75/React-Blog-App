import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ImagesShowcase from "../ImagesShowcase/ImagesShowcase";
import HorizontalArticles from "../ArticlesList/HorizontalArticles";
import VerticalArticles from "../ArticlesList/VerticalArticles";
import Sidebar from "../Sidebar/Sidebar";
import HorizontalStories from "../HorizontalStories/HorizontalStories";

import Category from "../Category/Category";

class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <Header />
        <ImagesShowcase />
        <HorizontalArticles />
        <div className="flex-row">
          <VerticalArticles />
          <Sidebar />
        </div>
        <HorizontalStories /> */}

        <Category />
      </div>
    );
  }
}

export default Home;
