import React from "react";

export const Hero = ({ children, type ,warning}) => {
  return (
    <section className={"hero is-"+type}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{warning}</h1>
          <h2 className="subtitle">{children}</h2>
        </div>
      </div>
    </section>
  );
};
