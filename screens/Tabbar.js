import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseTopic from './ChooseTopic';
import Reminders from './Reminders';
import Wellcome from './Wellcome';
import WellcomeToSleep from './WellcomeToSleep';
import SleepStories from './SleepStories';
import GoodMorning from './Meditate';
import Home from './Home';
import Profile from './Profile';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function Tabbar({ navigation }) {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => (focused?<Image source={require('../assets/nigh_icon_home.png')} style={{ width: 22, height: 22,tintColor:'#0080ff' }}/>:<Image source={require('../assets/nigh_icon_home.png')} style={{ width: 22, height: 22, }}/>),
            }} />
            <Tab.Screen name="Sleep" component={Sleep} options={{
                tabBarIcon: ({focused}) => (focused?<Image source={require('../assets/nigh_icon_earch.png')} style={{ width: 22, height: 22, tintColor:'#0080ff'}} />:<Image source={require('../assets/nigh_icon_earch.png')} style={{ width: 22, height: 22}} />),
            }} />
            <Tab.Screen name="Meditate" component={GoodMorning} options={{
                tabBarIcon: ({focused}) => (focused?<Image source={require('../assets/nigh_icon_moutain.png')} style={{ width: 20, height: 22, tintColor:'#0080ff'}} />:<Image source={require('../assets/nigh_icon_moutain.png')} style={{ width: 22, height: 22}} />),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({focused}) => (focused?<Image source={require('../assets/nigh_icon_user.png')} style={{ width: 20, height: 22, tintColor:'#0088ff'}} />:<Image source={require('../assets/nigh_icon_user.png')} style={{ width: 20, height: 22 }} />),
            }} />
        </Tab.Navigator>
    )

}

const Sleep = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Wellcome' component={WellcomeToSleep}></Stack.Screen>
            <Stack.Screen name='SleepStories' component={SleepStories}></Stack.Screen>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03174C'
    }

});
