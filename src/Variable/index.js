import * as L from 'leaflet';


export function icon(name){
    const ICON = L.icon({
        iconUrl: 'https://mappinghistorybucket.s3.us-east-2.amazonaws.com/MappingHistoryMarker/'+name,
        iconSize: [60, 60],
    })
    return ICON;
}

export const ICONRED = L.icon({
    iconUrl: "ankhFavicon.png",
    iconSize: [30, 30],
})

export var theRadius= 1000
