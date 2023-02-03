import { Data } from '../Data';

function ChangeRadius(radius,cityName){
    var array=[];
    fetch("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + cityName)
    .then(res => res.json())
    .then(
      (result) => {

        //array=result;
        return(
            <Data items={result} radius={radius}></Data>
        )
    }
    )
    // if(array.length>0){
    //     return(
    //         <Data items={array} radius={radius}></Data>
    //     )
    // }
    
}

export default ChangeRadius;
