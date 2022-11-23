import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { useState,useEffect } from 'react';

export default function PlayOption({ navigation, route }) {
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
            <View style={{ flex: 0.05 }}>
                <ImageBackground source={require('../assets/gr_header_sleep2.png')} style={{ flex: 1, width: 420, height: 260, borderRadius: 30 }}>
                    <Image
                        style={{ position: 'absolute', marginTop: 20 }}
                        source={require('../assets/gr_header_sleep.png')} />
                    <Image
                        style={{ position: 'absolute', width: 415, height: 255, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }}
                        source={require('../assets/nigh_image1.png')} />
                </ImageBackground>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center' }}>
                <View
                    style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', marginRight: 270, }} >
                    <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{ backgroundColor: '#E6E7F2', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/back.png')} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                </View>
                <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', marginRight: 40, }}>
                    <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#03174C', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/head_icon_2.png')} />
                        </TouchableOpacity>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#03174C', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/download.png')} />
                        </TouchableOpacity>

                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity
                style={{ flex: 0.01, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20, }} >


            </TouchableOpacity>
            <View
                style={{ flex: 0.9, flexDirection: 'column', justifyContent: 'flex-start', margin: 20, }} >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} >
                    <View
                        style={{ flexDirection: 'column', marginTop: 120, }} >
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: 32, marginBottom: 10, }}>{title}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SleepMusic')} style={{ flexDirection: 'row', marginBottom: 10, }}>
                            <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                            <Text style={{ color: '#98A1BD' }}> - SLEEP MUSIC</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#98A1BD' }}> Ease the mind into a restful night’s sleep  with</Text>
                        <Text style={{ color: '#98A1BD' }}> these deep, amblent tones.</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <Image
                                source={require('../assets/heart_icon.png')} />
                            <Text style={{ color: '#fff', marginLeft: 5, marginRight: 30, }}> 24.234 Favorits</Text>
                            <Image
                                source={require('../assets/headphone_icon.png')} />
                            <Text style={{ color: '#fff', marginLeft: 5, }}> 34.234 Lestening</Text>

                        </View>
                        <View style={{ borderTopWidth: 1, marginTop: 15, borderTopColor: 'white' }}>
                            <Text style={{ color: '#fff', marginTop: 0, fontSize: 28 }}> Related</Text>
                        </View>
                    </View>

                </View>


            </View>

            <View style={{ flex: 0.25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 20, }} >
                <TouchableOpacity onPress={() => navigation.navigate('SleepMusic', {title: 'Moon Clouds'})}
                    style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center' }} >
                    <Image
                        source={require('../assets/nigh_image3.png')} />
                    <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Moon Clouds</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#98A1BD', fontSize: 12 }}>45 MIN</Text>
                        <Text style={{ color: '#98A1BD', fontSize: 12 }}> SLEEP MUSIC</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SleepMusic', {title: 'Sweet Sleep'})}
                    style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center' }} >
                    <Image
                        source={require('../assets/nigh_image4.png')} />
                    <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#98A1BD', fontSize: 12 }}>45 MIN</Text>
                        <Text style={{ color: '#98A1BD', fontSize: 12 }}> SLEEP MUSIC</Text>
                    </View>

                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MusicNight')}
                style={{ backgroundColor: '#8e97fd', flexDirection: 'row', width: '90%', height: 50, borderRadius: 38, alignSelf: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ alignSelf: 'center', color: '#F6F1FB', fontWeight: '400', fontStyle: 'normal', fontSize: 14 }}>Play</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03174C'
    }

});
