import React from 'react';
import ReactDOM from 'react-dom/client';
import {Marker,Popup} from 'react-leaflet'
import { icon } from '../Variable';



export class CustomMarker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //renderedThings:props.things,
            //currentCount: 10
            renderedThings:[],
            itemsRendered:0,
            hidden:"hidden"
        }
    }

    

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

    componentDidMount() {
      // this.scheduleNextUpdate()
      const data = [this.props.things]
      
      // setTimeout(()=>{
      //   this.setState({renderedThings:data})
      // },2000)

      data.map((element, i) => {
        setTimeout(()=>{
          this.setState({renderedThings:element})
        },2000)
      })
      
    }

    componentWillUnmount(){
        var that = this;
      setTimeout(function() {
        that.show();
      },2000);
    }

    show(){
      this.setState({hidden : ""});
    }

    // scheduleNextUpdate() {
    //   this.timer = setTimeout(this.updateRenderedThings, 2000)
    // }



    // updateRenderedThings(){
    //   const itemsRendered = 0
    //   const updateState = {
    //     renderedThings:this.state.renderedThings.concat(this.props.things[this.state.itemsRendered]),
    //     itemsRendered: itemsRendered+1
    //   }
    //   this.setState(updateState)
    //   if(this.state.itemsRendered < this.props.data.length){
    //     this.scheduleNextUpdate()
    //   }
    // }
    // componentWillUnmount() {
    //   clearTimeout(this.timer)
    // }

    render() {
      return (
        this.state.renderedThings.map((element, i) => {
          return(
            <Marker className={this.state.hidden} key={element.key} icon={icon(element.data.img_name)} position={[element.data.lat,element.data.long_marker]}>
              <Popup>
                  <a className='description-name' href={element.data.wiki}>{element.data.marker_name}</a><br></br>
                  {element.data.text_wrap}<br></br>
                  <span className='description-date'>Date:</span> {this.dateFormater(element.data.date)} {element.data.bc_ad}
              </Popup>
            </Marker>
          )
        })
        // <Marker icon={icon(this.state.img_name)} position={[this.state.lan,this.state.lon]}>
        //     <Popup>
        //        <a className='description-name' href={this.state.wiki}>{this.state.name}</a><br></br>
        //        {this.state.desc}<br></br>
        //        <span className='description-date'>Date:</span> {this.dateFormater(this.state.date)} {this.state.bc_ad}
        //     </Popup>
        // </Marker>
      )
    }
}
