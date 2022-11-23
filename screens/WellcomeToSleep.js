import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function WellcomeToSleep({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={{ marginLeft: 30, marginTop: 50 }} source={require('../assets/start.png')} />
      <Image style={{ marginLeft: 50, marginTop: 10 }} source={require('../assets/blueStart.png')} />
      <Image style={{ marginLeft: -25, marginTop: 0, height: 25, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />
      <View style={{ marginLeft: 50, marginTop: -120 }}>
        <Image style={{ marginLeft: 50, marginTop: 50 }} source={require('../assets/eclipse.png')} />
        <Image style={{ marginLeft: 34, marginTop: -64 }} source={require('../assets/eclipse1.png')} />
        <Image style={{ marginLeft: 62, marginTop: -80 }} source={require('../assets/Ellipse.png')} />
      </View>
      <Image style={{ marginLeft: 200, marginTop: 20, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />
      <Image style={{ marginLeft: 300, marginTop: -35 }} source={require('../assets/start.png')} />
      <Image style={{ marginLeft: 320, marginTop: -65 }} source={require('../assets/blueStart.png')} />
      <Image style={{ marginLeft: 320, marginTop: 0, height: 30, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />
      <Image style={{ marginLeft: 340, marginTop: 30, height: 10, resizeMode: 'contain' }} source={require('../assets/blueStart.png')} />
      <Text style={{ alignSelf: 'center', color: 'white', marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>Wellcome to Sleep</Text>
      <Text style={{ color: 'white', marginTop: 30, fontSize: 16, lineHeight: 25, marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: '200' }}>Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep</Text>
      <Image style={{ marginTop: 50, alignSelf: 'flex-end' }} source={require('../assets/Frame.png')} />
      <TouchableOpacity onPress={()=>navigation.navigate('SleepStories')}>
        <View style={{ justifyContent:'center', marginTop: 100, width: '80%', alignSelf: 'center', borderRadius: 30, height: 60, backgroundColor: '#8E97FD' }}>
          <Text style={{textAlign: 'center', color:'white',fontSize:18}}>GET STARTTED</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03174C'
  },
});
