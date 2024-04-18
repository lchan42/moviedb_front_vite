import axios from "axios"


const movieBaseUrl="https://api.themoviedb.org/3"
const apiKey= import.meta.env.VITE_API_KEY

// console.log("https://api.themoviedb.org/3/trending/all/day"+apiKey)

const trendingUrl = movieBaseUrl+"/trending/all/day"+apiKey

const urlMovieGenreList = movieBaseUrl+"/genre/movie/list"+apiKey;
const urlTvShowGenreList = movieBaseUrl+"/genre/tv/list"+apiKey;

console.log(urlMovieGenreList)
console.log(urlTvShowGenreList)

// const trendingUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=d38af7faa64af95a2676cd86fc7065e5"
// const url = 'https://api.themoviedb.org/3/movie/11?api_key=d38af7faa64af95a2676cd86fc7065e5';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: import.meta.env.VITE_API_AUTH_BEARER
//   }
// };

const getTrendingVideos = axios.get(trendingUrl)


// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));


// const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key" + apiKey)

export default {
	getTrendingVideos,
}
