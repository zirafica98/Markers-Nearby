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
        const lat = map.getCenter().lat
        var zoom = Math.floor(Math.log2((Math.cos(lat * Math.PI/180) * 2 * Math.PI * 6371008 * 4)/props.radius))
        if($(window).width() < 500){
          map.setZoom(zoom-2);
        }else{
          map.setZoom(zoom-1);
        }
        
      }
      $('.marker-inf').on("mousedown", L.DomEvent.stopPropagation);
      $('.marker-inf').on("wheel", L.DomEvent.stopPropagation);
      $('.marker-inf').on("swiped", L.DomEvent.stopPropagation);
      $('.marker-inf').on("touchstart", L.DomEvent.stopPropagation);
      $('.marker-inf').on("touchmove", L.DomEvent.stopPropagation);
    }, []);

    
  
    return null;
  }

export default Bounds;