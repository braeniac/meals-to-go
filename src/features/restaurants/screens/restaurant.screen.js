import react from 'react'; 
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components'; 

const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`

const SearchContainer = styled.View`
    padding: 16px;
`

const ListContainer = styled.View`
    flex: 1; 
    padding: 16px;
`

export const RestaurantsScreen = () => {
    return(
        <SafeArea>
            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                />
            </SearchContainer>
            <ListContainer>
                <RestaurantsInfoCard />
            </ListContainer>
        </SafeArea>
     
    )
}

  