import style from './App.module.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import request from './lib/request';
import { moviesData } from './lib/links';

function App() {
  const [searchMovies, setSearchMovies] = useState([]);

  console.log(searchMovies);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setSearchMovies={setSearchMovies} />

        <Routes>
          <Route path="/"></Route>
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
