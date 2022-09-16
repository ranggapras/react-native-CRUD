import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/Screens/Home/Home';
import {store} from './Store/store';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <SafeAreaView style={styles.sectionContainer}>
        <Home />
      </SafeAreaView>
      {/* </PersistGate> */}
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
