import React from "react";
import { Usercard } from "../components/Usercard";
import { connect } from "react-redux";
import { StyledHome } from "../lib/styledcomps/styledHome";


const _Home = ({ user }) => {
  return (
    <StyledHome>
      <div>
        <h2>Welcome Home</h2>
        <h1>{user ? user.username : null}</h1>
      </div>
    </StyledHome>
  );
};

export const Home = connect(store => ({ user: store.user }))(_Home);
