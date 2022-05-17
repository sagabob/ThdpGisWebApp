import React, { useEffect, useContext } from 'react'
import SearchContextConsumer from './SearchContext';
import { searchGeoTypeUrl } from '../../utils/constant';
import axios from "axios";
import searchIcon from '../../assets/images/features/point-of-interest.svg'

export const DropdownComponent = () => {
    const { searchValue, loadedGeoData, getGeoData, selectedGeo, setSelectedGeo } = useContext(SearchContextConsumer);

    useEffect(() => {

        const geGeoDataAsync = async () => {

            const request_url = `${searchGeoTypeUrl}/QueryPlaceName/${searchValue}/5`
            let res = await axios.get(request_url);
            let { data } = res;
            getGeoData(data);

        }
        if (searchValue.length >= 3)
            geGeoDataAsync();

    }, [searchValue]);

    const baseClassListItem = "w-full px-1 py-1 rounded-lg  border-solid border-2 border-emerald-100 flex cursor-pointer hover:border-emerald-500 "
    const baseClassListItemSelected = "w-full px-1 py-1 rounded-lg  border-solid border-2 border-blue-500 flex cursor-pointer hover:border-emerald-500 "
    return (
        <div className="w-full bg-white shadow-md rounded-sm border-solid border-sky-300 z-10">
            {loadedGeoData !== null && loadedGeoData.results !== undefined && Array.isArray(loadedGeoData.results) && loadedGeoData.results.map((item, index) =>
            (<article key={index}
                className={selectedGeo !== null && item.Id === selectedGeo.Id ? baseClassListItemSelected : baseClassListItem} onClick={() => setSelectedGeo(item)}>
                <img src={searchIcon} alt="" width="40" height="40" className="flex-none rounded-md bg-slate-100" />
                <div className="ml-1" >
                    <h5>{item.placeName}</h5>
                    <p>{item.locality}</p>
                </div>
            </article>)
            )}
        </div>
    )
}
