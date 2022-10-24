import style from './App.module.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/home_page/HomePage';
import CinemaListPage from './pages/cinema_list_page/CinemaListPage';
import MoviePage from './pages/movie_page/MoviePage';
import ScrollToTheTop from './hoc/ScrollToTheTop';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        
        <ScrollToTheTop />
        <NavBar /> 
          
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route 
            path="/cinema_list/:movieName" 
            element={
              <CinemaListPage />
            }
          ></Route>
          <Route path="/current_movie/:id" element={<MoviePage />}></Route>
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
