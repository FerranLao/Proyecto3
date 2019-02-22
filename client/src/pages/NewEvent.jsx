import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Games } from "../lib/Games";
import { Input } from "../components/Input";
import { Resultbox } from "../components/Resultbox";
//import _ from "lodash";
import { LoadingScreen } from "../components/LoadingScreen";
import { Pagination } from "../components/Pagination";

class _NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
      page: 0,
      filter: "",
      count: 0
    };
  }
  componentDidMount() {

    
    const { page, filter } = this.state;
    Games.getpage(filter, page).then(({ data }) => {
      const { games, count } = data;
      this.setState({ games, count });
    });
  }
  filter = ({ target }) => {
    Games.getpage(target.value, 0).then(({ data }) => {
      const { games, count } = data;
      this.setState({ games, count, page: 0 });
    });
  };
  gotopage = page => {
    const { filter } = this.state;
    Games.getpage(filter, page).then(({ data }) => {
      const { games, count } = data;
      this.setState({ games, count, page });
    });
  };
  render() {
    const { user } = this.props;
    const { games, page, count } = this.state;
    return (
      <div>
        {user.SteamUser ? null : <AddSteam />}
        <Input func={this.filter} />
        {games ? (
          <React.Fragment>
            <Resultbox gamearray={games} />
            <Pagination
              func={this.gotopage}
              pages={Math.ceil(count / 10)}
              actual={page + 1}
            />
          </React.Fragment>
        ) : (
          <LoadingScreen />
        )}
      </div>
    );
  }
}

export const NewEvent = connect(store => ({ user: store.user }))(_NewEvent);
