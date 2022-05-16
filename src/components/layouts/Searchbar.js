import React, {useState} from 'react';
import SimpleSearchComponent from './SimpleSearchComponent';

const Searchbar = () => {

    const [searchValue, setSearchValue] = useState("")

    const getSearch = (searchValue) => {
        console.log("Input for search -" + searchValue)
        setSearchValue(searchValue)
    } 


    const className = "flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

    const searchInput =  {searchValue: searchValue ,setSearchValue: getSearch, debounceTimeout: 500, cssClassName: className, cssStyle: null } 
    return (
        <>
            <div className="fixed top-3 left-[400px] z-40 flex justify-center">
                <div className="mb-3 xl:w-96">                    
                    <SimpleSearchComponent {...searchInput } />
                </div>
            </div>
        </>);

}

export default Searchbar