import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { deletePost } from "../../redux/actions/postActions";
import renderHTML from "react-render-html";

const PostDetails = props => {
  const { post, id } = props;

  if (post) {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title red-text text-darken-2">
              {post.title}
            </span>
            <p className="grey-text text-darken-2">{post.summary}</p>
            <div className="post-content grey-text text-darken-3">
              {renderHTML(post.content)}
            </div>

            <button
              onClick={() => {
                props.deletePost(post, id);
                props.history.push("/");
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {post.authorFirstName} {post.authorLastName}
            </div>
            <div> {moment(post.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-center">
        <p> Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    id: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (post, id) => dispatch(deletePost(post, id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
