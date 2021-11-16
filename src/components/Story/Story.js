import React, { Component } from "react";
import "./Story.css";

class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="story-title">Lorem ipsum dolor sit amet.</div>
        <div className="story-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
          reiciendis necessitatibus magnam molestias, culpa excepturi odio vitae
          mollitia voluptas.
        </div>
        <div className="story-category-and-date">
          <span className="story-category">TECH</span>
          <span className="story-date">TODAY AT 11:54</span>
        </div>
      </div>
    );
  }
}

export default Story;
