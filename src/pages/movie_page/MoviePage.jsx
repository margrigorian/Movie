import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./MoviePage.module.css";
import request from '../../lib/request';
import { moviesPoster } from '../../lib/links';
import { getVideos } from '../../lib/links';
import Actors from '../../components/actors/Actors';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MoviePage({searchMovies}) {
    const [movie, setMovie] = useState({});
    const [trailers, setTrailers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const currentMovie = searchMovies.find(item => item.id === +id);
        setMovie(currentMovie);

        async function getTrailers() {
            const allTrailers = await request("GET", getVideos(id));
            setTrailers(allTrailers.data.results);
        }

        getTrailers();

    }, [searchMovies, id])

    console.log(trailers);

    return (
        <div className={style.back}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.movieContainer}>
                        <img 
                            src={movie.poster_path !== undefined ? movie.poster_path !== null ? `${moviesPoster}${movie.poster_path}` 
                                : "https://play-lh.googleusercontent.com/EyGeHDzvT92J8CKflSPw-1jJErfpeN5dv1TGYQlN4RD6HW681vRjVg8iBgFzJG9bWyo" 
                                    : "https://play-lh.googleusercontent.com/EyGeHDzvT92J8CKflSPw-1jJErfpeN5dv1TGYQlN4RD6HW681vRjVg8iBgFzJG9bWyo"} 
                            alt="poster" 
                            className={style.poster}
                        />
                        <div className={style.aboutMovie}>
                            <p className={style.movieName}>{movie.title}</p>
                            <p className={style.yearOfMovie}>
                                {movie.release_date !== undefined ? 
                                    movie.release_date !== "" ? `(${movie.release_date.slice(0, 4)})` : "" : ""}
                            </p>
                            <p className={style.movieDiscription}>{movie.overview}</p>
                            <div className={style.trailerButtonContainer}>
                                <div className={style.trailerButton}>
                                    <PlayArrowIcon sx={{fontSize: "20px"}} />
                                    <p className={style.buttonName}>Trailer</p>
                                </div>
                                <TurnedInIcon className={`${style.bookmarkIcon} ${style.iconHover}`} />
                                <MoreHorizIcon className={style.iconHover} />
                            </div>
                            <p className={style.averageVote}>{movie.vote_average}</p>
                            <p className={style.voteCount}>{movie.vote_count} raitings</p>
                        </div>
                    </div>
                    <Actors id={id} />
                </div>

                {
                    trailers.length > 0 &&
                        <div className={style.trailerContainer}>
                            {
                                trailers.map((item, i) => 
                                    i < 3 ? 
                                    <video 
                                        key={`VideoId-${item.id}`} 
                                        width="100%" 
                                        height="180px" 
                                        controls
                                        className={style.video}
                                    >
                                        <source src={`https://www.youtube.com/embed/${item.key}`} />
                                    </video> : undefined
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}
