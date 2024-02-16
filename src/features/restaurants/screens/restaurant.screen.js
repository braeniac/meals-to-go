import react from 'react'; 
import { StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components'; 

const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`

const SearchContainer = styled.View`
    padding: ${({ theme }) => theme.space[3]};
`

const ListContainer = styled.View`
    flex: 1; 
    padding: ${({ theme }) => theme.space[3]};
`

const Search = styled(Searchbar)`
    background-color: ${({ theme }) => theme.colors.ui.quaternary};
    border-width: 1px; 
`;

export const RestaurantsScreen = () => {
    return(
        <SafeArea>
            <SearchContainer>
                <Search
                    placeholder="Search"
                    mode="bar"
                />
            </SearchContainer>
            <ListContainer>
                <RestaurantsInfoCard />
            </ListContainer>
        </SafeArea>
     
    )
}

  