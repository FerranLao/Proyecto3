import React from "react";
import { connect } from "react-redux";
import { SocialApi } from "../lib/SocialApi";
import { Friend } from "../components/Friend";
import { StyledFriends } from "../lib/styledcomps/styledFriends";
import { UserBigCard } from "../components/UserBigCard";
import { Chat } from "../components/Chat";

class _Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friendlist: null,
      selected: null
    };
  }

  componentDidMount() {
    SocialApi.getfriends().then(({ data }) => {
      this.setState({ friendlist: data, selected: data[0] });
    });
  }

  selectfriend = index => {
    const selected = this.state.friendlist[index];
    new Promise((resolve) => {
      resolve(this.setState({ selected: null }));
    }).then(e => this.setState({ selected }));
    ;
  };

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

  render() {
    const { friendlist, selected } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        <StyledFriends>
          <div className="friends">
            {friendlist
              ? friendlist.map((e, i) =>
                  this.notme(e.users) ? (
                    <Friend
                      key={i}
                      index={i}
                      select={this.selectfriend}
                      user={this.notme(e.users)}
                    />
                  ) : null
                )
              : null}
          </div>
          <div className="userBigCard">
            {selected ? <UserBigCard user={selected} /> : null}
          </div>
        </StyledFriends>
        <div>
          {selected ? (
            <Chat chatid={selected.chat} members={selected.users} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export const Friends = connect(state => ({ user: state.user }))(_Friends);
