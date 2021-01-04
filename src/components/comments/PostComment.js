import React from "react";

class PostComment extends React.Component {
  state = {
    commentText: ""
  };
  handleTextAreaChange = (e) => {
    this.setState({
      commentText: e.target.value,
    });
  };
  submitComment = () => {
  
    if (this.state.commentText !== "") {

      this.props.submitComment(
        this.state.commentText,
        this.props.parentId || null
      );
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
          
        </div>
      </article>
    );
  }
}

export default PostComment;
