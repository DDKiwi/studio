import React from "react";
import Page from "../../Components/Page";

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
          <a className="compass" href="/events/tangenze-botaniche">
            29/8 - 20/9 Galleri 70
          </a>
        </li>
      </ul>
      <br />
      <br />
      {/* <p lang="en-gb">
        Norma is a trade­mark of Libre S.C. <br />
        VAT IT09733080015 <br />
        We're in Torino, Via Beau­mont 19.
      </p>
      <p lang="en-gb">
        — <a href="mailto:contact@dvlstudio.com">hello(at)dvlstudio(dot)rocks</a>
      </p> */}
    </Page>
  );
};
