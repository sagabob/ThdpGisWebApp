import Map, { NavigationControl, Marker, Popup, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchContextConsumer from '../layouts/SearchContext';
import React, { useContext } from 'react';
import Pin from './Pin';


const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
const Map_Token = REACT_APP_MAPBOX_ACCESS_TOKEN


const Map_Layer = `https://api.mapbox.com/styles/v1/mapbox/streets-v9?access_token=${Map_Token}`
const MyGLMap = () => {

    const { loadedGeoData, selectedGeo, setSelectedGeo } = useContext(SearchContextConsumer);
    console.log(loadedGeoData)
    console.log(selectedGeo)
    return (<Map
        initialViewState={{
            longitude: 172.639847,
            latitude: -43.525650,
            zoom: 9
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={Map_Layer}
        mapboxAccessToken={Map_Token}
    >
        {loadedGeoData !== null && loadedGeoData.results !== undefined && Array.isArray(loadedGeoData.results) && loadedGeoData.results.map((item, index) =>
        (
            <Marker
                key={item.Id}
                longitude={Number(item.geometry.coordinates[0][0])}
                latitude={Number(item.geometry.coordinates[0][1])}
               
                onClick={e => {
                    // If we let the click event propagates to the map, it will immediately close the popup
                    // with `closeOnClick: true`
                    e.originalEvent.stopPropagation();
                    setSelectedGeo(item);
                }}
            >

            </Marker>
        ))}
        {selectedGeo && (
            <Marker
                key={"selected"+selectedGeo.Id}
                longitude={Number(selectedGeo.geometry.coordinates[0][0])}
                latitude={Number(selectedGeo.geometry.coordinates[0][1])}
                color="#ef4444"
                onClick={e => {
                    // If we let the click event propagates to the map, it will immediately close the popup
                    // with `closeOnClick: true`
                    e.originalEvent.stopPropagation();

                }}
            >
               
            </Marker>
        )}

        {selectedGeo && (
            <Popup
                key={selectedGeo.Id}
                anchor="top"
                longitude={Number(selectedGeo.geometry.coordinates[0][0])}
                latitude={Number(selectedGeo.geometry.coordinates[0][1])}
                onClose={() => setSelectedGeo(null)}
            >
                <div>
                    <h5>{selectedGeo.placeName}</h5>
                    <p>{selectedGeo.locality}</p>
                </div>

            </Popup>)
        }
        <NavigationControl />
        <ScaleControl />
    </Map>);
}

export default MyGLMap;