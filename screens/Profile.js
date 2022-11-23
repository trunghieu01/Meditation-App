import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export default function Profile() {
    const meteor = useRef(new Animated.ValueXY({ x: 20, y: -1000 })).current;
    const meteor1 = useRef(new Animated.ValueXY({ x: 10, y: -500 })).current;

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim1 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                fadeAnim,
                {
                    toValue: 5,
                    duration: 3000,
                    useNativeDriver: true
                }
            )).start();
        Animated.loop(
            Animated.timing(
                fadeAnim1,
                {
                    toValue: 5,
                    duration: 5000,
                    useNativeDriver: true
                }
            )).start();
        Animated.loop(
            Animated.timing(meteor, {
                toValue: { x: 500, y: 1000 },
                duration: 5000,
                useNativeDriver: false
            })).start();
        Animated.loop(
            Animated.timing(meteor1, {
                toValue: { x: 500, y: -300 },
                duration: 3000,
                useNativeDriver: false
            })).start();
    }, [])


    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeAnim, marginLeft: 30, marginTop: 50 }}>
                <Image source={require('../assets/start.png')}></Image>
            </Animated.View>

            <Animated.View style={{ opacity: fadeAnim1, marginLeft: 50, marginTop: 10 }}>
                <Image source={require('../assets/blueStart.png')}></Image>
            </Animated.View>
            <Image style={{ marginLeft: -25, marginTop: 0, height: 25, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />
            <View style={{ marginLeft: 50, marginTop: -120 }}>
                <Image style={{ marginLeft: 50, marginTop: 50 }} source={require('../assets/eclipse.png')} />
                <Image style={{ marginLeft: 34, marginTop: -64 }} source={require('../assets/eclipse1.png')} />
                <Image style={{ marginLeft: 62, marginTop: -80 }} source={require('../assets/Ellipse.png')} />
            </View>
            <Image style={{ marginLeft: 200, marginTop: 20, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />

            <Animated.View style={{ opacity: fadeAnim, marginLeft: 300, marginTop: -35 }}>
                <Image source={require('../assets/start.png')}></Image>
            </Animated.View>

            <Animated.View style={{ opacity: fadeAnim1, marginLeft: 320, marginTop: -65 }}>
                <Image source={require('../assets/blueStart.png')}></Image>
            </Animated.View>
            <Image style={{ marginLeft: 320, marginTop: 0, height: 30, resizeMode: 'contain' }} source={require('../assets/cloud.png')} />

            <Animated.View style={{ opacity: fadeAnim1, marginLeft: 340, marginTop: 30, height: 10, resizeMode: 'contain' }}>
                <Image source={require('../assets/blueStart.png')}></Image>
            </Animated.View>

            <Text style={{ alignSelf: 'center', color: 'white', marginTop: 30, fontSize: 30, fontWeight: 'bold' }}>Wellcome to My App</Text>
            <Text style={{ color: 'white', marginTop: 30, fontSize: 16, lineHeight: 25, marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: '200' }}>Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep</Text>
            <Image style={{ marginTop: 50, alignSelf: 'flex-end' }} source={require('../assets/Frame.png')} />


            <Animated.View style={{ marginLeft: meteor.x, marginTop: meteor.y }}>
                <Image source={require('../assets/start.png')}></Image>
            </Animated.View>

            <Animated.View style={{ marginLeft: meteor1.x, marginTop: meteor1.y }}>
                <Image source={require('../assets/start.png')}></Image>
            </Animated.View>

            <Image style={{ marginLeft: 20, marginTop: -500 }} source={require('../assets/start.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03174C'
    },
});
