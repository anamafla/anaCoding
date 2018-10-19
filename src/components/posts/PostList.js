import React from "react";

const PostList = () => {
  return (
    <div className="project-list section">
      <div className="card grey lighten-5 z-depth-0 post-summary">
        <span className="card-title red-text text-darken-2">Title</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          necessitatibus dolorem nesciunt! Reiciendis, eius a.
        </p>
        <p>Posted by Ana Mafla</p>
        <p className="grey-text">17 October</p>
      </div>

      <div className="card grey lighten-5 z-depth-0 post-summary">
        <span className="card-title red-text text-darken-2">Title</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          necessitatibus dolorem nesciunt! Reiciendis, eius a.
        </p>
        <p>Posted by Ana Mafla</p>
        <p className="grey-text">17 October</p>
      </div>
    </div>
  );
};

export default PostList;
