import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>
        Memasakdjfkajfdflkajdsfl;jasdlkfja;sldfj;laksdjf;
        laskdjf;lksdjf;lkdsajfl;kasdjf;lkasdjf;lkjasdf;sd
      </Text>
      <TouchableOpacity>
        <Icon name="trash" size={25} style={styles.icon} />
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
});
