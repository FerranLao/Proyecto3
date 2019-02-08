import React from "react";
import { StyledModal } from "../lib/styledcomps/styledModal";
import { Input } from "./Input";
import { AuthAPI } from "../lib/auth";
import { Hero } from "./Hero";
import { connect } from "react-redux";
class _AddSteam extends React.Component {
  constructor() {
    super();
    this.state = { SteamId: "", message: "" };
  }

  handlechange = e => {
    this.setState({ SteamId: e.target.value });
  };

  submit = () => {
    const { SteamId } = this.state;
    const { dispatch } = this.props;
    AuthAPI.AddSteamId(SteamId).then(({ data }) => {
      data.message
        ? this.setState({ message: data.message })
        : dispatch({
            type: "UPDATE",
            user: data
          });
    });
  };

  render() {
    const { SteamId, message } = this.state;
    return (
      <StyledModal>
        <a className="buttonmodal button is-primary" href="#openModal">
          Link your steam account
        </a>
        <div id="openModal" className="modalbg">
          <div className="dialog">
            <a href="#close" title="Close" className="close">
              X
            </a>
            <Input
              data={SteamId}
              infoname="Insert your SteamID:"
              func={this.handlechange}
            />
            <button onClick={() => this.submit()} className="button is-primary">
              Submit
            </button>
            {message ? (
              <Hero warning="Error!" type="danger">
                {message}
              </Hero>
            ) : null}
            <h2>Where can I find the id?:</h2>
            <ol>
              <li>Go to your steam account.</li>
              <li>Go to profile.</li>
              <li>Your account Id will apear in the url</li>
              <img
                src="https://res.cloudinary.com/dohakifo0/image/upload/v1549627303/lab-profile-app/nynnt.png"
                alt="Steam example"
              />
            </ol>
          </div>
        </div>
      </StyledModal>
    );
  }
}

export const AddSteam = connect(store => ({ user: store.user }))(_AddSteam);
