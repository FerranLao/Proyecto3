import React from "react";

export const GameCard = () => {
  return (
    <div class="movie-card" data-movie="Blade Runner">
      <div class="movie-card__overlay" />
      <div class="movie-card__share">
        <button class="movie-card__icon">
          <i class="material-icons">&#xe87d</i>
        </button>
        <button class="movie-card__icon">
          <i class="material-icons">&#xe253</i>
        </button>
        <button class="movie-card__icon">
          <i class="material-icons">&#xe80d</i>
        </button>
      </div>
      <div class="movie-card__content">
        <div class="movie-card__header">
          <h1 class="movie-card__title">Blade Runner</h1>
          <h4 class="movie-card__info">(1982) Sci-Fi, Thriller</h4>
        </div>
        <p class="movie-card__desc">
          A blade runner must pursue and try to terminate four replicants who
          stole a ship in space and have returned to Earth to find their
          creator.
        </p>
        <button class="btn btn-outline movie-card__button" type="button">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};
