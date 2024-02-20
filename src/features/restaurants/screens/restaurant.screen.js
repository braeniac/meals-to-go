import react from 'react'; 
import { StyleSheet, StatusBar, FlatList } from 'react-native';
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
    return(
        <SafeArea>
            <SearchContainer>
                <Search
                    placeholder="Search"
                    mode="bar"
                />
            </SearchContainer>

  

            <RestaurantList
                data={[{name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}]}
                renderItem={() => <RestaurantsInfoCard />}
                keyExtractor={(item) => item.name}
                
            />
         
        
        </SafeArea>
     
    )
}

  