
import './App.css';
import Navbar from './components/Navbar.js';
import Intro from './components/Intro/Intro';
import Contents from './components/Contents/Contents';
import Menu from './components/Menu/Menu';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { useSelector } from 'react-redux';
import Search from './components/Pages/Search';
import Home from './components/Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
function App() {
  const movieDetail = useSelector(state => state.initState.MovieDetail);
  console.log(movieDetail)
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/search' element={<Search />} />

          </Routes>




        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
