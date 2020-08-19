import React from "react";
import Page from "../../Components/Page";
import Events from "../Events";

export default () => {
  return (
    <div id="home">
      <div className="container">
        <h1>Daniel Violin Lönnesjö</h1>
        <br />
        <h2>Artist, painting and sculpture</h2>
        <br />
        <Events />
        <br />
        <br />
        <p>©2020</p>
        {/* <p lang="en-gb">
        —{" "}
        <a href="mailto:contact@dvlstudio.com">hello(at)lonnesjo(dot)com</a>
      </p> */}
      </div>
    </div>
  );
};
