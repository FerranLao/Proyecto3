import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";

class _NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      Steamgames:{}
    };
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.SteamUser ? null : (
          <React.Fragment>
            <AddSteam></AddSteam>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export const NewEvent = connect(store => ({ user: store.user }))(_NewEvent);
