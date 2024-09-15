import React, { useContext, useEffect, useState } from "react";
import "../Css/detailed_view.css";
import { Context } from "./datalayer";
import Axios from "axios";
import { urls } from "./urls";

function DetailedView({ title, item }) {
  const [state, dispatch] = useContext(Context);
  const [trailer_src, set_trailer_src] = useState(null);

  function generateUrl(title, item) {
    let base_trailer_url = `https://www.youtube.com/embed/key=?rel=0&autoplay=1&modestbranding=0&controls=0&loop=1`;
    let request_url = "";
    switch (title) {
      case "Netflix Orignals":
        request_url = urls.tv_trailer.replace("movie_id", item["id"]);
        break;
      case "Trending":
        if (item["media_type"] == "movie") {
          request_url = urls.movie_trailer.replace("movie_id", item["id"]);
        } else {
          request_url = urls.tv_trailer.replace("movie_id", item["id"]);
        }
        break;
      default:
        request_url = urls.movie_trailer.replace("movie_id", item["id"]);
    }

    Axios.get(request_url).then((responce) => {
      const results = responce.data["results"];
      if (results.length) {
        set_trailer_src(
          base_trailer_url.replace("key=", results[results.length - 1]["key"])
        );
      } else {
        alert("API error");
      }
    });
  }

  const stars = [];
  for (let i = 0; i < Math.floor(item.vote_average / 2); i++) {
    stars.push(
      <>
        <img src={`${process.env.PUBLIC_URL}/star.svg`} />
      </>
    );
  }

  useEffect(() => {
    generateUrl(title, item);
  }, []);

  return (
    <section
      className="detailed_section"
      onClick={() => {
        dispatch({ type: "SET_CURRENT_MOVIE", value: NaN });
        dispatch({ type: "SET_CURRENT_MOVIE_TITLE", value: NaN });
      }}
    >
      <div
        className="details_container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="overlay">
          <div className="movie_poster_and_name">
            <img src={urls.base_imge_path + item.poster_path} alt={item.name} />
            <div className="details">
              <div className="movie_name">
                {item.title ? item.title : item.name}
              </div>
              <div className="star_container">{stars}</div>
              <div className="rating_count">
                {parseFloat(parseFloat(`${item.vote_average / 2}`).toFixed(2))}
              </div>
            </div>
          </div>
          <div className="description">{item.overview}</div>
        </div>
        <div className="videoPlayer">
          {trailer_src && <iframe src={trailer_src} allow="autoplay"></iframe>}
        </div>
      </div>
    </section>
  );
}

export default DetailedView;
