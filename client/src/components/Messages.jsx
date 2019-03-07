import React from "react";

export const Messages = ({ data, me, member }) => {
  return (
    <React.Fragment>
      <li className={me?"you":"other"}>
        <a className="user" onClick={e=>e.preventDefault()}href="./">
          <img
            alt=""
            src={member.image}
          />
          <p className="username">{member.username}</p>
        </a>
        <div className="message">
          <p>
            {data.text}
          </p>
        </div>
      </li>
    </React.Fragment>
  );
};

