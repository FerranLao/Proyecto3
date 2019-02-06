import React from "react";
import { StyledModal } from "../lib/styledcomps/styledModal";
import { Input } from "./Input";
import { AuthAPI } from "../lib/auth";

export class AddSteam extends React.Component {
  constructor() {
    super();
    this.state = { SteamId: "" };
  }

  handlechange = e => {
    this.setState({ SteamId: e.target.value });
  };

  submit = () => {
      const {SteamId}=this.state;
      AuthAPI.AddSteamId(SteamId)
  }

  render() {
    const { SteamId } = this.state;
    return (
      <StyledModal>
        <a className="buttonmodal" href="#openModal">
          Link your steam account
        </a>

        <div id="openModal" className="modalbg">
          <div className="dialog">
            <a href="#close" title="Close" className="close">
              X
            </a>
            <Input data={SteamId} infoname="Insert your SteamID:" func={this.handlechange} />
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </StyledModal>
    );
  }
}

