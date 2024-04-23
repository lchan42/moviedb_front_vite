import axios from "axios"

/************* URL ************ */
const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = import.meta.env.VITE_API_KEY
const trendingUrl = movieBaseUrl+"/trending/all/day"+apiKey
const urlMovieGenreList = movieBaseUrl+"/genre/movie/list"+apiKey;
const urlTvShowGenreList = movieBaseUrl+"/genre/tv/list"+apiKey;
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie"
const movieSearchBaseURL = "https://api.themoviedb.org/3/search/movie"
const imgBaseUrl = "https://image.tmdb.org/t/p/original"


/************* getters ************ */
const getTrendingVideos = axios.get(trendingUrl)
const getMovieGenreList = axios.get(urlMovieGenreList)
const getTvShowGenreList = axios.get(urlTvShowGenreList)
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL+apiKey+"&with_genres="+id)
const getMovieByName = (userInput) => axios.get(movieSearchBaseURL+apiKey+"&query="+userInput)

export default {
	getTrendingVideos,
  getMovieGenreList,
  getTvShowGenreList,
  getMovieByGenreId,
  getMovieByName,
  imgBaseUrl,
}


// console.log("url moviegenre list "+urlMovieGenreList)
// console.log("url TvShow genre list "+urlTvShowGenreList)

// const trendingUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=d38af7faa64af95a2676cd86fc7065e5"
// const url = 'https://api.themoviedb.org/3/movie/11?api_key=d38af7faa64af95a2676cd86fc7065e5';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: import.meta.env.VITE_API_AUTH_BEARER
//   }
// };


// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));


// const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key" + apiKey)
// const getMovieGenreList = axios.get(urlMovieGenreList).then((res) => console.log(res.data.genres))
