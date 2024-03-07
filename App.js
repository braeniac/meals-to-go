import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

//theme
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

//navigation 
import { Navigation } from './src/infrastructure/navigation'; 

//context 
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';


export default function App() {
  return (
    <>
        <ExpoStatusBar style="auto" />
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
    </>
  );
}








