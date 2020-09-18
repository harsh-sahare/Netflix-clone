import React, { useState } from "react";
import { urls } from "./urls";
import Axios from "axios";

export default function NetflixOrignals(attr) {
  const [trailer_src, set_trailer_src] = useState(null);
  const itmes_20 = [];
  for (let x = 0; x < 20; x++) {
    itmes_20.push(x);
  }

  function playTrailer(title, item) {
    switch (title) {
      case "Netflix Orignals":
        Axios.get(urls.tv_trailer.replace("movie_id", item["id"])).then(
          responce => {
            const results = responce.data["results"];
            console.log(results[results.length - 1]["key"]);
            set_trailer_src(
              `https://www.youtube.com/embed/${
                results[results.length - 1]["key"]
              }?rel=0&autoplay=1&modestbranding=1`
            );
          }
        );
        break;
      case "Trending":
        if (item["media_type"] == "movie") {
          Axios.get(
            urls.movie_trailer.replace("movie_id", item["id"])
          ).then(responce => {
            const results = responce.data["results"];
            console.log(results[results.length - 1]["key"]);
            set_trailer_src(
              `https://www.youtube.com/embed/${
                results[results.length - 1]["key"]
              }?rel=0&autoplay=1&modestbranding=1`
            );
          });
        } else {
          Axios.get(urls.tv_trailer.replace("movie_id", item["id"])).then(
            responce => {
              const results = responce.data["results"];
              console.log(results[results.length - 1]["key"]);
              set_trailer_src(
                `https://www.youtube.com/embed/${
                  results[results.length - 1]["key"]
                }?rel=0&autoplay=1&modestbranding=1`
              );
            }
          );
        }
        break;
      default:
        Axios.get(urls.movie_trailer.replace("movie_id", item["id"])).then(
          responce => {
            const results = responce.data["results"];
            console.log(results[results.length - 1]["key"]);
            set_trailer_src(
              `https://www.youtube.com/embed/${
                results[results.length - 1]["key"]
              }?rel=0&autoplay=1&modestbranding=1`
            );
          }
        );
    }
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
          {itmes_20.map(x => {
            return <div className="card_img background-img"></div>;
          })}
        </div>
      ) : (
        <div className="card_container">
          {attr.albums.map(item => (
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
                playTrailer(attr.title, item);
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
          ))}
        </div>
      )}
      {trailer_src != null ? (
        <div className="videoDiv">
          <iframe
            width="560"
            height="315"
            src={trailer_src}
            frameborder="0"
            allow="autoplay;encrypted-media;picture-in-picture;fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
