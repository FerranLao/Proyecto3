import React from "react";

export const GameCard = ({game,index}) => {
  const {genres,name}=game
  const genresnames=genres.map(e=>e.description)
  return (
    <div className={"movie-card index"+index} data-movie="Blade Runner">
      <div className="movie-card__overlay" />
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h1 className="movie-card__title">{name}</h1>
          <h4 className="movie-card__info">{genresnames.join(",")}</h4>
        </div>
        <button className="btn btn-outline movie-card__button" type="button">
          Create a party!
        </button>
      </div>
    </div>
  );
};
