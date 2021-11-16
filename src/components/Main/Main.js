import React, { Component } from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";

class Main extends Component {
  state = {
    blogs: {
      blogsArr: [
        {
          id: 1,
          name: "blog1",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          author: "User1",
        },
        {
          id: 3,
          name: "blog3",
          category: "Technology",
          dateOfPublishment: "10/11/2021",
          author: "User3",
        },
      ],
      bollywoodBlogsArr: [
        {
          id: 1,
          name: "blog1",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },
      ],
      hollywoodBlogsArr: [
        {
          id: 2,
          name: "blog2",
          category: "hollywood",
          dateOfPublishment: "14/9/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
        {
          id: 2,
          name: "blog2",
          category: "hollywood",
          dateOfPublishment: "14/9/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
      ],
      technologyBlogsArr: [
        {
          id: 3,
          name: "blog3",
          category: "Technology",
          dateOfPublishment: "10/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User3",
        },
      ],
      fitnessBlogsArr: [
        {
          id: 4,
          name: "blog4",
          category: "Fitness",
          dateOfPublishment: "10/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User4",
        },
      ],
      foodBlogsArr: [
        {
          id: 5,
          name: "blog5",
          category: "Food",
          dateOfPublishment: "10/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User5",
        },
      ],
    },
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home propsBlogsArr={this.state.blogs.blogsArr} />
          </Route>
          <Route exact path="/bollywood">
            <Category
              propsCategoryName="Bollywood"
              propsBlogsArr={this.state.blogs.bollywoodBlogsArr}
            />
          </Route>
          <Route exact path="/technology">
            <Category
              propsCategoryName="Technology"
              propsBlogsArr={this.state.blogs.technologyBlogsArr}
            />
          </Route>
          <Route exact path="/hollywood">
            <Category
              propsCategoryName="Hollywood"
              propsBlogsArr={this.state.blogs.hollywoodBlogsArr}
            />
          </Route>
          <Route exact path="/fitness">
            <Category
              propsCategoryName="Fitness"
              propsBlogsArr={this.state.blogs.fitnessBlogsArr}
            />
          </Route>
          <Route exact path="/food">
            <Category
              propsCategoryName="Food"
              propsBlogsArr={this.state.blogs.foodBlogsArr}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
