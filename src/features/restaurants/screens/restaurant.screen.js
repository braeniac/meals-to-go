import React, { useContext} from 'react'; 
import styled from 'styled-components'; 
import { ActivityIndicator } from 'react-native-paper';

//components 
import { RestaurantsInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../../src/components/utility/safe-area.component';

//context 
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

 
const RestaurantList = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const ActivityIndicatorContainer = styled.View`
    position: absolute; 
    top: 50%;
    left: 50%; 
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`

export const RestaurantsScreen = () => {

    const { isLoading, error, restaurants } = useContext(RestaurantsContext); 

    return(
        <SafeArea>

            <Search />

            {
                (isLoading) && (
                    <ActivityIndicatorContainer>
                        <Loading
                            size={50}
                            animating={true}
                            color="#FF6347"
                        />
                    </ActivityIndicatorContainer>
                )
            }
            
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

  