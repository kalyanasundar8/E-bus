import React, {useState}from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Signin from '../E-bus/components/signin';
import Button from '../E-bus/components/button';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.titlelogo}>E-BUS</Text>
        <Image source={require('../E-bus/assets/logo.png')} style={styles.logo}></Image>
        <Signin 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
        />
        <Signin 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry
        />
        <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 850,
    backgroundColor: '#F9FBFC',
  },
  titlelogo: {
    marginTop: 130,
    marginLeft: 150,
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 20,
    marginLeft: 120,
  }
});
