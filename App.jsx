import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import { profile,books, myBooks,categories } from './data';
import { myboo } from "./screens/";
// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);

/* const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
} */

import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
   <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
