import React from "react";
import { connect } from "react-redux";
import { AddSteam } from "../components/AddSteam";
import { Input } from "../components/Input";
import { Events } from "../lib/Events";
import { Resultbox } from "../components/Resultbox";
import { Pagination } from "../components/Pagination";
import { Nothingfound } from "../components/Nothingfound";

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
    this.gotopage(0);
  }

  gotopage = page => {
    const { filter } = this.state;
    const { type } = this.props;

    if (type === "events") {
      Events.getpage(filter, page).then(({ data }) => {
        const { events, count } = data;
        this.setState({ events, count });
      });
    } else {
      Events.getOwnPage(filter, page).then(({ data }) => {
        const { events, count } = data;
        this.setState({ events, count });
      });
    }
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
      <React.Fragment>
        <div>
          {user.SteamUser ? null : <AddSteam />}
          <Input func={this.filter} />
          {events.length !== 0 ? (
            <React.Fragment>
              <Resultbox gamearray={events} event myevent={pathname} />
              <Pagination
                func={this.gotopage}
                pages={Math.ceil(count / 10)}
                actual={page + 1}
              />{" "}
            </React.Fragment>
          ) : (
            <Nothingfound url="https://media.giphy.com/media/NS7gPxeumewkWDOIxi/giphy.gif">
              Nothing found
            </Nothingfound>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export const EventSearch = connect(store => ({ user: store.user }))(
  _EventSearch
);
