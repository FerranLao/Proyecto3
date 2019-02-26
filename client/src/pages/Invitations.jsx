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
    SocialApi.getinvites().then(({ data }) => {
      this.setState({ invites: data });
    });
  }

  accept(id) {
    SocialApi.accept(id).then(e => {
      SocialApi.getinvites().then(({ data }) => {
        this.setState({ invites: data });
      });
    });
  }

  reject() {}

  render() {
    const { invites } = this.state;
    return (
      <StyledInvite>
        <section class="section">
          <div class="section__container">
            {invites.map(e => (
              <Invite invite={e} accept={this.accept} reject={this.reject} />
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
