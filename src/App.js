
import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/layouts/Searchbar';
import SideBar from './components/layouts/Sidebar';
import MyGLMap from './components/maps/MyGLMap';
import { SearchContextProvider } from './components/layouts/SearchContext';
import {defaultPosition} from './utils/constant'


const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [loadedGeoData, getGeoData] = useState(null)
  const [selectedGeo, setSelectedGeo] = useState(null)
  const [initialPosition, setPosition] = useState(defaultPosition)
  
  return (
    <div>
      <SearchContextProvider value={{ searchValue, setSearchValue, loadedGeoData, getGeoData, selectedGeo, setSelectedGeo, initialPosition, setPosition }}>
        <SideBar />
        <Searchbar />
        <MyGLMap />
      </SearchContextProvider>
    </div>
  );
}

export default App;
