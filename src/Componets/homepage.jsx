import React, { useContext, useEffect } from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import NetflixOrignals from "./netflix_orignals";
import { Context } from "./datalayer";
import { urls } from "./urls";
import axios from "axios";
import BannerGradient from "./banner_gradient";
import DetailedView from "./detailed_view";

export default function Homepage() {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    async function getData() {
      const a = await axios.get(urls.GetNetFlixOrignals);
      dispatch({ type: "SET_NETFLIX_ORIGNALS", value: a["data"]["results"] });
      const b = await axios.get(urls.GetTrending);
      dispatch({ type: "SET_TRENDING", value: b["data"]["results"] });
      const c = await axios.get(urls.GetTopRated);
      dispatch({ type: "SET_TOP_RATED", value: c["data"]["results"] });
      const d = await axios.get(urls.GetActionMovies);
      dispatch({ type: "SET_ACTION_MOVIES", value: d["data"]["results"] });
      const e = await axios.get(urls.GetComedyMovies);
      dispatch({ type: "SET_COMEDY_MOVIES", value: e["data"]["results"] });
      const f = await axios.get(urls.GetHorrerMovies);
      dispatch({ type: "SET_HORROR_MOVIES", value: f["data"]["results"] });
      const g = await axios.get(urls.GetRomanceMovies);
      dispatch({ type: "SET_ROMANCE_MOVIES", value: g["data"]["results"] });
      const h = await axios.get(urls.GetDocumentaries);
      dispatch({ type: "SET_DOCUMENTARIES", value: h["data"]["results"] });
    }

    getData();
  }, []);

  return (
    <>
      {state.currentMovie && (
        <DetailedView
          title={state.currentMovieTitle}
          item={state.currentMovie}
        />
      )}
      <Navbar />
      <Banner />
      <BannerGradient />
      <div className="movies">
        <NetflixOrignals title="Trending" albums={state.Trending} />
        <NetflixOrignals title="Top Rated" albums={state.Top_rated} />
        <NetflixOrignals
          title="Netflix Orignals"
          albums={state.NetFlix_orignals}
        />
        <NetflixOrignals title="Action Movies" albums={state.Action_movies} />
        <NetflixOrignals title="Comedy Movies" albums={state.Comedy_movies} />
        <NetflixOrignals title="Horrer Movies" albums={state.Horrer_movies} />
        <NetflixOrignals title="Romance Movies" albums={state.Romance_movies} />
        <NetflixOrignals title="Documentaries" albums={state.Documentaries} />
      </div>
    </>
  );
}
