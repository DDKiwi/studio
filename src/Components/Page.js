import React from "react";

export default (props) => {
  const { title, children } = props;
  return (
    <div className="container">
      {title && <h1>{title}</h1>}
      {children && children}
    </div>
  );
};
