import React from "react";
import Events from "../Events";

export default () => {
  return (
    <div id="home">
      <div className="container">
        <h1>Daniel Violin Lönnesjö</h1>
        <br />
        <h2>Exploration and construction of art.</h2> 
        <h2>—{" "}Painting, drawing and sculpture.</h2>
        <br />
        <Events />
        <br />
        <br />
        <p lang="en-gb">
          I'm in Haverdal
          <br />—{" "}
          <a href="mailto:contact@dvlstudio.com">hello(at)lonnesjo(dot)com</a>
        </p>
      </div>
    </div>
  );
};
