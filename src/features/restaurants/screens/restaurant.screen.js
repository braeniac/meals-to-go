import React, { useContext} from 'react'; 
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components'; 

//components 
import { RestaurantsInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../../src/components/utility/safe-area.component';

//context 
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';


const SearchContainer = styled.View`
    padding: ${({ theme }) => theme.space[3]};
`
 
const RestaurantList = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const Search = styled(Searchbar)`
    background-color: ${({ theme }) => theme.colors.ui.quaternary};
    border-width: ${StyleSheet.hairlineWidth}px; 
`;

export const RestaurantsScreen = () => {

    const { isLoading, error, restaurants } = useContext(RestaurantsContext); 

    return(
        <SafeArea>

            <SearchContainer>
                <Search
                    placeholder="Search"
                    mode="bar"
                />
            </SearchContainer>
            
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <RestaurantsInfoCard restaurant={item}  />
                    )
                }}
                keyExtractor={(item) => item.name}
            />
            
        </SafeArea>
     
    )
}

  