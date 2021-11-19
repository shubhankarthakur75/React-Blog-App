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

class Home extends Component {
  // state = {
  //   noOfVerticalArticlesToBeDisplayed: 4,
  // };

  render() {
    const [...blogs] = this.props.propsBlogsArr;
    return (
      <div className="home">
        <Header />
        <ImagesShowcase propsBlogsArr={blogs} />
        <HorizontalArticles propsBlogs={blogs.slice(0, 3)} />
        <div className="flex-row">
          <div className="left-box">
            <VerticalArticles
              propsCategoryName="Latest Articles"
              propsBlogsArr={blogs}
              propsNoOfArticles={4}
            />
            <Gallery propsBlogsArr={blogs} />
          </div>
          <div className="right-box">
            <Advertisement />
            <TopPostsVertical propsBlogsArr={blogs} />
          </div>
        </div>
        <HorizontalStories propsBlogsArr={blogs} />

        {/* <Category /> */}
      </div>
    );
  }
}

export default Home;
