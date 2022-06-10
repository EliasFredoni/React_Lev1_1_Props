//import React from 'react'       // mit Map
import Schablone from './Schablone';
import data from '../data';

export default function Movie() {
    return (
        <div>
            {data.map((ele) =>
                <Schablone
                    title={ele.title}
                    year={ele.year}
                    director={ele.director}
                    duration={ele.duration}
                    genre={ele.genre}
                    rate={ele.rate}
                />

            )}
        </div>
    )
}
