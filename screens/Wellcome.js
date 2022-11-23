import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Wellcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{ marginTop: 45, alignSelf: 'center' }} source={require('../assets/silent.png')} />
      <Text style={{ marginTop: 65, alignSelf: 'center', fontSize: 26, width: '60%', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Hi Afsar, Welcome</Text>
      <Text style={{ marginTop: 10, alignSelf: 'center', fontSize: 24, width: '60%', textAlign: 'center', color: 'white', fontWeight: '300' }}>to Silent Moon</Text>
      <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 18, lineHeight: 28, width: '80%', textAlign: 'center', color: 'white', fontWeight: '300' }}>Explore the app, Find some peace of mind to prepare for meditation.</Text>
      <Image style={{ marginTop: 60, alignSelf: 'center' }} source={require('../assets/Ellipse13.png')} />
      <Image style={{ marginTop: -500, alignSelf: 'center' }} source={require('../assets/Ellipse12.png')} />
      <Image style={{ marginTop: -390, alignSelf: 'center' }} source={require('../assets/Ellipse11.png')} />
      <Image style={{ marginTop: -320, alignSelf: 'center' }} source={require('../assets/Ellipse10.png')} />
      <Image style={{ marginTop: -350, alignSelf: 'center' }} source={require('../assets/human.png')} />
      <View style={{ height: 0, backgroundColor: '#8C96FF' }} />
      <TouchableOpacity onPress={() => navigation.navigate('ChooseTopic')} style={{ justifyContent: 'center', marginTop: 0, width: '80%', alignSelf: 'center', borderRadius: 30, height: 60, backgroundColor: 'white' }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E97FD'
  },
});
