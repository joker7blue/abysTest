import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import "./header.scss";

const Header = ({ currentUser, hidden, history }) => {
  const signOut = async () => {
    history.push("/");
  };

  return (
      <>
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>

        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in-up">SIGN IN/SIGN UP</Link>
        )}
      </div>
    </div>
    </>
  );
};

const mapStateToProps = ({user: {currentUser}}) => ({
  currentUser,
});

export default connect(mapStateToProps)(withRouter(Header));
