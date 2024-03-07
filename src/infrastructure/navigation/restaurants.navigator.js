import React from 'react'; 
import { 
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';

//screen
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurant.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurants-detail.screen';

const RestaurantStack = createStackNavigator(); 

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator 
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
        >

            <RestaurantStack.Screen 
                name="RestaurantsScreen"
                component={RestaurantsScreen}
            />

            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />

        </RestaurantStack.Navigator>
    )
}