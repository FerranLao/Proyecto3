import React from "react";
import { Link } from "react-router-dom";

export const GameCard = ({ game, index = 0, create = false }) => {
  const { genres, name } = game;
  console.log(game);
  const genresnames = genres.map(e => e.description);
  return (
    <div className={"movie-card index" + index}>
      <div className="movie-card__overlay" />
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h1 className="movie-card__title">{name}</h1>
          <h4 className="movie-card__info">{genresnames.join(",")}</h4>
        </div>
        {create ? null : (
          <Link
            to={`/newevent/${game._id}`}
            className="btn btn-outline movie-card__Link"
          >
            Create a party!
          </Link>
        )}
      </div>
    </div>
  );
};
