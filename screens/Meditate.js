import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
export default function GoodMorning({ navigation }) {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular
    });
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15 }}>
                <View style={{ flex: 1, marginTop: 35, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                        Meditate
                    </Text>
                    <Text style={{ width: 350, fontSize: 16, textAlign: 'center' }}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>
                </View>
            </View>
            <View
                style={{ flex: 0.13, flexDirection: 'row', justifyContent: 'center' }} >
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_1.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#A0A3B1' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_2.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#A0A3B1' }}>My</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_3.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#A0A3B1' }}>Anxious</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SleepMusic')}
                        style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_4.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#A0A3B1' }}>Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', width: 55, height: 70, justifyContent: 'center', alignItems: 'center', margin: 12 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#A0A3B1', width: 55, height: 55, borderRadius: 10, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/head_icon_5.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: '#A0A3B1' }}>Kids</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ flex: 0.128, borderRadius: 5, flexDirection: 'row', width: "90%", alignSelf: 'center', margin:20, backgroundColor: "#F1DDCF" }} >
                <ImageBackground source={require('../assets/meditate_image_action.png')} style={{ flex: 1, width: 370, height: 95, borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 0.9, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Daily Calm
                        </Text>
                        <Text>APR 30 . PAUSE PRACTICE</Text>
                    </View>
                    <Image source={require('../assets/btn_action.png')} />
                </ImageBackground>

            </TouchableOpacity>
            <View
                style={{ flex: 0.56, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 20, marginRight: 20 }} >
                <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginRight: 30 }} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MusicMorning')}
                        style={{ flex: 0.56, flexDirection: 'column', justifyContent: 'center', borderRadius: 20 }} >
                        <ImageBackground source={require('../assets/meditate_image1.png')} style={{ flex: 1, width: 185, height: 212, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity style={{ backgroundColor: 'rgba(141, 165, 234, 0.11)', flex: 0.3, width: 185, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, justifyContent: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }}>
                                <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: 18, fontWeight: 'bold', textAlign: 'center', }}>7 Days of Calm</Text>
                            </TouchableOpacity>

                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MusicMorning')}
                        style={{ flex: 0.44, flexDirection: 'column', justifyContent: 'center', marginTop: 20, }} >
                        <ImageBackground source={require('../assets/meditate_image2.png')} style={{ flex: 1, width: 185, height: 182, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity style={{ backgroundColor: 'rgba(141, 165, 234, 0.11)', flex: 0.3, width: 185, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, justifyContent: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }}>
                                <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: 18, fontWeight: 'bold', textAlign: 'center', }}>7 Days of Calm</Text>
                            </TouchableOpacity>

                        </ImageBackground>

                    </TouchableOpacity>

                </View>
                <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MusicMorning')}
                        style={{ flex: 0.44, flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }} >
                        <ImageBackground source={require('../assets/meditate_image3.png')} style={{ flex: 1, width: 185, height: 182, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity style={{ backgroundColor: 'rgba(141, 165, 234, 0.11)', flex: 0.3, width: 185, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, justifyContent: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: 18, fontWeight: 'bold', textAlign: 'center', }}>Anxiet Release</Text>
                            </TouchableOpacity>

                        </ImageBackground>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('MusicMorning')}
                        style={{ flex: 0.56, flexDirection: 'column', justifyContent: 'center', borderRadius: 20 }} >
                        <ImageBackground source={require('../assets/meditate_image4.png')} style={{ flex: 1, width: 185, height: 212, borderRadius: 30, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', flex: 0.3, width: 185, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, justifyContent: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }}>
                                <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: 18, fontWeight: 'bold', textAlign: 'center', }}>7 Days of Calm</Text>
                            </TouchableOpacity>

                        </ImageBackground>

                    </TouchableOpacity>


                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    }

});
