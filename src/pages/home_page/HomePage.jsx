import React, { useEffect, useState } from 'react';
import style from "./HomePage.module.css";
import PeakyBlinders from "../../video/PeakyBlinders.mp4";
import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TheatersIcon from '@mui/icons-material/Theaters';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import ConfirmationNumberSharpIcon from '@mui/icons-material/ConfirmationNumberSharp';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import request from '../../lib/request';
import { popMovies } from '../../lib/links';
import { moviesPoster } from '../../lib/links';

export default function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        async function getPopMovies() {
            const movies = await request("GET", popMovies);
            setPopularMovies(movies.data.results);
            console.log(movies.data.results);
        }

        getPopMovies();
    }, [])

    return (
        <div className={style.content}>
            <div className={style.nav}>
                <ul>
                    <li className={style.liHome}>
                        <HomeIcon sx={{fontSize: "25px"}} className={style.homeIcon} />
                        <p>Home</p>
                    </li>
                    <li><PlayCircleOutlineIcon sx={{fontSize: "25px"}} /><p>Online cinema</p></li>
                    <li><TheatersIcon sx={{fontSize: "25px"}} /><p>Movies</p></li>
                    <li><MovieFilterOutlinedIcon sx={{fontSize: "25px"}} /><p>Series</p></li>
                    <li><ConfirmationNumberSharpIcon  sx={{fontSize: "23px"}} /><p>Movie tickets</p></li>
                    <li><BackupTableSharpIcon /><p>Media</p></li>
                </ul>
            </div>
            <div className={style.containerForContent}>
                <div className={style.video}>
                    <p></p>
                    <video width="650px" autoPlay muted loop>
                        <source src={PeakyBlinders} type="video/mp4" />
                    </video>
                    <div className={style.blackStencil}>
                        <p className={style.name}>PEAKY BLINDERS</p>
                        <p className={style.fontMedium}>Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. 
                            Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.</p>
                        <p className={style.importantRoles}>Starring: <span className={style.spanColor}>Cillian Murphy, Paul Anderson, Sophie Rundle, Tom Hardy...</span></p>
                        <p className={style.сreator}>Creator: <span className={style.spanColor}>Steven Knight</span></p>
                        <p className={style.subscription}>WATCH BY SUBSCRIPTION</p>
                        <div className={style.buttonsContainer}>
                            <button className={style.buttonWatch}>
                                <PlayArrowIcon sx={{fontSize: "20px"}} className={style.playIcon} />
                                <p>Watch</p>
                            </button>      
                            <button className={style.buttonWillWatch}>
                                <AddIcon sx={{fontSize: "20px"}} className={style.iconPlus} />
                                <p>Will watch</p>
                            </button>      
                        </div>
                    </div>
                </div>

                <p className={style.caption}>New films</p>
                <div className={style.containerNewFilm}>
                    <div className={`${style.newFilmImg} ${style.newFilm1}`}></div>
                    <div className={`${style.newFilmImg} ${style.newFilm2}`}></div>
                    <div className={`${style.newFilmImg} ${style.newFilm3}`}></div>
                    <div className={`${style.newFilmImg} ${style.newFilm4}`}></div>
                </div>
                <p className={style.caption}>Popular films</p>
                <div className={style.containerPopMovies}>
                    <div className={style.postersContainer}>
                        {
                            popularMovies.map((item, i) => {
                                    if(i < 10) {
                                        return <img 
                                            key={`MovieId-${item.id}`} 
                                            src={`${moviesPoster}${item.poster_path}`} alt="poster" 
                                            className={style.posterPopMovie}
                                        />    
                                    }
                                }
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
