import * as L from 'leaflet';


export function icon(name){
    const ICON = L.icon({
        iconUrl: 'https://mappinghistorybucket.s3.us-east-2.amazonaws.com/MappingHistoryMarker/'+name,
        iconSize: [40, 40],
    })
    return ICON;
}

export const ICONRED = L.icon({
    iconUrl: "icon-red.png",
    iconSize: [40, 40],
})

export var theRadius= 1000
