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

const App = connect(store => ({ user: store.user }))(_App);
export default App;
