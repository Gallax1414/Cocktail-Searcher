import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import SearchContext from '../SearchContext/SearchContext';

const HeaderTitle: React.FC = () => {
    const { setSearchValue } = useContext(SearchContext);
    const [search, setSearch] = useState('');

    const handleOnChange = (text: string) => {
        setSearch(text);
        setSearchValue(text);
    };

    return (
        <TextInput value={search} onChangeText={handleOnChange}/>
    );
}

export default HeaderTitle;