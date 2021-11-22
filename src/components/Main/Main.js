import React, { Component } from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import UserLogin from "../UserLogin/UserLogin";
import Home from "../Home/Home";
import Category from "../Category/Category";
import ReadArticle from "../ReadArticle/ReadArticle";

class Main extends Component {
  state = {
    blogs: {
      blogsArr: [
        {
          id: "Travel1",
          name: "Travel1",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Lake", "Mountains", "Nature"],
          imageURL:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          claps: 22,
          author: "User1",
        },
        {
          id: "Travel2",
          name: "Travel2",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Mountains", "Nature"],
          imageURL:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80",
          claps: 56,
          author: "User2",
        },
        {
          id: "Travel3",
          name: "Travel3",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Mountains", "Friends", "Nature"],
          imageURL:
            " https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",
          claps: 106,
          author: "User3",
        },
        {
          id: "Travel4",
          name: "Travel4",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["City", "Europe"],
          imageURL:
            " https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",

          claps: 81,
          author: "User4",
        },
        {
          id: "Travel5",
          name: "Travel5",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Sea", "City", "Nature"],
          imageURL:
            " https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ",

          claps: 42,
          author: "User5",
        },
        {
          id: "Travel6",
          name: "Travel6",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Aurora", "Nights", "Nature"],
          imageURL:
            " https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 ",

          claps: 291,
          author: "User6",
        },
        {
          id: "Travel7",
          name: "Travel7",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Traveller", "Sea", "Nature"],
          imageURL:
            " https://images.unsplash.com/photo-1507548335453-2264668e6243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1179&q=80 ",

          claps: 81,
          author: "User7",
        },
        {
          id: "Travel8",
          name: "Travel8",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Passport", "Travel"],
          imageURL:
            "  https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",

          claps: 24,
          author: "User8",
        },
        {
          id: "Travel9",
          name: "Travel9",
          category: "Travel",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Mountains", "Travel", "Nature"],
          imageURL:
            " https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1214&q=80 ",

          claps: 67,
          author: "User9",
        },

        {
          id: "hollywood1",
          name: "hollywood7",
          category: "hollywood",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Movie", "Hollywood"],
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
          keyword: ["Entertainment", "Netflix"],
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
          keyword: ["Technology", "Coding"],
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
          keyword: ["Technology"],
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
          keyword: ["Technology", "Laptop"],
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
          keyword: ["Technology", "Drone"],
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
          keyword: ["Technology", "Optical Fiber"],
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
          keyword: ["Technology", "Internet"],
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
          keyword: ["Technology", "Space"],
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
          keyword: ["Technology", "Robot"],
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
          keyword: ["Fitness"],
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
          keyword: ["Fitness"],
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
          keyword: ["Fitness", "Workout"],
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
          keyword: ["Fitness", "Hiking"],
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
          keyword: ["Fitness", "Workout"],
          imageURL:
            "https://images.unsplash.com/photo-1604315608346-eeab3bb232bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
          claps: 74,
          author: "User5",
        },

        {
          id: "food1",
          name: "food1",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Food"],
          imageURL:
            "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          claps: 51,
          author: "User1",
        },
        {
          id: "food2",
          name: "food2",
          category: "Food",
          dateOfPublishment: "14/11/2021",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, laboriosam?",
          keyword: ["Food"],
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
          keyword: ["Food"],
          imageURL:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80",
          claps: 41,
          author: "User3",
        },
      ],
    },
    users: { usersArr: [] },
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

  registerUser = (id, username, password) => {
    const newUserObj = { id, username, password };
    const stateCopy = { ...this.state };
    stateCopy.users.usersArr.push(newUserObj);
    this.setState(stateCopy);
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/React-Blog-App/">
            <UserLogin
              propsUsersArr={this.state.users.usersArr}
              propsRegisterUserFn={this.registerUser}
            ></UserLogin>
          </Route>
          <Route exact path="/React-Blog-App/home">
            <Home propsBlogsArr={this.state.blogs.blogsArr} />
          </Route>
          <Route exact path="/React-Blog-App/travel">
            <Category
              propsCategoryName="Travel"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/React-Blog-App/hollywood">
            <Category
              propsCategoryName="Hollywood"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/React-Blog-App/technology">
            <Category
              propsCategoryName="Technology"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>

          <Route exact path="/React-Blog-App/fitness">
            <Category
              propsCategoryName="Fitness"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>
          <Route exact path="/React-Blog-App/food">
            <Category
              propsCategoryName="Food"
              propsBlogsArr={this.state.blogs.blogsArr}
            />
          </Route>
          <Route exact path="/React-Blog-App/:id">
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
