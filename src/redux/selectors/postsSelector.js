export const getPosts = (state) => {
  return state.posts;
};

export const getPost = (state, id) => {
  return state.posts[id];
};
