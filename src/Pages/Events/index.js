import React from "react";
import { Link } from "react-router-dom";

import { filter } from "../../utils"

export const Events = {
  HMWBV5zy6g: {
    title: "Galleri 70",
    description: "29 August 2020 – 20 September 2020",
    active : true,
    related: [
      {
        to: "https://galleri70.se/",
        title: "https://galleri70.se",
        target: "leave",
      },
    ],
  },
};

export default () => {

  const _events = filter(Events, (_, event) => event.active === true);
  return (
    <>
      <h3>— Events</h3>
      <ul>
        {
        Object.entries(_events).map(([key, event]) => {
          return (
            <li key={key}>
              <Link className="compass" to={`/events/${key}`}>
                {event.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
