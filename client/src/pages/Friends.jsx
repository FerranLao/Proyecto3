import React from "react";
import { connect } from "react-redux";
import { SocialApi } from "../lib/SocialApi";
import { Friend } from "../components/Friend";
import { StyledFriends } from "../lib/styledcomps/styledFriends";
import { UserBigCard } from "../components/UserBigCard";
import { Chat } from "../components/Chat";
import { Nothingfound } from "../components/Nothingfound";

class _Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friendlist: [],
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
    new Promise(resolve => {
      resolve(this.setState({ selected: null }));
    }).then(e => this.setState({ selected }));
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
    console.log(friendlist);
    return (
      <React.Fragment>
        {friendlist.length !== 0 ? (
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
          </StyledFriends>
        ) : (
          <Nothingfound url="https://media.giphy.com/media/VfyC5j7sR4cso/giphy.gif">
            No friends found
          </Nothingfound>
        )}
        <div className="bottombox">
          <div className="bigcard">
            {selected ? (
              <UserBigCard user={this.notme(selected.users)} />
            ) : null}
          </div>
          <div className="chatspace">
            {selected ? (
              <Chat chatid={selected.chat} members={selected.users} />
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export const Friends = connect(state => ({ user: state.user }))(_Friends);
