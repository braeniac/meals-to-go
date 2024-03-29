import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'; 

//icons
import { Ionicons } from '@expo/vector-icons'; 


//navigators 
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen'; 

  
function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
}
  

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  
                  let iconName;

                  if (route.name === 'Restaurants') {
                    iconName = focused
                    ? 'restaurant-sharp' : 'restaurant-outline';
                  } else if (route.name === 'Maps') {
                    iconName = focused ? 'map-sharp' : 'map-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings-sharp' : 'settings-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                
                }, 
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
              })}  
            >
              <Tab.Screen name="Restaurants"  component={RestaurantsNavigator} />
              <Tab.Screen name="Maps"         component={MapScreen} />
              <Tab.Screen name="Settings"     component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}