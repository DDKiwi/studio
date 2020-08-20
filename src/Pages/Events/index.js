import React from "react";
import { Link } from "react-router-dom";

export const Events = {
  HMWBV5zy6g: {
    title: "Galleri 70",
    related: [{ href: "https://galleri70.se/", title: "test", target : "leave" }],
  },
};

export default () => {
  return (
    <>
      <h3>— Events</h3>
      <ul>
        {Object.entries(Events).map(([key, event]) => {
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
