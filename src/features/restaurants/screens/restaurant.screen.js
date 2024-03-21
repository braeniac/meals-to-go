import React, { useContext, useState } from 'react'; 
import styled from 'styled-components'; 
import { ActivityIndicator } from 'react-native-paper';
import { TouchableOpacity} from 'react-native';

//components 
import { RestaurantsInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../../src/components/utility/safe-area.component';
import { FavouritesBar } from '../../../components/favourite/favourites-bar.component'; 

//context 
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
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

export const RestaurantsScreen = ({ navigation }) => {

    const { isLoading, error, restaurants } = useContext(RestaurantsContext); 

    const { favourites } = useContext(FavouritesContext); 
    const [isToggled, setIsToggled] = useState(false); 

    return(
        <SafeArea>

            <Search 
                isFavouritesToggled={isToggled} 
                onFavouritesToggle={() => setIsToggled(!isToggled)} 
            />

            {
                isToggled && 
                <FavouritesBar 
                    favourites={favourites} 
                    showDetail={navigation.navigate}    
                />
            }

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
                        <TouchableOpacity 
                            onPress={() => { 
                                navigation.navigate('RestaurantDetail', {
                                    restaurant: item
                                })
                            }}
                        >
                            <RestaurantsInfoCard 
                                restaurant={item}  
                            />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
            
        </SafeArea>
     
    )
}

  