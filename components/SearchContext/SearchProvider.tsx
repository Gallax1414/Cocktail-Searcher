import React, { useState } from 'react';
import SearchContext from './SearchContext';

const SearchProvider: React.FC = (props) => {
    const [search, setSearch] = useState();

    const value = {
        search: search,
        setSearchValue: setSearch,
    };

    return <SearchContext.Provider value={value}>{props.children}</SearchContext.Provider>
}

export default SearchProvider;