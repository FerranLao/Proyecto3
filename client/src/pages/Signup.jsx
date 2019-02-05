import React from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        username: "",
        password: "",
        SteamId:"",
        image: ""
      }
    };
  }

  handleChange = (e, infoname) => {
    const { info } = this.state;
    info[infoname] = e.target.value;
    this.setState({ info: this.state.info });
  };

  handleImg = (e, infoname) => {
    let { info } = this.state;
    const name = e.target.value;
    let file = new FormData();
    file.set("name",name)
    file.append("photo", e.target.files[0], name);
    AuthAPI.upload(file).then(({data})=>{
      
        info.image=data.url
        this.setState({info:this.state.info})
      
    });
   
  };

  submit = () => {
    const { history, dispatch } = this.props;
    AuthAPI.signup(this.state.info).then(e => {
      dispatch({
        type: "SIGNUP",
        user: e
      });
      history.push("/");
    });
  };

  render() {
    const { username, password, SteamId } = this.state.info;
    return (
      <div className="container">
        <Input data={username} infoname="username" func={this.handleChange} />
        <Input data={SteamId} infoname="SteamId" func={this.handleChange}/>
        <Input
          data={password}
          type="password"
          infoname="password"
          func={this.handleChange}
        />
        <Input
          name="photo"
          type="file"
          infoname="image"
          func={this.handleImg}
        />
        <button
          onClick={() => {
            this.submit();
          }}
          className="button is-primary"
        >
          Signup
        </button>
      </div>
    );
  }
}
export const Signup = connect()(withRouter(SignupForm));
