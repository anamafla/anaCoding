import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
  console.log(state);
  return {
    posts: state.firestore.ordered.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Dashboard);
