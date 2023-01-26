const baseUrl = "https://gisapi.tdp-store.info/api"
const searchInstanceUrl = `${baseUrl}/GisQuery/instances`
const searchGeoTypeUrl = `${baseUrl}/GisQuery/querybytext`

const defaultPosition = {
    longitude: 172.639847,
    latitude: -43.525650,
    zoom: 9
}

export { searchInstanceUrl, searchGeoTypeUrl, defaultPosition }
