import React from "react";

const bgColor = [
  "#ffc",
  "#ddd",
  "#f6d9d5",
  "#15acee",
  "#ffaa94",
  "#16ba6f",
  "#f37735",
  "#7c828e",
  "#fffdc9",
  "#f9717f",
];

export default (props) => {
  const { title, children } = props;
  var background = "transparent";// bgColor[Math.floor(Math.random() * bgColor.length)];
  return (
    <div className="container" style={{ background: background }}>
      {title && <h1>{title}</h1>}
      {children && children}
    </div>
  );
};
