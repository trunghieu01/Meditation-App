import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default function Home({ navigation }) {
    const data = [require('../assets/home4.png'),require('../assets/home5.png'),require('../assets/home4.png')]

    return (
        <View style={styles.container}>
            <Image style={{ marginTop: 45, alignSelf: 'center' }} source={require('../assets/Silent_moon.png')} />
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3F414E', marginLeft: 20, marginTop: 40 }}>Good Morning</Text>
            <Text style={{ fontSize: 23, fontWeight: '200', color: '#3F414E', marginLeft: 20 }}>We Wish you have a good day</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Course', {title: 'Basics'})}>
                    <Image style={{ margin: 5 }} source={require('../assets/home1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Course', {title: 'Relaxation'})}>
                    <Image style={{ margin: 5 }} source={require('../assets/home2.png')} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Course', {title: 'Daily througth'})}>
                <Image style={{ marginTop:20, alignSelf:'center' }} source={require('../assets/home3.png')} />
            </TouchableOpacity>

            
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#3F414E', marginLeft: 20,marginTop:20 }}>Recommend for you</Text>
        
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                        <Image style={{ margin: 5, resizeMode: 'cover' }} source={item} />
                    </TouchableOpacity>
                }
                style={{ marginTop: 15 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});
