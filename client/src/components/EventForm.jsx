import React from "react";
import { Input } from "./Input";
import { Events } from "../lib/Events";
import { Redirect } from 'react-router'

export class EventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      info: { name: "", description: "", size: 1, game:"", private: false },
      created:null
    };
  }
  componentDidMount() {
    const { info } = this.state;
    info.game = this.props.gameid;
    this.setState(info);
  }
  handleCheckbox = () => {
    const { info } = this.state;
    info.private = !this.state.info.private;
    this.setState({ info });
  };
  handleChange = (e, infoname) => {
    const { info } = this.state;
    info[infoname] = e.target.value;
    this.setState({ info: this.state.info });
  };

  submit = () => {
    const { info } = this.state;
    Events.newEvent(info).then(({data})=>{
        data._id ? this.setState({created:data._id}):console.log(data)
    });
  };

  render() {
    const { name, description, size } = this.state.info;
    const {created}=this.state
    return (
      <React.Fragment>
        <h2>Create a party</h2>
        <Input data={name} func={this.handleChange} infoname="name" />
        <label>Party description</label>
        <textarea
          className="textarea"
          value={description}
          onChange={e => this.handleChange(e, "description")}
        />
        <Input
          data={size}
          type="number"
          infoname="size"
          func={this.handleChange}
        />
        <div className="slideThree">
          <input
            onClick={() => {
              this.handleCheckbox();
            }}
            type="checkbox"
            value="None"
            id="slideThree"
            name="check"
          />
          <label htmlFor="slideThree" />
        </div>
        <button
          className="button is-large is-fullwidth is-primary"
          onClick={() => {
            this.submit();
          }}
        >
          Create the party
        </button>
        {
            created ?  <Redirect to={`/events/${created}`}></Redirect>:null
        }
       
      </React.Fragment>
    );
  }
}
