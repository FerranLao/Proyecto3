import React from "react";

export const UserminiCard = ({ user }) => {
  const {username,image}=user
  return (
   
    <li className='friend'>
      <img src={image} alt={username} />
      <div className='name'>
        {username}
      </div>
    </li>
  
  );
};
