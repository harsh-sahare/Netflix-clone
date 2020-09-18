export const state = {
  NetFlix_orignals: [],
  Trending: [],
  Top_rated: [],
  Action_movies: [],
  Comedy_movies: [],
  Horrer_movies: [],
  Romance_movies: [],
  Documentaries: [],
  movie_id: null,
  types_movies: [
    "NetFlix_orignals",
    "Trending",
    "Top_rated",
    "Action_movies",
    "Comedy_movies",
    "Horrer_movies",
    "Romance_movies",
    "Documentaries"
  ]
};

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_NETFLIX_ORIGNALS":
      return {
        ...state,
        NetFlix_orignals: action.value
      };
    case "SET_TRENDING":
      return {
        ...state,
        Trending: action.value
      };
    case "SET_ACTION_MOVIES":
      return {
        ...state,
        Action_movies: action.value
      };
    case "SET_COMEDY_MOVIES":
      return {
        ...state,
        Comedy_movies: action.value
      };
    case "SET_HORROR_MOVIES":
      return {
        ...state,
        Horrer_movies: action.value
      };
    case "SET_ROMANCE_MOVIES":
      return {
        ...state,
        Romance_movies: action.value
      };
    case "SET_DOCUMENTARIES":
      return {
        ...state,
        Documentaries: action.value
      };

    case "SET_TOP_RATED":
      return {
        ...state,
        Top_rated: action.value
      };
    default:
      return state;
  }
}
