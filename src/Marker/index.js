import React , { useEffect, useState} from 'react';
import {useMapEvents,useMap} from "react-leaflet"
import {Marker,Popup} from 'react-leaflet'
import { icon } from '../Variable';
import MarkerInf from '../MarkerInf';
import AddPolygon from '../GeoJson/addPolygon';
import $ from "jquery"

export default function CustomMarker(props){
  const [renderedThings, setRenderThings] = useState();
  const [itemsRendered , setItemsRendered] = useState(0);
  const [show, setShow] = useState(false);
  

  const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
      var zoom = Math.floor(Math.log2((Math.cos(lat * Math.PI/180) * 2 * Math.PI * 6371008 * 4)/props.radius))
       map.setZoom(zoom);
       map.setView([lat, lng]);
     }, [lat, lng]);
     return null;
   }

  useEffect(() => {

    for (let i in props.things) {
      setTimeout(() => {
        setRenderThings(props.things[i]);
        setShow(true);
        
      }, 5000 * i);
    }
    
    $(".leaflet-marker-pane :first-child").hide();
  }, [props]);

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
      <AddPolygon yearMarker = {renderedThings.data.complateYear}></AddPolygon>
      <RecenterAutomatically  lat={renderedThings.data.lat} lng={renderedThings.data.long_marker}></RecenterAutomatically>
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