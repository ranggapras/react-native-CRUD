import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const ButtonAdd = ({children}) => {
  return (
    <View>
      <Button title={children} />
    </View>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
