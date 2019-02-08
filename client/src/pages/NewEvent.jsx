import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Games } from "../lib/Games";
import { Input } from "../components/Input";
import { Resultbox } from "../components/Resultbox";

class _NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      allgames: [],
      filtergames: [],
      filter: ""
    };
  }
  componentDidMount() {
    Games.getall().then(({ data }) => {
      this.setState({ allgames: data.games, filtergames: data.games });
    });
  }
  filter = ({ target }) => {
    console.log("hola");
    const { allgames } = this.state;
    const filtered = allgames.filter(e =>
      e.name.toUpperCase().includes(target.value.toUpperCase())
    );
    this.setState({ filter: target.value, filtergames: filtered });
  };
  render() {
    const { user } = this.props;
    const { filtergames } = this.state;
    return (
      <div>
        {user.SteamUser ? null : <AddSteam />}
        <Input func={this.filter} />
        <Resultbox></Resultbox>
      </div>
    );
  }
}

export const NewEvent = connect(store => ({ user: store.user }))(_NewEvent);
