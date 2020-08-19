import React from "react";
import { Link, useParams } from "react-router-dom";
import { Events } from "./";

//dynaismk senare
import I202008 from "../../Images/202008.jpg";

export default () => {
  const { id } = useParams();
  const event = Events[id];
  return (
    <div id="log">
      <h1>
        <Link className="compass" to="/">
          Daniel Violin Lönnesjö
        </Link>
      </h1>
      <br />
      {!event ? (
        <h2>Can't find event :(</h2>
      ) : (
        <>
          <h2>— Events</h2>
          <div id="article">
            <h3>{event.title}</h3>
            <div className="container">
              {/* <p lang="en-gb">
                Ter­rit­ori­al branch of the Con­fed­er­a­tion of Itali­an
                Co­oper­at­ives (Con­f­co­oper­at­ive), a na­tion­al
                as­so­ci­ation rep­res­ent­ing, as­sist­ing, pro­tect­ing and
                re­view­ing the co­oper­at­ive move­ment.
              </p> */}
              <p lang="en-gb">
                <picture>
                  <source media="(max-width: 767px)" srcSet={I202008} />
                  <source media="(min-width: 768px)" srcSet={I202008} />
                  <source media="(min-width: 1440px)" srcSet={I202008} />
                  <img
                    alt="Norma graphic design torino coop website 2"
                    src={I202008}
                  />
                </picture>
              </p>
              <br />
              <div class="footer">
                <p>©2020</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
