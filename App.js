import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import { Ionicons } from '@expo/vector-icons'; 

//theme
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

//screens
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';


function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
        <NavigationContainer>
          <ExpoStatusBar style="auto" />
          <ThemeProvider theme={theme}>
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
                headerShown: false,
                tabBarStyle: {
                  padding: 5
                }
              })}  
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Maps" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </ThemeProvider>
        </NavigationContainer>
    </>
  );
}








