import {View,TextInput, StyleSheet } from 'react-native';
import React from 'react';

const signin = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View>
       <TextInput
       value={value}
       onChangeText={setValue} 
       placeholder={placeholder} 
       style={styles.input}
       secureTextEntry={secureTextEntry}
       />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 25,
        marginLeft: 75,
        paddingHorizontal: 13,
        backgroundColor: 'white',
        width: 250,
        height: 40,
        borderColor: '#dadada',
        borderWidth: 1,
        borderRadius: 5,
    }
})

export default signin;
