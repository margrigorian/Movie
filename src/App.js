import style from './App.module.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/home_page/HomePage';

function App() {
  const [searchMovies, setSearchMovies] = useState([]);

  // console.log(searchMovies);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setSearchMovies={setSearchMovies} />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
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
