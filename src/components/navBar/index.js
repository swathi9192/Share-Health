import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./NavBar.scss";
import logo from "../../logo.png";
import GmailLogin from "../login/GmailLogin";

class NavBar extends React.Component {
  renderNavEnd = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <GmailLogin></GmailLogin>
          </div>
        </div>
      );
    }
  };
  renderNavStart = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="navbar-start">
          <Link to="/home" className="navbar-item">
            Home
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <nav
        className="navBarCmpnt navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} className="appLogo"></img>
          </Link>
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBarItems"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navBarItems" className="navbar-menu">
        <div className="navbar-end">
        <div className="navbar-item">
        <Link to="/" className="navbar-item">
            Home
          </Link>
          </div>
          <div className="navbar-item">
            <GmailLogin></GmailLogin>
          </div>
        </div> 
         
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(NavBar);
