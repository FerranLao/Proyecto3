import React from "react";

export const GameBigCard = ({ game }) => {
  const {
    header_image,
    name,
    developers,
    short_description,
    genres,
    categories,
    website
  } = game;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={header_image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-3 has-text-white-ter">{name}</p>
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
  );
};
