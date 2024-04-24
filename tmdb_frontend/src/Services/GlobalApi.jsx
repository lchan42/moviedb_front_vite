import axios from "axios"
import { useNavigate } from "react-router-dom"

/************* URL ************ */
const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = "?api_key="+ import.meta.env.VITE_API_KEY
const trendingUrl = movieBaseUrl+"/trending/all/day"+apiKey
const urlMovieGenreList = movieBaseUrl+"/genre/movie/list"+apiKey;
const urlTvShowGenreList = movieBaseUrl+"/genre/tv/list"+apiKey;
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie"
const movieSearchBaseURL = "https://api.themoviedb.org/3/search/movie"
const imgBaseUrl = "https://image.tmdb.org/t/p/original"


/************* getters ************ */
const axiosGetRequest = (url) => axios.get(url).catch(e => handleError(e))

const handleError = (e) => {
  const navigate = useNavigate()

  console.log(e)
  navigate('/errorPage')
}

const getTrendingVideos = axiosGetRequest(trendingUrl)
const getMovieGenreList = axiosGetRequest(urlMovieGenreList)
const getTvShowGenreList = axiosGetRequest(urlTvShowGenreList)
const getMovieByGenreId = (id) => axiosGetRequest(movieByGenreBaseURL+apiKey+"&with_genres="+id)
const getMovieByName = (userInput) => axiosGetRequest(movieSearchBaseURL+apiKey+"&query="+userInput)

export default {
	getTrendingVideos,
  getMovieGenreList,
  getTvShowGenreList,
  getMovieByGenreId,
  getMovieByName,
  imgBaseUrl,
}
