import React from 'react';
import style from "./NavBar.module.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VideocamIcon from '@mui/icons-material/Videocam';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import request from '../../lib/request';
import { moviesData } from '../../lib/links';

export default function NavBar({setSearchMovies}) {
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if(inputText) {
            const handle = setTimeout( async () => {
                const movies = await request("GET", moviesData(inputText));
                setSearchMovies(movies.data.results);
            }, 1000)

            return () => {
                clearTimeout(handle);
            } 
        }
        // Ругается. Правильно ли в завимисимость указывать функцию setSearchMovies?
    }, [inputText, setSearchMovies])

    return (
        <div className={style.header}>
            <div className={style.logoMovieName}></div>
            <div className={style.headerMenu}>
                <div className={style.logo}></div>
                <div className={style.middlePartHeaderMenu}>
                    <div className={`${style.iconsPlayContainer} ${style.iconsHover}`}>
                        <PlayArrowIcon sx={{color: "grey", fontSize: "20px"}} />
                        <p>Online cinema</p>
                    </div>
                    <div className={`${style.iconCameraContainer} ${style.iconsHover}`}>
                        <VideocamIcon />
                        <p>Set on TV</p>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Movies, series, persons" 
                        className={style.searhInput} 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className={style.containerIconSearch}>
                        <TuneRoundedIcon sx={{color: "grey", fontSize: "22px"}} className={style.sliders} />
                        <SearchOutlinedIcon sx={{color: "grey", fontSize: "22px"}} className={style.search} />
                    </div>
                </div>
                <div className={style.lastPartHeaderMenu}>
                    <TurnedInIcon sx={{color: "grey", fontSize: "20px"}} className={style.iconsHover} />
                    <button className={style.tryPlusButton}>Try Plus</button>
                    <AccountCircleIcon sx={{color: "grey", fontSize: "40px"}} className={style.iconsHover} />
                </div>
            </div>
        </div>
    )
}
