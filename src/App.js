import style from './App.module.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/home_page/HomePage';
import NavBarCinemaList from './components/navbar_cinema_list/NavBarCinemaList';
import CinemaListPage from './pages/cinema_list_page/CinemaListPage';

function App() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [openCinemaListNavBar, setOpenCinemaListNavBar] = useState(false);

  console.log(searchMovies);

  return (
    <div className="App">
      <BrowserRouter>
        {
          !openCinemaListNavBar ? 
            <NavBar setSearchMovies={setSearchMovies} setOpenCinemaListNavBar={setOpenCinemaListNavBar} /> 
              : <NavBarCinemaList setOpenCinemaListNavBar={setOpenCinemaListNavBar} />
        }
        

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cinema_list" element={<CinemaListPage searchMovies={searchMovies} />}></Route>
        </Routes>

        <div className={style.wrapper}>
          <div className={style.content}></div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
