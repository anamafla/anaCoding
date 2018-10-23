import React from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="card grey lighten-5 z-depth-0 post-summary">
      <span className="card-title red-text text-darken-2">{post.title}</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        necessitatibus dolorem nesciunt! Reiciendis, eius a.
      </p>
      <p>Posted by Ana Mafla</p>
      <p className="grey-text">17 October</p>
    </div>
  );
};

export default PostSummary;
