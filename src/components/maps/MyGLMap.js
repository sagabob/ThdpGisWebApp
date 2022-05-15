import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;
const Map_Token = REACT_APP_MAPBOX_ACCESS_TOKEN


const Map_Layer = `https://api.mapbox.com/styles/v1/mapbox/streets-v9?access_token=${Map_Token}`
const MyGLMap = () => {
    return <Map
        initialViewState={{
            longitude: 172.639847,
            latitude: -43.525650,
            zoom: 9
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={Map_Layer}
        mapboxAccessToken = {Map_Token}
    />;
}

export default MyGLMap;