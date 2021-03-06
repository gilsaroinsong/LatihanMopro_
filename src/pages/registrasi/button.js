import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const index = ({label, onsubmit}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onsubmit}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C238CE',
    paddingVertical: 15,
    borderRadius: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
  },
});