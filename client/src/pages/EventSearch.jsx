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
    Events.getpage(filter, page).then(({ data }) =>
      this.setState({ events: data.events, count: data.count })
    );
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
    console.log(events);
    return (
      <div>
        {user.SteamUser ? null : <AddSteam />}
        <Input func={this.filter} />
        <Resultbox gamearray={events} event />
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
