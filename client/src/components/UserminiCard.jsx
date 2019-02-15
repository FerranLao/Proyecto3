import React from "react";

export const UserminiCard = ({ user }) => {
  const {username}=user
  return (
   <h1>{username}</h1>
  );
};
