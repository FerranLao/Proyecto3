import React from "react";

export const Messages = ({ data, me, member }) => {
  return (
    <React.Fragment>
      
      <div className={me ? "me" : "notme"}>
        <div className="infochat">
          <img className="chatimg" src={member.image} alt={member.username} />
          <p className="username">{member.username}: </p>
        </div>
        <p className="message">{data.text}</p>
      </div>
    </React.Fragment>
  );
};
