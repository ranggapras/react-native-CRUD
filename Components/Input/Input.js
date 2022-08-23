import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = () => {
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.textInput}
        placeholder="Aku hari ini pengen......"
      />
      <TouchableOpacity>
        <Icon name="plus-circle" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginVertical: 12,
  },
  textInput: {
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '85%',
  },
});
