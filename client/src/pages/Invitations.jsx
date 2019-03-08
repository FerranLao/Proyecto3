import React from "react";
import { connect } from "react-redux";
import { SocialApi } from "../lib/SocialApi";
import { Invite } from "../components/Invite";
import { StyledInvite } from "../lib/styledcomps/styledInvite";

class _Invitations extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "income",
      invites: []
    };
  }

  componentDidMount() {
    this.getinvites();
  }

  getinvites() {
    SocialApi.getinvites().then(({ data }) => {
      console.log(data)
      this.setState({ invites: data });
    });
  }

  accept = id => {
    SocialApi.acceptinvite(id).then(e => {
      this.getinvites();
    });
  };

  reject = id => {
    SocialApi.rejectinvite(id).then(e => {
      this.getinvites();
    });
  };

  render() {
    const { invites } = this.state;
    return (
      <StyledInvite>
        <section className="section">
          <div className="section__container">
            {invites.map(e => (
              <Invite
                invite={e}
                key={e._id}
                accept={this.accept}
                reject={this.reject}
              />
            ))}
          </div>
        </section>
      </StyledInvite>
    );
  }
}

export const Invitations = connect(state => ({ user: state.user }))(
  _Invitations
);
