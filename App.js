import { StyleSheet, Text, View, Image} from 'react-native';
import Navigation from '../E-bus/navigation/navigation';

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>E-Bus</Text>
      <Image source = {require('./assets/logo.png')} style={styles.logo}/>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fbfc",
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 100,
    marginLeft: 140,
  },

  logo: {
    marginTop: 20,
    marginLeft: 130,
    width: 130,
    height: 130,
  },
});
