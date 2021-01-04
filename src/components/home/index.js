import React from "react";
import { connect } from "react-redux";
import { loadPosts, signIn, signOut } from "../../redux/actions/";
import { getPosts } from "../../redux/selectors/postsSelector";
import { getAuthStatus } from "../../redux/selectors/authSelector";
import PostList from "../post/PostList";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    return (
      <section className="section homeComponent">
        <div className="columns is-flex is-flex-direction-column is-align-items-center">
          {this.props.auth.isSignedIn && (
            <h2 className="subtitle welcomeText">
              Welcome<strong> {this.props.auth.userName}</strong>
            </h2>
          )}
          <PostList posts={this.props.posts} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    auth: getAuthStatus(state),
  };
};

export default connect(mapStateToProps, { loadPosts, signIn, signOut })(Home);
