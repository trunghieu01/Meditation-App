import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function SleepStories({ navigation }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={{  }}>
                <ImageBackground source={require('../assets/gr_header_sleep2.png')} style={{ flex: 1, width: 420, height: 260, borderRadius: 30 }}>
                    <Image
                        style={{ position: 'absolute', marginTop: 20 }}
                        source={require('../assets/gr_header_sleep.png')} />
                </ImageBackground>
            </View>
            <View
                style={{ marginTop:100, flexDirection: 'row', justifyContent: 'center' }} >
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#586894', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_1.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#586894', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_2.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>My</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#586894', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_3.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Anxious</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#586894', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_4.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#586894', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_5.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white' }}>Kids</Text>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity
                style={{ marginTop:30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',borderRadius:20, margin:10}} >
                <ImageBackground source={require('../assets/head_image.png')} style={{ flex: 1, width: 370, height: 260, borderRadius: 30 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: '#FFE7BF', fontSize: 36, fontFamily: 'Inter_900Black' }}>
                            The ocean moon</Text>
                        <Text style={{ color: 'white', width: 260, justifyContent: 'center', textAlign: 'center', fontFamily: 'Inter_400Regular' }}>
                            Non-stop 8- hour mixes of our
                            most popular sleep audio
                        </Text>
                        <TouchableOpacity
                            style={{ backgroundColor: 'white', width: 70, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 10 }}>
                            <Text style={{ fontSize: 14 }}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableOpacity>


            <ScrollView style={{ height: '30%' }}>
                <View
                    style={{ flex: 0.4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', margin: 20, }} >
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('PlayOption', {title: 'Night Island'})}

                            style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center'}} >
                            <Image
                                source={require('../assets/nigh_image1.png')} />
                            <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                                <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PlayOption', {title: 'Sweet Sleep'})}
                            style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center'}} >
                            <Image
                                source={require('../assets/nigh_image2.png')} />
                            <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Sweet Sleep</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#98A1BD' }}>30 MIN</Text>
                                <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('PlayOption', {title: 'Night Island'})}
                            style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                            <Image
                                source={require('../assets/nigh_image3.png')} />
                            <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                                <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PlayOption', {title: 'Night Island'})}
                            style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                            <Image
                                source={require('../assets/nigh_image4.png')} />
                            <Text style={{ color: 'white', fontFamily: 'Inter_900Black' }}>Night Island</Text>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#98A1BD' }}>45 MIN</Text>
                                <Text style={{ color: '#98A1BD' }}> SLEEP MUSIC</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>
                </View>
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
