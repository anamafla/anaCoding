import React from "react";

const PostDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section post-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Post Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, dolore excepturi alias facere eaque dolor quam numquam
            ad quasi itaque eligendi adipisci, perferendis soluta velit,
            sapiente quia optio molestiae nam. Facilis libero aperiam nostrum
            officia provident rerum sint veritatis necessitatibus delectus
            laboriosam. Facilis, voluptatibus harum? Vero amet incidunt iure
            expedita nisi, consectetur, accusantium rem at nam ex maiores! Iure
            reprehenderit, tempore iste perspiciatis labore soluta. Repudiandae
            natus, voluptatem, quia excepturi illum minima quos tempore cum
            minus eligendi officiis ullam sunt nobis amet, in at doloremque et
            voluptates! Mollitia ut repellendus, tempora, sunt laboriosam
            quidem, aut corrupti esse vitae necessitatibus blanditiis!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Ana Mafla</div>
          <div> 17 October</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
