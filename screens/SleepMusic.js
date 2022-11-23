import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function SleepMusic({ navigation, route }) {

    const [title, setTitle] = useState("Happy Morning")

    useEffect(() => {
        if (route.params != null)
            setTitle(route.params.title)
    }, [])
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View
                    style={{ flexDirection: 'row', marginLeft: 10, }} >
                    <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                            style={{ backgroundColor: '#E6E7F2', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/back.png')} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                </View>
                <Text style={{ color: '#fff', marginLeft: 50, marginTop: 30, fontSize: 23, justifyContent: 'center', alignItems: 'center' }}>{title}</Text>
            </View>



            <ScrollView
                style={{ margin: 10, }} >
                <TouchableOpacity style={{ Bot: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')} style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 0, }}>

                        <Image
                            source={require('../assets/nigh_image1.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                        style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 0, }} >
                        <Image
                            source={require('../assets/nigh_image2.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity style={{ Bot: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')} style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }}>

                        <Image
                            source={require('../assets/nigh_image1.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                        style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                        <Image
                            source={require('../assets/nigh_image2.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity style={{ Bot: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')} style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }}>

                        <Image
                            source={require('../assets/nigh_image1.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                        style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                        <Image
                            source={require('../assets/nigh_image2.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity style={{ Bot: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')} style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }}>

                        <Image
                            source={require('../assets/nigh_image1.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                        style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                        <Image
                            source={require('../assets/nigh_image2.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </TouchableOpacity>

                <TouchableOpacity style={{ Bot: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')} style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }}>

                        <Image
                            source={require('../assets/nigh_image1.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PlayOption')}
                        style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                        <Image
                            source={require('../assets/nigh_image2.png')} />
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </TouchableOpacity>


            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03174C'
    }

});
