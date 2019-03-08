import React from "react";
import { Chat } from "../components/Chat";
import { Events } from "../lib/Events";
import { StyledEventCard } from "../lib/styledcomps/styledEventCard";
import { GameBigCard } from "../components/GameBigCard";
import { connect } from "react-redux";
import { UserminiCard } from "../components/UserminiCard";
import { StyledUserList } from "../lib/styledcomps/styledUserList";
import { SocialApi } from "../lib/SocialApi";
import { InviteFriends } from "../components/InviteFriends";
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
  exitparty(){
    const {_id}=this.state.event
    const {history}=this.props
    Events.leave(_id).then(e=>{
      history.push("/")
    })
  }

  render() {
    const { event, inparty } = this.state;
    const { game, name, description, creator, party, chat,_id,size } = event;
    
    let date = event.date ? event.date.split("T1") : undefined;
    date = date
      ? `${date[0]} , ${date[1]
          .split(".")[0]
          .substring(0, date[1].split(".")[0].length - 3)}`
      : null;
    return (
      <div>
        <StyledEventCard>
          <GameBigCard game={game} />
          <div className="eventform">
            <div className="eventdata">
              <div className="eventinfo">
                <h1>{name}</h1>
                <h2>{description}</h2>
                <p>created by : {creator ? creator.username : null}</p>
                <p>{date}</p>
                <p>{`members :${party.length}/${size}`}</p>
              </div>
              <div>
             
            {inparty ? <InviteFriends event={_id}/>:null}
            <div className="exit">
            <button onClick={()=>{this.exitparty()}} className="button is-danger ">Leave the party</button>
            </div>
           
              </div>
              <div className="eventbox">
                <div className="userlist">
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
                <div className="eventchat">
                  {inparty ? (
                    <Chat chatid={chat} members={party} />
                  ) : (
                    <button
                      onClick={() => this.join()}
                      className="button is-success is-active"
                    >
                      Join!
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </StyledEventCard>
      </div>
    );
  }
}

export const EventPage = connect(store => ({ user: store.user }))(_EventPage);
