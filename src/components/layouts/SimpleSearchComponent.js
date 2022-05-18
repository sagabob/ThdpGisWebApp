import React, { useState, useCallback } from 'react';
import { debounce } from "lodash"

const SimpleSearchComponent = ({ searchValue, setSearchValue, debounceTimeout, cssClassName, cssStyle }) => {

    const [localsearchValue, setLocalSearchValue] = useState(searchValue)

    const delayInput = useCallback(
        debounce(searchInput => {
            setSearchValue(searchInput)
        }, debounceTimeout),
        []
    );

    const handleSearchValueChange = event => {
        setLocalSearchValue(event);
        delayInput(event);
    }

    return (
        <>
            <input type="search" value={localsearchValue} onChange={e => handleSearchValueChange(e.target.value)}
                className={cssClassName} placeholder="Search..." aria-label="Search" style={cssStyle != null ? cssStyle : {}} />
        </>
    )
}

export default SimpleSearchComponent