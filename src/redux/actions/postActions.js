export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};

export const deletePost = (post, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    console.log("Firestore", firestore);
    console.log("post", post);
    console.log("id", id);

    firestore
      .collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deleting post");
        dispatch({ type: "DELETE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "DELETE_POST_ERROR", err });
      });
  };
};
