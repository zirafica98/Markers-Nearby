import {useMapEvents,useMap} from "react-leaflet"
import L from "leaflet";
import React, {useEffect } from 'react';
import $ from "jquery"

function Bounds(props){
    const map = useMap();
    var group=L.featureGroup();
    useEffect(() => {
      if (!map) return;
      if(props.bounds == false){
        group.clearLayers();
    
        props.coords.forEach((marker) => {
          group.addLayer(L.marker(marker))
        });
    
        map.fitBounds(group.getBounds());
      }
      $('.marker-inf').on("mousedown", L.DomEvent.stopPropagation);
      $('.marker-inf').on("wheel", L.DomEvent.stopPropagation);
      $('.marker-inf').on("swiped", L.DomEvent.stopPropagation);
      $('.marker-inf').on("touchstart", L.DomEvent.stopPropagation);
      $('.marker-inf').on("touchmove", L.DomEvent.stopPropagation);
    });
  
    return null;
  }

export default Bounds;