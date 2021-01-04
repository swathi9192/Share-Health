export const getCommentsByParentId = (state, id) => {
  const obj = {};
  let comments = [];
  comments = state.comments[id];

  for (let index in comments) {
    const val = comments[index];
    if (val.parent_id === null) {
      const commentArr = [];
      commentArr.push(val);
      obj[val.id] = commentArr;
    } else {
      let current = obj[val.parent_id] || [];
      current.push(val);
      obj[val.parent_id] = current;
    }
  }
  console.log(obj);
  return comments;
};

export const getNestedComments = (state, id) => {
  const commentList = state.comments[id] || [];
  console.log(commentList);
  const commentMap = {};
  commentList.forEach((comment) => (commentMap[comment.id] = comment));

  commentList.forEach((comment) => {
    if (comment.parent_id !== null) {
      const parent = commentMap[comment.parent_id];

      (parent.children = parent.children || []).push(comment);
    }
  });

  const nestedComments = commentList.filter((comment) => {
    return comment.parent_id === null;
  });

  return nestedComments;
};

export const getComments = (state, id) => {
  return state.comments[id];
};
