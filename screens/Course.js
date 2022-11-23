import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useEffect, useState } from 'react';

const Tab = createMaterialTopTabNavigator();

export default function Course({ navigation, route }) {
  const [title, setTitle] = useState("Happy Morning")

  useEffect(() => {
    if (route.params != null)
      setTitle(route.params.title)
  },[])

  return (
    <View style={styles.container}>
      <Image source={require('../assets/course1.png')} />
      <View style={{ marginTop: -250, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={{ backgroundColor: '#E6E7F2', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/back.png')} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#03174C', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/head_icon_2.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#03174C', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/download.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ fontSize: 30, marginTop: 200, fontWeight: 'bold', marginLeft: 20, color: '#3F414E' }}>{title}</Text>
      <Text style={{ fontSize: 20, marginTop: 10, fontWeight: '400', marginLeft: 20, color: '#A1A4B2' }}>COURSE</Text>
      <Text style={{ fontSize: 16, marginTop: 20, fontWeight: '300', marginLeft: 20, color: '#A1A4B2', width: '90%' }}>Ease the mind into a restful night’s sleep with these deep, amblent tones.</Text>

      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Image source={require('../assets/pink_heart.png')} />
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#A1A4B2', marginRight: 30 }}>24.234 Favorites</Text>
        <Image source={require('../assets/headphone.png')} />
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#A1A4B2' }}>34.123 Lesterning</Text>
      </View>

      <Text style={{ fontSize: 24, marginTop: 20, fontWeight: 'bold', marginLeft: 20 }}>Pick a nnrrator</Text>

      <Tab.Navigator >
        <Tab.Screen name="Male Voice" component={Component1} />
        <Tab.Screen name="Female Voice" component={Component2} />
      </Tab.Navigator>
    </View>
  );
}

const Component1 = () => {
  const data = [require('../assets/c1.png'), require('../assets/c2.png'), require('../assets/c3.png')]
  return (
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <TouchableOpacity style={{ borderBottomWidth: 0.5, borderColor: '#e0e0e0' }}>
          <Image style={{ margin: 10, resizeMode: 'cover' }} source={item} />
        </TouchableOpacity>
      }
      style={{ backgroundColor: 'white' }}
    />
  )
}

const Component2 = () => {
  const data = [require('../assets/c1.png'), require('../assets/c2.png'), require('../assets/c3.png')]
  return (
    <FlatList
      data={data}
      renderItem={({ item }) =>
        <TouchableOpacity style={{ borderBottomWidth: 0.5, borderColor: '#e0e0e0' }}>
          <Image style={{ margin: 10, resizeMode: 'cover' }} source={item} />
        </TouchableOpacity>
      }
      style={{ backgroundColor: 'white' }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
