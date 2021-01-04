import Comment from "./Comment";
const CommentList = ({ comments, submitComment, isSignedIn }) => {
  const commentItems = comments
    .filter((comment) => comment.parent_id === null)
    .map((comment) => {
      return (
        <Comment
          submitComment={submitComment}
          key={comment.id}
          comment={comment}
          allComments={comments}
          isSignedIn={isSignedIn}
        />
      );
    });
  return commentItems;
};

export default CommentList;
