import React from "react";
import { StyledResults } from "../lib/styledcomps/styledResults";
import { GameCard } from "./GameCard";

export const Resultbox = ({gamearray}) => {
  return (
    <StyledResults>
      <div id="movie-card-list">
        <GameCard />
      </div>
    </StyledResults>
  );
};
