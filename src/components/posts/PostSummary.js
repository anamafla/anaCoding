import React from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="card grey lighten-5 z-depth-0 post-summary">
      <span className="card-title red-text text-darken-2">{post.title}</span>
      <p className="grey-text text-darken-2">{post.content}</p>
      <p className="grey-text text-darken-2">
        Posted by {post.authorFirstName} {post.authorLastName}
      </p>
      <p className="grey-text">17 October</p>
    </div>
  );
};

export default PostSummary;
