import React, { useContext, useState, useEffect } from "react";
import BannerBtn from "./banner-button";
import { urls } from "./urls";
import { Context } from "./datalayer";

function Get_random(Max_range) {
  return Math.floor(Math.random() * (Max_range - 1));
}

export default function Banner() {
  const [pass, set_pass] = useState(false);
  const [random_num, set_random_num] = useState(0);
  const [selected_genera, set_genera] = useState();
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const genera_num = Get_random(state.types_movies.length);
    const tempGenera = state.types_movies[genera_num];
    set_genera(tempGenera);
    set_random_num(Get_random(state[tempGenera].length));
    if (state[tempGenera] != "") {
      set_pass(true);
    } else {
    }
  }, [state.Documentaries]);

  return (
    <>
      {pass === true ? (
        <div className="banner">
          <img
            src={`${urls.base_imge_path}${state[selected_genera][random_num]["backdrop_path"]}`}
            alt={state[selected_genera][random_num]["title"] + " img"}
            className="banner-img"
          />
          <div className="overlay-text">
            <div className="banner-title">
              {state[selected_genera][random_num]["title"]}
            </div>
            <div className="banner-btn-container">
              <BannerBtn text="play" />
              <BannerBtn text="my list" />
            </div>
            <div className="banner-description">
              {state[selected_genera][random_num]["overview"]}
            </div>
          </div>
        </div>
      ) : (
        <div className="banner">
          <div className="background-img"></div>
        </div>
      )}
    </>
  );
}
