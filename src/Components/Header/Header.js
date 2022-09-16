import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>What We Gonna do Today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Header;
