import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import { deletePost } from "../../redux/actions/postActions";

const PostSummary = ({ post, props }) => {
  console.log("Post in PostSummary", post);

  return (
    <div className="card grey lighten-5 z-depth-0 post-summary">
      <span className="card-title red-text text-darken-2">{post.title}</span>
      <p className="grey-text text-darken-2">{post.content}</p>
      <p className="grey-text text-darken-2">
        Posted by {post.authorFirstName} {post.authorLastName}
      </p>
      <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>

      {/* <button onClick={() => deletePost(post)}>
        <i className="fas fa-trash-alt" />
      </button> */}
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   console.log("Here in PostSumary this is the state", state);
//   const id = ownProps.key;
//   const posts = state.firestore.data.posts;
//   const post = posts ? posts[id] : null;
//   console.log("post", post);
//   return {
//     post: post
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     deletePost: post => dispatch(deletePost(post))
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(PostSummary);

export default PostSummary;
