import React, { Component } from "react";
import "./AuthorDetails.css";
import authorImage from "../../assets/images/author.png";
import facebookIcon from "../../assets/images/facebook-icon-30px.png";
import twitterIcon from "../../assets/images/twitter-icon-30px.png";
import instagramIcon from "../../assets/images/instagram-icon-30px.png";
import youtubeIcon from "../../assets/images/youtube-icon-30px.png";

class AuthorDetails extends Component {
  render() {
    return (
      <div className="author-details">
        <div className="author-image-container">
          <img
            src={authorImage}
            className="author-image"
            alt="author-profile"
          />
        </div>
        <div className="author-info">
          <p className="author-name">{this.props.propsBlog.author}</p>
          <p className="author-article-details">
            <span>Jan 28,2021</span>
            <span>.</span>
            <span>10 min read</span>
          </p>
        </div>
        {this.props.propsIsHide ? null : (
          <div className="author-social-handles">
            <img
              className="social-media-acc-icon"
              src={facebookIcon}
              alt="facebook"
            />
            <img
              className="social-media-acc-icon"
              src={twitterIcon}
              alt="twitter"
            />
            <img
              className="social-media-acc-icon"
              src={instagramIcon}
              alt="instagram"
            />
            <img
              className="social-media-acc-icon"
              src={youtubeIcon}
              alt="youtube"
            />
          </div>
        )}
      </div>
    );
  }
}

export default AuthorDetails;
