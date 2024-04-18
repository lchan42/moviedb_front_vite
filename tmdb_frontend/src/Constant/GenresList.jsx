const urlMovie = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const urlTvShow = 'https://api.themoviedb.org/3/genre/tv/list?language=en';

const options = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzhhZjdmYWE2NGFmOTVhMjY3NmNkODZmYzcwNjVlNSIsInN1YiI6IjY2MWZjN2MxMDgxNmM3MDE3Y2VmZTc5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PwA-3w5b-UWJVNVDt6MzKU4v1H8GaWtfusmTKaCRGc0'
	}
  };


fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
