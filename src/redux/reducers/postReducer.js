const initState = {
  posts: [
    {
      id: "1",
      title: "Learning React",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
      id: "2",
      title: "Learning Redux",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
      id: "3",
      title: "Learning Firebase",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }
  ]
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
    default:
      return state;
  }
};

export default postReducer;
