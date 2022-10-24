import React from 'react';
import style from "./Modal.module.css";

export default function Modal({trailer, setOpenModal}) {
    return (
        <div className={style.modalContainer} onClick={() => setOpenModal(false)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                {
                    trailer !== undefined ? 
                    <iframe  
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${trailer.key}`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                    /> :
                    <p className={style.text}>Not video</p>
                }
                <div className={style.closeIcon} onClick={() => setOpenModal(false)}></div>
            </div>
        </div>
    )
}
