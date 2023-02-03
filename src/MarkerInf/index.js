import React , { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function MarkerInf(props){
    // const [markerName,setMarkerName] = useState();
    // const[markerInf,setMarkerInf] = useState();
    // const [link,setLink] = useState();

    // useEffect(() => {
    //     setMarkerName(props.markerName);
    //     setMarkerInf(props.desc);
    //     setLink(props.wiki);
    // }, []);


    return(
        <div className='marker-inf'>
            <span>{props.markerName}</span>
            <text>{props.date} {props.bc_ad}</text>
            <p>{props.desc}</p>
            <a href={props.link} target="_blank">More</a>
        </div>
    )

    

} 