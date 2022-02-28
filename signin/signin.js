import {StyleSheet, View, Text, Image} from 'react-native';
import Input from '../input/input';
import Button from '../button/button';
import React from 'react';
import { useState } from 'react';

const signin = ( { navigation}) => {

  const pressHandler = () => {
    navigation.navigate('signup');
  }

    const [Username, setUsername] = useState('');
    const [Pw, setPw] = useState('');
  return (
    <View>
      <Input 
      placeholder="Username"
      value={Username}
      setValue={setUsername}
      />
      <Input 
      placeholder="Password"
      value={Pw}
      setValue={setPw}
      secureTextEntry
      />

      <Button text="Signin"/>

      <Text style={styles.help}>I dont have an account ?{''} <Text  onPress= { pressHandler } style={styles.signup}>Signup</Text></Text>

      <Image source={require('../assets/collegebus.png')} style={styles.bottomimg}/>

      
    </View>
  );
};

const styles = StyleSheet.create({
  bottomimg: {
      marginTop: 20,
      width: 430,
      height: 400,
  },
  help: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  signup: {
    color: '#00A0FF',
    fontWeight: 'bold',
  },
});

export default signin;
