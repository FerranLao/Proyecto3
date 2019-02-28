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
    const { user } = this.props;
    SocialApi.getfriends().then(({ data }) => {
     
      this.setState({ friendlist:data, selected: data[0] });
    });
  }

  selectfriend = index => {

    this.setState({ selected: this.state.friendlist[index] });
    console.log(this.state.selected)
  };

  notme(arr){
    const {_id}=this.props.user
    let notme
    arr.forEach(e => {
      if(e._id!==_id) {
        notme=e
      }    
    });
    console.log(notme)
    return notme
  }

  render() {
    const { friendlist, selected } = this.state;
    const {user}=this.props

    return (
      <React.Fragment>
        <StyledFriends>
          <div className="friends">
            {friendlist
              ? friendlist.map((e, i) =>
                  e.users[0] ? (
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
        {selected ? <Chat chatid={selected.chat} members={[this.notme(selected.users),user]} /> : null}
      </React.Fragment>
    );
  }
}

export const Friends = connect(state => ({ user: state.user }))(_Friends);
