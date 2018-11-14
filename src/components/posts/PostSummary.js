import React from "react";
import moment from "moment";

const PostSummary = ({ post, props }) => {
  console.log("Post in PostSummary", post);

  return (
    <div className="card grey lighten-5 z-depth-0 post-summary">
      <span className="card-title red-text text-darken-2">{post.title}</span>
      <p className="grey-text text-darken-2">{post.summary}</p>
      <p className="grey-text text-darken-2">
        Posted by {post.authorFirstName} {post.authorLastName}
      </p>
      <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
    </div>
  );
};

export default PostSummary;
