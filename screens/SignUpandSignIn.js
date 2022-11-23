import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import imageStart from '../assets/imageStart.png'
import frame from '../assets/Frame.png'

export default function StartScreen({ navigation }) {
  const text = "Thousand of people are usign silent moon \n for smalls meditation "
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View style={{ flex: 2, flexDirection: 'column', }}>



        <View style={{ backgroundColor: '#fff', justifyContent: 'center' }}>
          {/* <Image source={frame} style={{position:'relative',height:450,width:400,}} /> */}

          <Image source={imageStart} style={{ position: 'absolute', alignSelf: 'center', top: 150 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', alignSelf: 'center', top: 40 }}>
            <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>Slient </Text>
            <Image source={logo} style={{ margin: 3 }} />
            <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}> Moon</Text>
          </View>


        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ textAlign: 'center', color: '#3F414E', fontSize: 30, fontStyle: 'normal', fontWeight: '700' }}>We are what we do</Text>
          <Text style={{ color: '#A1A4B2', textAlign: 'center', margin: 10, fontSize: 16 }}>{text}</Text>
        </View>

        <View >
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ width: '85%', height: 63, backgroundColor: '#8E97FD', borderRadius: 38, justifyContent: 'center', alignSelf:'center' }} >
            <Text style={{ fontSize: 14, color: '#F6F1FB', fontStyle: 'normal', alignSelf: 'center', letterSpacing: 0.5, fontSize: 14 }}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10 }}>
            <Text style={{ textAlign: 'center', color: '#A1A4B2', }}>ALREADY HAVE AN ACCOUNT?  </Text>
            <TouchableOpacity>
              <Text onPress={() => navigation.navigate('SignIn')} style={{ color: '#8E97FD' }}>LOG IN</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </View>

  )
}