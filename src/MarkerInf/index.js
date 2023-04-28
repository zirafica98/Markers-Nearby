import React , { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function MarkerInf(props){


    return(
        <div className='marker-inf'>
            <span className='markerName'>{props.markerName}</span>
            <span className='date'>{props.date} {props.bc_ad}</span>
            <p>{props.desc}</p>
            <a href={props.wiki} target="_blank">More</a>
        </div>
    )

    

} 