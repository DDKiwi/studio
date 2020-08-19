import React from "react";
import { Link } from "react-router-dom";
import Page from "../../Components/Page";

import I202008 from "../../Images/202008.jpg";

export default () => {
  return (
    <div id="log">
      <h1><Link to="/" className="compass">Daniel Violin Lönnesjö</Link></h1>
      {/* <img className="img--cut" src={I202008} alt="" width="400" /> */}
    </div>
  );
};
