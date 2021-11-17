import React, { Component } from "react";
import { withRouter } from "react-router";
import "./ReadBlog.css";

class ReadBlog extends Component {
  render() {
    return (
      <div className="read-blog">
        <h1>Blog</h1>
        id:{this.props.match.params.id}
      </div>
    );
  }
}

export default withRouter(ReadBlog);
