import React, { useState, useCallback, useMemo } from 'react';
import { debounce } from "lodash"

const SimpleSearchComponent = ({ searchValue, setSearchValue, debounceTimeout, cssClassName, cssStyle }) => {

    const [localsearchValue, setLocalSearchValue] = useState(searchValue)

    /***IMPORTANT useMemo is used here due to a warning when trying to use callback for the debounce function*/
    const delayInput = useMemo(
        () =>
            debounce(searchInput => {
                setSearchValue(searchInput)
            }, debounceTimeout),
        [setSearchValue,debounceTimeout]
    );

    const handleSearchValueChange = useCallback(
        event => {
            setLocalSearchValue(event);
            delayInput(event);
        },
        [delayInput]
    );

    return (
        <>
            <input type="search" value={localsearchValue} onChange={e => handleSearchValueChange(e.target.value)}
                className={cssClassName} placeholder="Search..." aria-label="Search" style={cssStyle != null ? cssStyle : {}} />
        </>
    )
}

export default SimpleSearchComponent