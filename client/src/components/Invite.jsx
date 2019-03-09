import React from "react";
                        

export const Invite = ({ invite,accept,reject }) => {
  console.log(invite);
  const { from, type,_id } = invite;
  return (
    <div className="notification-list">
      <div className="notification-list__image">
        <img src={from.image} alt={from.username} />
      </div>
      <div className="notification-list__info">
        <h2>{from.username}</h2>
        <span className="hour">{type ==="Friend"? "want to be your friend":"Invited you to a party"}</span>
        <span className="date" />

        <div className="buttons">
          <div className="accept" onClick={()=>accept(_id,invite.for)}>
            <i className="fas fa-check" />
          </div>
          <div className="reject" onClick={()=>reject(_id)}>
            <i className="fas fa-ban reject" />
          </div>
        </div>
      </div>
    </div>
  );
};
