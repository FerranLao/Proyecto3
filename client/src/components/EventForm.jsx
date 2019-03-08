import React from "react";
import { Input } from "./Input";
import { Events } from "../lib/Events";
import { Redirect } from "react-router";

export class EventForm extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "",
        description: "",
        size: 1,
        game: "",
        private: false,
        date: "",
        time: ""
      },
      created: null,
      hour: null,
      unsetdate: null
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

  handledate = (e, infoname) => {
    const { hour, unsetdate, info } = this.state;
    if (infoname === "Choose a date") {
      const time = new Date(e.target.value);
      this.setState({ unsetdate: time });
      if (hour) {
        time.setHours(hour);
        info.date = time;
        info.time = time.getTime();
        this.setState({ unsetdate: time, info });
      }
    } else {
      console.log(e.target.value)
      if (unsetdate) {
        unsetdate.setHours(e.target.value);
        info.date = unsetdate;
        info.time = unsetdate.getTime();
        this.setState({ unsetdate, info, hour: e.target.value });
      } else {
        this.setState({ hour: e.target.value });
      }
    }
    console.log(this.state);
  };

  submit = () => {
    const { info } = this.state;
    Events.newEvent(info).then(({ data }) => {
      data._id ? this.setState({ created: data._id }) : console.log(data);
    });
  };

  render() {
    const { name, description, size } = this.state.info;
    const { created } = this.state;
    const Arr = new Array(24).fill("")
    return (
      <div className="eventform">
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
        <div className="time">
          <div>
            <Input
              type="date"
              func={this.handledate}
              infoname="Choose a date"
            />
          </div>
          <div className="selecthour">
         
            <div className="field">
              <div className="control">
                <div className="select is-primary">
                <label >hour: </label>
                  <select onChange={(e)=>this.handledate(e)}>
                    {Arr.map((e,i)=>
                      <option key={i} value={i}>{i}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
        </div>

        <button
          className="button is-large is-fullwidth is-primary"
          onClick={() => {
            this.submit();
          }}
        >
          Create the party
        </button>
        {created ? <Redirect to={`/events/${created}`} /> : null}
      </div>
    );
  }
}
