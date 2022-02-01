import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00A0FF',
        marginTop: 25,
        marginLeft: 125,
        width: 150,
        height: 45,
        alignItems: 'center',
        padding: 5,  
        borderRadius: 15,
    },
    text: {
        color: 'white',
        marginTop: 5,
        fontWeight: 'bold',
    }
})

export default button;
