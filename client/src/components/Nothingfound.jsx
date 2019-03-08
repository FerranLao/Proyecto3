import React from "react";

export const Nothingfound = ({ url, children }) => {
  return (
    <div className="alone">
      <img src={url} alt="alone" />
      <h2>{children}</h2>
    </div>
  );
};
