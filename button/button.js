import {StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';

const button = ({text}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.btn} style={styles.text}>{text}</Text>
    </Pressable>
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
