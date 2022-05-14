import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
const Map_Token = REACT_APP_MAPBOX_ACCESS_TOKEN


const Map_Layer = `https://api.mapbox.com/styles/v1/mapbox/streets-v9?access_token=${Map_Token}`
const MyGlMap = () => {
    return <Map
        initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
        }}
        style={{ width: 600, height: 400 }}
        mapStyle={Map_Layer}
        mapboxAccessToken = {Map_Token}
    />;
}

export default MyGlMap;