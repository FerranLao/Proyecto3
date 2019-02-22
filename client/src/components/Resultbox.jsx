import React from "react";
import { StyledResults } from "../lib/styledcomps/styledResults";
import { GameCard } from "./GameCard";

export const Resultbox = ({ gamearray, create, event ,join }) => {

  return (
    <React.Fragment>
      <StyledResults 
        image={gamearray.map(e => {
          if(event){return e.game.header_image}
          return e.header_image;
        })}
      >
        <div className="scroll scrollbar" id="movie-card-list">
          {gamearray.map((e, i) => (
            <GameCard
              index={i}
              key={e._id}
              game={e}
              create={create ? true : false}
              join={join?true:false}
            />
          ))}
        </div>
      </StyledResults>
    </React.Fragment>
  );
};
