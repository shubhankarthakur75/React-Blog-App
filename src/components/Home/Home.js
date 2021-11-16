import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ImagesShowcase from "../ImagesShowcase/ImagesShowcase";
import HorizontalArticles from "../ArticlesList/HorizontalArticles";
import VerticalArticles from "../ArticlesList/VerticalArticles";
import Gallery from "../Gallery/Gallery";
import Advertisement from "../Advertisement/Advertisement";
import TopPostsVertical from "../TopPosts/TopPostsVertical";
import HorizontalStories from "../HorizontalStories/HorizontalStories";

// import Category from "../Category/Category";

class Home extends Component {
  render() {
    const [...blogs] = this.props.propsBlogsArr;
    return (
      <div className="home">
        <Header />
        <ImagesShowcase />
        <HorizontalArticles />
        <div className="flex-row">
          <div className="left-box">
            <VerticalArticles
              propsCategoryName="Latest Articles"
              propsBlogs={blogs}
            />
            <Gallery />
          </div>
          <div className="right-box">
            <Advertisement />
            <TopPostsVertical />
          </div>
        </div>
        <HorizontalStories />

        {/* <Category /> */}
      </div>
    );
  }
}

export default Home;
