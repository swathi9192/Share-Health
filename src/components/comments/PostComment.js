import React from "react";

class PostComment extends React.Component {
  state = {
    commentText: "",
    err: "",
  };
  handleTextAreaChange = (e) => {
    this.setState({
      commentText: e.target.value,
    });
  };
  submitComment = () => {
    if (!this.state.commentText === null || !this.state.commentText === "") {
      this.props.submitComment(
        this.state.commentText,
        this.props.parentId || null
      );
    } else {
      this.setState({ err: "Please enter some text to comment" });
    }
  };
  render() {
    return (
      <article className="media">
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder="Add a comment..."
                value={this.state.commentText}
                onChange={(event) => this.handleTextAreaChange(event)}
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button" onClick={this.submitComment}>
                Submit
              </button>
            </p>
          </div>
          {this.state.err !== "" && (
            <div class="notification is-danger is-light">{this.state.err}</div>
          )}
        </div>
      </article>
    );
  }
}

export default PostComment;
