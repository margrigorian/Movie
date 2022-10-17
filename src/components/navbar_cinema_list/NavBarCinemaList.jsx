import React from 'react';
import style from "./NavBarCinemaList.module.css";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBarCinemaList({setOpenCinemaListNavBar}) {
  return (
    <header className={style.header}>
        <MenuIcon sx={{fontSize: "30px"}} className={style.menuIcon} />
        <NavLink to="/" style={{textDecoration: "none"}}>
            <p className={style.logoText} onClick={() => setOpenCinemaListNavBar(false)}>
                <span className={style.span}>THE</span> SPASE CINEMA
            </p>
        </NavLink>
    </header>
  )
}
