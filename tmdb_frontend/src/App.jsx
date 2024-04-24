import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import ErrPage from './pages/NotFound'
import WatchList from './pages/WatchList'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home/>} />
					<Route path="/home" element={<Home/>} />
					<Route path="/search" element={<Search/>} />
					<Route path="/watchlist" element={<WatchList/>} />
					<Route path="*" element={<ErrPage/>} />
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
