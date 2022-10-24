import React, { useEffect, useState } from 'react';
import style from "./CinemaListPage.module.css";
import { moviesPoster } from '../../lib/links';
import { NavLink, useParams } from 'react-router-dom';
import request from '../../lib/request';
import { moviesData } from '../../lib/links';

export default function CinemaListPage() {
  const {movieName} = useParams();
  const [loading, setLoading] = useState(true);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      const movies = await request("GET", moviesData(movieName));
      setSearchMovies(movies.data.results);
      setLoading(false);
    }

    getMovieList();

  }, [movieName, searchMovies])

  return (
    <div className={style.container}>
      {
        loading ? 
          <div className={style.containerNotFound}>
            <div className={style.loading}></div>
          </div> :
        
        searchMovies.length !== 0 ?
          <div className={style.listContainer}>
              {
                searchMovies.map(item =>
                    <div key={`MovieId-${item.id}`} className={style.containerPoster}>
                      <NavLink to={`/current_movie/${item.id}`}>
                        <img 
                          src={item.poster_path !== null ? `${moviesPoster}${item.poster_path}` : "https://play-lh.googleusercontent.com/EyGeHDzvT92J8CKflSPw-1jJErfpeN5dv1TGYQlN4RD6HW681vRjVg8iBgFzJG9bWyo"} 
                          className={style.movieImage} 
                          alt="poster" 
                        />
                      </NavLink>
                      <NavLink to={`/current_movie/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                        <p 
                          className={style.moviesName} 
                        >
                          {item.title}
                        </p>
                      </NavLink>
                    </div>
                )
              }
          </div> : 
            
          <div className={style.containerNotFound}>
              <div className={style.notFoundImg}></div>
              <p className={style.notFoundText}>NOT FOUND</p>
          </div>
      }
    </div>
  )
}
