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
              <p>{event.description}</p>
              <p></p>
              <p>
                <picture>
                  <source media="(max-width: 767px)" srcSet={I202008} />
                  <source media="(min-width: 768px)" srcSet={I202008} />
                  <source media="(min-width: 1440px)" srcSet={I202008} />
                  <img alt="" src={I202008} />
                </picture>
                {/* <br />
                <span className="caption">Where is my head?</span> */}
              </p>
              {/* <p>
                Each art­icle on this web­site usu­ally weighs less than 450KB,
                which is even less than the av­er­age of pages 10 years ago. The
                point is that this art­icle con­tains in­form­a­tion, be it
                use­ful or not, and noth­ing else — to limit en­ergy waste as
                much as pos­sible.{" "}
                <span className="mark">
                  It would there­fore re­quire an act of re­spons­ib­il­ity to
                  avoid design­ing web­sites with heavy back­ground im­ages or
                  other CPU-​intensive scripts that won’t add any con­tent
                </span>
              </p> */}
              <br />
              {event.related && (
                <div className="related">
                  — Read more:
                  <ul>
                    {event.related.map((related, index) => {
                      return (
                        <li key={index}>
                          {related.target === "leave" ? (
                            <a
                              href={related.to}
                              className="compass"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {related.title}
                            </a>
                          ) : (
                            <Link className="compass" to={related.to}>
                              {related.title}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <div className="footer">
                <p>©2020 Daniel Violin Lönnesjö</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
