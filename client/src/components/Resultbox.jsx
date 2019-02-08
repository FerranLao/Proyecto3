import React from "react";
import { StyledResults } from "../lib/styledcomps/styledResults";
import { GameCard } from "./GameCard";

export const Resultbox = ({gamearray}) => {
  return (
    <StyledResults image={gamearray.map(e=>e.header_image)}>
      <div id="movie-card-list">
       {
         gamearray.map((e,i)=><GameCard index={i} key={e._id} game={e}/>)
       } 
      </div>
    </StyledResults>
  );
};
