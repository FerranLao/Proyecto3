import React from "react";
import { Input } from "../components/Input";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


export class Loginform extends React.Component {
  constructor() {
    super();
    this.state = { info: { username: "", password: "" }, error: "" };
  }

  handleChange = (e, infoname) => {
    const { info } = this.state;
    info[infoname] = e.target.value;
    this.setState({ info: this.state.info });
  };

  submit = () => {
    const { history, dispatch } = this.props;
    const { username, password } = this.state.info;
    AuthAPI.login(username, password).then(({ data }) => {
      if (data.message) {
        this.setState({ error: data.message });
        return;
      }

      dispatch({
        type: "LOGIN",
        user: data
      });
      history.push("/");
    });
  };

  render() {
    const { username, password } = this.state.info;
    const { error } = this.state;
    return (
      <div className="logincontainer">
      <div className="inputscontainer">
        <Input data={username} infoname="username" func={this.handleChange} />
        <Input
          data={password}
          type="password"
          infoname="password"
          func={this.handleChange}
        />
     
        <button onClick={() => this.submit()} className="button is-primary ">
          Login
        </button>
       
       
        {error ? (
          <section className="hero is-warning">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Error</h1>
                <h2 className="subtitle">{error}</h2>
              </div>
            </div>
          </section>
        ) : null}
        </div>
      </div>
    );
  }
}

export const Login = connect(store=>({user:store.user}))(withRouter(Loginform));
