import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav";
import "bulma/css/bulma.css";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { NewEvent } from "./pages/NewEvent";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NewEventgame } from "./pages/NewEventgame";
import { EventPage } from "./pages/EventPage";
import { EventSearch } from "./pages/EventSearch";

class _App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Nav />
        <div className="content">
          {user ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newevent" component={NewEvent} />
              <Route exact path="/newevent/:id" component={NewEventgame} />
              <Route exact path="/events" component={(props) => <EventSearch key="A" type="events" {...props}/>} />
              <Route exact path="/myevents" component={(props) => <EventSearch key="B" type="my" {...props}/>} />
              <Route exact path="/events/:id" component={EventPage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

const App = withRouter(connect(store => ({ user: store.user }))(_App));
export default App;
