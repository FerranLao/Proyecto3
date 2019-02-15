import React from "react";
import { Games } from "../lib/Games";

import { StyledEventCard } from "../lib/styledcomps/styledEventCard";

import { EventForm } from "../components/EventForm";
import { GameBigCard } from "../components/GameBigCard";

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
    const { game } = this.state;
    const { id } = this.props.match.params;
    return (
      <StyledEventCard>
        <GameBigCard game={game} />
        <EventForm gameid={id} />
      </StyledEventCard>
    );
  }
}
