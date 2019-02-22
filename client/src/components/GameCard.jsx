import React from "react";
import { Link } from "react-router-dom";

export const GameCard = ({ game, index = 0, create = false,myevent }) => {
  const { genres, name } = game;
  const genresnames = genres ? genres.map(e => e.description) : undefined;
  return (
    <div className={"movie-card index" + index}>
      <div className="movie-card__overlay" />
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h1 className="movie-card__title">{name}</h1>
          {genresnames ? (
            <h4 className="movie-card__info">{genresnames.join(",")}</h4>
          ) : null}
        </div>
        {genresnames ? (
          create ? null : (
            <Link
              to={`/newevent/${game._id}`}
              className="btn btn-outline movie-card__Link"
            >
              Create a party!
            </Link>
          )
        ) : (
          <React.Fragment>
            <p>{game.description}</p>
          <Link
            to={`/events/${game._id}`}
            className="btn btn-outline movie-card__Link"
          >{
            myevent ==="/myevents" ? "Check" : "Join?"
          }
          </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
