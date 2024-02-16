import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

//theme
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurant.screen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

