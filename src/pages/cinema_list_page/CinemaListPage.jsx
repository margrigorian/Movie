import React from 'react';
import style from "./CinemaListPage.module.css";
import { moviesPoster } from '../../lib/links';
import { NavLink } from 'react-router-dom';

export default function CinemaListPage({searchMovies, setOpenCinemaListNavBar}) {
  return (
    <div className={style.container}>
      {
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
              {/* <img src="../../pictures/movie.png" className={style.notFoundImg} alt="imgNotFound" /> */}
              <div className={style.notFoundImg}></div>
              <p className={style.notFoundText}>NOT FOUND</p>
          </div>
      }
    </div>
  )
}
