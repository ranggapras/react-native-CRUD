import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ButtonAdd from './Components/Buttons/Button';
import Home from './Screens/Home/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#e9eaee',
    height: '100%',
  },
});

export default App;
