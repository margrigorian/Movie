import React from 'react';
import style from "./Actors.module.css";
import { useState, useEffect } from 'react';
import request from '../../lib/request';
import { getActors } from '../../lib/links';
import { moviesPoster } from '../../lib/links';

export default function Actors({ id }) {
    const [allActors, setAllActors] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        async function getAllActors() {
            const filmActors = await request("GET", getActors(id));
            setAllActors(filmActors.data.cast);
        }

        getAllActors();
    }, [id])

    // console.log(allActors);

    function changeNumForActors(n) {
        if((n === 1 && num !== allActors.length - 5) || (n === -1 && num !== 0)) {
            const newNum = num + n;
            setNum(newNum);
        }
    }

    return (
        <div>
            {
                allActors.length !== 0 &&
                    <div className={style.actorsContainer}>
                        <div 
                            className={`${style.leftArrow} ${style.arrow}`}
                            onClick={() => {
                                if(allActors.length > 5) {
                                    changeNumForActors(-1)
                                }
                            }}
                        ></div>
                        <div 
                            className={`${style.rightArrow} ${style.arrow}`}
                            onClick={() => {
                                if(allActors.length > 5) {
                                    changeNumForActors(1)
                                }
                            }}
                        ></div>
                        <div className={style.actors}>
                            {
                                allActors.map((item, i) => {
                                    if(i >= 0 + num && i < 5 + num) {
                                        return <div key={`ActorImgId-${item.id}`} className={style.currentActorContainer}>
                                                    <img 
                                                        src={item.profile_path !== null ? 
                                                            `${moviesPoster}${item.profile_path}`
                                                                : "https://en.pimg.jp/045/238/877/1/45238877.jpg"} 
                                                        className={style.actorImage} alt="actorImage" 
                                                    />
                                                    <p className={style.actorName}>{item.name}</p>
                                                </div>
                                    }
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}
