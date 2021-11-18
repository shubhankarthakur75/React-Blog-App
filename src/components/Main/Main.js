import React, { Component } from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";
import ReadArticle from "../ReadArticle/ReadArticle";

class Main extends Component {
  state = {
    blogs: {
      blogsArr: [
        {
          id: "bollywood1",
          name: "bollywood1",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },
        {
          id: "bollywood2",
          name: "bollywood2",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
        {
          id: "bollywood3",
          name: "bollywood3",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User3",
        },
        {
          id: "bollywood4",
          name: "bollywood4",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User4",
        },
        {
          id: "bollywood5",
          name: "bollywood5",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User5",
        },
        {
          id: "bollywood6",
          name: "bollywood6",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User6",
        },
        {
          id: "bollywood7",
          name: "bollywood7",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User7",
        },

        {
          id: "hollywood1",
          name: "hollywood7",
          category: "hollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },

        {
          id: "technology1",
          name: "technology1",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },
        {
          id: "technology2",
          name: "technology2",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
        {
          id: "technology3",
          name: "technology3",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User3",
        },
        {
          id: "technology4",
          name: "technology4",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User4",
        },
        {
          id: "technology5",
          name: "technology5",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User5",
        },
        {
          id: "technology6",
          name: "technology6",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User6",
        },
        {
          id: "technology7",
          name: "technology7",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User7",
        },
        {
          id: "technology8",
          name: "technology8",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User8",
        },

        {
          id: "fitness1",
          name: "fitness1",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },
        {
          id: "fitness2",
          name: "fitness2",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
        {
          id: "fitness3",
          name: "fitness3",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User3",
        },
        {
          id: "fitness4",
          name: "fitness4",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User4",
        },

        {
          id: "fitness5",
          name: "fitness5",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User5",
        },

        {
          id: "food1",
          name: "food1",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User1",
        },
        {
          id: "food2",
          name: "food2",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User2",
        },
        {
          id: "food3",
          name: "food3",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          author: "User3",
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
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/hollywood">
            <Category
              propsCategoryName="Hollywood"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/technology">
            <Category
              propsCategoryName="Technology"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/fitness">
            <Category
              propsCategoryName="Fitness"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>
          <Route exact path="/food">
            <Category
              propsCategoryName="Food"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>
          <Route exact path="/:id">
            <ReadArticle propsBlogsArr={this.state.blogs.blogsArr} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
