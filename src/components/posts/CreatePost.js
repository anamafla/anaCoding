import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/postActions";
import { Redirect } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class CreatePost extends Component {
  state = {
    title: "",
    summary: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleContentChange = e => {
    console.log("This is e : ", e);
    this.setState({
      content: e
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            {/* <label htmlFor="content">Content</label> */}
            <br />
            {/* <textarea
              id="content"
              cols="30"
              rows="10"
              className="materialize-textarea"
              onChange={this.handleChange}
            /> */}
            <div>
              <ReactQuill
                id="content"
                modules={createPost.modules}
                onChange={this.handleContentChange}
              />
            </div>
          </div>

          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

createPost.modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image"],
    ["clean"],
    ["code-block"]
  ]
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
