import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Games } from "../lib/Games";
import { Input } from "../components/Input";
import { Resultbox } from "../components/Resultbox";
import _ from "lodash";
import { LoadingScreen } from "../components/LoadingScreen";

class _NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      allgames: [],
      gamepages: [],
      page: 0,
      filter: ""
    };
  }
  componentDidMount() {
    Games.getall().then(({ data }) => {
      this.setState({
        allgames: data.games,
        filtergames: data.games,
        gamepages: _.chunk(data.games, 10)
      });
    });
  }
  filter = ({ target }) => {
    console.log("hola");
    const { allgames } = this.state;
    const filtered = allgames.filter(e =>
      e.name.toUpperCase().includes(target.value.toUpperCase())
    );
    this.setState({ filter: target.value, gamepages: _.chunk(filtered, 10) });
  };
  render() {
    const { user } = this.props;
    const { gamepages, page } = this.state;
    return (
      <div>
        {user.SteamUser ? null : <AddSteam />}
        <Input func={this.filter} />
        {gamepages[page] ? (
          <Resultbox gamearray={gamepages[page]} />
        ) : (
          <LoadingScreen />
        )}
      </div>
    );
  }
}

export const NewEvent = connect(store => ({ user: store.user }))(_NewEvent);
