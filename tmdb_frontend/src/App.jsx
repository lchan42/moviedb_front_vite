import './App.css'
import DetailModal from './Components/DetailModal'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import Slider from './Components/Slider'

function App() {

  return (
    <>
		  <Header/>

		  <Slider/>

      <DetailModal/>

      <GenreMovieList/>
    </>
  )
}

export default App
