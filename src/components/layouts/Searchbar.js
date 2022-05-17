import React, {useContext} from 'react';
import SimpleSearchComponent from './SimpleSearchComponent';
import SearchContextConsumer from './SearchContext';
import { DropdownComponent } from './DropdownComponent';

const Searchbar = () => {

    const { searchValue, setSearchValue } = useContext(SearchContextConsumer);
      
    const className = "flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

    const searchInput = { searchValue: searchValue, setSearchValue: setSearchValue, debounceTimeout: 100, cssClassName: className, cssStyle: null }
    return (
        <>
            <div className="fixed top-3 left-[400px] z-40 flex justify-center">
                <div className="mb-3 xl:w-96">
                    <SimpleSearchComponent {...searchInput} />
                    <DropdownComponent />
                </div>
            </div>
        </>);

}

export default Searchbar