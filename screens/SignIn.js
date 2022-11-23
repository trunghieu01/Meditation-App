import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import background from '../assets/Group6800.png'
import btnBack from '../assets/Group6801.png'
import iconFB from '../assets/FB.png'
import iconGG from '../assets/gg.png'
export default function SignIn({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffff' }}>
      <View style={{ flex: 1, }}>
        <Image style={{ position: 'relative' }} source={background} />
        <TouchableOpacity style={{ position: 'absolute', margin: 30 }} onPress={() => navigation.navigate('SignUpandSignIn')} >
          <Image source={btnBack} />
        </TouchableOpacity>
        <Text style={{ position: 'absolute', fontSize: 28, color: '#3F414E', fontStyle: 'normal', fontWeight: '700', alignSelf: 'center', top: 100 }}>Welcome Back!</Text>
        <TouchableOpacity style={{ backgroundColor: '#7583CA', flexDirection: 'row', width: 374, height: 63, borderRadius: 38, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', position: 'absolute', top: 150 }}>
          <Image style={{ left: -65 }} source={iconFB} />
          <Text style={{ alignSelf: 'center', color: '#F6F1FB', fontWeight: '400', fontStyle: 'normal', fontSize: 14 }}>CONTINUE WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#E5E5E5', backgroundColor: 'white', flexDirection: 'row', width: 374, height: 63, borderRadius: 38, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', position: 'absolute', top: 230 }}>
          <Image style={{ left: -70 }} source={iconGG} />
          <Text style={{ alignSelf: 'center', color: '#3F414E', fontWeight: '400', fontStyle: 'normal', fontSize: 14 }}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>
        <Text style={{ position: 'absolute', top: 320, alignSelf: 'center', color: '#A1A4B2', fontWeight: '700', fontStyle: 'normal', fontSize: 14, letterSpacing: 0.5 }}>OR LOG IN WITH EMAIL</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#F2F3F7', flexDirection: 'row', width: 374, height: 63, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder='Email address' />
        </View>

        <View style={{ backgroundColor: '#F2F3F7', flexDirection: 'row', width: 374, height: 63, borderRadius: 15, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
          <TextInput secureTextEntry={true} placeholder='Password' />
        </View>

        <TouchableOpacity  onPress={() => navigation.navigate('WellCome')} style={{ backgroundColor: '#8e97fd', flexDirection: 'row', width: 374, height: 63, borderRadius: 38, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
          <Text style={{ alignSelf: 'center', color: '#F6F1FB', fontWeight: '400', fontStyle: 'normal', fontSize: 14 }}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: '#3F414E', fontSize: 14, fontWeight: '400' }}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Text style={{ color: '#A1A482', fontSize: 14, fontWeight: '400' }}>ALREADY HAVE AN ACCOUNT? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ color: '#8e97fd', fontSize: 14, fontWeight: '400' }} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})