import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';

const Home = () => {
  return (
    <View style={styles.card}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      <Input />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});
