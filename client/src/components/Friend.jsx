import React from "react";

export const Friend = ({ user,index,select }) => {
  const { image, username } = user;
  return (
    <React.Fragment>
      {user[0] ? (
        <div className="friend" onClick={()=>select(index)}>
          <img src={image} alt={username} />
          <p>{username}</p>
        </div>
      ) : null}
    </React.Fragment>
  );
};
