import React from "react";
import { connect } from "react-redux";
import { StyledHome } from "../lib/styledcomps/styledHome";
import { Link } from "react-router-dom";

const _Home = ({ user }) => {
  return (
    <StyledHome>
     {user?
       
       <div>
        <h2>Welcome Home</h2>
        {user ? <h1>{user.username }</h1>: null}
      </div>:
    <div>
      <h2>Join Us</h2>
      <div>
      <Link  to="/signup"className="button is-success">Singup</Link>
      </div>

    </div>}
    </StyledHome>
  );
};

export const Home = connect(store => ({ user: store.user }))(_Home);
