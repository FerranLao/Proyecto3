import React from "react";

export const Usercard = ({ user }) => {
  const { username, image } = user;
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt="miniphoto" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
