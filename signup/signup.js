import { StyleSheet, View, Image, Text } from 'react-native';
import Input from '../input/input';
import Button from '../button/button';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Signup = ( { navigation } ) => {

  const pressHandler = () => {
    navigation.navigate('signin');
  }

   const [Username, setUsername] = useState ('');
   const [mail, setMail] = useState ('');
   const [dob, setDob] = useState ('');
   const [Phone_num, setPhone] = useState ('');
   const [Pw, setPw] = useState ('');

  return (
    <View style = {styles.container}>
      <ScrollView>
      <Input 
      placeholder="Username"
      value={Username}
      setValue={setUsername}
      />
      <Input 
      placeholder="E-Mail"
      value={mail}
      setValue={setMail}
      />
      <Input 
      placeholder="DOB"
      value={dob}
      setValue={setDob}
      />
      <Input 
      placeholder="Phone_number"
      value={Phone_num}
      setValue={setPhone}
      />
      <Input 
      placeholder="Password"
      value={Pw}
      setValue={setPw}
      secureTextEntry
      />
      <Button text="Register"/>
      </ScrollView>

      <Text style={styles.help}>Already i have an account ?{''} <Text onPress= {pressHandler} style={styles.signin}>Signin</Text></Text>
      <Image source = {require('../assets/school.png')} style={styles.bottomimg}/>
    </View>
  );
};

const styles = StyleSheet.create({
  help: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  signin: {
    color: '#00A0FF',
    fontWeight: 'bold',
  },
  bottomimg: {
    marginTop: 60,
    width: 450,
    height: 100,
  }
});

export default Signup;
