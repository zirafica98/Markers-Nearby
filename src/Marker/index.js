import React, { Component} from 'react';
import {Marker,Popup} from 'react-leaflet'
import {icon } from '../Variable';
import L from "leaflet";
import AddPolygon from '../GeoJson/addPolygon';
import $ from "jquery"
import Bounds from './bounds';

class CustomMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedThings:null,
      itemsRendered:null,
      show:false,
      cords:[],
      bounds:false,
      group:L.featureGroup(),
      video:false,
      linkYoutube:null,
      pause:false,
      data:props.things,
      arrayCord:[],
    }
  }
    handleButtonClick = () =>{
      this.setState({
        video: !this.state.video,
        pause: !this.state.pause
      });
    };

  FetchData = async (data) => {

    this.setState({
      arrayCord:data.arrayCord
    })
    for (var index = 0; index < data.things.length; index++) {
      while(this.state.pause){
        await new Promise((res) => setTimeout(res, 1000));
      }
        var element = data.things[index];
        this.setState({
          renderedThings:element,
          linkYoutube:element.data.youtubeUrl,
          show:true
        })
        $(".leaflet-marker-pane :first-child").hide();
        await new Promise((res) => setTimeout(res, 5000));
    }
   
  };


dateFormater(date){
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

  componentWillReceiveProps(props) {
    if(props.things.length == 5){
      this.FetchData(props);
    }
  }

  render() {
    if(this.state.show){
      return (
        <div>
         <><Marker key={this.state.renderedThings.key} icon={icon(this.state.renderedThings.data.img_name)} position={[this.state.renderedThings.data.lat,this.state.renderedThings.data.long_marker]}>
         <Popup>
          <a className='description-name' href={this.state.renderedThings.data.wiki}>{this.state.renderedThings.data.marker_name}</a><br></br>
           {this.state.renderedThings.data.text_wrap}<br></br>
           <span className='description-date'>Date:</span> {this.dateFormater(this.state.renderedThings.data.date)} {this.state.renderedThings.data.bc_ad}
         </Popup>
       </Marker>
       <AddPolygon yearMarker = {this.state.renderedThings.data.complateYear}></AddPolygon>
       <div className='marker-inf'>
             <span className='markerName'>{this.state.renderedThings.data.marker_name}</span>
             <span className='date'>{this.dateFormater(this.state.renderedThings.data.date)} {this.state.renderedThings.data.bc_ad}</span>
             <p>{this.state.renderedThings.data.text_wrap}</p>
             <a href={this.state.renderedThings.data.wiki} target="_blank">More</a><br></br>
             {this.state.linkYoutube != '' && <button onClick={this.handleButtonClick}>Play video</button>}
         </div>
        {this.state.video && <div id="youtubeVideo"><iframe src={this.state.linkYoutube}></iframe><div className='close'><button onClick={this.handleButtonClick}>X</button></div></div>}
       {this.state.arrayCord.length == 6 && <Bounds coords={this.state.arrayCord} bounds = {this.state.bounds} />}
       </>
        </div>
      );
    }else{
      return (
        <div className='loading'>
          <img src='loading.gif'></img>
        </div>
      )
    }
  }
}
export default CustomMarker;