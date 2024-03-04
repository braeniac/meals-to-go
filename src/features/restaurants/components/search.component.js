import React, { useContext, useState, useEffect } from 'react'; 
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { LocationContext } from '../../../services/location/location.context';


const SearchContainer = styled.View`
    padding: ${({ theme }) => theme.space[3]};
`;

const SearchField = styled(Searchbar)`
    background-color: ${({ theme }) => theme.colors.ui.quaternary};
    border-width: ${StyleSheet.hairlineWidth}px; 
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword); 
    }, [])

    return( 
        <SearchContainer>
            <SearchField
                placeholder="Search for a location"
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