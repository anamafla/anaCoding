import React, { Component } from "react";
import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div>
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
