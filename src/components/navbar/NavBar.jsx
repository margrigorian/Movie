import React from 'react';
import style from "./NavBar.module.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VideocamIcon from '@mui/icons-material/Videocam';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavBar() {
    const [inputText, setInputText] = useState("");

    return (
        <div className={style.header}>
            <div className={style.logoMovieName}></div>
            <div className={style.headerMenu}>
                <NavLink to="/" className={style.logo} />
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
                        <NavLink to={inputText === "" ? "/" : `/cinema_list/${inputText}`} style={{color: "rgb(87, 86, 86)"}}>
                            <SearchOutlinedIcon 
                                sx={{ontSize: "22px", marginTop: "5px"}} 
                                className={style.search} 
                                onClick={() => setInputText("")}
                            />
                        </NavLink>
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
