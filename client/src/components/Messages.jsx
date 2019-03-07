import React from "react";

export const Messages = ({ data, me, member }) => {
  return (
    <React.Fragment>
      <li className={me?"you":"other"}>
        <div className="user" href="#">
          <img
            alt=""
            src={member.image}
          />
          <p className="username">{member.username}</p>
        </div>
        <div className="message">
          <p>
            {data.text}
          </p>
        </div>
      </li>
    </React.Fragment>
  );
};

