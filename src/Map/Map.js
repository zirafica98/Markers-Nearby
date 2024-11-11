import './Map.css';
import { MapContainer, TileLayer,Marker} from 'react-leaflet'
import "leaflet/dist/images/marker-shadow.png";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import React from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { Data } from '../Data';
import { ICONRED,theRadius } from '../Variable';

export class MyMap extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        lan: props.lan,
        lon:props.lon,
        cityName:props.cityName,
        items:[]
      }
  }
  componentDidMount(){
    fetch("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + this.state.cityName)
    .then(res => res.json())
    .then(
      (result) => {
       
        this.setState({
          isLoaded: true,
          items: result
        });
    },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
      if (this.state.items.length>0){
        return (
          <MapContainer center={[this.state.items[0].lat,this.state.items[0].lon]} zoom={14} style={{height: "100vh"}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=tbxxnHOYRKXeGzScTE2D" />
            <Marker icon={ICONRED} id={"centerMarker"} position={[this.state.items[0].lat,this.state.items[0].lon]}></Marker>
            <Data items={this.state.items} radius={theRadius} center={[this.state.items[0].lat,this.state.items[0].lon]}></Data>
          </MapContainer>
        )
      }else{
        return "";
      }
  }
}
