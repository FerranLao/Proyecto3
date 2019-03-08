import React from "react";
import { StyledModal } from "../lib/styledcomps/styledModal";
import { SocialApi } from "../lib/SocialApi";
import { connect } from "react-redux";
import { StyledUserList } from "../lib/styledcomps/styledUserList";
import { UserminiCard } from "./UserminiCard";

class _InviteFriends extends React.Component {
  constructor() {
    super();
    this.state = { friends: [] };
  }

  componentDidMount() {
    SocialApi.getfriends().then(({ data }) => {
      const friends = data.map(e => this.notme(e.users));
      this.setState({ friends });
    });
  }

  notme(arr) {
    const { _id } = this.props.user;
    let notme;
    arr.forEach(e => {
      if (e._id !== _id) {
        notme = e;
      }
    });
    return notme;
  }

  addfriend = (id) => {
      const {event}= this.props
      SocialApi.inviteParty(id,event).then(e=>{console.log(e)
      })
  };

  
  render() {
    const { friends } = this.state;
    console.log(friends)
    return (
      <StyledModal>
        <div className="buttonmodal">
          <a className="button is-primary" href="#openModal">
            Invite your friends
          </a>
        </div>
        <div id="openModal" className="modalbg">
          <div className="dialog">
            <a href="#close" title="Close" className="close">
              X
            </a>
            <div className="userlist">
              <StyledUserList>
                {friends.map((e, i) => (
                  <UserminiCard user={e} key={i} addfriend={this.addfriend} />
                ))}
              </StyledUserList>
            </div>
          </div>
        </div>
      </StyledModal>
    );
  }
}

export const InviteFriends = connect(state => ({ user: state.user }))(
  _InviteFriends
);
