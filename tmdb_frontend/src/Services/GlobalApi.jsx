import axios from "axios"


const movieBaseUrl="https://api.themoviedb.org/3/"
const apiKey= import.meta.env.VITE_TEST_VAR

const getTrendingVideos=axios.get(this.movieBaseUrl+"trending/all/day?api_key" + apiKey)

export default {
	getTrendingVideos
}
