import React , { useEffect, useState } from 'react';
import {Marker,Popup} from 'react-leaflet'
import { icon } from '../Variable';
import MarkerInf from '../MarkerInf';




export default function CustomMarker(props){
  const [renderedThings, setRenderThings] = useState();
  const [itemsRendered , setItemsRendered] = useState(0);
  const [show, setShow] = useState(false);


  useEffect(() => {

    for (let i in props.things) {
      setTimeout(() => {
        setRenderThings(props.things[i]);
        setShow(true);
      }, 10000 * i);
    }

  }, []);

  if(show){
    return(
      <>
      <Marker key={renderedThings.key} icon={icon(renderedThings.data.img_name)} position={[renderedThings.data.lat,renderedThings.data.long_marker]}>
        <Popup>
          <a className='description-name' href={renderedThings.data.wiki}>{renderedThings.data.marker_name}</a><br></br>
          {renderedThings.data.text_wrap}<br></br>
          <span className='description-date'>Date:</span> {dateFormater(renderedThings.data.date)} {renderedThings.data.bc_ad}
        </Popup>
      </Marker>
      <MarkerInf markerName={renderedThings.data.marker_name} desc= {renderedThings.data.text_wrap} wiki={renderedThings.data.wiki} date ={dateFormater(renderedThings.data.date)} bc_ad = {renderedThings.data.bc_ad}></MarkerInf>
      </>

  )
  }
  
}

function dateFormater(date){
  const words = date.split('/');
  var mon=words[0]
  var day=words[1]
  var year=words[2]

  if(mon = 1){
    mon = "Jan"
  }else if (mon = '2'){
    mon = "Feb"
  }else if (mon = '3'){
    mon = "Mar"
  }else if (mon = '4'){
    mon = "Apr"
  }else if (mon = '5'){
    mon = "May"
  }else if (mon = '6'){
    mon = "Jun"
  }else if (mon = '7'){
    mon = "Jul"
  }else if (mon = '8'){
    mon = "Avg"
  }else if (mon = '9'){
    mon = "Sep"
  }else if (mon = '10'){
    mon = "Oct"
  }else if (mon = '11'){
    mon = "Nov"
  }else if (mon = '12'){
    mon="Dec"
  }
  return mon+" "+day + " " +year
}