import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const Card = ({description, status, onDelete, onUpdate}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onUpdate}
        style={[styles.sectionContainer, status && styles.cardDone]}>
        <Text style={[styles.text, status && styles.textDone]}>
          {description}
        </Text>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="trash" size={25} style={styles.icon} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    maxWidth: '85%',
    color: 'black',
  },
  icon: {
    marginRight: 8,
  },
  cardDone: {
    backgroundColor: '#5cb85c',
  },
  textDone: {
    color: '#fff',
  },
});
