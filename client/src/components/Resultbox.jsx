import React from "react";
import { StyledResults } from "../lib/styledcomps/styledResults";
import { GameCard } from "./GameCard";


export const Resultbox = ({gamearray,create}) => {
  return (
    <React.Fragment>
    <StyledResults image={gamearray.map(e=>e.header_image)}>
      <div id="movie-card-list">
       {
         gamearray.map((e,i)=><GameCard index={i} key={e._id} game={e} create={create?true:false}/>)
       } 
      </div>
    </StyledResults> 
    </React.Fragment>
   
  );
};
