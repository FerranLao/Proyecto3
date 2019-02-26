import React from "react";
import { Chat } from "../components/Chat";
import { Events } from "../lib/Events";
import { StyledEventCard } from "../lib/styledcomps/styledEventCard";
import { GameBigCard } from "../components/GameBigCard";
import { connect } from "react-redux";
import { UserminiCard } from "../components/UserminiCard";
import { StyledUserList } from "../lib/styledcomps/styledUserList";
import { SocialApi } from "../lib/SocialApi";

class _EventPage extends React.Component {
  constructor() {
    super();
    this.state = {
      event: { game: { genres: [], categories: [] }, party: [] },
      iscreator: false,
      inparty: false,
      friendlist: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { user } = this.props;
    SocialApi.getfriends(user._id).then(({ data }) => {
      this.setState({ friendlist: data });
    });
    Events.getEvent(id).then(({ data }) => {
      let inparty = false;
      data.party.forEach(e => {
        if (e._id === user._id) {
          inparty = true;
        }
      });
      this.setState({
        event: data,
        creator: data.creator._id === user._id,
        inparty
      });
    });
  }

  addfriend = id => {
    const { dispatch } = this.props;
    SocialApi.addfriend(id).then(({ data }) => {
      console.log(data);
      dispatch({
        type: "LOGIN",
        user: data
      });
    });
  };

  join() {
    const { _id } = this.state.event;

    Events.join(_id).then(({ data }) => {
      console.log(data);
      this.setState({ event: data, inparty: true });
    });
    console.log(this.state);
  }

  isfriend(user) {
    const { _id } = this.props.user;
    const friends = this.state.friendlist.map(e =>
      e.users.filter(el => el !== _id).join("")
    );
    if (friends.includes(user._id) || user._id === _id) {
      return true;
    }
    return false;
  }

  render() {
    const { event, inparty} = this.state;
    const { game, name, description, creator, party, chat } = event;
   
    return (
      <div>
        <StyledEventCard>
          <GameBigCard game={game} />
          <div className="eventform">
            <div>
              <h1>{name}</h1>
              <h2>{description}</h2>
              <p>created by : {creator ? creator.username : null}</p>

              <StyledUserList>
                {party.map((e, i) => (
                  <UserminiCard
                    user={e}
                    key={i}
                    friend={this.isfriend(e) ? true : false}
                    addfriend={this.addfriend}
                  />
                ))}
              </StyledUserList>
            </div>
            {inparty ? (
              <Chat chatid={chat} />
            ) : (
              <button
                onClick={() => this.join()}
                className="button is-success is-active"
              >
                Join!
              </button>
            )}
          </div>
        </StyledEventCard>
      </div>
    );
  }
}

export const EventPage = connect(store => ({ user: store.user }))(_EventPage);
