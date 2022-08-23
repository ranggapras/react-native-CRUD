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
import {store} from './Store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#e9eaee',
    height: '100%',
  },
});

export default App;
