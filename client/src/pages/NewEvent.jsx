import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Games } from "../lib/Games";
import { Input } from "../components/Input";
import { Resultbox } from "../components/Resultbox";
import { LoadingScreen } from "../components/LoadingScreen";
import { Pagination } from "../components/Pagination";
import { Nothingfound } from "../components/Nothingfound";

class _NewEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
      page: 0,
      filter: "",
      count: 0,
      mygames: false
    };
  }
  componentDidMount() {
    this.gotopage(0);
  }
  filter = ({ target }) => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ filter: target.value }));
    }).then(e => this.gotopage(0));
  };

  owngames = () => {
    new Promise((resolve, reject) => {
      resolve(this.setState({ mygames: !this.state.mygames }));
    }).then(e => this.gotopage(0));
  };
  gotopage = page => {
    const { filter, mygames } = this.state;
    const { SteamUser } = this.props.user;
    if (mygames) {
      Games.getpage(filter, page, SteamUser).then(({ data }) => {
        const { games, count } = data;
        this.setState({ games, count, page });
      });
    } else {
      Games.getpage(filter, page).then(({ data }) => {
        const { games, count } = data;
        this.setState({ games, count, page });
      });
    }
  };
  render() {
    const { user } = this.props;
    const { games, page, count } = this.state;
    console.log(user);
    return (
      <div>
        {user.SteamUser ? (
          <label className="checkbox">
            <input type="checkbox" onClick={() => this.owngames()} />
            See only my games
          </label>
        ) : (
          <AddSteam />
        )}
        <div className="container">
        <Input func={this.filter} />
        </div>
        {games ? (
          <React.Fragment>
            {games.length!==0?<Resultbox gamearray={games} />:<Nothingfound url="https://media.giphy.com/media/NS7gPxeumewkWDOIxi/giphy.gif">Nothing found</Nothingfound>}
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
