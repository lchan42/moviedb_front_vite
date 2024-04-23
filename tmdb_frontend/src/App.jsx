import './App.css'
import DetailModal from './Components/DetailModal'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import Slider from './Components/Slider'

function App() {

  return (
    <h1 className="">
		  <Header/>

		  <Slider/>

      <DetailModal/>

      <GenreMovieList/>
    </h1>
  )
}

export default App
