import React from 'react';

const initialState = {
    search: '',
    setSearchValue: (text: string) => {},
};

const SearchContext = React.createContext(initialState);

export default SearchContext;