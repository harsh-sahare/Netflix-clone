import React, { useContext } from "react";
import { urls } from "./urls";

import { Context } from "./datalayer";

export default function NetflixOrignals(attr) {
  const [state, dispatch] = useContext(Context);

  const itmes_container = [];
  for (let x = 0; x < 9; x++) {
    itmes_container.push(x);
  }

  return (
    <div className="netflix_container">
      <div
        className={`container_title ${attr.title
          .toLowerCase()
          .replace(" ", "_")}`}
      >
        {attr.title}
      </div>
      {attr.albums == "" ? (
        <div className="card_container ">
          {itmes_container.map((x) => {
            return <div className="card_img background-img"></div>;
          })}
        </div>
      ) : (
        <div className="card_container">
          {attr.albums.map((item) => {
            //let item = attr.albums[x];
            return (
              <div
                className={`card_img ${
                  attr.title == "Netflix Orignals" ? "netflix-orignal" : ""
                }`}
                key={
                  attr.title === "Netflix Orignals"
                    ? `netflix_orignals_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Trending Now"
                    ? `treanding_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Top Rated"
                    ? `top_rated_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Action Moives"
                    ? `action_movies_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Comedy Moives"
                    ? `comedy_movies_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Horrer Moives"
                    ? `horrer_movies_div_${attr.albums.indexOf(item)}`
                    : attr.title === "Romance Moives"
                    ? `romance_movies_div_${attr.albums.indexOf(item)}`
                    : `documentaries${attr.albums.indexOf(item)}`
                }
                onClick={() => {
                  dispatch({ type: "SET_CURRENT_MOVIE", value: item });
                  dispatch({
                    type: "SET_CURRENT_MOVIE_TITLE",
                    value: attr.title,
                  });
                }}
              >
                <img
                  alt={item["name"]}
                  src={`${urls.base_imge_path}${item["poster_path"]}`}
                  key={
                    attr.title === "Netflix Orignals"
                      ? `netflix_orignals_${attr.albums.indexOf(item)}`
                      : attr.title === "Trending Now"
                      ? `treanding_${attr.albums.indexOf(item)}`
                      : attr.title === "Top Rated"
                      ? `top_rated_${attr.albums.indexOf(item)}`
                      : attr.title === "Action Moives"
                      ? `action_movies_${attr.albums.indexOf(item)}`
                      : attr.title === "Comedy Moives"
                      ? `comedy_movies_${attr.albums.indexOf(item)}`
                      : attr.title === "Horrer Moives"
                      ? `horrer_movies_${attr.albums.indexOf(item)}`
                      : attr.title === "Romance Moives"
                      ? `romance_movies_${attr.albums.indexOf(item)}`
                      : `documentaries${attr.albums.indexOf(item)}`
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
