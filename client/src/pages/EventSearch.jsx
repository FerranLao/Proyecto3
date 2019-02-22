import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Input } from "../components/Input";
import { Events } from "../lib/Events";
import { Resultbox } from "../components/Resultbox";
import { Pagination } from "../components/Pagination";

class _EventSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      page: 0,
      filter: "",
      count: 0
    };
  }
  componentDidMount() {
    const { page, filter } = this.state;
    const { pathname } = this.props.location;
    if (pathname === "/newevent") {
      console.log("newevent ")
      Events.getpage(filter, page).then(({ data }) => {
        const { games, count } = data;
        this.setState({ games, count });
      });
    } else {
      console.log("npe")
      Events.getOwnPage(filter, page).then(({ data }) => {
        const { games, count } = data;
        console.log(data)
        this.setState({ games, count });
      });
    }
  }

  gotopage = page => {
    const { filter } = this.state;
    Events.getpage(filter, page).then(({ data }) => {
      const { events, count } = data;
      this.setState({ events, count, page });
    });
  };

  filter = ({ target }) => {
    Events.getpage(target.value, 0).then(({ data }) => {
      const { events, count } = data;
      this.setState({ events, count, page: 0 });
    });
  };

  render() {
    const { user } = this.props;
    const { events, page, count } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        {user.SteamUser ? null : <AddSteam />}
        <Input func={this.filter} />
        <Resultbox gamearray={events} event myevent={pathname} />
        <Pagination
          func={this.gotopage}
          pages={Math.ceil(count / 10)}
          actual={page + 1}
        />
      </div>
    );
  }
}
export const EventSearch = connect(store => ({ user: store.user }))(
  _EventSearch
);
