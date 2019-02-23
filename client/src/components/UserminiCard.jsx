import React from "react";
import { StyledUserMiniCard } from "../lib/styledcomps/UserMinicard";


export const UserminiCard = ({ user, friend, addfriend }) => {
  console.log(friend);
  const { username, image, _id } = user;
  return (
    <StyledUserMiniCard>
      <li className="friend flip">
        <img src={image} alt={username} />
        <div className="name">{username}</div>
        {!friend ? (
          <p
            onClick={() => {
              addfriend(_id);
            }}
            className="friendbutton"
          >
            <i className="fas fa-plus" />
          </p>
        ) : null}
      </li>
    </StyledUserMiniCard>
  );
};
