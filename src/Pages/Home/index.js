import React from "react";
import Page from "../../Components/Page";

const events = [{id: "23TplPdS", name : "Galleri 70"}];

export default () => {
  return (
    <Page>
      <h1>Daniel Violin Lönnesjö</h1>
      <br />
      <h2>Artist, painting and sculpture</h2>
      <br />
      <h3>— Events</h3>
      <ul>
        <li>
          <a className="compass" href="/">
            Galleri 70
          </a>
        </li>
      </ul>
      <br />
      <br />
      <p>©2020</p>
      {/* <p lang="en-gb">
        —{" "}
        <a href="mailto:contact@dvlstudio.com">hello(at)lonnesjo(dot)com</a>
      </p> */}
    </Page>
  );
};
