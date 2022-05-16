import React, { useState, useEffect } from 'react';
import { debounce } from "lodash"

const SimpleSearchComponent = ({ searchValue, setSearchValue, debounceTimeout, cssClassName, cssStyle }) => {

    const [localsearchValue, setLocalSearchValue] = useState(searchValue)
    const debouncedsearchInput = debounce(setSearchValue, debounceTimeout)
    

    useEffect(() => {
        console.log("Onchange -" + localsearchValue)
        
        debouncedsearchInput(localsearchValue)
    }, [localsearchValue, debouncedsearchInput]);

    

    return (
        <>
            <input type="search" value={localsearchValue} onChange={e => setLocalSearchValue(e.target.value)}
                className={cssClassName} placeholder="Search..." aria-label="Search" style={cssStyle != null ? cssStyle : {}} />
        </>
    )
}

export default SimpleSearchComponent