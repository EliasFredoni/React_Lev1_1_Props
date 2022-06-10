import React from 'react'

export default function Schablone(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.year}</h2>
            <h2>{props.director}</h2>
            <h2>{props.duration}</h2>
            <h2>{props.genre}</h2>
            <h2>{props.rate}</h2>
        </div>
    );
}
