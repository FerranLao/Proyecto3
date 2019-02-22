import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { StyledNav } from "../lib/styledcomps/styledNav";

const toggle = () => {
  const nav = document.querySelector("nav");
  const bar = document.querySelector(".bar");
  nav.className ? (nav.className = "") : (nav.className = "onoff");
  bar.className === "bar"
    ? (bar.className = "bar onoff")
    : (bar.className = "bar");
};

const _Nav = ({ user, dispatch }) => {
  return (
    <StyledNav>
      <div id="toggle" onClick={() => toggle()}>
        <div className="hamburger-menu">
          <div className="bar" />
        </div>
      </div>

      <nav role="navigation" className="onoff" onClick={() => toggle()}>
        <ul>
          {user ? (
            <React.Fragment>
              <li>
                <Link to="/">
                  home <i className="fa fa-home" />
                </Link>
              </li>
              <li>
                Events <i className="fa fa-music" />
                <ul>
                  <li>
                    <Link to="/events">Search events</Link>
                  </li>
                  <li>
                    <Link to="/newevent">New event</Link>
                  </li>
                  <li>
                    <Link to="/myevents">My event</Link>
                  </li>
                </ul>
              </li>
              <li>
                Groups <i className="fa fa-heartbeat" />
                <ul />
              </li>
              <li>
                Account <i className="fa fa-heartbeat" />
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="backgroundred"
                      onClick={() =>
                        AuthAPI.logout().then(e => dispatch({ type: "LOGOUT" }))
                      }
                    >
                      logout <i className="fa fa-home" />
                    </Link>
                  </li>
                </ul>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/signup">
                  signup <i className="fa fa-home" />
                </Link>
              </li>
              <li>
                <Link to="/login">
                  login <i className="fa fa-home" />
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </StyledNav>
  );
};

export const Nav = connect(store => ({ user: store.user }))(_Nav);
