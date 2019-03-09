import React from "react";
import { connect } from "react-redux";
import { SocialApi } from "../lib/SocialApi";
import { Invite } from "../components/Invite";
import { StyledInvite } from "../lib/styledcomps/styledInvite";
import { Nothingfound } from "../components/Nothingfound";
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
      this.setState({ invites: data });
    });
  }

  accept = id => {
    const { history } = this.props;
    SocialApi.acceptinvite(id).then(e => {
      if (e.data === "done") {
        this.getinvites();
      } else {
        history.push(`/events/${e.data}`);
      }
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
          {invites.length !== 0 ? (
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
          ) : (
            <Nothingfound url="https://media.giphy.com/media/3oriff4xQ7Oq2TIgTu/giphy.gif">
              Nothing to see here
            </Nothingfound>
          )}
        </section>
      </StyledInvite>
    );
  }
}

export const Invitations = connect(state => ({ user: state.user }))(
  _Invitations
);
