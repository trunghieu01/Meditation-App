import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import background from '../assets/Group6800.png'
import btnBack from '../assets/Group6801.png'
import iconFB from '../assets/FB.png'
import iconGG from '../assets/gg.png'
import CheckBox from 'react-native-checkbox';
// import Wellcome from './Wellcome'


export default function SignUp({navigation}) {
  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'#ffff'}}>
    <View style={{flex:1,}}>
      <Image style={{position:'relative'}} source={background} />
      <TouchableOpacity style={{position:'absolute',margin:30}} onPress={()=>navigation.navigate('SignUpandSignIn')} >
      <Image  source={btnBack} />
      </TouchableOpacity>
       <Text style={{position:'absolute',fontSize:28,color:'#3F414E',fontStyle:'normal',fontWeight:'700', alignSelf:'center',top:100}}>Create your account</Text>
    <TouchableOpacity style={{backgroundColor:'#7583CA', flexDirection:'row',width:374,height:63,borderRadius:38,alignItems:'center',alignSelf:'center',justifyContent:'center',position:'absolute',top:150}}>
      <Image style={{left:-65}} source={iconFB}/>
      <Text style={{alignSelf:'center',color:'#F6F1FB',fontWeight:'400',fontStyle:'normal',fontSize:14}}>CONTINUE WITH FACEBOOK</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{borderWidth:1,borderColor:'#E5E5E5',backgroundColor:'white', flexDirection:'row',width:374,height:63,borderRadius:38,alignItems:'center',alignSelf:'center',justifyContent:'center',position:'absolute',top:230}}>
      <Image style={{left:-70}} source={iconGG}/>
      <Text style={{alignSelf:'center',color:'#3F414E',fontWeight:'400',fontStyle:'normal',fontSize:14}}>CONTINUE WITH GOOGLE</Text>
    </TouchableOpacity>
    <Text style={{position:'absolute',top:310,alignSelf:'center',color:'#A1A4B2',fontWeight:'700',fontStyle:'normal',fontSize:14,letterSpacing:0.5}}>OR LOG IN WITH EMAIL</Text>
    </View>

    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{backgroundColor:'#F2F3F7', flexDirection:'row',width:374,height:63,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
     <TextInput placeholder='Name'/>
    </View>

      <View style={{backgroundColor:'#F2F3F7', flexDirection:'row',width:374,height:63,borderRadius:15,alignItems:'center',justifyContent:'center',margin:15}}>
     <TextInput placeholder='Email address'/>
      </View>
      <View style={{backgroundColor:'#F2F3F7', flexDirection:'row',width:374,height:63,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
     <TextInput secureTextEntry={true} placeholder='Password'/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
        <View style={{flexDirection:'row',marginRight:100}}>
           <Text style={{color:'#A1A4B2',letterSpacing:0.5}}>i have read the </Text>
            <Text style={{color:'#7583CA',letterSpacing:0.5}}> Privace Policy</Text>
        </View>
        <CheckBox
        label=''
        onChange={(checked) => console.log('I am checked', checked)}/>
      </View>
      
       <TouchableOpacity style={{backgroundColor:'#8e97fd', flexDirection:'row',width:374,height:63,borderRadius:38,alignItems:'center',justifyContent:'center',margin:10}}>
      <Text onPress={()=>navigation.navigate('WellCome')} style={{alignSelf:'center',color:'#F6F1FB',fontWeight:'400',fontStyle:'normal',fontSize:14}}>GET STARTED</Text>
    </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({})