import React from "react";
import { Games } from "../lib/Games";

import { StyledEventCard } from "../lib/styledcomps/styledEventCard";

import { EventForm } from "../components/EventForm";

export class NewEventgame extends React.Component {
  constructor() {
    super();
    this.state = { game: { genres: [], categories: [] } };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Games.getbyID(id).then(({ data }) => this.setState({ game: data }));
  }

  render() {
    const {
      header_image,
      name,
      developers,
      short_description,
      genres,
      categories,
      website
    } = this.state.game;
    const { id } = this.props.match.params;
    return (
      <StyledEventCard>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={header_image} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">developed by {developers}</p>
                <p>genres: {genres.map(e => e.description).join(", ")} </p>
                <p>tags: {categories.map(e => e.description).join(", ")}</p>
              </div>
            </div>
            <div className="content">
              <p>{short_description}</p>
              <p>
                More info at: <a href={website}>{name}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="eventform">
          <EventForm gameid={id} />
        </div>
      </StyledEventCard>
    );
  }
}
