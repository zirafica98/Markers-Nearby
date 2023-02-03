import React from 'react';
import StartFirebase from '../firebaseConfig/firebase';
import CustomMarker from '../Marker';
import MarkerInf from '../MarkerInf';
import {ref,onValue} from 'firebase/database'
const db = StartFirebase();
export class Data extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: this.props.items,
          data:null,
          radius:this.props.radius,
          counter:0,
          setArray:null

        }
      }
      useEffect= () => {
        for (let i = 1; i <= 3; i++) {
          setTimeout(() => this.state.setArray((prevState) => [...prevState, i]), 3000 * i);
        }
      };
      componentDidMount(){
        const dbRef = ref(db,'/2/data');
        onValue(dbRef,(snapshot)=>{
            var records=[]
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data=childSnapshot.val();
                if(this.getDistance([data.long_marker,data.lat],[this.state.items[0].lon,this.state.items[0].lat])<=this.state.radius && records.length<5){
                    records.push({"key":keyName,"data":data})
                }
            })
            this.setState({
                data: records
            });
        })
    }


    getDistance(origin, destination) {
        var lon1 = this.toRadian(origin[1]),
            lat1 = this.toRadian(origin[0]),
            lon2 = this.toRadian(destination[1]),
            lat2 = this.toRadian(destination[0]);
    
        var deltaLat = lat2 - lat1;
        var deltaLon = lon2 - lon1;
    
        var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
        var c = 2 * Math.asin(Math.sqrt(a));
        var EARTH_RADIUS = 6371;
        return c * EARTH_RADIUS * 1000;
    }
    
    toRadian(degree){
        return degree*Math.PI/180
    }
    sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    render() {

        if (this.state.data == null) {
            return 'Loading...';
        }else{
            return (
                <CustomMarker things={this.state.data}></CustomMarker>
              );
        }
    }
}
