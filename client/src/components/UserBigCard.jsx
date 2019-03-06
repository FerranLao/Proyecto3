import React from "react";
import { StyledUserBigCard } from "../lib/styledcomps/styledUserBigCard";
import { SocialApi } from "../lib/SocialApi";

export class UserBigCard extends React.Component {
  constructor() {
    super();
    this.state = {
      SteamUser: null
    };
  }

  componentDidMount() {
    const { SteamUser } = this.props.user;
    if (SteamUser) {
      SocialApi.getSteamUser(SteamUser).then(({data})=>{
        this.setState({SteamUser:data})});
    }
  }

  render() {
    const { user } = this.props;
    const {SteamUser}=this.state
    console.log(SteamUser)
    return (
      <StyledUserBigCard>
        <div className="card">
          <div className="image">
            <img src={user.image} alt="logo" />
            <h3>{user.username}</h3>
          </div>
          <div className="info">
            <p className="desc">{SteamUser ? "Steam name: " +  SteamUser.profile.personaname:"Account not linked with Steam"}</p>
            {SteamUser ? <p>{"Owned Games: "+SteamUser.OwnedGames.length}</p>:null}
          </div>
        </div>
      </StyledUserBigCard>
    );
  }
}
