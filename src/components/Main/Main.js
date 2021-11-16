import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  state = {
    blogs: {
      blogsArr: [
        {
          id: 1,
          name: "blog1",
          category: "Technology",
          dateOfPublishment: "10/11/2021",
          author: "User",
        },
      ],
      bollywoodBlogsArr: [],
      technologyBlogsArr: [
        {
          id: 1,
          name: "blog1",
          category: "Technology",
          dateOfPublishment: "10/11/2021",
          author: "User",
        },
      ],
    },
  };
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<Category />} />
        </Routes> */}
      </div>
    );
  }
}

export default Main;
