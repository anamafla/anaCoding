import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div>
            <PostList posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};

export default connect(mapStateToProps)(Dashboard);
