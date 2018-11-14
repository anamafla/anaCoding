const initState = {
  posts: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;

    case "CREATE_POST_ERROR":
      console.log("create post error", action.err);
      return state;

    case "DELETE_POST":
      console.log("delete post");
      return state;

    case "DELETE_POST_ERROR":
      console.log("create post error", action.err);
      return state;

    default:
      return state;
  }
};

export default postReducer;
