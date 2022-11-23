import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
export default function MusicNight({ navigation }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <ImageBackground
            source={require('../assets/bg_music_nigh.png')}
            style={styles.container}>
            <View style={{ flex: 0.15 }}>
                <View style={{ flex: 1, marginTop: 15, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                    <View style={{ flex: 0.7, justifyContent: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={()=> navigation.pop()}
                            style={{ backgroundColor: 'white', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/icon_close.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/head_icon_2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 50, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/icon_download.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <TouchableOpacity
                style={{ flex: 0.85, borderRadius: 5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 20 }} >
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 200, height: 200, borderRadius: 150 }}
                        source={require('../assets/nigh_image1.png')} />
                    <Text style={{ fontFamily: 'Inter_900Black', fontSize: 28, color:'white' }}>Night Island</Text>
                    <Text style={{ color: 'rgba(160, 163, 177, 1)' }}>SLEEP MUSIC</Text>
                </View>

                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ borderRadius: 150 }}
                            source={require('../assets/icon_undo15_night.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ borderRadius: 150 }}
                            source={require('../assets/icon_action_run_night.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ borderRadius: 150 }}
                            source={require('../assets/icon_next15-night.png')} />
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 0.1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 18 }}>
                    <TouchableOpacity style={{ flex: 0.8, justifyContent: 'center'}}>
                        <ImageBackground
                            style={{ width: 350, height: 4,  flexDirection:'row', alignItems: 'center'  }}
                            source={require('../assets/icon_thanh_ngang.png')}>
                            <Image
                                style={{ width: 50}}
                                source={require('../assets/icon_time_run.png')} />
                            <Image
                                style={{ alignItems: 'center', marginLeft: -11}}
                                source={require('../assets/icon_cham_run_night.png')} />
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'left' }}>01:30</Text>
                        <Text style={{ flex: 0.5, textAlign: 'right' }}>01:30</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(3, 23, 76, 1)'
    }

});
