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
          imageURL:
            " https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80 ",
          claps: 21,
          author: "User1",
        },
        {
          id: "bollywood2",
          name: "bollywood2",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 22,
          author: "User2",
        },
        {
          id: "bollywood3",
          name: "bollywood3",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 28,
          author: "User3",
        },
        {
          id: "bollywood4",
          name: "bollywood4",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 73,
          author: "User4",
        },
        {
          id: "bollywood5",
          name: "bollywood5",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 81,
          author: "User5",
        },
        {
          id: "bollywood6",
          name: "bollywood6",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 8,
          author: "User6",
        },
        {
          id: "bollywood7",
          name: "bollywood7",
          category: "Bollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 91,
          author: "User7",
        },

        {
          id: "hollywood1",
          name: "hollywood7",
          category: "hollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          claps: 201,
          author: "User1",
        },
        {
          id: "hollywood2",
          name: "hollywood2",
          category: "hollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1186&q=80",
          claps: 201,
          author: "User2",
        },

        {
          id: "technology1",
          name: "technology1",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",
          claps: 18,
          author: "User1",
        },
        {
          id: "technology2",
          name: "technology2",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80 ",
          claps: 61,
          author: "User2",
        },
        {
          id: "technology3",
          name: "technology3",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80  ",
          claps: 31,
          author: "User3",
        },
        {
          id: "technology4",
          name: "technology4",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",
          claps: 52,
          author: "User4",
        },
        {
          id: "technology5",
          name: "technology5",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1606814540563-5c02d62fd409?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80 ",
          claps: 103,
          author: "User5",
        },
        {
          id: "technology6",
          name: "technology6",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80 ",
          claps: 62,
          author: "User6",
        },
        {
          id: "technology7",
          name: "technology7",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",
          claps: 172,
          author: "User7",
        },
        {
          id: "technology8",
          name: "technology8",
          category: "Technology",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            " https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80 ",
          claps: 81,
          author: "User8",
        },

        {
          id: "fitness1",
          name: "fitness1",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
          claps: 61,
          author: "User1",
        },
        {
          id: "fitness2",
          name: "fitness2",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          claps: 21,
          author: "User2",
        },
        {
          id: "fitness3",
          name: "fitness3",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
          claps: 88,
          author: "User3",
        },
        {
          id: "fitness4",
          name: "fitness4",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1269&q=80",
          claps: 181,
          author: "User4",
        },

        {
          id: "fitness5",
          name: "fitness5",
          category: "Fitness",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 74,
          imageURL:
            "https://images.unsplash.com/photo-1604315608346-eeab3bb232bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
          author: "User5",
        },

        {
          id: "food1",
          name: "food1",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          claps: 51,
          imageURL:
            "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          author: "User1",
        },
        {
          id: "food2",
          name: "food2",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          claps: 128,
          author: "User2",
        },
        {
          id: "food3",
          name: "food3",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          imageURL:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80",
          claps: 41,
          author: "User3",
        },
      ],
    },
  };

  handleClaps = (id) => {
    const newBlogsArr = [...this.state.blogs.blogsArr];
    newBlogsArr.forEach((blog) => {
      if (blog.id === id) {
        blog.claps += 1;
      }
    });
    this.setState({ blogsArr: newBlogsArr });
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
            <ReadArticle
              propsBlogsArr={this.state.blogs.blogsArr}
              propsHandleClaps={this.handleClaps}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
