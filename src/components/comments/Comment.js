import React from "react";

import PostComment from "./PostComment";
import { dateFormat } from "../../helpers/dateHelper";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    showNestedComments: false,
    showPostComment: false,
  };
  toggleNestedComments = () => {
    this.setState((prevState) => ({
      showNestedComments: !prevState.showNestedComments,
    }));
  };
  showPostComment = () => {
    this.setState((prevState) => ({
      showPostComment: !prevState.showPostComment,
      showNestedComments: true,
    }));
  };

  render() {
    const { comment, allComments } = this.props;
    const children =
      allComments.filter(
        (comment) => comment.parent_id === this.props.comment.id
      ) || [];
    console.log(children);
    // const children = comment.children || [];
    const nestedComments = children.map((comment) => {
      return (
        <Comment
          isSignedIn={this.props.isSignedIn}
          auth={this.props.auth}
          submitComment={this.props.submitComment}
          key={comment.id}
          comment={comment}
          allComments={allComments}
        />
      );
    });
    const commentDate = new Date(comment.date);
    const format =
      commentDate.getDate() +
      "/" +
      (commentDate.getMonth() + 1) +
      "/" +
      commentDate.getFullYear();
    let buttonText = "Show Replies";
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{comment.user} </strong> -{" "}
              <small> {dateFormat(comment.date)}</small>
              <br />
              {comment.content}
              <br />
              <small>
                {" "}
                {this.props.isSignedIn && (
                  <>
                    <a>Like</a> ·{" "}
                    <a onClick={this.showPostComment}>
                      {this.state.showPostComment ? "Cancel" : "Reply"}{" "}
                    </a>{" "}
                  </>
                )}
                {children.length > 0 && (
                  <a onClick={this.toggleNestedComments}>
                    {this.props.isSignedIn ? ". " : ""}
                    {children.length}{" "}
                    {children.length === 1 ? "reply" : "replies"}{" "}
                  </a>
                )}
              </small>
            </p>
          </div>
          {this.state.showPostComment && (
            <PostComment
              parentId={this.props.comment.id}
              submitComment={this.props.submitComment}
            />
          )}
          {this.state.showNestedComments && nestedComments}
        </div>
      </article>
    );
  }
}

export default Comment;
