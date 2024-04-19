import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import Slider from './Components/Slider'

function App() {

  return (
    <h1 className="">
		<Header/>

		<Slider/>
		{/* {console.log(import.meta.env.VITE_TEST_VAR)} */}

    <GenreMovieList/>
    </h1>
  )
}

export default App
