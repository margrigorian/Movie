const keyAPI = "2b358e0161bfa20113995824c782b5aa";
export const popMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${keyAPI}`;
export const moviesData = (value) => `https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&query=${value}`;
export const GetMovie = (value) => `https://api.themoviedb.org/3/movie/${value}?api_key=${keyAPI}`
export const GetActors = (value) => `https://api.themoviedb.org/3/movie/${value}/credits?api_key=${keyAPI}`  
export const GetVideos = (value)=>`https://api.themoviedb.org/3/movie/${value}/videos?api_key=${keyAPI}`
export const moviesPoster = "https://www.themoviedb.org/t/p/original/";