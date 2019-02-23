import React from "react";

export const Friend = ({ user }) => {
  const { image, username } = user;
  return (
    <div className="friend">
      <img src={image} alt={username} />
      <p>{username}</p>
    </div>
  );
};
