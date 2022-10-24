import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from "./MoviePage.module.css";
import request from '../../lib/request';
import { moviesPoster } from '../../lib/links';
import { getMovie, getVideos } from '../../lib/links';
import Actors from '../../components/actors/Actors';
import Modal from '../../components/modal/Modal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MoviePage() {
    const [movie, setMovie] = useState(null);
    const [trailers, setTrailers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function getCurrentMovie() {
            const currentMovie = await request("GET", getMovie(id));
            setMovie(currentMovie.data);
        }

        getCurrentMovie();

        async function getTrailers() {
            const allTrailers = await request("GET", getVideos(id));
            setTrailers(allTrailers.data.results);
        }

        getTrailers();

    }, [id])

    console.log(movie);

    if (movie === null)
        return (
            <div className={style.back}>
                <div className={style.container}>
                    <div className={style.loading}></div>
                </div>
            </div>
        )

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
                                <div className={style.trailerButton} onClick={() => setOpenModal(true)}>
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
                                trailers.filter((el, i) => i < 2).map((item, i) => 
                                <iframe 
                                    key={`VideoId-${item.id}`}  
                                    width="100%" 
                                    height="180" 
                                    src={`https://www.youtube.com/embed/${item.key}`} 
                                    className={style.video}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen 
                                />
                                    // <video 
                                    //     key={`VideoId-${item.id}`} 
                                    //     width="100%" 
                                    //     height="180px" 
                                    //     controls
                                    //     className={style.video}
                                    // >
                                    //     <source src={`https://www.youtube.com/watch?v=${item.key}`}  type="video/mp4"/>
                                    // </video>
                                )
                            }
                        </div>
                }
            </div>

            {
                openModal && <Modal trailer={trailers[0]} setOpenModal={setOpenModal} />
            }

        </div>
    )
}
