import { StyleSheet, View, Text, TextInput } from 'react-native';
import React from 'react';

const input = ({value, setValue, placeholder}) => {
  return (
    <View>
       <TextInput
       value={value}
       onChangeText={setValue}
       placeholder={placeholder} 
       style={styles.input}/>
    </View>
  );
};

const styles = StyleSheet.create({
    signup: {
        marginTop: 20,
        color: '#333',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    input: {
        marginTop: 20,
        marginLeft: 75,
        backgroundColor: 'white',
        width: 250,
        padding: 5,
        borderColor: '#dadada',
        borderWidth: 1,
    }
})

export default input;
