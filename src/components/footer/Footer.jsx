import React from 'react';
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from '@fortawesome/free-brands-svg-icons';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.containerSocialIcons}>
            <FontAwesomeIcon icon={faVk} style={{fontSize: "23px"}} className={style.iconsHover} />
            <FacebookIcon className={style.iconsHover} />
            <TwitterIcon className={style.iconsHover} />
            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "20px"}} className={style.iconsHover} />
            <InstagramIcon className={style.iconsHover} />
            <YouTubeIcon sx={{fontSize: "28px"}} className={style.iconsHover} />
        </div>
        <div className={style.footerNav}>
            <p>Vacancies</p>
            <p>Advertising</p>
            <p>Agreement</p>
            <p>Reference</p>
            <p>Blog</p>
            <p>Participation in research</p>
            <p>Offers</p>
            <p>Support service</p>
        </div>
        <div className={style.containerLastPartFooter}>
            <div className={style.containerAppStoreAndOther}>
                <AppleIcon sx={{fontSize: "30px"}} className={style.icon} />
                <div>
                    <p className={style.textSizeSmall}>Add to</p>
                    <p>App Store</p>
                </div>
            </div>
            <div className={style.containerAppStoreAndOther}>
                <GoogleIcon sx={{fontSize: "26px"}} className={style.icon} />
                <div>
                    <p className={style.textSizeSmall}>Available on</p>
                    <p>Google Play</p>
                </div>
            </div>
            <div className={style.containerAppStoreAndOther}>
                <LocalMallIcon style={{fontSize: "26px"}} className={style.icon}/>
                <div>
                    <p className={style.textSizeSmall}>Explore it on</p>
                    <p>AppGallery</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
