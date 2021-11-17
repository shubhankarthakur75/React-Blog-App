import React, { Component } from "react";
import { withRouter } from "react-router";
import "./ReadBlog.css";
import Header1 from "../Header/Header1";

class ReadBlog extends Component {
  render() {
    return (
      <div className="read-blog">
        <Header1 />
        <h1>Blog</h1>
        id:{this.props.match.params.id}
      </div>
    );
  }
}

export default withRouter(ReadBlog);
