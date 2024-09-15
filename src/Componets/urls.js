const api_key = process.env.REACT_APP_API_KEY;

export const urls = {
  GetNetFlixOrignals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_network=213`,
  GetTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language-en-US`,
  GetTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language-en-US`,
  GetActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
  GetComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
  GetHorrerMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
  GetRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
  GetDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`,
  base_imge_path: "https://image.tmdb.org/t/p/original/",
  movie_trailer: `https://api.themoviedb.org/3/movie/movie_id/videos?api_key=${api_key}`,
  tv_trailer: `https://api.themoviedb.org/3/tv/movie_id/videos?api_key=${api_key}`,
};
