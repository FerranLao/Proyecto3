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
      inparty: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { user } = this.props;

    Events.getEvent(id).then(({ data }) => {
      let inparty = false;
      data.party.forEach(e => {
        if (e._id === user._id) {
          inparty = true;
        }
      });
      console.log(data.party);
      this.setState({
        event: data,
        creator: data.creator._id === user._id,
        inparty
      });
    });
  }

  addfriend =(id) =>{
    const { dispatch } = this.props;
    SocialApi.addfriend(id).then(({ data }) => {
      dispatch({
        type: "LOGIN",
        user: data
      });
    });
  }

  join() {
    const { _id } = this.state.event;

    Events.join(_id).then(({ data }) => {
      console.log(data);
      this.setState({ event: data, inparty: true });
    });
    console.log(this.state);
  }

  render() {
    const { event, inparty } = this.state;
    const { game, name, description, creator, party, chat } = event;
    const { user } = this.props;

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
                    friend={user.friends.includes(e._id) ? true : false}
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
