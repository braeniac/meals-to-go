import React, { useContext, useState, useEffect } from 'react'; 
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { LocationContext } from '../../../services/location/location.context';


const SearchContainer = styled.View`
    padding: ${({ theme }) => theme.space[3]};
    position: absolute; 
    z-index: 999;
    top: 40px; 
    width: 100%; 
`;

const SearchField = styled(Searchbar)`
    background-color: ${({ theme }) => theme.colors.ui.quaternary};
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return( 
        <SearchContainer>
            <SearchField
                placeholder="Search for a location"
                icon="map"
                mode="bar"
                value={searchKeyword}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
            />
        </SearchContainer>
    )
} 